import { Search, Download, Database, HardDrive } from "lucide-react";

const backupLogs = [
  {
    id: "BKP001",
    backup: "Daily Database Backup",
    type: "Automatic",
    size: "2.4 GB",
    date: "29 Jul 2026 | 01:00 AM",
    status: "Completed",
  },
  {
    id: "BKP002",
    backup: "Weekly Full Backup",
    type: "Manual",
    size: "12.8 GB",
    date: "28 Jul 2026 | 11:30 PM",
    status: "Completed",
  },
  {
    id: "BKP003",
    backup: "Employee Records",
    type: "Automatic",
    size: "850 MB",
    date: "27 Jul 2026 | 01:00 AM",
    status: "Completed",
  },
  {
    id: "BKP004",
    backup: "Payroll Backup",
    type: "Manual",
    size: "1.2 GB",
    date: "26 Jul 2026 | 10:45 PM",
    status: "Failed",
  },
];

export default function BackupLogsPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Backup Logs
          </h1>

          <p className="text-gray-400 mt-2">
            Monitor database backup history and storage status.
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
          placeholder="Search Backup..."
          className="w-full bg-[#111111] border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Total Backups</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">156</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Completed</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">151</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Failed</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">5</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Storage Used</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">128 GB</h2>
        </div>

      </div>

      {/* Backup Logs Table */}

      <div className="bg-[#111111] border border-zinc-800 rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">

            <tr>
              <th className="px-6 py-4 text-left text-gray-300">Backup ID</th>
              <th className="px-6 py-4 text-left text-gray-300">Backup Name</th>
              <th className="px-6 py-4 text-left text-gray-300">Type</th>
              <th className="px-6 py-4 text-left text-gray-300">Size</th>
              <th className="px-6 py-4 text-left text-gray-300">Backup Date</th>
              <th className="px-6 py-4 text-left text-gray-300">Status</th>
            </tr>

          </thead>

          <tbody>

            {backupLogs.map((item) => (

              <tr
                key={item.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">
                  {item.id}
                </td>

                <td className="px-6 py-4 flex items-center gap-2 text-white">
                  <Database size={16} className="text-yellow-400" />
                  {item.backup}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {item.type}
                </td>

                <td className="px-6 py-4 flex items-center gap-2 text-blue-400">
                  <HardDrive size={16} />
                  {item.size}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {item.date}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {item.status}
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