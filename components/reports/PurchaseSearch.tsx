"use client";

import Link from "next/link";
import { Search, Filter, Plus } from "lucide-react";

export default function PurchaseSearch() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">

      {/* Search */}

      <div className="relative w-full lg:w-96">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
        />

        <input
          type="text"
          placeholder="Search Purchase..."
          className="w-full bg-background-secondary border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-text-primary focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Right Buttons */}

      <div className="flex gap-3">

        <button
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <Filter size={18} />
          Filter
        </button>

        <Link
          href="/reports/purchase/add"
          className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-5 py-3 rounded-xl transition"
        >
          <Plus size={18} />
          Add Purchase
        </Link>

      </div>

    </div>
  );
}