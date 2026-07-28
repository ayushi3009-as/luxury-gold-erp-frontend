"use client";

import { Pencil, Trash2 } from "lucide-react";

export interface Transaction {
  id: number;
  date: string;
  description: string;
  type: "Credit" | "Debit";
  amount: number;
  payment: string;
  status: "Completed" | "Pending" | "Cancelled";
}

interface TransactionTableProps {
  transactions: Transaction[];
  onEdit?: (transaction: Transaction) => void;
  onDelete?: (id: number) => void;
}

export default function TransactionTable({
  transactions,
  onEdit,
  onDelete,
}: TransactionTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-yellow-600/20 bg-[#151515]">

      <table className="w-full">

        <thead className="bg-[#1D1D1D]">

          <tr className="text-left text-yellow-500">

            <th className="p-4">Date</th>

            <th className="p-4">Description</th>

            <th className="p-4">Type</th>

            <th className="p-4">Amount</th>

            <th className="p-4">Payment</th>

            <th className="p-4">Status</th>

            <th className="p-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {transactions.length === 0 ? (

            <tr>

              <td
                colSpan={7}
                className="py-10 text-center text-gray-400"
              >
                No transaction records found.
              </td>

            </tr>

          ) : (

            transactions.map((transaction) => (

              <tr
                key={transaction.id}
                className="border-t border-gray-800 hover:bg-[#202020]"
              >

                <td className="p-4">
                  {transaction.date}
                </td>

                <td className="p-4">
                  {transaction.description}
                </td>

                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      transaction.type === "Credit"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {transaction.type}
                  </span>

                </td>

                <td
                  className={`p-4 font-semibold ${
                    transaction.type === "Credit"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  ${transaction.amount.toLocaleString()}
                </td>

                <td className="p-4">
                  {transaction.payment}
                </td>

                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      transaction.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : transaction.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {transaction.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onEdit?.(transaction)}
                      className="rounded-lg bg-blue-600 p-2 transition hover:bg-blue-700"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete?.(transaction.id)}
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