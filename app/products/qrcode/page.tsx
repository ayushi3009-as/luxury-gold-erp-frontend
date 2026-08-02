"use client";

import { useState, useEffect } from "react";
import { QrCode, Printer, Loader2 } from "lucide-react";

export default function QRCodePage() {
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
      <div className="relative z-10">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent flex items-center gap-3">
              <QrCode size={28} className="text-accent-gold" />
              QR Code Generation
            </h1>
            <p className="mt-1 text-sm text-text-secondary">Generate and print QR codes for quick mobile scanning.</p>
          </div>
          <button onClick={() => window.print()} className="flex items-center gap-2 rounded-xl bg-text-primary/10 px-6 py-2.5 text-sm font-bold text-text-primary transition-all hover:bg-text-primary/20">
            <Printer size={18} />
            Print All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map((p: any) => (
            <div key={p.id} className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform cursor-pointer">
              {/* Fake QR Code Visualization using a grid pattern */}
              <div className="w-24 h-24 bg-white border border-gray-300 p-1 flex flex-wrap content-start">
                 {/* Fake blocks */}
                 <div className="w-6 h-6 border-4 border-black absolute top-5 left-5"></div>
                 <div className="w-6 h-6 border-4 border-black absolute top-5 right-5"></div>
                 <div className="w-6 h-6 border-4 border-black absolute bottom-12 left-5"></div>
                 {[...Array(64)].map((_, i) => (
                   <div key={i} className={`w-2.5 h-2.5 ${Math.random() > 0.5 ? 'bg-background-primary' : 'bg-transparent'}`}></div>
                 ))}
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-black uppercase truncate w-24">{p.name}</p>
                <p className="text-[9px] text-gray-600 font-mono mt-1">{p.sku}</p>
              </div>
            </div>
          ))}
          {products.length === 0 && (
            <p className="col-span-full text-center text-text-secondary py-12">No products available to generate QR codes.</p>
          )}
        </div>
      </div>
    </div>
  );
}