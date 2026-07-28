"use client";

import { Search, Filter } from "lucide-react";

interface OffersSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
}

export default function OffersSearch({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
}: OffersSearchProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 mb-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}

        <div className="relative md:col-span-2">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search offers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-yellow-500"
          />

        </div>

        {/* Filter */}

        <div className="relative">

          <Filter
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none bg-[#1B1B1B] border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-yellow-500"
          >
            <option value="All">All Offers</option>
            <option value="Active">Active</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Expired">Expired</option>
          </select>

        </div>

      </div>

    </div>
  );
}