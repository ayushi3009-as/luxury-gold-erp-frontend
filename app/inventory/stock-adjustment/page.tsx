"use client";

import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowUp,
  ClipboardList,
  Download,
  FileText,
  Package,
  Plus,
  Search,
  Settings2,
  X,
  Loader2,
  Save
} from "lucide-react";
import { exportToCsv } from "@/lib/exportCsv";

export default function StockAdjustment() {
  const [adjustments, setAdjustments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Form State
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [type, setType] = useState("Increase");
  const [quantity, setQuantity] = useState("1");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  const fetchAdjustments = async () => {
    try {
      const res = await fetch('/api/inventory/stock-adjustment');
      const data = await res.json();
      setAdjustments(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdjustments();
  }, []);

  const openModal = (defaultReason = "", defaultType = "Increase") => {
    setSelectedProduct(null);
    setSearchQuery("");
    setType(defaultType);
    setQuantity("1");
    setReason(defaultReason);
    setNotes("");
    setIsModalOpen(true);
  };

  const handleSearchProduct = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      setIsSearching(true);
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        
        const product = data.find((p: any) => 
          p.sku?.toLowerCase() === searchQuery.toLowerCase() || 
          p.productCode?.toLowerCase() === searchQuery.toLowerCase() ||
          p.barcode?.toLowerCase() === searchQuery.toLowerCase() ||
          p.name?.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (product) {
          setSelectedProduct(product);
        } else {
          alert("Product not found!");
          setSelectedProduct(null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsSearching(false);
      }
    }
  };

  const handleSave = async () => {
    if (!selectedProduct || !quantity || !reason) {
      return alert("Please select a product, quantity, and reason.");
    }
    setIsSaving(true);
    try {
      const res = await fetch('/api/inventory/stock-adjustment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: selectedProduct.id,
          type,
          quantity,
          reason,
          notes
        })
      });
      
      if (res.ok) {
        alert("Stock adjustment processed!");
        setIsModalOpen(false);
        fetchAdjustments();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to process adjustment");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving adjustment");
    } finally {
      setIsSaving(false);
    }
  };

  const increases = adjustments.filter(a => a.type === 'Increase').length;
  const decreases = adjustments.filter(a => a.type === 'Decrease').length;

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="min-h-screen p-5">
        
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">Inventory / Stock Adjustment</p>
            <h1 className="mt-2 text-3xl font-bold">Stock Adjustment</h1>
            <p className="mt-1 text-text-secondary">Correct inventory quantity, damaged stock and physical count differences.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => exportToCsv('stock_adjustments.csv', adjustments)} className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <Download size={16} /> Export
            </button>
            <button onClick={() => openModal()} className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold/90">
              <Plus size={17} /> New Adjustment
            </button>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <ClipboardList size={27} className="text-accent-gold" />
              <span className="text-xs text-text-secondary">All Time</span>
            </div>
            <p className="mt-5 text-xs text-text-secondary">TOTAL ADJUSTMENTS</p>
            <h2 className="mt-2 text-2xl font-bold">{adjustments.length}</h2>
          </div>
          <div className="rounded-xl border border-green-900 bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <ArrowUp size={27} className="text-green-400" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">STOCK INCREASES</p>
            <h2 className="mt-2 text-2xl font-bold text-green-400">{increases}</h2>
          </div>
          <div className="rounded-xl border border-red-900 bg-[#17100f] p-5">
            <div className="flex items-center justify-between">
              <ArrowDown size={27} className="text-red-400" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">STOCK DECREASES</p>
            <h2 className="mt-2 text-2xl font-bold text-red-400">{decreases}</h2>
          </div>
          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">
            <div className="flex items-center justify-between">
              <Settings2 size={27} className="text-accent-gold" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">PENDING APPROVALS</p>
            <h2 className="mt-2 text-2xl font-bold text-accent-gold">0</h2>
          </div>
        </div>

        {/* ADJUSTMENT TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">
            <div>
              <h2 className="font-semibold text-accent-gold">ADJUSTMENT HISTORY</h2>
              <p className="mt-1 text-xs text-text-secondary">Track all inventory quantity adjustments</p>
            </div>
            <span className="flex items-center gap-2 text-xs text-text-secondary">
              <FileText size={15} />
              {adjustments.length} Records
            </span>
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-border-theme">
            <table className="w-full min-w-[1250px] text-left text-sm">
              <thead className="bg-background-tertiary text-xs text-text-secondary">
                <tr>
                  <th className="px-4 py-4">ADJUSTMENT ID</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">TYPE</th>
                  <th className="px-4 py-4">QUANTITY</th>
                  <th className="px-4 py-4">REASON</th>
                  <th className="px-4 py-4">DATE</th>
                  <th className="px-4 py-4">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={7} className="text-center py-6">Loading...</td></tr>
                ) : adjustments.length === 0 ? (
                  <tr><td colSpan={7} className="text-center py-6 text-text-secondary">No adjustments found.</td></tr>
                ) : adjustments.map((item) => (
                  <tr key={item.id} className="border-t border-border-theme text-text-secondary">
                    <td className="px-4 py-4 text-accent-gold">{(item.id).substring(0, 8)}...</td>
                    <td className="px-4 py-4 text-text-secondary">{item.sku}</td>
                    <td className="px-4 py-4">
                      <span className={item.type === "Increase" ? "rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400" : "rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400"}>
                        {item.type}
                      </span>
                    </td>
                    <td className={item.type === "Increase" ? "px-4 py-4 font-semibold text-green-400" : "px-4 py-4 font-semibold text-red-400"}>
                      {item.quantity}
                    </td>
                    <td className="px-4 py-4 text-text-secondary">{item.reason}</td>
                    <td className="px-4 py-4">{new Date(item.date).toLocaleDateString()}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400">Approved</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ADJUSTMENT REASONS */}
        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <h2 className="font-semibold text-accent-gold">PHYSICAL COUNT DIFFERENCE</h2>
            <p className="mt-2 text-sm text-text-secondary">Adjust stock when actual physical quantity differs from system quantity.</p>
            <button onClick={() => openModal("Physical Count Difference")} className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold hover:bg-accent-gold/10">
              Create Adjustment
            </button>
          </div>
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <h2 className="font-semibold text-accent-gold">DAMAGED / LOST STOCK</h2>
            <p className="mt-2 text-sm text-text-secondary">Record damaged, lost or unusable jewellery stock.</p>
            <button onClick={() => openModal("Damaged Stock", "Decrease")} className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold hover:bg-accent-gold/10">
              Report Stock Loss
            </button>
          </div>
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <h2 className="font-semibold text-accent-gold">OPENING BALANCE</h2>
            <p className="mt-2 text-sm text-text-secondary">Correct or update opening inventory balance when required.</p>
            <button onClick={() => openModal("Opening Balance Correction")} className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold hover:bg-accent-gold/10">
              Update Balance
            </button>
          </div>
        </div>

      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#111111] border border-white/10 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-accent-gold">Stock Adjustment</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-text-secondary hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"><X size={20}/></button>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2">SEARCH PRODUCT SKU / NAME</label>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-3 text-text-secondary" />
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onKeyDown={handleSearchProduct} placeholder="Press Enter to search..." className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-sm text-white outline-none focus:border-accent-gold/50" />
                  {isSearching && <Loader2 size={16} className="absolute right-3 top-3 text-accent-gold animate-spin" />}
                </div>
              </div>

              {selectedProduct && (
                <div className="p-3 bg-accent-gold/10 border border-accent-gold/30 rounded-xl flex items-center gap-3">
                  <Package className="text-accent-gold" />
                  <div>
                    <p className="text-sm font-bold text-white">{selectedProduct.name}</p>
                    <p className="text-xs text-text-secondary">SKU: {selectedProduct.sku || selectedProduct.productCode} | Current Stock: {selectedProduct.inventory?.quantity || 0}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2">ADJUSTMENT TYPE</label>
                  <select value={type} onChange={e => setType(e.target.value)} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-accent-gold/50">
                    <option value="Increase">Increase</option>
                    <option value="Decrease">Decrease</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2">QUANTITY</label>
                  <input type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-accent-gold/50" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2">REASON</label>
                <input type="text" value={reason} onChange={e => setReason(e.target.value)} placeholder="e.g. Physical Count Difference" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-accent-gold/50" />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-text-secondary mb-2">NOTES (OPTIONAL)</label>
                <textarea rows={2} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Additional details..." className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-accent-gold/50 resize-none"></textarea>
              </div>

            </div>

            <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-white/10">
              <button onClick={() => setIsModalOpen(false)} className="rounded-xl px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-white transition-colors hover:bg-white/5">Cancel</button>
              <button onClick={handleSave} disabled={isSaving || !selectedProduct} className="rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 disabled:opacity-50 flex items-center gap-2">
                {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} Save Adjustment
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}