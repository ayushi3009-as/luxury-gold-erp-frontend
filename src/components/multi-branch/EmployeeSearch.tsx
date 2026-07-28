"use client";

import { Search, Filter } from "lucide-react";

interface EmployeeSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function EmployeeSearch({
  search,
  setSearch,
}: EmployeeSearchProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">

      {/* Search */}

      <div className="relative flex-1">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#141414] border border-yellow-500/20 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-yellow-500 transition"
        />

      </div>

      {/* Branch Filter */}

      <select
        className="bg-[#141414] border border-yellow-500/20 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
      >
        <option>All Branches</option>
        <option>Surat Head Office</option>
        <option>Ahmedabad Branch</option>
        <option>Mumbai Branch</option>
        <option>Rajkot Branch</option>
      </select>

      {/* Filter Button */}

      <button
        className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
      >
        <Filter size={18} />
        Filter
      </button>

    </div>
  );
}