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
  Loader2
} from "lucide-react";

export default function StockTransfer() {
  const router = useRouter();
  
  const [branches, setBranches] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [transferNumber, setTransferNumber] = useState("");
  const [fromBranchId, setFromBranchId] = useState("");
  const [toBranchId, setToBranchId] = useState("");
  const [remarks, setRemarks] = useState("");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setTransferNumber(`TR-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`);
    fetch('/api/branches')
      .then(res => res.json())
      .then(data => {
         setBranches(data);
         if (data.length > 0) setFromBranchId(data[0].id);
         if (data.length > 1) setToBranchId(data[1].id);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      setIsSearching(true);
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        
        const product = data.find((p: any) => 
          p.sku?.toLowerCase() === searchQuery.toLowerCase() || 
          p.productCode?.toLowerCase() === searchQuery.toLowerCase() ||
          p.barcode?.toLowerCase() === searchQuery.toLowerCase()
        );

        if (product) {
          const existingItem = items.find(i => i.productId === product.id);
          if (existingItem) {
             setItems(items.map(i => i.productId === product.id ? {...i, quantity: i.quantity + 1} : i));
          } else {
             setItems([...items, {
               productId: product.id,
               name: product.name,
               category: product.category,
               sku: product.sku || product.productCode || "N/A",
               quantity: 1,
               weight: `${product.grossWeight || 0} g`,
             }]);
          }
          setSearchQuery("");
        } else {
          alert("Product not found with this SKU/Barcode.");
        }
      } catch (err) {
        console.error(err);
        alert("Error searching for product.");
      } finally {
        setIsSearching(false);
      }
    }
  };

  const handleSave = async () => {
    if (items.length === 0) return alert("Please add at least one item.");
    if (fromBranchId === toBranchId) return alert("Source and Destination branches cannot be the same.");
    
    setIsSaving(true);
    try {
      const res = await fetch('/api/inventory/transfers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fromBranchId,
          toBranchId,
          remarks,
          items
        })
      });
      if (res.ok) {
        alert("Transfer created successfully!");
        router.push('/inventory');
      } else {
        const err = await res.json();
        alert(err.error || "Failed to create transfer.");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving transfer.");
    } finally {
      setIsSaving(false);
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
              {isSaving ? "Creating..." : "Create Transfer"}
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
              <input type="text" value={transferNumber} readOnly className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none cursor-not-allowed" />
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
                <select value={fromBranchId} onChange={e => setFromBranchId(e.target.value)} className="w-full appearance-none rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">
                  {branches.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3.5 text-text-secondary pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs text-text-secondary">TO LOCATION</label>
              <div className="relative">
                <MapPin size={17} className="absolute left-3 top-3.5 text-accent-gold" />
                <select value={toBranchId} onChange={e => setToBranchId(e.target.value)} className="w-full appearance-none rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">
                  {branches.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3.5 text-text-secondary pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center gap-3 border-b border-border-theme pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
              <Package size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-accent-gold">TRANSFER PRODUCTS</h2>
              <p className="text-xs text-text-secondary">Select products to transfer</p>
            </div>
          </div>

          <div className="mb-5 flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 relative">
            {isSearching ? <Loader2 size={18} className="text-accent-gold animate-spin" /> : <Search size={18} className="text-text-secondary" />}
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search product by name, barcode or SKU & Press Enter..."
              className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
            />
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

        {/* SUMMARY */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">TOTAL PRODUCTS</p>
            <p className="mt-2 text-2xl font-bold text-accent-gold">{items.length}</p>
          </div>
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">TOTAL QUANTITY</p>
            <p className="mt-2 text-2xl font-bold text-accent-gold">{totalQuantity} Units</p>
          </div>
          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">
            <p className="text-xs text-text-secondary">TOTAL WEIGHT</p>
            <p className="mt-2 text-2xl font-bold text-accent-gold">{totalWeight.toFixed(3)} g</p>
          </div>
        </div>

        {/* NOTES */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <label className="mb-2 block text-xs text-text-secondary">NOTES / REMARKS</label>
          <textarea
            rows={4}
            value={remarks}
            onChange={e => setRemarks(e.target.value)}
            placeholder="Enter any additional notes or remarks..."
            className="w-full resize-none rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none placeholder:text-gray-600 focus:border-accent-gold"
          />
        </div>

        {/* FOOTER */}
        <div className="mt-5 flex justify-end gap-3">
          <button className="rounded-lg border border-border-theme px-5 py-3 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
            Save as Draft
          </button>
          <button onClick={handleSave} disabled={isSaving || items.length === 0} className="flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-semibold text-black hover:bg-accent-gold/90 disabled:opacity-50">
            {isSaving ? <Loader2 size={17} className="animate-spin" /> : <Save size={17} />}
            Create Transfer
          </button>
        </div>
      </main>
    </div>
  );
}