"use client";

import { useState, useEffect } from "react";
import { CircleDollarSign, Search, Loader2 } from "lucide-react";

export default function GoldProductsPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const allProducts = data?.products || [];
  // Strictly filter for Gold
  const goldProducts = allProducts.filter((p: any) => p.metalType === 'Gold');

  const filtered = goldProducts.filter((p: any) => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-[80vh] p-6 text-text-primary">
      <div className="absolute top-[-5%] left-[20%] w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent flex items-center gap-3">
            <CircleDollarSign size={28} className="text-yellow-400" />
            Gold Products
          </h1>
          <p className="mt-1 text-sm text-text-secondary">Exclusive view of your gold jewellery inventory.</p>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-white/5 relative overflow-hidden shadow-xl">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Total Gold Items</h3>
            <p className="text-4xl font-bold mt-2 text-yellow-400">{goldProducts.length}</p>
          </div>
        </div>

        {/* TABLE */}
        <div className="rounded-2xl border border-white/5 bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/20 via-transparent to-transparent"></div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-72">
              <Search className="absolute left-3 top-2.5 text-white/40" size={18} />
              <input 
                type="text" 
                placeholder="Search Gold Items..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all placeholder-white/20"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-text-secondary uppercase">
                <tr>
                  <th className="px-6 py-4">SKU</th>
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Weight (g)</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-text-secondary">
                      No gold products found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((p: any) => (
                    <tr key={p.id} className="transition-colors hover:bg-white/5 group">
                      <td className="px-6 py-4 font-mono font-medium text-white/60 group-hover:text-white transition-colors">{p.sku}</td>
                      <td className="px-6 py-4 font-bold text-white">{p.name}</td>
                      <td className="px-6 py-4 text-text-secondary">{p.category}</td>
                      <td className="px-6 py-4 font-medium text-yellow-400">{p.grossWeight} g</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border bg-green-400/10 text-green-400 border-green-400/20">
                          {p.status.replace('_', ' ')}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}