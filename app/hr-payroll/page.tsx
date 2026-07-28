import Link from "next/link";
import {
  Users,
  CalendarCheck,
  Wallet,
  Award,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    title: "Employee",
    desc: "Manage Employees",
    href: "/hr-payroll/employee",
    icon: Users,
  },
  {
    title: "Attendance",
    desc: "Daily Attendance",
    href: "/hr-payroll/attendance",
    icon: CalendarCheck,
  },
  {
    title: "Payroll",
    desc: "Employee Payroll",
    href: "/hr-payroll/payroll",
    icon: Wallet,
  },
  {
    title: "Performance",
    desc: "Employee Performance",
    href: "/hr-payroll/performance",
    icon: Award,
  },
];

export default function HRDashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-white">
          HR & Payroll Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Manage Employees, Attendance, Payroll & HR Activities
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
          <h3 className="text-gray-400">Employees</h3>
          <h1 className="text-3xl font-bold text-white mt-3">120</h1>
        </div>

        <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
          <h3 className="text-gray-400">Present Today</h3>
          <h1 className="text-3xl font-bold text-green-500 mt-3">110</h1>
        </div>

        <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
          <h3 className="text-gray-400">On Leave</h3>
          <h1 className="text-3xl font-bold text-red-500 mt-3">5</h1>
        </div>

        <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
          <h3 className="text-gray-400">Payroll</h3>
          <h1 className="text-3xl font-bold text-yellow-500 mt-3">$12,500</h1>
        </div>

      </div>

      {/* Modules */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {modules.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={item.href}
              className="bg-[#111111] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500 transition"
            >

              <div className="flex justify-between">

                <div>

                  <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <Icon size={28} className="text-yellow-500"/>
                  </div>

                  <h2 className="text-xl font-semibold text-white mt-5">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    {item.desc}
                  </p>

                </div>

                <ArrowRight className="text-yellow-500"/>

              </div>

            </Link>

          );

        })}

      </div>

    </div>
  );
}