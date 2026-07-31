"use client";

import { useState, useEffect } from "react";
import { Image as ImageIcon, Loader2, Upload } from "lucide-react";

export default function ImagesPage() {
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
      <div className="absolute top-[-5%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-200 bg-clip-text text-transparent flex items-center gap-3">
              <ImageIcon size={28} className="text-purple-400" />
              Product Images Gallery
            </h1>
            <p className="mt-1 text-sm text-text-secondary">View and upload high-quality images for your inventory.</p>
          </div>
          <button onClick={() => alert("Bulk Upload Images feature coming soon")} className="flex items-center gap-2 rounded-xl bg-purple-500/10 border border-purple-500/20 px-6 py-2.5 text-sm font-bold text-purple-400 transition-all hover:bg-purple-500/20">
            <Upload size={18} />
            Bulk Upload
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p: any) => (
            <div key={p.id} className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden group hover:border-purple-400/30 transition-all shadow-xl">
              <div className="h-48 bg-black/40 flex items-center justify-center relative group-hover:bg-black/60 transition-colors">
                <ImageIcon size={48} className="text-white/10 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-xs font-bold px-2 py-1 bg-white/10 rounded-md backdrop-blur-md">{p.sku}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white truncate">{p.name}</h3>
                <p className="text-xs text-text-secondary mt-1">{p.category} • {p.metalType}</p>
                <button className="mt-4 w-full py-2 bg-white/5 hover:bg-purple-500/20 text-xs font-semibold rounded-lg transition-colors text-purple-200">
                  Manage Images
                </button>
              </div>
            </div>
          ))}
          {products.length === 0 && (
            <div className="col-span-full py-12 text-center text-text-secondary">
              No products found in the database.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}