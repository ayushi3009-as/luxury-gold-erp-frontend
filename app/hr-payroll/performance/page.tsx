import { Search, Download, TrendingUp } from "lucide-react";

const performanceData = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "HR",
    rating: "4.9",
    performance: "Excellent",
  },
  {
    id: "EMP002",
    name: "Priya Patel",
    department: "Finance",
    rating: "4.5",
    performance: "Very Good",
  },
  {
    id: "EMP003",
    name: "Amit Verma",
    department: "IT",
    rating: "3.8",
    performance: "Good",
  },
  {
    id: "EMP004",
    name: "Sneha Shah",
    department: "Sales",
    rating: "2.9",
    performance: "Needs Improvement",
  },
];

export default function PerformancePage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Performance Management
          </h1>

          <p className="text-gray-400 mt-2">
            Monitor employee performance and productivity.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold">
          <Download size={18} />
          Export Report
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
          <p className="text-gray-400">Excellent</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">35</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Very Good</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">52</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Good</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">24</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Needs Improvement</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">9</h2>
        </div>

      </div>

      {/* Performance Table */}

      <div className="bg-[#111111] rounded-2xl border border-zinc-800 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">
            <tr>
              <th className="text-left px-6 py-4 text-gray-300">ID</th>
              <th className="text-left px-6 py-4 text-gray-300">Employee</th>
              <th className="text-left px-6 py-4 text-gray-300">Department</th>
              <th className="text-left px-6 py-4 text-gray-300">Rating</th>
              <th className="text-left px-6 py-4 text-gray-300">Performance</th>
            </tr>
          </thead>

          <tbody>

            {performanceData.map((emp) => (

              <tr
                key={emp.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{emp.id}</td>

                <td className="px-6 py-4 text-white">{emp.name}</td>

                <td className="px-6 py-4 text-gray-300">
                  {emp.department}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                    <TrendingUp size={18} />
                    {emp.rating}
                  </div>
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      emp.performance === "Excellent"
                        ? "bg-green-500/20 text-green-400"
                        : emp.performance === "Very Good"
                        ? "bg-blue-500/20 text-blue-400"
                        : emp.performance === "Good"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {emp.performance}
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