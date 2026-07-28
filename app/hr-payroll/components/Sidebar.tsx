"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CalendarDays,
  Wallet,
  BadgeIndianRupee,
  Award,
  Gift,
  IdCard,
  BarChart3,
  FileText,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/hr-payroll", icon: LayoutDashboard },
  { name: "Employee", href: "/hr-payroll/employee", icon: Users },
  { name: "Attendance", href: "/hr-payroll/attendance", icon: CalendarCheck },
  { name: "Leave", href: "/hr-payroll/leave", icon: CalendarDays },
  { name: "Payroll", href: "/hr-payroll/payroll", icon: Wallet },
  { name: "Salary", href: "/hr-payroll/salary", icon: BadgeIndianRupee },
  { name: "Performance", href: "/hr-payroll/performance", icon: Award },
  { name: "Incentives", href: "/hr-payroll/incentives", icon: Gift },
  { name: "ID Cards", href: "/hr-payroll/id-cards", icon: IdCard },
  { name: "Analytics", href: "/hr-payroll/analytics", icon: BarChart3 },
  { name: "Reports", href: "/hr-payroll/reports", icon: FileText },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-black border-r border-yellow-500/20 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-yellow-400 mb-8">
        HR & Payroll
      </h1>

      <div className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg transition ${
                pathname === item.href
                  ? "bg-yellow-500 text-black"
                  : "text-gray-300 hover:bg-zinc-900 hover:text-yellow-400"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}