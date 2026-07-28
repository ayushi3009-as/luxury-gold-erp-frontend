import { Search, Download, Activity } from "lucide-react";

const activityLogs = [
  {
    id: "ACT001",
    user: "Admin",
    action: "Added Employee",
    module: "Employee",
    time: "29 Jul 2026 | 09:20 AM",
    status: "Success",
  },
  {
    id: "ACT002",
    user: "Rahul Sharma",
    action: "Updated Attendance",
    module: "Attendance",
    time: "29 Jul 2026 | 10:05 AM",
    status: "Success",
  },
  {
    id: "ACT003",
    user: "Priya Patel",
    action: "Generated Payroll",
    module: "Payroll",
    time: "29 Jul 2026 | 11:15 AM",
    status: "Success",
  },
  {
    id: "ACT004",
    user: "Amit Verma",
    action: "Deleted Leave Record",
    module: "Leave",
    time: "29 Jul 2026 | 12:30 PM",
    status: "Failed",
  },
];

export default function ActivityLogsPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Activity Logs
          </h1>

          <p className="text-gray-400 mt-2">
            Monitor all user activities across the ERP system.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold">
          <Download size={18} />
          Export
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
          placeholder="Search Activity..."
          className="w-full bg-[#111111] border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Today's Activities</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">1,245</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Successful</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">1,220</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Failed</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">25</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Active Modules</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">8</h2>
        </div>

      </div>

      {/* Activity Table */}

      <div className="bg-[#111111] border border-zinc-800 rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">
            <tr>
              <th className="px-6 py-4 text-left text-gray-300">Log ID</th>
              <th className="px-6 py-4 text-left text-gray-300">User</th>
              <th className="px-6 py-4 text-left text-gray-300">Action</th>
              <th className="px-6 py-4 text-left text-gray-300">Module</th>
              <th className="px-6 py-4 text-left text-gray-300">Time</th>
              <th className="px-6 py-4 text-left text-gray-300">Status</th>
            </tr>
          </thead>

          <tbody>

            {activityLogs.map((log) => (

              <tr
                key={log.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{log.id}</td>

                <td className="px-6 py-4 text-white">{log.user}</td>

                <td className="px-6 py-4 flex items-center gap-2 text-white">
                  <Activity size={16} className="text-yellow-400" />
                  {log.action}
                </td>

                <td className="px-6 py-4 text-gray-300">{log.module}</td>

                <td className="px-6 py-4 text-gray-300">{log.time}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      log.status === "Success"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {log.status}
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