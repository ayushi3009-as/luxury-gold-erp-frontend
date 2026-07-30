"use client";

import { Gem } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">

      <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center">

        <Gem
          size={30}
          className="text-[#D4AF37]"
        />

      </div>

      <div>

        <h1 className="text-5xl font-serif font-bold text-[#D4AF37]">
          Luxury
        </h1>

        <p className="text-text-secondary text-sm mt-1">
          Gold Jewellery CRM System
        </p>

      </div>

    </div>
  );
}