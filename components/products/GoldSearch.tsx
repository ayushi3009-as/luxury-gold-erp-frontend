"use client";

import { Search } from "lucide-react";

interface GoldSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function GoldSearch({
  value,
  onChange,
}: GoldSearchProps) {
  return (
    <div className="relative w-full lg:w-96">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold"
      />

      <input
        type="text"
        placeholder="Search Gold Product..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-border-theme
          bg-background-secondary
          py-3
          pl-12
          pr-4
          text-text-primary
          placeholder:text-text-secondary
          outline-none
          focus:border-yellow-500
          focus:ring-2
          focus:ring-yellow-500/20
        "
      />

    </div>
  );
}