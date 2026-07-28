"use client";

import { Pencil, Trash2 } from "lucide-react";

export interface Expense {
  id: number;
  date: string;
  title: string;
  category: string;
  amount: number;
  payment: string;
}

interface ExpenseTableProps {
  expenses: Expense[];
  onEdit?: (expense: Expense) => void;
  onDelete?: (id: number) => void;
}

export default function ExpenseTable({
  expenses,
  onEdit,
  onDelete,
}: ExpenseTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-yellow-600/20 bg-[#151515]">

      <table className="w-full">

        <thead className="bg-[#1D1D1D]">

          <tr className="text-left text-yellow-500">

            <th className="p-4">Date</th>

            <th className="p-4">Title</th>

            <th className="p-4">Category</th>

            <th className="p-4">Amount</th>

            <th className="p-4">Payment</th>

            <th className="p-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {expenses.length === 0 ? (

            <tr>

              <td
                colSpan={6}
                className="py-10 text-center text-gray-400"
              >
                No expense records found.
              </td>

            </tr>

          ) : (

            expenses.map((expense) => (

              <tr
                key={expense.id}
                className="border-t border-gray-800 hover:bg-[#202020]"
              >

                <td className="p-4">
                  {expense.date}
                </td>

                <td className="p-4">
                  {expense.title}
                </td>

                <td className="p-4">
                  {expense.category}
                </td>

                <td className="p-4 font-semibold text-red-400">
                  ${expense.amount.toLocaleString()}
                </td>

                <td className="p-4">
                  {expense.payment}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onEdit?.(expense)}
                      className="rounded-lg bg-blue-600 p-2 transition hover:bg-blue-700"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete?.(expense.id)}
                      className="rounded-lg bg-red-600 p-2 transition hover:bg-red-700"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}