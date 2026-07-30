"use client";

import { Search } from "lucide-react";

interface RepairSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RepairSearch({
  value,
  onChange,
}: RepairSearchProps) {
  return (
    <div className="relative w-full">

      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
        size={20}
      />

      <input
        type="text"
        placeholder="Search by Repair ID, Customer, Product..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          bg-background-secondary
          border
          border-border-theme
          rounded-2xl
          pl-12
          pr-4
          py-4
          text-text-primary
          placeholder-gray-500
          outline-none
          focus:border-yellow-500
          transition
        "
      />

    </div>
  );
}