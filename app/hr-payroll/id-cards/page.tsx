import { Search, Download, IdCard, Printer } from "lucide-react";

const employees = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "HR",
    designation: "HR Manager",
    status: "Generated",
  },
  {
    id: "EMP002",
    name: "Priya Patel",
    department: "Finance",
    designation: "Accountant",
    status: "Generated",
  },
  {
    id: "EMP003",
    name: "Amit Verma",
    department: "IT",
    designation: "Software Engineer",
    status: "Pending",
  },
  {
    id: "EMP004",
    name: "Sneha Shah",
    department: "Sales",
    designation: "Sales Executive",
    status: "Generated",
  },
];

export default function IDCardsPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Employee ID Cards
          </h1>

          <p className="text-gray-400 mt-2">
            Generate and print employee ID cards.
          </p>
        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2 rounded-lg">
            <Download size={18} />
            Export
          </button>

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold">
            <Printer size={18} />
            Print All
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

      {/* Summary */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Total Employees</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">120</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Cards Generated</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">118</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Pending</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">2</h2>
        </div>

      </div>

      {/* Table */}

      <div className="bg-[#111111] rounded-2xl border border-zinc-800 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1b1b1b]">

            <tr>
              <th className="text-left px-6 py-4 text-gray-300">ID</th>
              <th className="text-left px-6 py-4 text-gray-300">Employee</th>
              <th className="text-left px-6 py-4 text-gray-300">Department</th>
              <th className="text-left px-6 py-4 text-gray-300">Designation</th>
              <th className="text-left px-6 py-4 text-gray-300">Status</th>
              <th className="text-left px-6 py-4 text-gray-300">Action</th>
            </tr>

          </thead>

          <tbody>

            {employees.map((emp) => (

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

                <td className="px-6 py-4 text-gray-300">
                  {emp.designation}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      emp.status === "Generated"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <button className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-lg hover:bg-yellow-400">
                    <IdCard size={16} />
                    Generate
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