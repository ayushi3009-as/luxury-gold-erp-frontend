"use client";

import { Search, Filter, Plus } from "lucide-react";
import Link from "next/link";

export default function SalesSearch() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8">

      {/* Search */}

      <div className="relative w-full lg:w-96">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
        />

        <input
          type="text"
          placeholder="Search Customer / Invoice..."
          className="w-full bg-background-secondary border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-text-primary focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Right Side */}

      <div className="flex gap-3">

        <button className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition">

          <Filter size={18} />

          Filter

        </button>

        <Link
          href="/reports/sales/add"
          className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-5 py-3 rounded-xl transition"
        >

          <Plus size={18} />

          Add Sale

        </Link>

      </div>

    </div>
  );
}