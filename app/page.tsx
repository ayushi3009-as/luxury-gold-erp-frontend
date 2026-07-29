import {
  Users,
  CalendarCheck,
  Wallet,
  FileText,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome to Luxray HR & Payroll
        </h1>
        <p className="text-gray-400 mt-2">
          Manage employees, attendance, payroll and reports easily.
        </p>
      </div>


      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-[#151515] border border-[#2b2b2b] rounded-xl p-6">
          <Users className="text-[#d4af37] mb-4" size={32} />

          <h2 className="text-gray-400">
            Total Employees
          </h2>

          <p className="text-3xl font-bold text-white mt-2">
            250
          </p>
        </div>


        <div className="bg-[#151515] border border-[#2b2b2b] rounded-xl p-6">
          <CalendarCheck className="text-[#d4af37] mb-4" size={32} />

          <h2 className="text-gray-400">
            Attendance
          </h2>

          <p className="text-3xl font-bold text-white mt-2">
            95%
          </p>
        </div>


        <div className="bg-[#151515] border border-[#2b2b2b] rounded-xl p-6">
          <Wallet className="text-[#d4af37] mb-4" size={32} />

          <h2 className="text-gray-400">
            Monthly Payroll
          </h2>

          <p className="text-3xl font-bold text-white mt-2">
            ₹8.5L
          </p>
        </div>


        <div className="bg-[#151515] border border-[#2b2b2b] rounded-xl p-6">
          <FileText className="text-[#d4af37] mb-4" size={32} />

          <h2 className="text-gray-400">
            Reports
          </h2>

          <p className="text-3xl font-bold text-white mt-2">
            45
          </p>
        </div>

      </div>


      {/* Recent Activity */}
      <div className="bg-[#151515] border border-[#2b2b2b] rounded-xl p-6">

        <div className="flex items-center gap-3 mb-5">
          <TrendingUp className="text-[#d4af37]" />

          <h2 className="text-xl font-semibold text-white">
            Recent Activity
          </h2>
        </div>


        <div className="space-y-4 text-gray-300">

          <p>
            ✅ New employee added to HR system
          </p>

          <p>
            ✅ Payroll processed successfully
          </p>

          <p>
            ✅ Attendance report generated
          </p>

        </div>

      </div>

    </div>
  );
}