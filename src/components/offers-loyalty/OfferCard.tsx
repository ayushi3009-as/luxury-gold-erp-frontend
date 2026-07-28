"use client";

import Link from "next/link";
import {
  Gift,
  Eye,
  Pencil,
  Trash2,
  Calendar,
} from "lucide-react";

interface OfferCardProps {
  id: number;
  title: string;
  discount: string;
  validTill: string;
  status: "Active" | "Upcoming" | "Expired";
}

export default function OfferCard({
  id,
  title,
  discount,
  validTill,
  status,
}: OfferCardProps) {
  const statusClass =
    status === "Active"
      ? "bg-green-500/20 text-green-400"
      : status === "Upcoming"
      ? "bg-blue-500/20 text-blue-400"
      : "bg-red-500/20 text-red-400";

  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500 transition">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">

            <Gift
              size={22}
              className="text-black"
            />

          </div>

          <div>

            <h2 className="text-xl font-semibold text-white">
              {title}
            </h2>

            <p className="text-yellow-500 font-bold mt-1">
              {discount}
            </p>

          </div>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${statusClass}`}
        >
          {status}
        </span>

      </div>

      {/* Valid Till */}

      <div className="flex items-center gap-2 mt-6 text-gray-400">

        <Calendar size={18} />

        <span>
          Valid Till: {validTill}
        </span>

      </div>

      {/* Buttons */}

      <div className="flex gap-3 mt-8">

        <Link
          href={`/offers-loyalty/offers/view/${id}`}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 rounded-xl py-2 transition"
        >
          <Eye size={18} />
          View
        </Link>

        <Link
          href={`/offers-loyalty/offers/edit/${id}`}
          className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl py-2 transition"
        >
          <Pencil size={18} />
          Edit
        </Link>

        <button
          onClick={() => alert(`Delete Offer ID: ${id}`)}
          className="px-4 rounded-xl bg-red-600 hover:bg-red-500 transition"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}