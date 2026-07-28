"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

interface TransferHeaderProps {
  title?: string;
  subtitle?: string;
  showButton?: boolean;
}

export default function TransferHeader({
  title = "Transfer Management",
  subtitle = "Manage inventory transfers between branches.",
  showButton = true,
}: TransferHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
      <div>
        <h1 className="text-4xl font-bold text-yellow-500">
          {title}
        </h1>

        <p className="text-gray-400 mt-2">
          {subtitle}
        </p>
      </div>

      {showButton && (
        <Link
          href="/multi-branch/transfers/add"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          New Transfer
        </Link>
      )}
    </div>
  );
}