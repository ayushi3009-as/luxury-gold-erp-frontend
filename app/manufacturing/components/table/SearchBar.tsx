"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "Search...",
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-12 rounded-xl bg-[#111111] border border-zinc-800 pl-11 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-yellow-500"
      />
    </div>
  );
}