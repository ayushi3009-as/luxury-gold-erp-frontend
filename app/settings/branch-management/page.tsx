"use client";

import { Plus, Search, Pencil, Trash2 } from "lucide-react";

const branches = [
  {
    id: 1,
    name: "Head Office",
    city: "Surat",
    manager: "Rahul Patel",
    status: "Active",
  },
  {
    id: 2,
    name: "Ahmedabad Branch",
    city: "Ahmedabad",
    manager: "Amit Shah",
    status: "Active",
  },
  {
    id: 3,
    name: "Rajkot Branch",
    city: "Rajkot",
    manager: "Karan Patel",
    status: "Inactive",
  },
];

export default function BranchManagement() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Branch Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all company branches from one place.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-3 rounded-xl">

          <Plus size={18} />

          Add Branch

        </button>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={18}
          className="absolute left-4 top-4 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search branch..."
          className="w-full md:w-96 bg-[#1E293B] border border-slate-700 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-yellow-500"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto bg-[#1E293B] border border-slate-700 rounded-2xl">

        <table className="w-full">

          <thead className="bg-[#273549]">

            <tr>

              <th className="text-left p-4">ID</th>
              <th className="text-left p-4">Branch Name</th>
              <th className="text-left p-4">City</th>
              <th className="text-left p-4">Manager</th>
              <th className="text-left p-4">Status</th>
              <th className="text-center p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {branches.map((branch) => (

              <tr
                key={branch.id}
                className="border-t border-slate-700 hover:bg-[#243247]"
              >

                <td className="p-4">{branch.id}</td>

                <td className="p-4 font-medium">
                  {branch.name}
                </td>

                <td className="p-4">
                  {branch.city}
                </td>

                <td className="p-4">
                  {branch.manager}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      branch.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {branch.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30">

                      <Pencil
                        size={18}
                        className="text-blue-400"
                      />

                    </button>

                    <button className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30">

                      <Trash2
                        size={18}
                        className="text-red-400"
                      />

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