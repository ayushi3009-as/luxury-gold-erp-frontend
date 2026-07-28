import { Search, Download, BadgeIndianRupee } from "lucide-react";

const salaryData = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "HR",
    basic: "₹50,000",
    allowance: "₹10,000",
    net: "₹60,000",
  },
  {
    id: "EMP002",
    name: "Priya Patel",
    department: "Finance",
    basic: "₹48,000",
    allowance: "₹8,000",
    net: "₹56,000",
  },
  {
    id: "EMP003",
    name: "Amit Verma",
    department: "IT",
    basic: "₹65,000",
    allowance: "₹12,000",
    net: "₹77,000",
  },
  {
    id: "EMP004",
    name: "Sneha Shah",
    department: "Sales",
    basic: "₹42,000",
    allowance: "₹7,000",
    net: "₹49,000",
  },
];

export default function SalaryPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Salary Management
          </h1>

          <p className="text-gray-400 mt-2">
            View and manage employee salary details.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold">
          <Download size={18} />
          Export Salary
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
          <p className="text-gray-400">Total Salary</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">₹25L</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Average Salary</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">₹58K</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Highest Salary</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">₹77K</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Lowest Salary</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">₹49K</h2>
        </div>

      </div>

      {/* Salary Table */}

      <div className="bg-[#111111] rounded-2xl border border-zinc-800 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">
            <tr>
              <th className="text-left px-6 py-4 text-gray-300">ID</th>
              <th className="text-left px-6 py-4 text-gray-300">Employee</th>
              <th className="text-left px-6 py-4 text-gray-300">Department</th>
              <th className="text-left px-6 py-4 text-gray-300">Basic</th>
              <th className="text-left px-6 py-4 text-gray-300">Allowance</th>
              <th className="text-left px-6 py-4 text-gray-300">Net Salary</th>
            </tr>
          </thead>

          <tbody>

            {salaryData.map((emp) => (

              <tr
                key={emp.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{emp.id}</td>
                <td className="px-6 py-4 text-white">{emp.name}</td>
                <td className="px-6 py-4 text-gray-300">{emp.department}</td>
                <td className="px-6 py-4 text-white">{emp.basic}</td>
                <td className="px-6 py-4 text-green-400">{emp.allowance}</td>
                <td className="px-6 py-4 text-yellow-400 font-semibold flex items-center gap-1">
                  <BadgeIndianRupee size={18} />
                  {emp.net.replace("₹", "")}
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}