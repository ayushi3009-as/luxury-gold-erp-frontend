import { Search, Download, ShieldAlert } from "lucide-react";

const securityLogs = [
  {
    id: "SEC001",
    event: "Invalid Login Attempt",
    user: "Unknown User",
    ip: "192.168.1.205",
    time: "29 Jul 2026 | 09:15 AM",
    severity: "High",
  },
  {
    id: "SEC002",
    event: "Password Changed",
    user: "Rahul Sharma",
    ip: "192.168.1.110",
    time: "29 Jul 2026 | 10:20 AM",
    severity: "Medium",
  },
  {
    id: "SEC003",
    event: "Admin Login",
    user: "Admin",
    ip: "192.168.1.101",
    time: "29 Jul 2026 | 11:40 AM",
    severity: "Low",
  },
  {
    id: "SEC004",
    event: "Multiple Failed Logins",
    user: "Priya Patel",
    ip: "192.168.1.120",
    time: "29 Jul 2026 | 12:05 PM",
    severity: "High",
  },
];

export default function SecurityLogsPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Security Logs
          </h1>

          <p className="text-gray-400 mt-2">
            Monitor security events and suspicious activities.
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
          placeholder="Search Security Log..."
          className="w-full bg-[#111111] border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Total Events</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">
            432
          </h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">High Risk</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">
            18
          </h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Medium Risk</p>
          <h2 className="text-3xl font-bold text-orange-400 mt-2">
            65
          </h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Low Risk</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            349
          </h2>
        </div>

      </div>

      {/* Security Logs Table */}

      <div className="bg-[#111111] border border-zinc-800 rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">

            <tr>
              <th className="px-6 py-4 text-left text-gray-300">Log ID</th>
              <th className="px-6 py-4 text-left text-gray-300">Event</th>
              <th className="px-6 py-4 text-left text-gray-300">User</th>
              <th className="px-6 py-4 text-left text-gray-300">IP Address</th>
              <th className="px-6 py-4 text-left text-gray-300">Time</th>
              <th className="px-6 py-4 text-left text-gray-300">Severity</th>
            </tr>

          </thead>

          <tbody>

            {securityLogs.map((log) => (

              <tr
                key={log.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{log.id}</td>

                <td className="px-6 py-4 flex items-center gap-2 text-white">
                  <ShieldAlert size={16} className="text-yellow-400" />
                  {log.event}
                </td>

                <td className="px-6 py-4 text-white">{log.user}</td>

                <td className="px-6 py-4 text-gray-300">{log.ip}</td>

                <td className="px-6 py-4 text-gray-300">{log.time}</td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      log.severity === "High"
                        ? "bg-red-500/20 text-red-400"
                        : log.severity === "Medium"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {log.severity}
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