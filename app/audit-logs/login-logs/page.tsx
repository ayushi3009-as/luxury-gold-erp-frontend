import { Search, Download } from "lucide-react";

const loginLogs = [
  {
    id: "LOG001",
    user: "Admin",
    role: "HR Manager",
    login: "29 Jul 2026 | 09:10 AM",
    ip: "192.168.1.101",
    status: "Success",
  },
  {
    id: "LOG002",
    user: "Rahul Sharma",
    role: "Employee",
    login: "29 Jul 2026 | 09:25 AM",
    ip: "192.168.1.120",
    status: "Success",
  },
  {
    id: "LOG003",
    user: "Priya Patel",
    role: "Accountant",
    login: "29 Jul 2026 | 10:02 AM",
    ip: "192.168.1.135",
    status: "Failed",
  },
  {
    id: "LOG004",
    user: "Amit Verma",
    role: "Employee",
    login: "29 Jul 2026 | 10:15 AM",
    ip: "192.168.1.150",
    status: "Success",
  },
];

export default function LoginLogsPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Login Logs
          </h1>

          <p className="text-gray-400 mt-2">
            View all employee login activities.
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
          placeholder="Search User..."
          className="w-full bg-[#111111] border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Today's Logins</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">248</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Successful</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">240</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Failed</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">8</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Active Users</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">112</h2>
        </div>

      </div>

      {/* Login Logs Table */}

      <div className="bg-[#111111] border border-zinc-800 rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">

            <tr>
              <th className="px-6 py-4 text-left text-gray-300">Log ID</th>
              <th className="px-6 py-4 text-left text-gray-300">User</th>
              <th className="px-6 py-4 text-left text-gray-300">Role</th>
              <th className="px-6 py-4 text-left text-gray-300">Login Time</th>
              <th className="px-6 py-4 text-left text-gray-300">IP Address</th>
              <th className="px-6 py-4 text-left text-gray-300">Status</th>
            </tr>

          </thead>

          <tbody>

            {loginLogs.map((log) => (

              <tr
                key={log.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{log.id}</td>

                <td className="px-6 py-4 text-white">{log.user}</td>

                <td className="px-6 py-4 text-gray-300">{log.role}</td>

                <td className="px-6 py-4 text-gray-300">{log.login}</td>

                <td className="px-6 py-4 text-gray-300">{log.ip}</td>

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