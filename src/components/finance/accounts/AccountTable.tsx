"use client";

import { Pencil, Trash2 } from "lucide-react";

export interface Account {
  id: number;
  accountName: string;
  accountNumber: string;
  type: "Bank" | "Cash" | "Wallet" | "Credit Card";
  balance: number;
  status: "Active" | "Inactive";
}

interface AccountTableProps {
  accounts: Account[];
  onEdit?: (account: Account) => void;
  onDelete?: (id: number) => void;
}

export default function AccountTable({
  accounts,
  onEdit,
  onDelete,
}: AccountTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-yellow-600/20 bg-[#151515]">

      <table className="w-full">

        <thead className="bg-[#1D1D1D]">
          <tr className="text-left text-yellow-500">
            <th className="p-4">Account Name</th>
            <th className="p-4">Account Number</th>
            <th className="p-4">Type</th>
            <th className="p-4">Balance</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>

          {accounts.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="py-10 text-center text-gray-400"
              >
                No accounts found.
              </td>
            </tr>
          ) : (
            accounts.map((account) => (
              <tr
                key={account.id}
                className="border-t border-gray-800 hover:bg-[#202020]"
              >
                <td className="p-4 font-medium">
                  {account.accountName}
                </td>

                <td className="p-4">
                  {account.accountNumber}
                </td>

                <td className="p-4">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
                    {account.type}
                  </span>
                </td>

                <td className="p-4 font-semibold text-green-400">
                  ${account.balance.toLocaleString()}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      account.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {account.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onEdit?.(account)}
                      className="rounded-lg bg-blue-600 p-2 transition hover:bg-blue-700"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete?.(account.id)}
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