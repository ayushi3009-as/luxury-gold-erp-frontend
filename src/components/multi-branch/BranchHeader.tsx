"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

interface BranchHeaderProps {
  title?: string;
  subtitle?: string;
  showButton?: boolean;
}

export default function BranchHeader({
  title = "Branch Management",
  subtitle = "Manage all branches of Luxury Gold ERP.",
  showButton = true,
}: BranchHeaderProps) {
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
          href="/multi-branch/branches/add"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          Add Branch
        </Link>
      )}

    </div>
  );
}