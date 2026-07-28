import { Search, Plus, Download } from "lucide-react";

const leaveRequests = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    type: "Casual Leave",
    from: "10 Jul 2026",
    to: "12 Jul 2026",
    status: "Approved",
  },
  {
    id: "EMP002",
    name: "Priya Patel",
    type: "Sick Leave",
    from: "15 Jul 2026",
    to: "16 Jul 2026",
    status: "Pending",
  },
  {
    id: "EMP003",
    name: "Amit Verma",
    type: "Annual Leave",
    from: "20 Jul 2026",
    to: "25 Jul 2026",
    status: "Rejected",
  },
  {
    id: "EMP004",
    name: "Sneha Shah",
    type: "Casual Leave",
    from: "28 Jul 2026",
    to: "29 Jul 2026",
    status: "Approved",
  },
];

export default function LeavePage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Leave Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage employee leave requests efficiently.
          </p>
        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-white">
            <Download size={18} />
            Export
          </button>

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold">
            <Plus size={18} />
            Apply Leave
          </button>

        </div>

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Approved</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">18</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Pending</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">7</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Rejected</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">3</h2>
        </div>

      </div>

      {/* Leave Table */}

      <div className="bg-[#111111] rounded-2xl border border-zinc-800 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">

            <tr>
              <th className="text-left px-6 py-4 text-gray-300">ID</th>
              <th className="text-left px-6 py-4 text-gray-300">Employee</th>
              <th className="text-left px-6 py-4 text-gray-300">Leave Type</th>
              <th className="text-left px-6 py-4 text-gray-300">From</th>
              <th className="text-left px-6 py-4 text-gray-300">To</th>
              <th className="text-left px-6 py-4 text-gray-300">Status</th>
            </tr>

          </thead>

          <tbody>

            {leaveRequests.map((leave) => (

              <tr
                key={leave.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{leave.id}</td>

                <td className="px-6 py-4 text-white">
                  {leave.name}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {leave.type}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {leave.from}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {leave.to}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      leave.status === "Approved"
                        ? "bg-green-500/20 text-green-400"
                        : leave.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {leave.status}
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