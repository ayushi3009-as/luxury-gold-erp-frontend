import { Search, Plus, Download } from "lucide-react";

const employees = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "HR",
    designation: "HR Manager",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Priya Patel",
    department: "Finance",
    designation: "Accountant",
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Amit Verma",
    department: "IT",
    designation: "Software Engineer",
    status: "On Leave",
  },
  {
    id: "EMP004",
    name: "Sneha Shah",
    department: "Sales",
    designation: "Sales Executive",
    status: "Active",
  },
];

export default function EmployeePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Employee Management
          </h1>
          <p className="text-gray-400 mt-2">
            Manage all employees from one place.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-white hover:bg-zinc-700">
            <Download size={18} />
            Export
          </button>

          <button className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400">
            <Plus size={18} />
            Add Employee
          </button>
        </div>
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

      {/* Table */}
      <div className="bg-[#111111] rounded-2xl border border-zinc-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1b1b1b]">
            <tr>
              <th className="text-left px-6 py-4 text-gray-300">Employee ID</th>
              <th className="text-left px-6 py-4 text-gray-300">Name</th>
              <th className="text-left px-6 py-4 text-gray-300">Department</th>
              <th className="text-left px-6 py-4 text-gray-300">Designation</th>
              <th className="text-left px-6 py-4 text-gray-300">Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="px-6 py-4 text-white">{emp.id}</td>
                <td className="px-6 py-4 text-white">{emp.name}</td>
                <td className="px-6 py-4 text-gray-300">{emp.department}</td>
                <td className="px-6 py-4 text-gray-300">{emp.designation}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      emp.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {emp.status}
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