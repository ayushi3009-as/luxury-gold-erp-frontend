"use client";

import { useState, useEffect } from "react";
import { History, Loader2, Calendar } from "lucide-react";

export default function HistoryPage() {
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
      <div className="absolute top-[-5%] left-[20%] w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent flex items-center gap-3">
            <History size={28} className="text-orange-400" />
            Product History
          </h1>
          <p className="mt-1 text-sm text-text-secondary">Audit log of all recently added products in the system.</p>
        </div>

        <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/20 via-transparent to-transparent"></div>
          
          <div className="space-y-4">
            {products.length === 0 ? (
              <p className="text-text-secondary text-center py-8">No history available.</p>
            ) : (
              products.map((p: any, index: number) => (
                <div key={p.id} className="flex items-start gap-4 p-4 rounded-xl border border-border-theme bg-text-primary/5 hover:bg-text-primary/10 transition-colors">
                  <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400">
                    <Calendar size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-primary">
                      <span className="font-bold text-accent-gold">New Product Created:</span> {p.name}
                    </p>
                    <p className="text-xs text-text-secondary mt-1">
                      SKU: <span className="font-mono text-text-primary/70">{p.sku}</span> | Category: {p.category} | Metal: {p.metalType} | Weight: {p.grossWeight}g
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-text-secondary block">Just now</span>
                    <span className="text-[10px] uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-0.5 rounded mt-1 inline-block">Success</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}