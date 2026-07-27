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
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Worker Assignment
          </h1>

          <p className="text-gray-400 mt-2">
            Assign repair jobs to workers
          </p>
        </div>

        <Link
          href="/repair"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#1B1B1B]">

              <tr>

                <th className="px-6 py-4 text-left text-yellow-500">
                  Repair ID
                </th>

                <th className="px-6 py-4 text-left text-yellow-500">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-yellow-500">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-yellow-500">
                  Worker
                </th>

                <th className="px-6 py-4 text-left text-yellow-500">
                  Priority
                </th>

                <th className="px-6 py-4 text-left text-yellow-500">
                  Status
                </th>

                <th className="px-6 py-4 text-center text-yellow-500">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {assignments.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-gray-800 hover:bg-[#1A1A1A]"
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
                          ? "bg-yellow-500/20 text-yellow-400"
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
                          ? "bg-yellow-500/20 text-yellow-400"
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
                        className="text-yellow-500 hover:text-yellow-400"
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