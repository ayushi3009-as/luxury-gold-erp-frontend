"use client";

import { FileBarChart2 } from "lucide-react";

export default function ReportsHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-yellow-500">
          Finance Reports
        </h1>

        <p className="text-gray-400 mt-2">
          Sales, Income, Expense and Profit Reports
        </p>
      </div>

      <div className="bg-yellow-500 rounded-xl p-4">
        <FileBarChart2 size={32} className="text-black" />
      </div>
    </div>
  );
}