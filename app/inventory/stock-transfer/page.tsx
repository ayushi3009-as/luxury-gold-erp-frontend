"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeftRight,
  CalendarDays,
  ChevronDown,
  MapPin,
  Package,
  Save,
  Search,
  Trash2,
  X,
  Loader2,
  Plus,
  Edit,
  History
} from "lucide-react";

export default function StockTransfer() {
  const router = useRouter();
  
  const [branches, setBranches] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [transferNumber, setTransferNumber] = useState("");
  const [fromBranchText, setFromBranchText] = useState("");
  const [toBranchText, setToBranchText] = useState("");
  const [remarks, setRemarks] = useState("");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableProducts, setAvailableProducts] = useState<any[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [modalQuantity, setModalQuantity] = useState(1);

  const [editingTransferId, setEditingTransferId] = useState<string | null>(null);
  const [recentTransfers, setRecentTransfers] = useState<any[]>([]);

  const fetchTransfers = () => {
    fetch('/api/inventory/transfers')
      .then(res => res.json())
      .then(data => setRecentTransfers(Array.isArray(data) ? data : []))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (isModalOpen && availableProducts.length === 0) {
      setIsLoadingProducts(true);
      fetch('/api/products')
        .then(res => res.json())
        .then(data => { setAvailableProducts(data); if (data.length > 0) setSelectedProductId(data[0].id); })
        .finally(() => setIsLoadingProducts(false));
    }
  }, [isModalOpen, availableProducts.length]);

  const handleAddFromModal = () => {
    const p = availableProducts.find(x => x.id === selectedProductId);
    if (p) {
      const existingItem = items.find(i => i.productId === p.id);
      if (existingItem) {
        setItems(items.map(i => i.productId === p.id ? {...i, quantity: i.quantity + modalQuantity} : i));
      } else {
        setItems([...items, {
          productId: p.id,
          name: p.name,
          category: p.category,
          sku: p.sku || p.productCode || "N/A",
          quantity: modalQuantity,
          weight: `${p.grossWeight || 0} g`,
        }]);
      }
    }
    setIsModalOpen(false);
    setModalQuantity(1);
  };

  useEffect(() => {
    setTransferNumber(`TR-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`);
    fetch('/api/branches')
      .then(res => res.json())
      .then(data => {
         setBranches(data);
         if (data.length > 0) setFromBranchText(data[0].name);
         if (data.length > 1) setToBranchText(data[1].name);
      })
      .catch(err => console.error(err));
  }, []);



  const handleSave = async () => {
    if (items.length === 0) return alert("Please add at least one item.");
    
    const fromBranchId = branches.find(b => b.name === fromBranchText)?.id;
    const toBranchId = branches.find(b => b.name === toBranchText)?.id;
    
    if (!fromBranchId) return alert("Please enter a valid From Location.");
    if (!toBranchId) return alert("Please enter a valid To Location.");
    if (fromBranchId === toBranchId) return alert("Source and Destination branches cannot be the same.");
    
    setIsSaving(true);
    try {
      const url = editingTransferId ? `/api/inventory/transfers/${editingTransferId}` : '/api/inventory/transfers';
      const method = editingTransferId ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fromBranchId,
          toBranchId,
          remarks,
          items
        })
      });
      if (res.ok) {
        alert(`Transfer ${editingTransferId ? 'updated' : 'created'} successfully!`);
        setItems([]);
        setEditingTransferId(null);
        setRemarks("");
        setTransferNumber(`TR-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`);
        fetchTransfers();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to save transfer.");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving transfer.");
    } finally {
      setIsSaving(false);
    }
  };

  const editTransfer = (t: any) => {
    setEditingTransferId(t.id);
    setTransferNumber(t.transferNumber);
    setFromBranchText(t.fromBranch?.branchName || "");
    setToBranchText(t.toBranch?.branchName || "");
    setRemarks(t.remarks || "");
    setItems(t.items.map((i: any) => ({
      productId: i.productId,
      name: i.product?.name || "Unknown",
      category: i.product?.category || "Unknown",
      sku: i.product?.sku || i.product?.productCode || "N/A",
      quantity: i.quantity,
      weight: `${i.product?.grossWeight || 0} g`,
    })));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteTransfer = async (id: string) => {
    if (!confirm("Are you sure you want to delete this transfer? The items will be refunded to global inventory.")) return;
    try {
      const res = await fetch(`/api/inventory/transfers/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchTransfers();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to delete.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting transfer.");
    }
  };

  const removeItem = (productId: string) => {
    setItems(items.filter(item => item.productId !== productId));
  };

  const totalQuantity = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalWeight = items.reduce((acc, curr) => acc + parseFloat(curr.weight), 0);

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="min-h-screen p-5">
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">Inventory / Stock Transfer</p>
            <h1 className="mt-2 text-3xl font-bold">Stock Transfer</h1>
            <p className="mt-1 text-text-secondary">Transfer jewellery stock between warehouses and branches.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => router.push('/inventory')} className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <X size={16} /> Cancel
            </button>
            <button onClick={handleSave} disabled={isSaving || items.length === 0} className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold/90 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
              {isSaving ? "Saving..." : (editingTransferId ? "Update Transfer" : "Create Transfer")}
            </button>
          </div>
        </div>

        {/* TRANSFER INFORMATION */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center gap-3 border-b border-border-theme pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
              <ArrowLeftRight size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-accent-gold">TRANSFER INFORMATION</h2>
              <p className="text-xs text-text-secondary">Enter stock transfer details</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <label className="mb-2 block text-xs text-text-secondary">TRANSFER NUMBER</label>
              <input type="text" value={transferNumber} onChange={e => setTransferNumber(e.target.value)} className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold" />
            </div>

            <div>
              <label className="mb-2 block text-xs text-text-secondary">TRANSFER DATE</label>
              <div className="relative">
                <CalendarDays size={17} className="absolute left-3 top-3.5 text-accent-gold" />
                <input type="date" className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs text-text-secondary">FROM LOCATION</label>
              <div className="relative">
                <MapPin size={17} className="absolute left-3 top-3.5 text-accent-gold" />
                <input type="text" value={fromBranchText} onChange={e => setFromBranchText(e.target.value)} placeholder="Type branch name" className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs text-text-secondary">TO LOCATION</label>
              <div className="relative">
                <MapPin size={17} className="absolute left-3 top-3.5 text-accent-gold" />
                <input type="text" value={toBranchText} onChange={e => setToBranchText(e.target.value)} placeholder="Type branch name" className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold" />
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-theme pb-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-accent-gold/20">
                <Package size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-wide text-text-primary">TRANSFER PRODUCTS</h2>
                <p className="text-xs text-text-secondary mt-0.5">Select products to transfer</p>
              </div>
            </div>

            <div>
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 rounded-xl border border-accent-gold/50 px-5 py-2.5 text-sm font-semibold text-accent-gold transition-all hover:bg-accent-gold hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Plus size={18} /> Add Product
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead className="bg-background-tertiary text-xs text-text-secondary">
                <tr>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">QUANTITY</th>
                  <th className="px-4 py-4">WEIGHT</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-text-secondary">
                      Scan or search for products to add to this transfer.
                    </td>
                  </tr>
                ) : items.map((item) => (
                  <tr key={item.productId} className="border-t border-border-theme text-text-secondary hover:bg-background-tertiary transition-colors">
                    <td className="px-4 py-4 font-medium text-text-primary">{item.name}</td>
                    <td className="px-4 py-4 text-text-secondary">{item.category}</td>
                    <td className="px-4 py-4 text-accent-gold">{item.sku}</td>
                    <td className="px-4 py-4">{item.quantity}</td>
                    <td className="px-4 py-4">{item.weight}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-md border border-[#5a4617] bg-background-tertiary px-3 py-1 text-xs text-accent-gold">
                        Ready to Transfer
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button onClick={() => removeItem(item.productId)} className="text-red-400 hover:text-red-300">
                        <Trash2 size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RECENT TRANSFERS */}
        <div className="mt-6 rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative">
          <div className="mb-6 flex items-center gap-3 border-b border-border-theme pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
              <History size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-accent-gold">RECENT TRANSFERS</h2>
              <p className="text-xs text-text-secondary">View, edit, or delete recent stock transfers</p>
            </div>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-5 py-4">TRANSFER NO.</th>
                  <th className="px-5 py-4">DATE</th>
                  <th className="px-5 py-4">FROM</th>
                  <th className="px-5 py-4">TO</th>
                  <th className="px-5 py-4">ITEMS</th>
                  <th className="px-5 py-4">STATUS</th>
                  <th className="px-5 py-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {recentTransfers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-text-secondary">
                      No recent transfers found.
                    </td>
                  </tr>
                ) : recentTransfers.map((t) => (
                  <tr key={t.id} className="transition-colors hover:bg-text-primary/5">
                    <td className="px-5 py-4 font-semibold text-accent-gold">{t.transferNumber}</td>
                    <td className="px-5 py-4 text-text-secondary">{new Date(t.createdAt).toLocaleDateString()}</td>
                    <td className="px-5 py-4 text-text-primary">{t.fromBranch?.branchName || "Unknown"}</td>
                    <td className="px-5 py-4 text-text-primary">{t.toBranch?.branchName || "Unknown"}</td>
                    <td className="px-5 py-4 font-medium text-text-primary">{t.items?.length || 0} Products</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 text-xs font-medium text-accent-gold">
                        {t.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button onClick={() => editTransfer(t)} className="inline-flex items-center justify-center rounded-lg p-2 text-text-primary/40 transition-all hover:bg-accent-gold/20 hover:text-accent-gold mr-2">
                        <Edit size={18} />
                      </button>
                      <button onClick={() => deleteTransfer(t.id)} className="inline-flex items-center justify-center rounded-lg p-2 text-text-primary/40 transition-all hover:bg-red-500/20 hover:text-red-400">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* ADD PRODUCT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary/60 backdrop-blur-md p-4">
          <div className="bg-background-secondary border border-border-theme rounded-2xl w-full max-w-xl p-6 shadow-2xl transform transition-all scale-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/50 via-yellow-200 to-accent-gold/50"></div>
            
            <div className="flex justify-between items-center mb-8 border-b border-border-theme pb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent">Add Product to Transfer</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-text-secondary hover:text-text-primary p-2 rounded-xl hover:bg-text-primary/10 transition-colors"><X size={20}/></button>
            </div>
            
            {isLoadingProducts ? (
              <div className="py-8 flex justify-center"><Loader2 className="animate-spin text-accent-gold" size={32} /></div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                <div className="group">
                  <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2 group-focus-within:text-accent-gold transition-colors">SELECT PRODUCT</label>
                  <div className="relative">
                    <select value={selectedProductId} onChange={e => setSelectedProductId(e.target.value)} className="w-full appearance-none rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10">
                      {availableProducts.length === 0 && <option value="" className="bg-background-secondary text-text-primary">No products available</option>}
                      {availableProducts.map(p => (
                        <option key={p.id} value={p.id} className="bg-background-secondary text-text-primary">
                          {p.name} - {p.sku || p.productCode || "N/A"}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-3.5 text-text-secondary pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2 group-focus-within:text-accent-gold transition-colors">QUANTITY TO TRANSFER</label>
                  <input type="number" min="1" value={modalQuantity} onChange={e => setModalQuantity(parseInt(e.target.value) || 1)} className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10" />
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-border-theme">
              <button onClick={() => setIsModalOpen(false)} className="rounded-xl px-6 py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:bg-text-primary/5">Cancel</button>
              <button onClick={handleAddFromModal} disabled={isLoadingProducts || availableProducts.length === 0} className="rounded-xl bg-accent-gold px-8 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] disabled:opacity-50">Add to Transfer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}