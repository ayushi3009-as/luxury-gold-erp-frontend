"use client";

import { BadgeCheck, Plus } from "lucide-react";

export default function BrandsPage() {
  return (
    <div className="relative min-h-[80vh] p-6 text-text-primary">
      <div className="absolute top-[-5%] left-[50%] w-[500px] h-[500px] rounded-full bg-red-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent flex items-center gap-3">
              <BadgeCheck size={28} className="text-red-400" />
              Brands
            </h1>
            <p className="mt-1 text-sm text-text-secondary">Manage jewellery brands associated with your products.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-6 py-2.5 text-sm font-bold text-red-400 transition-all hover:bg-red-500/20">
            <Plus size={18} />
            New Brand
          </button>
        </div>

        <div className="rounded-2xl border border-white/5 bg-background-secondary/40 backdrop-blur-xl p-12 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center">
          <BadgeCheck size={64} className="text-white/10 mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Brands Module Coming Soon</h2>
          <p className="text-text-secondary max-w-md">
            The Brands feature is currently being provisioned. Once activated, you will be able to tag products with specific partner brands.
          </p>
        </div>
      </div>
    </div>
  );
}