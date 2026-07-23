import { Gem } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 flex items-center justify-center border-2 border-[#D4AF37] rounded-full">
        <Gem className="w-8 h-8 text-[#D4AF37]" />
      </div>

      <div>
        <h1 className="text-5xl font-bold text-[#D4AF37] tracking-wide">
          Luxury
        </h1>

        <p className="text-gray-300 text-sm mt-1">
          Gold Jewellery CRM System
        </p>
      </div>
    </div>
  );
}