"use client";

import { useState, useEffect } from "react";
import { IndianRupee, Loader2, Calculator } from "lucide-react";

export default function PricingPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const products = Array.isArray(data) ? data : (data?.products || []);

  return (
    <div className="relative min-h-[80vh] p-6 text-text-primary">
      <div className="absolute top-[-5%] left-[50%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent flex items-center gap-3">
              <IndianRupee size={28} className="text-emerald-400" />
              Product Pricing
            </h1>
            <p className="mt-1 text-sm text-text-secondary">View weight and estimated pricing details for all items.</p>
          </div>
          <button onClick={() => alert("Update Gold Rate feature coming soon")} className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-6 py-2.5 text-sm font-bold text-emerald-400 transition-all hover:bg-emerald-500/20">
            <Calculator size={18} />
            Update Gold Rate
          </button>
        </div>

        <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400/20 via-transparent to-transparent"></div>
          
          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary uppercase">
                <tr>
                  <th className="px-6 py-4">SKU</th>
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Metal / Purity</th>
                  <th className="px-6 py-4 text-right">Gross Wt. (g)</th>
                  <th className="px-6 py-4 text-right">Net Wt. (g)</th>
                  <th className="px-6 py-4 text-right">Est. Making (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-text-secondary">
                      No products found.
                    </td>
                  </tr>
                ) : (
                  products.map((p: any) => (
                    <tr key={p.id} className="transition-colors hover:bg-text-primary/5 group">
                      <td className="px-6 py-4 font-mono font-medium text-text-primary/60">{p.sku}</td>
                      <td className="px-6 py-4 font-bold text-text-primary">{p.name}</td>
                      <td className="px-6 py-4 text-text-secondary">{p.metalType}</td>
                      <td className="px-6 py-4 text-right font-medium text-text-primary">{p.grossWeight || 0}</td>
                      <td className="px-6 py-4 text-right font-medium text-emerald-400">{p.netWeight || p.grossWeight || 0}</td>
                      <td className="px-6 py-4 text-right font-medium text-accent-gold">
                        ₹{((p.netWeight || p.grossWeight || 0) * 500).toLocaleString('en-IN')}
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