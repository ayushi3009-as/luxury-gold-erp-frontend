import { Search, Download, Trash2, RotateCcw } from "lucide-react";

const deletedRecords = [
  {
    id: "DEL001",
    record: "Employee",
    name: "Rohit Sharma",
    deletedBy: "Admin",
    date: "29 Jul 2026 | 09:15 AM",
    status: "Recoverable",
  },
  {
    id: "DEL002",
    record: "Leave Request",
    name: "Priya Patel",
    deletedBy: "HR Manager",
    date: "29 Jul 2026 | 10:45 AM",
    status: "Recoverable",
  },
  {
    id: "DEL003",
    record: "Payroll",
    name: "EMP004",
    deletedBy: "Admin",
    date: "29 Jul 2026 | 11:20 AM",
    status: "Permanent",
  },
  {
    id: "DEL004",
    record: "Attendance",
    name: "Rahul Sharma",
    deletedBy: "HR Executive",
    date: "29 Jul 2026 | 01:05 PM",
    status: "Recoverable",
  },
];

export default function DeletedRecordsPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Deleted Records
          </h1>

          <p className="text-gray-400 mt-2">
            View and restore deleted ERP records.
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
          placeholder="Search Deleted Records..."
          className="w-full bg-[#111111] border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Total Deleted</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">84</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Recoverable</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">76</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Permanent</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">8</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Today's Deletes</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">12</h2>
        </div>

      </div>

      {/* Table */}

      <div className="bg-[#111111] border border-zinc-800 rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">
            <tr>
              <th className="px-6 py-4 text-left text-gray-300">ID</th>
              <th className="px-6 py-4 text-left text-gray-300">Record</th>
              <th className="px-6 py-4 text-left text-gray-300">Name</th>
              <th className="px-6 py-4 text-left text-gray-300">Deleted By</th>
              <th className="px-6 py-4 text-left text-gray-300">Deleted On</th>
              <th className="px-6 py-4 text-left text-gray-300">Status</th>
              <th className="px-6 py-4 text-left text-gray-300">Action</th>
            </tr>
          </thead>

          <tbody>

            {deletedRecords.map((item) => (

              <tr
                key={item.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{item.id}</td>

                <td className="px-6 py-4 flex items-center gap-2 text-white">
                  <Trash2 size={16} className="text-red-400" />
                  {item.record}
                </td>

                <td className="px-6 py-4 text-white">{item.name}</td>

                <td className="px-6 py-4 text-gray-300">
                  {item.deletedBy}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {item.date}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Recoverable"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-2 rounded-lg">
                    <RotateCcw size={16} />
                    Restore
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}