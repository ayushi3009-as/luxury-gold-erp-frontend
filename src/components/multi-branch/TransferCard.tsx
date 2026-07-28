"use client";

import Link from "next/link";
import {
  ArrowRightLeft,
  Building2,
  Calendar,
  Boxes,
  Eye,
} from "lucide-react";

interface TransferCardProps {
  id: number;
  fromBranch: string;
  toBranch: string;
  transferDate: string;
  items: number;
  status: "Pending" | "Completed" | "In Transit";
}

export default function TransferCard({
  id,
  fromBranch,
  toBranch,
  transferDate,
  items,
  status,
}: TransferCardProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500 transition-all">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
            <ArrowRightLeft
              size={24}
              className="text-yellow-500"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Transfer #{id}
            </h2>

            <p className="text-gray-400 text-sm">
              {transferDate}
            </p>
          </div>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === "Completed"
              ? "bg-green-500/20 text-green-400"
              : status === "Pending"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-blue-500/20 text-blue-400"
          }`}
        >
          {status}
        </span>

      </div>

      {/* Details */}

      <div className="space-y-4 mt-6">

        <div className="flex items-center gap-3">
          <Building2
            size={18}
            className="text-yellow-500"
          />
          <span>
            <strong>From:</strong> {fromBranch}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Building2
            size={18}
            className="text-yellow-500"
          />
          <span>
            <strong>To:</strong> {toBranch}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Calendar
            size={18}
            className="text-yellow-500"
          />
          <span>{transferDate}</span>
        </div>

        <div className="flex items-center gap-3">
          <Boxes
            size={18}
            className="text-yellow-500"
          />
          <span>{items} Items</span>
        </div>

      </div>

      {/* Action */}

      <div className="mt-8">

        <Link
          href={`/multi-branch/transfers/view/${id}`}
          className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition"
        >
          <Eye size={18} />
          View Transfer
        </Link>

      </div>

    </div>
  );
}