"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  ChevronDown,
  FileOutput,
  PackageMinus,
  Search,
  Save,
  X,
  Trash2,
  Loader2
} from "lucide-react";

export default function StockOut() {
  const router = useRouter();
  
  const [items, setItems] = useState<any[]>([]);
  const [stockOutNo, setStockOutNo] = useState("");
  const [reason, setReason] = useState("");
  const [reference, setReference] = useState("");
  const [notes, setNotes] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableProducts, setAvailableProducts] = useState<any[]>([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [modalQuantity, setModalQuantity] = useState(1);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [recentStockOuts, setRecentStockOuts] = useState<any[]>([]);

  const fetchRecentStockOuts = async () => {
    try {
      const res = await fetch('/api/inventory/stock-out?limit=5');
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setRecentStockOuts(data);
    } catch (err) {
      console.error('Failed to fetch recent stock outs', err);
    }
  };

  useEffect(() => {
    setStockOutNo(`SO-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`);
    fetchRecentStockOuts();
  }, []);

  useEffect(() => {
    if (isModalOpen && availableProducts.length === 0) {
      setIsLoadingProducts(true);
      fetch('/api/products')
        .then(res => res.json())
        .then(data => {
          setAvailableProducts(data);
          if (data.length > 0) setSelectedProductId(data[0].id);
        })
        .finally(() => setIsLoadingProducts(false));
    }
  }, [isModalOpen, availableProducts.length]);

  const handleAddFromModal = () => {
    const product = availableProducts.find(p => p.id === selectedProductId);
    if (!product) return;
    
    const existingItem = items.find(i => i.id === product.id);
    if (existingItem) {
        setItems(items.map(i => i.id === product.id ? {...i, quantity: i.quantity + modalQuantity} : i));
    } else {
        setItems([...items, {
            id: product.id,
            name: product.name,
            category: product.category,
            sku: product.sku || product.productCode || "N/A",
            quantity: modalQuantity,
            weight: `${product.grossWeight || 0} g`,
            reason: reason || "Stock Out"
        }]);
    }
    setIsModalOpen(false);
    setModalQuantity(1);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/inventory/stock-out', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          reason,
          referenceNumber: reference,
          notes
        })
      });
      if (res.ok) {
        alert("Stock Out processed successfully!");
        setItems([]);
        setReason("");
        setReference("");
        setNotes("");
        setStockOutNo(`SO-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`);
        fetchRecentStockOuts();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to process stock out.");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving stock out.");
    } finally {
      setIsSaving(false);
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalQuantity = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-background-primary text-text-primary relative overflow-hidden">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <main className="min-h-screen p-6 relative z-10">

        {/* HEADER */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-gold/80">Inventory / Stock Out</p>
            <h1 className="mt-1 text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent">Stock Out</h1>
            <p className="mt-1 text-sm text-text-secondary">Record jewellery stock leaving your inventory with precision.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => router.push('/inventory')} className="group flex items-center gap-2 rounded-xl border border-border-theme bg-background-secondary/50 backdrop-blur-md px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent-gold/50 hover:text-text-primary">
              <X size={18} className="transition-transform group-hover:rotate-90" />
              Cancel
            </button>
          </div>
        </div>

        {/* STOCK OUT INFORMATION */}
        <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>
          
          <div className="mb-6 flex items-center gap-4 border-b border-border-theme pb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-accent-gold/20">
              <FileOutput size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide text-text-primary">STOCK OUT INFORMATION</h2>
              <p className="text-xs text-text-secondary mt-0.5">Enter details of stock leaving inventory</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* STOCK OUT NUMBER */}
            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">STOCK OUT NUMBER</label>
              <input
                type="text"
                value={stockOutNo}
                onChange={(e) => setStockOutNo(e.target.value)}
                className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm font-mono text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10"
              />
            </div>

            {/* DATE */}
            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">STOCK OUT DATE</label>
              <div className="relative">
                <CalendarDays size={18} className="absolute left-4 top-3.5 text-accent-gold/70" />
                <input
                  type="date"
                  className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-11 py-3.5 text-sm text-text-primary outline-none transition-all focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10"
                />
              </div>
            </div>

            {/* REASON */}
            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">STOCK OUT REASON</label>
              <input
                type="text"
                value={reason}
                onChange={e => setReason(e.target.value)}
                placeholder="Enter reason"
                className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all placeholder:text-text-primary/20 focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10"
              />
            </div>

            {/* REFERENCE */}
            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">REFERENCE NUMBER</label>
              <input
                type="text"
                value={reference}
                onChange={e => setReference(e.target.value)}
                placeholder="Enter reference number"
                className="w-full rounded-xl border border-border-theme bg-text-primary/5 px-4 py-3.5 text-sm text-text-primary outline-none transition-all placeholder:text-text-primary/20 focus:border-accent-gold/50 focus:bg-text-primary/10 focus:ring-4 focus:ring-accent-gold/10"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end border-t border-border-theme pt-6">
            <button onClick={handleSave} disabled={isSaving} className="flex items-center gap-2 rounded-xl bg-accent-gold px-8 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
              {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
              {isSaving ? "Saving..." : "Save Stock Out"}
            </button>
          </div>
        </div>



        {/* RECENT STOCK OUTS */}
        <div className="mt-6 rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-theme pb-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-accent-gold/20">
                <PackageMinus size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-wide text-text-primary">RECENT STOCK OUTS</h2>
                <p className="text-xs text-text-secondary mt-0.5">Latest stock out records</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-5 py-4">SO NUMBER</th>
                  <th className="px-5 py-4">DATE</th>
                  <th className="px-5 py-4">REASON</th>
                  <th className="px-5 py-4">REFERENCE</th>
                  <th className="px-5 py-4">ITEMS OUT</th>
                  <th className="px-5 py-4 text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {recentStockOuts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-text-secondary">
                      No recent stock outs found.
                    </td>
                  </tr>
                ) : (
                  recentStockOuts.map((so) => (
                    <tr key={so.id} className="transition-colors hover:bg-text-primary/5">
                      <td className="px-5 py-4 font-mono font-medium text-accent-gold">{so.stockOutNumber}</td>
                      <td className="px-5 py-4 text-text-primary">{new Date(so.stockOutDate).toLocaleDateString()}</td>
                      <td className="px-5 py-4 text-text-secondary">{so.reason || 'N/A'}</td>
                      <td className="px-5 py-4 text-text-secondary">{so.reference || 'N/A'}</td>
                      <td className="px-5 py-4 text-text-primary font-medium">{so.items?.length || 0} Products</td>
                      <td className="px-5 py-4 text-right">
                        <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                          Processed
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

    </div>
  );
}