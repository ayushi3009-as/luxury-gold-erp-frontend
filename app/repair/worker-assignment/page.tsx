"use client";

import Link from "next/link";
import { ArrowLeft, Eye, Pencil, Trash2 } from "lucide-react";

export default function WorkerAssignmentPage() {
  const assignments = [
    {
      id: "REP001",
      customer: "Rahul Patel",
      product: "Gold Ring",
      worker: "Ramesh",
      priority: "High",
      status: "Assigned",
    },
    {
      id: "REP002",
      customer: "Amit Shah",
      product: "Diamond Necklace",
      worker: "Suresh",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: "REP003",
      customer: "Priya Mehta",
      product: "Gold Bracelet",
      worker: "Mahesh",
      priority: "Low",
      status: "Completed",
    },
  ];

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Worker Assignment
          </h1>

          <p className="text-text-secondary mt-2">
            Assign repair jobs to workers
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
                  Priority
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

              {assignments.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-border-theme hover:bg-[#1A1A1A]"
                >

                  <td className="px-6 py-4">{item.id}</td>

                  <td className="px-6 py-4">{item.customer}</td>

                  <td className="px-6 py-4">{item.product}</td>

                  <td className="px-6 py-4">{item.worker}</td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.priority === "High"
                          ? "bg-red-500/20 text-red-400"
                          : item.priority === "Medium"
                          ? "bg-accent-gold/20 text-accent-gold"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.priority}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Assigned"
                          ? "bg-blue-500/20 text-blue-400"
                          : item.status === "In Progress"
                          ? "bg-accent-gold/20 text-accent-gold"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-4">

                      <Link
                        href={`/repair/details/${item.id}`}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Eye size={20} />
                      </Link>

                      <Link
                        href={`/repair/edit/${item.id}`}
                        className="text-accent-gold hover:text-accent-gold"
                      >
                        <Pencil size={20} />
                      </Link>

                      <button
                        onClick={() => {
                          if (
                            confirm(
                              `Are you sure you want to delete ${item.id}?`
                            )
                          ) {
                            alert("Worker Assignment Deleted Successfully");
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