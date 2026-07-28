"use client";

import { Pencil, Trash2 } from "lucide-react";

interface Income {
  id: number;
  date: string;
  source: string;
  category: string;
  amount: number;
  payment: string;
}

interface IncomeTableProps {
  incomes: Income[];
  onEdit?: (income: Income) => void;
  onDelete?: (id: number) => void;
}

export default function IncomeTable({
  incomes,
  onEdit,
  onDelete,
}: IncomeTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-yellow-600/20 bg-[#151515]">
      <table className="w-full">
        <thead className="bg-[#1d1d1d]">
          <tr className="text-left text-yellow-500">
            <th className="p-4">Date</th>
            <th className="p-4">Source</th>
            <th className="p-4">Category</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Payment</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {incomes.map((income) => (
            <tr
              key={income.id}
              className="border-t border-gray-800 hover:bg-[#1d1d1d]"
            >
              <td className="p-4">{income.date}</td>

              <td className="p-4">{income.source}</td>

              <td className="p-4">{income.category}</td>

              <td className="p-4 font-semibold text-green-400">
                ${income.amount}
              </td>

              <td className="p-4">{income.payment}</td>

              <td className="p-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => onEdit?.(income)}
                    className="rounded-lg bg-blue-600 p-2 transition hover:bg-blue-700"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete?.(income.id)}
                    className="rounded-lg bg-red-600 p-2 transition hover:bg-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {incomes.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="p-8 text-center text-gray-400"
              >
                No income records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}