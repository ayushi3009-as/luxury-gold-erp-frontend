"use client";

import { Filter } from "lucide-react";

export default function GoldFilter() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">

      {/* Purity Filter */}

      <div className="relative">

        <Filter
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-gold"
        />

        <select
          className="
            w-full
            sm:w-52
            rounded-xl
            bg-background-secondary
            border
            border-border-theme
            py-3
            pl-10
            pr-4
            text-text-primary
            outline-none
            focus:border-yellow-500
          "
        >
          <option>All Purity</option>
          <option>18K</option>
          <option>22K</option>
          <option>24K</option>
        </select>

      </div>

      {/* Status Filter */}

      <select
        className="
          w-full
          sm:w-48
          rounded-xl
          bg-background-secondary
          border
          border-border-theme
          py-3
          px-4
          text-text-primary
          outline-none
          focus:border-yellow-500
        "
      >
        <option>All Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

    </div>
  );
}