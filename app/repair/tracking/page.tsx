"use client";

import Link from "next/link";
import { ArrowLeft, Eye, Pencil, Trash2 } from "lucide-react";

export default function RepairTrackingPage() {
  const repairs = [
    {
      id: "REP001",
      customer: "Rahul Patel",
      product: "Gold Ring",
      worker: "Ramesh",
      status: "Pending",
      expected: "30 Jul 2026",
    },
    {
      id: "REP002",
      customer: "Amit Shah",
      product: "Diamond Necklace",
      worker: "Suresh",
      status: "In Progress",
      expected: "28 Jul 2026",
    },
    {
      id: "REP003",
      customer: "Priya Mehta",
      product: "Gold Bracelet",
      worker: "Mahesh",
      status: "Completed",
      expected: "25 Jul 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Repair Tracking
          </h1>

          <p className="text-text-secondary mt-2">
            Track all repair jobs
          </p>

        </div>

        <Link
          href="/repair"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Table */}

      <div className="bg-background-secondary rounded-2xl border border-border-theme overflow-hidden">

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
                  Expected Date
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
                  className="border-t border-border-theme hover:bg-[#1A1A1A]"
                >

                  <td className="px-6 py-4">{repair.id}</td>

                  <td className="px-6 py-4">{repair.customer}</td>

                  <td className="px-6 py-4">{repair.product}</td>

                  <td className="px-6 py-4">{repair.worker}</td>

                  <td className="px-6 py-4">{repair.expected}</td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
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
                          if (
                            confirm(
                              `Are you sure you want to delete ${repair.id}?`
                            )
                          ) {
                            alert("Repair deleted successfully");
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

    </main>
  );
}