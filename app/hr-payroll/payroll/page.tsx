import { Search, Download, Calculator } from "lucide-react";

const payrollData = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "HR",
    salary: "₹65,000",
    bonus: "₹5,000",
    status: "Paid",
  },
  {
    id: "EMP002",
    name: "Priya Patel",
    department: "Finance",
    salary: "₹58,000",
    bonus: "₹3,000",
    status: "Paid",
  },
  {
    id: "EMP003",
    name: "Amit Verma",
    department: "IT",
    salary: "₹72,000",
    bonus: "₹6,000",
    status: "Pending",
  },
  {
    id: "EMP004",
    name: "Sneha Shah",
    department: "Sales",
    salary: "₹55,000",
    bonus: "₹2,500",
    status: "Paid",
  },
];

export default function PayrollPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Payroll Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage employee salary and payroll records.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold">
          <Download size={18} />
          Export Payroll
        </button>

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search Employee..."
          className="w-full bg-[#111111] border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Total Payroll</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">
            ₹18.5L
          </h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Paid</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            118
          </h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Pending</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">
            2
          </h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Bonus Issued</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">
            ₹1.2L
          </h2>
        </div>

      </div>

      {/* Payroll Table */}

      <div className="bg-[#111111] rounded-2xl border border-zinc-800 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">

            <tr>
              <th className="text-left px-6 py-4 text-gray-300">ID</th>
              <th className="text-left px-6 py-4 text-gray-300">Employee</th>
              <th className="text-left px-6 py-4 text-gray-300">Department</th>
              <th className="text-left px-6 py-4 text-gray-300">Salary</th>
              <th className="text-left px-6 py-4 text-gray-300">Bonus</th>
              <th className="text-left px-6 py-4 text-gray-300">Status</th>
            </tr>

          </thead>

          <tbody>

            {payrollData.map((emp) => (

              <tr
                key={emp.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{emp.id}</td>

                <td className="px-6 py-4 text-white">{emp.name}</td>

                <td className="px-6 py-4 text-gray-300">
                  {emp.department}
                </td>

                <td className="px-6 py-4 text-yellow-400 font-semibold">
                  {emp.salary}
                </td>

                <td className="px-6 py-4 text-green-400">
                  {emp.bonus}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      emp.status === "Paid"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {emp.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}