"use client";

import { useState, useEffect } from "react";
import { ScanBarcode, Printer, Loader2 } from "lucide-react";

export default function BarcodePage() {
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
              <ScanBarcode size={28} className="text-accent-gold" />
              Barcode Generation
            </h1>
            <p className="mt-1 text-sm text-text-secondary">Generate and print barcodes for your jewellery products.</p>
          </div>
          <button onClick={() => window.print()} className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/20">
            <Printer size={18} />
            Print All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p: any) => (
            <div key={p.id} className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-2">
              <div className="w-full text-center">
                <p className="text-[10px] font-bold text-black uppercase">{p.name.substring(0, 20)}</p>
                <p className="text-[9px] text-gray-600">{p.metalType} • {p.grossWeight}g</p>
              </div>
              {/* Fake Barcode visualization */}
              <div className="w-full h-12 bg-black opacity-80 flex items-end justify-between px-1">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="bg-white h-full" style={{ width: Math.random() * 4 + 1 + 'px' }}></div>
                ))}
              </div>
              <p className="text-xs font-mono font-bold tracking-widest text-black">{p.sku}</p>
            </div>
          ))}
          {products.length === 0 && (
            <p className="col-span-full text-center text-text-secondary py-12">No products available to generate barcodes.</p>
          )}
        </div>
      </div>
    </div>
  );
}