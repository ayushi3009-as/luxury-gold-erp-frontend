import {
  Users,
  TrendingUp,
  CalendarCheck,
  Award,
  Download,
} from "lucide-react";

export default function EmployeeAnalyticsPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Employee Analytics
          </h1>

          <p className="text-gray-400 mt-2">
            Analyze workforce performance and HR insights.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400">
          <Download size={18} />
          Export Report
        </button>

      </div>

      {/* Analytics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
          <Users className="text-yellow-400 mb-4" size={32} />
          <p className="text-gray-400">Total Employees</p>
          <h2 className="text-3xl font-bold text-white mt-2">120</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
          <CalendarCheck className="text-green-400 mb-4" size={32} />
          <p className="text-gray-400">Attendance Rate</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">96%</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
          <TrendingUp className="text-blue-400 mb-4" size={32} />
          <p className="text-gray-400">Productivity</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">92%</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
          <Award className="text-purple-400 mb-4" size={32} />
          <p className="text-gray-400">Top Performers</p>
          <h2 className="text-3xl font-bold text-purple-400 mt-2">18</h2>
        </div>

      </div>

      {/* Department Performance */}

      <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">

        <h2 className="text-2xl font-semibold text-white mb-6">
          Department Performance
        </h2>

        <table className="w-full">

          <thead className="border-b border-zinc-800">

            <tr>
              <th className="text-left py-3 text-gray-400">Department</th>
              <th className="text-left py-3 text-gray-400">Employees</th>
              <th className="text-left py-3 text-gray-400">Attendance</th>
              <th className="text-left py-3 text-gray-400">Performance</th>
            </tr>

          </thead>

          <tbody>

            {[
              {
                department: "HR",
                employees: 15,
                attendance: "98%",
                performance: "Excellent",
              },
              {
                department: "Finance",
                employees: 20,
                attendance: "95%",
                performance: "Very Good",
              },
              {
                department: "IT",
                employees: 45,
                attendance: "97%",
                performance: "Excellent",
              },
              {
                department: "Sales",
                employees: 40,
                attendance: "93%",
                performance: "Good",
              },
            ].map((dept) => (
              <tr
                key={dept.department}
                className="border-b border-zinc-800 hover:bg-zinc-900"
              >
                <td className="py-4 text-white">{dept.department}</td>
                <td className="py-4 text-gray-300">{dept.employees}</td>
                <td className="py-4 text-green-400">{dept.attendance}</td>
                <td className="py-4 text-yellow-400">{dept.performance}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Bottom Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Employees on Leave</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">5</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Average Experience</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">4.8 Years</h2>
        </div>

        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
          <p className="text-gray-400">Employee Satisfaction</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">94%</h2>
        </div>

      </div>

    </div>
  );
}