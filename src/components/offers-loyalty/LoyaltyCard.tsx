"use client";

import Link from "next/link";
import {
  Crown,
  Phone,
  Star,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

interface LoyaltyCardProps {
  id: number;
  name: string;
  mobile: string;
  membership: "Gold" | "Silver" | "Bronze";
  points: number;
}

export default function LoyaltyCard({
  id,
  name,
  mobile,
  membership,
  points,
}: LoyaltyCardProps) {
  const membershipClass =
    membership === "Gold"
      ? "bg-yellow-500/20 text-yellow-400"
      : membership === "Silver"
      ? "bg-gray-500/20 text-gray-300"
      : "bg-orange-500/20 text-orange-400";

  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500 transition">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center">

            <Crown
              size={26}
              className="text-black"
            />

          </div>

          <div>

            <h2 className="text-xl font-semibold">
              {name}
            </h2>

            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${membershipClass}`}
            >
              {membership}
            </span>

          </div>

        </div>

      </div>

      {/* Mobile */}

      <div className="flex items-center gap-2 mt-6 text-gray-400">

        <Phone size={18} />

        <span>{mobile}</span>

      </div>

      {/* Points */}

      <div className="flex items-center gap-2 mt-4">

        <Star
          size={18}
          className="text-yellow-500"
        />

        <span className="font-semibold text-yellow-500">
          {points.toLocaleString()} Points
        </span>

      </div>

      {/* Buttons */}

      <div className="flex gap-3 mt-8">

        <Link
          href={`/offers-loyalty/loyalty/view/${id}`}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 rounded-xl py-2 transition"
        >
          <Eye size={18} />
          View
        </Link>

        <Link
          href={`/offers-loyalty/loyalty/edit/${id}`}
          className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl py-2 transition"
        >
          <Pencil size={18} />
          Edit
        </Link>

        <button
          type="button"
          onClick={() => alert(`Delete Member ID: ${id}`)}
          className="px-4 rounded-xl bg-red-600 hover:bg-red-500 transition"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}