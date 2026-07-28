"use client";

import Link from "next/link";
import { Eye } from "lucide-react";

interface Transfer {
  id: number;
  fromBranch: string;
  toBranch: string;
  transferDate: string;
  items: number;
  status: "Pending" | "Completed" | "In Transit";
}

interface TransferTableProps {
  transfers: Transfer[];
}

export default function TransferTable({
  transfers,
}: TransferTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#141414]">

      <table className="min-w-full">

        <thead className="bg-[#1B1B1B]">

          <tr>

            <th className="px-6 py-4 text-left text-yellow-500">
              Transfer ID
            </th>

            <th className="px-6 py-4 text-left text-yellow-500">
              From Branch
            </th>

            <th className="px-6 py-4 text-left text-yellow-500">
              To Branch
            </th>

            <th className="px-6 py-4 text-left text-yellow-500">
              Date
            </th>

            <th className="px-6 py-4 text-left text-yellow-500">
              Items
            </th>

            <th className="px-6 py-4 text-left text-yellow-500">
              Status
            </th>

            <th className="px-6 py-4 text-center text-yellow-500">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {transfers.map((transfer) => (
            <tr
              key={transfer.id}
              className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
            >

              <td className="px-6 py-4">
                #{transfer.id}
              </td>

              <td className="px-6 py-4">
                {transfer.fromBranch}
              </td>

              <td className="px-6 py-4">
                {transfer.toBranch}
              </td>

              <td className="px-6 py-4">
                {transfer.transferDate}
              </td>

              <td className="px-6 py-4">
                {transfer.items}
              </td>

              <td className="px-6 py-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    transfer.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : transfer.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {transfer.status}
                </span>

              </td>

              <td className="px-6 py-4 text-center">

                <Link
                  href={`/multi-branch/transfers/view/${transfer.id}`}
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg transition"
                >
                  <Eye size={16} />
                  View
                </Link>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}