import { Search, Download, CalendarCheck } from "lucide-react";

const attendance = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "HR",
    status: "Present",
    checkIn: "09:05 AM",
  },
  {
    id: "EMP002",
    name: "Priya Patel",
    department: "Finance",
    status: "Present",
    checkIn: "09:12 AM",
  },
  {
    id: "EMP003",
    name: "Amit Verma",
    department: "IT",
    status: "Absent",
    checkIn: "--",
  },
  {
    id: "EMP004",
    name: "Sneha Shah",
    department: "Sales",
    status: "Late",
    checkIn: "10:08 AM",
  },
];

export default function AttendancePage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Attendance Management
          </h1>

          <p className="text-gray-400 mt-2">
            Monitor daily employee attendance records.
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
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />

        <input
          type="text"
          placeholder="Search Employee..."
          className="w-full bg-[#111111] border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white outline-none focus:border-yellow-500"
        />

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#111111] rounded-xl border border-zinc-800 p-6">
          <p className="text-gray-400">Present</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">110</h2>
        </div>

        <div className="bg-[#111111] rounded-xl border border-zinc-800 p-6">
          <p className="text-gray-400">Absent</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">8</h2>
        </div>

        <div className="bg-[#111111] rounded-xl border border-zinc-800 p-6">
          <p className="text-gray-400">Late</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">7</h2>
        </div>

      </div>

      {/* Attendance Table */}

      <div className="bg-[#111111] rounded-2xl border border-zinc-800 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">

            <tr>
              <th className="text-left px-6 py-4 text-gray-300">ID</th>
              <th className="text-left px-6 py-4 text-gray-300">Employee</th>
              <th className="text-left px-6 py-4 text-gray-300">Department</th>
              <th className="text-left px-6 py-4 text-gray-300">Status</th>
              <th className="text-left px-6 py-4 text-gray-300">Check In</th>
            </tr>

          </thead>

          <tbody>

            {attendance.map((emp) => (

              <tr
                key={emp.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{emp.id}</td>

                <td className="px-6 py-4 text-white">
                  {emp.name}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {emp.department}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      emp.status === "Present"
                        ? "bg-green-500/20 text-green-400"
                        : emp.status === "Late"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {emp.status}
                  </span>

                </td>

                <td className="px-6 py-4 text-gray-300">
                  {emp.checkIn}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}