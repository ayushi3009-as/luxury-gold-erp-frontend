"use client";

import {
  CalendarDays,
  ChevronDown,
  FileOutput,
  PackageMinus,
  Search,
  Save,
  X,
  Trash2,
} from "lucide-react";

const stockOutItems = [
  { id: 1, name: "Gold Necklace 22K", category: "Gold Jewellery", sku: "GLD-NEC-001", quantity: 1, weight: "18.500 g", reason: "Sales" },
  { id: 2, name: "Diamond Earrings", category: "Diamond Jewellery", sku: "DIA-EAR-002", quantity: 2, weight: "6.250 g", reason: "Sales" },
];

export default function StockOut() {
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
            <button className="group flex items-center gap-2 rounded-xl border border-border-theme bg-background-secondary/50 backdrop-blur-md px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent-gold/50 hover:text-white">
              <X size={18} className="transition-transform group-hover:rotate-90" />
              Cancel
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]">
              <Save size={18} />
              Save Stock Out
            </button>
          </div>
        </div>

        {/* STOCK OUT INFORMATION */}
        <div className="rounded-2xl border border-white/5 bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>
          
          <div className="mb-6 flex items-center gap-4 border-b border-white/5 pb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-accent-gold/20">
              <FileOutput size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide text-white">STOCK OUT INFORMATION</h2>
              <p className="text-xs text-text-secondary mt-0.5">Enter details of stock leaving inventory</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* STOCK OUT NUMBER */}
            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">STOCK OUT NUMBER</label>
              <input
                type="text"
                value="SO-2026-0001"
                readOnly
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm font-mono text-white/70 outline-none transition-all cursor-not-allowed"
              />
            </div>

            {/* DATE */}
            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">STOCK OUT DATE</label>
              <div className="relative">
                <CalendarDays size={18} className="absolute left-4 top-3.5 text-accent-gold/70" />
                <input
                  type="date"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-11 py-3.5 text-sm text-white outline-none transition-all focus:border-accent-gold/50 focus:bg-white/10 focus:ring-4 focus:ring-accent-gold/10"
                />
              </div>
            </div>

            {/* REASON */}
            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">STOCK OUT REASON</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-accent-gold/50 focus:bg-white/10 focus:ring-4 focus:ring-accent-gold/10">
                  <option className="bg-background-secondary text-white">Select Reason</option>
                  <option className="bg-background-secondary text-white">Sales</option>
                  <option className="bg-background-secondary text-white">Sales Return</option>
                  <option className="bg-background-secondary text-white">Damage</option>
                  <option className="bg-background-secondary text-white">Internal Use</option>
                  <option className="bg-background-secondary text-white">Manufacturing</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-3.5 text-text-secondary pointer-events-none" />
              </div>
            </div>

            {/* REFERENCE */}
            <div className="group">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-text-secondary group-focus-within:text-accent-gold transition-colors">REFERENCE NUMBER</label>
              <input
                type="text"
                placeholder="Enter reference number"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-accent-gold/50 focus:bg-white/10 focus:ring-4 focus:ring-accent-gold/10"
              />
            </div>
          </div>
        </div>

        {/* PRODUCT SELECTION */}
        <div className="mt-6 rounded-2xl border border-white/5 bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-accent-gold/20">
                <PackageMinus size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-wide text-white">STOCK OUT PRODUCTS</h2>
                <p className="text-xs text-text-secondary mt-0.5">Select products to remove from inventory</p>
              </div>
            </div>

            {/* SEARCH */}
            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-3.5 text-text-secondary" />
              <input
                type="text"
                placeholder="Scan Barcode or Search..."
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-accent-gold/50 focus:bg-white/10 focus:ring-4 focus:ring-accent-gold/10"
              />
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-5 py-4">PRODUCT</th>
                  <th className="px-5 py-4">CATEGORY</th>
                  <th className="px-5 py-4">SKU</th>
                  <th className="px-5 py-4">QUANTITY</th>
                  <th className="px-5 py-4">WEIGHT</th>
                  <th className="px-5 py-4">REASON</th>
                  <th className="px-5 py-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {stockOutItems.map((item) => (
                  <tr key={item.id} className="transition-colors hover:bg-white/5">
                    <td className="px-5 py-4 font-semibold text-white">{item.name}</td>
                    <td className="px-5 py-4 text-text-secondary">{item.category}</td>
                    <td className="px-5 py-4 font-mono text-accent-gold">{item.sku}</td>
                    <td className="px-5 py-4 font-medium text-white">{item.quantity}</td>
                    <td className="px-5 py-4 text-white/80">{item.weight}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 text-xs font-medium text-accent-gold">
                        {item.reason}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="inline-flex items-center justify-center rounded-lg p-2 text-white/40 transition-all hover:bg-red-500/20 hover:text-red-400">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SUMMARY & NOTES */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="col-span-2 rounded-2xl border border-white/5 bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl">
            <label className="mb-3 block text-xs font-semibold tracking-wider text-text-secondary">NOTES / REMARKS</label>
            <textarea
              rows={4}
              placeholder="Enter any additional notes or remarks..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-accent-gold/50 focus:bg-white/10 focus:ring-4 focus:ring-accent-gold/10"
            />
          </div>

          <div className="rounded-2xl border border-accent-gold/20 bg-gradient-to-br from-accent-gold/10 to-transparent backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(212,175,55,0.05)] flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-text-secondary">Total Products</span>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-text-secondary">Total Quantity</span>
                <span className="text-2xl font-bold text-white">3 Units</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-accent-gold">Total Weight</span>
                <span className="text-3xl font-bold text-accent-gold">24.750 g</span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}