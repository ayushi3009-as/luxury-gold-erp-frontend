"use client";

import { Search, ShieldCheck, Check, X } from "lucide-react";

const permissions = [
  {
    role: "Administrator",
    dashboard: true,
    employees: true,
    payroll: true,
    settings: true,
  },
  {
    role: "HR Manager",
    dashboard: true,
    employees: true,
    payroll: true,
    settings: false,
  },
  {
    role: "Accountant",
    dashboard: true,
    employees: false,
    payroll: true,
    settings: false,
  },
  {
    role: "Employee",
    dashboard: true,
    employees: false,
    payroll: false,
    settings: false,
  },
];

export default function Permissions() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Permissions
          </h1>

          <p className="text-gray-400 mt-2">
            Manage access permissions for each user role.
          </p>

        </div>

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

      {/* Permission Table */}

      <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-[#1E293B]">

        <table className="w-full">

          <thead className="bg-[#273549]">

            <tr>

              <th className="text-left p-4">Role</th>
              <th className="text-center p-4">Dashboard</th>
              <th className="text-center p-4">Employees</th>
              <th className="text-center p-4">Payroll</th>
              <th className="text-center p-4">Settings</th>

            </tr>

          </thead>

          <tbody>

            {permissions.map((item, index) => (

              <tr
                key={index}
                className="border-t border-slate-700 hover:bg-[#243247]"
              >

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <div className="bg-yellow-500/20 p-2 rounded-lg">

                      <ShieldCheck
                        size={18}
                        className="text-yellow-400"
                      />

                    </div>

                    <span className="font-medium">
                      {item.role}
                    </span>

                  </div>

                </td>

                {[item.dashboard, item.employees, item.payroll, item.settings].map(
                  (value, i) => (
                    <td key={i} className="text-center p-4">

                      {value ? (
                        <Check
                          className="inline text-green-400"
                          size={20}
                        />
                      ) : (
                        <X
                          className="inline text-red-400"
                          size={20}
                        />
                      )}

                    </td>
                  )
                )}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}