"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function RepairTable() {
  const repairs = [
    {
      id: 1,
      repairId: "REP001",
      customer: "Rahul Patel",
      product: "Gold Ring",
      worker: "Ramesh",
      status: "Pending",
      delivery: "30 Jul 2026",
    },
    {
      id: 2,
      repairId: "REP002",
      customer: "Amit Shah",
      product: "Diamond Necklace",
      worker: "Suresh",
      status: "In Progress",
      delivery: "28 Jul 2026",
    },
    {
      id: 3,
      repairId: "REP003",
      customer: "Priya Mehta",
      product: "Gold Bracelet",
      worker: "Mahesh",
      status: "Completed",
      delivery: "25 Jul 2026",
    },
  ];

  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-background-tertiary">

            <tr>

              <th className="px-6 py-4 text-left text-accent-gold">
                Repair ID
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Product
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Worker
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Delivery
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Status
              </th>

              <th className="px-6 py-4 text-center text-accent-gold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {repairs.map((repair) => (

              <tr
                key={repair.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4 font-semibold">
                  {repair.repairId}
                </td>

                <td className="px-6 py-4">
                  {repair.customer}
                </td>

                <td className="px-6 py-4">
                  {repair.product}
                </td>

                <td className="px-6 py-4">
                  {repair.worker}
                </td>

                <td className="px-6 py-4 text-text-secondary">
                  {repair.delivery}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      repair.status === "Pending"
                        ? "bg-accent-gold/20 text-accent-gold"
                        : repair.status === "In Progress"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {repair.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    {/* Details */}

                    <Link
                      href={`/repair/details/${repair.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    {/* Edit */}

                    <Link
                      href={`/repair/edit/${repair.id}`}
                      className="text-accent-gold hover:text-accent-gold"
                    >
                      <Pencil size={20} />
                    </Link>

                    {/* Delete */}

                    <button
                      onClick={() => {
                        if (confirm("Delete this repair?")) {
                          alert("Repair deleted successfully!");
                        }
                      }}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 size={20} />
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