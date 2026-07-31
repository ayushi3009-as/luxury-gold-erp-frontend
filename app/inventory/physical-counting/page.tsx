"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  ClipboardCheck,
  Search,
  Save,
  X,
  CheckCircle2,
  AlertTriangle,
  Loader2
} from "lucide-react";

export default function PhysicalCounting() {
  const router = useRouter();

  const [branches, setBranches] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [countingNumber, setCountingNumber] = useState("");
  const [branchId, setBranchId] = useState("");
  const [countedBy, setCountedBy] = useState("");
  const [notes, setNotes] = useState("");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setCountingNumber(`PC-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`);
    fetch('/api/branches')
      .then(res => res.json())
      .then(data => {
         setBranches(data);
         if (data.length > 0) setBranchId(data[0].id);
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
             alert("Product is already in the counting list!");
          } else {
             const systemQty = product.inventory?.quantity || 0;
             setItems([...items, {
               productId: product.id,
               name: product.name,
               category: product.category,
               sku: product.sku || product.productCode || "N/A",
               systemQty,
               physicalQty: systemQty, // default to system qty
               difference: 0,
               status: "Matched"
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

  const updatePhysicalQty = (productId: string, val: string) => {
    const qty = parseInt(val, 10);
    if (isNaN(qty)) return;
    
    setItems(items.map(item => {
      if (item.productId === productId) {
        const difference = qty - item.systemQty;
        return {
          ...item,
          physicalQty: qty,
          difference,
          status: difference === 0 ? "Matched" : "Mismatch"
        };
      }
      return item;
    }));
  };

  const handleSave = async () => {
    if (items.length === 0) return alert("Please add at least one item to count.");
    if (!countedBy) return alert("Please enter the name of the person counting.");
    
    setIsSaving(true);
    try {
      const res = await fetch('/api/inventory/physical-count', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          branchId,
          countedBy,
          notes,
          items
        })
      });
      if (res.ok) {
        alert("Physical Counting saved and inventory updated successfully!");
        router.push('/inventory');
      } else {
        const err = await res.json();
        alert(err.error || "Failed to save counting.");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving counting.");
    } finally {
      setIsSaving(false);
    }
  };

  const matchedItems = items.filter(i => i.status === 'Matched').length;
  const mismatchItems = items.filter(i => i.status === 'Mismatch').length;
  const totalDifference = items.reduce((acc, curr) => acc + curr.difference, 0);

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="min-h-screen p-5">
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">Inventory / Physical Counting</p>
            <h1 className="mt-2 text-3xl font-bold">Physical Counting</h1>
            <p className="mt-1 text-text-secondary">Compare physical stock with system inventory records.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => router.push('/inventory')} className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <X size={16} /> Cancel
            </button>
            <button onClick={handleSave} disabled={isSaving || items.length === 0} className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold/90 disabled:opacity-50">
              {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
              {isSaving ? "Saving..." : "Save Counting"}
            </button>
          </div>
        </div>

        {/* COUNTING INFORMATION */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center gap-3 border-b border-border-theme pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
              <ClipboardCheck size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-accent-gold">COUNTING INFORMATION</h2>
              <p className="text-xs text-text-secondary">Enter physical stock counting details</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <label className="mb-2 block text-xs text-text-secondary">COUNTING NUMBER</label>
              <input type="text" value={countingNumber} readOnly className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none cursor-not-allowed" />
            </div>

            <div>
              <label className="mb-2 block text-xs text-text-secondary">COUNTING DATE</label>
              <div className="relative">
                <CalendarDays size={17} className="absolute left-3 top-3.5 text-accent-gold" />
                <input type="date" className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs text-text-secondary">COUNTING LOCATION</label>
              <select value={branchId} onChange={e => setBranchId(e.target.value)} className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">
                {branches.map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs text-text-secondary">COUNTED BY</label>
              <input type="text" value={countedBy} onChange={e => setCountedBy(e.target.value)} placeholder="Enter employee name" className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none placeholder:text-gray-600 focus:border-accent-gold" />
            </div>
          </div>
        </div>

        {/* COUNTING TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">
            <div>
              <h2 className="font-semibold text-accent-gold">PHYSICAL STOCK COUNT</h2>
              <p className="text-xs text-text-secondary">Compare system quantity with actual physical quantity</p>
            </div>
            
            <div className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-tertiary px-4 py-2 relative">
              {isSearching ? <Loader2 size={17} className="text-accent-gold animate-spin" /> : <Search size={17} className="text-text-secondary" />}
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Scan / Search Product & Enter..."
                className="w-56 bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead className="bg-background-tertiary text-xs text-text-secondary">
                <tr>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">SYSTEM QTY</th>
                  <th className="px-4 py-4">PHYSICAL QTY</th>
                  <th className="px-4 py-4">DIFFERENCE</th>
                  <th className="px-4 py-4">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-text-secondary">
                      Scan or search for products to add to the counting list.
                    </td>
                  </tr>
                ) : items.map((item) => (
                  <tr key={item.productId} className="border-t border-border-theme text-text-secondary hover:bg-background-tertiary transition-colors">
                    <td className="px-4 py-4 font-medium text-text-primary">{item.name}</td>
                    <td className="px-4 py-4 text-text-secondary">{item.category}</td>
                    <td className="px-4 py-4 text-accent-gold">{item.sku}</td>
                    <td className="px-4 py-4">{item.systemQty}</td>
                    <td className="px-4 py-4">
                      <input
                        type="number"
                        min="0"
                        value={item.physicalQty}
                        onChange={e => updatePhysicalQty(item.productId, e.target.value)}
                        className="w-24 rounded-md border border-border-theme bg-background-tertiary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-gold"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <span className={item.difference === 0 ? "text-green-400" : "text-red-400"}>
                        {item.difference > 0 ? `+${item.difference}` : item.difference}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      {item.status === "Matched" ? (
                        <span className="flex w-fit items-center gap-2 rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400">
                          <CheckCircle2 size={14} /> Matched
                        </span>
                      ) : (
                        <span className="flex w-fit items-center gap-2 rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400">
                          <AlertTriangle size={14} /> Mismatch
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-5 grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">TOTAL PRODUCTS</p>
            <p className="mt-2 text-2xl font-bold text-accent-gold">{items.length}</p>
          </div>
          <div className="rounded-xl border border-green-900 bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">MATCHED ITEMS</p>
            <p className="mt-2 text-2xl font-bold text-green-400">{matchedItems}</p>
          </div>
          <div className="rounded-xl border border-red-900 bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">MISMATCH ITEMS</p>
            <p className="mt-2 text-2xl font-bold text-red-400">{mismatchItems}</p>
          </div>
          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">
            <p className="text-xs text-text-secondary">TOTAL DIFFERENCE</p>
            <p className="mt-2 text-2xl font-bold text-accent-gold">{totalDifference} Units</p>
          </div>
        </div>

        {/* NOTES */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <label className="mb-2 block text-xs text-text-secondary">NOTES / REMARKS</label>
          <textarea
            rows={4}
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Enter counting notes or remarks..."
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
            Save Counting
          </button>
        </div>
      </main>
    </div>
  );
}