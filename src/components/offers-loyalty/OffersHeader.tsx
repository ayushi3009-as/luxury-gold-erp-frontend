"use client";

import Link from "next/link";
import { Gift, Plus } from "lucide-react";

export default function OffersHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

      {/* Left Side */}

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center">

          <Gift
            size={32}
            className="text-black"
          />

        </div>

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Offers Management
          </h1>

          <p className="text-gray-400 mt-2">
            Create, manage and monitor promotional offers.
          </p>

        </div>

      </div>

      {/* Right Side */}

      <Link
        href="/offers-loyalty/offers/add"
        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
      >
        <Plus size={20} />

        Add Offer
      </Link>

    </div>
  );
}