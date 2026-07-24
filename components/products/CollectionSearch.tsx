"use client";

import { Search } from "lucide-react";

interface CollectionSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CollectionSearch({
  value,
  onChange,
}: CollectionSearchProps) {
  return (
    <div className="relative w-full lg:w-96">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"
      />

      <input
        type="text"
        placeholder="Search Collection..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-yellow-500/30
          bg-[#141414]
          py-3
          pl-12
          pr-4
          text-white
          placeholder:text-gray-500
          outline-none
          focus:border-yellow-500
          focus:ring-2
          focus:ring-yellow-500/20
        "
      />

    </div>
  );
}