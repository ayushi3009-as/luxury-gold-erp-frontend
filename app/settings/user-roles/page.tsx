"use client";

import { Plus, Search, Pencil, Trash2, Shield } from "lucide-react";

const roles = [
  {
    id: 1,
    role: "Administrator",
    users: 3,
    permission: "Full Access",
    status: "Active",
  },
  {
    id: 2,
    role: "HR Manager",
    users: 5,
    permission: "HR Module",
    status: "Active",
  },
  {
    id: 3,
    role: "Accountant",
    users: 4,
    permission: "Payroll Module",
    status: "Active",
  },
  {
    id: 4,
    role: "Employee",
    users: 45,
    permission: "Limited Access",
    status: "Inactive",
  },
];

export default function UserRoles() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            User Roles
          </h1>

          <p className="text-gray-400 mt-2">
            Create and manage user roles & permissions.
          </p>

        </div>

        <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-3 rounded-xl">

          <Plus size={18} />

          Add Role

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
          placeholder="Search role..."
          className="w-full md:w-96 bg-[#1E293B] border border-slate-700 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-yellow-500"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-[#1E293B]">

        <table className="w-full">

          <thead className="bg-[#273549]">

            <tr>

              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Role Name</th>
              <th className="p-4 text-left">Users</th>
              <th className="p-4 text-left">Permission</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {roles.map((role) => (

              <tr
                key={role.id}
                className="border-t border-slate-700 hover:bg-[#243247]"
              >

                <td className="p-4">{role.id}</td>

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <div className="bg-yellow-500/20 p-2 rounded-lg">

                      <Shield
                        size={18}
                        className="text-yellow-400"
                      />

                    </div>

                    <span className="font-medium">
                      {role.role}
                    </span>

                  </div>

                </td>

                <td className="p-4">
                  {role.users}
                </td>

                <td className="p-4">
                  {role.permission}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      role.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {role.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button className="bg-blue-500/20 hover:bg-blue-500/30 p-2 rounded-lg">

                      <Pencil
                        size={18}
                        className="text-blue-400"
                      />

                    </button>

                    <button className="bg-red-500/20 hover:bg-red-500/30 p-2 rounded-lg">

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