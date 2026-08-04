"use client";

import Link from "next/link";
import { Gem, Eye, Pencil, Trash2 } from "lucide-react";

const records = [
  {
    id: "DC-001",
    jobCard: "JC-1020",
    diamond: "Round Cut",
    issued: "80 pcs",
    used: "78 pcs",
    balance: "2 pcs",
  },
  {
    id: "DC-002",
    jobCard: "JC-1021",
    diamond: "Princess Cut",
    issued: "60 pcs",
    used: "58 pcs",
    balance: "2 pcs",
  },
];

export default function DiamondConsumption() {
  const handleDelete = async (id: string) => {
    alert("Delete not implemented for static data");
  };
  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary">

      <div className="flex items-center justify-between border-b border-border-theme p-6">

        <h2 className="text-xl font-semibold text-text-primary">
          Diamond Consumption
        </h2>

        <Gem className="text-[#D4AF37]" />

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-[#181818]">
            <tr>
              <th className="px-6 py-4 text-left text-text-secondary">ID</th>
              <th className="px-6 py-4 text-left text-text-secondary">Job Card</th>
              <th className="px-6 py-4 text-left text-text-secondary">Diamond</th>
              <th className="px-6 py-4 text-left text-text-secondary">Issued</th>
              <th className="px-6 py-4 text-left text-text-secondary">Used</th>
              <th className="px-6 py-4 text-left text-text-secondary">Balance</th>
              <th className="px-6 py-4 text-center text-text-secondary">Actions</th>
            </tr>
          </thead>

          <tbody>

            {records.map((item) => (

              <tr
                key={item.id}
                className="border-t border-border-theme hover:bg-background-tertiary"
              >
                <td className="px-6 py-4 font-semibold text-[#D4AF37]">
                  {item.id}
                </td>

                <td className="px-6 py-4 text-text-primary">
                  {item.jobCard}
                </td>

                <td className="px-6 py-4 text-text-primary">
                  {item.diamond}
                </td>

                <td className="px-6 py-4 text-blue-400">
                  {item.issued}
                </td>

                <td className="px-6 py-4 text-green-400">
                  {item.used}
                </td>

                <td className="px-6 py-4 text-yellow-400">
                  {item.balance}
                </td>

              
              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <Link
                    href={`/manufacturing-manager/material?tab=details&id=${item.id}`}
                    className="rounded-lg bg-background-tertiary p-2 text-blue-400 hover:bg-blue-500 hover:text-text-primary"
                  >
                    <Eye size={18} />
                  </Link>
                  <Link
                    href={`/manufacturing-manager/material?tab=edit&id=${item.id}`}
                    className="rounded-lg bg-background-tertiary p-2 text-yellow-400 hover:bg-yellow-500 hover:text-text-primary"
                  >
                    <Pencil size={18} />
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg bg-background-tertiary p-2 text-red-400 hover:bg-red-500 hover:text-text-primary"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
</tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}