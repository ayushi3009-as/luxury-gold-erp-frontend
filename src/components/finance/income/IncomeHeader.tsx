"use client";

import { Plus } from "lucide-react";

interface IncomeHeaderProps {
  onAddClick: () => void;
}

export default function IncomeHeader({
  onAddClick,
}: IncomeHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-yellow-500">
          Income Management
        </h1>

        <p className="mt-2 text-gray-400">
          Manage all income records and customer payments.
        </p>
      </div>

      <button
        onClick={onAddClick}
        className="flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
      >
        <Plus size={20} />
        Add Income
      </button>
    </div>
  );
}