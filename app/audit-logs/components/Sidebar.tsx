"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LogIn,
  Activity,
  Shield,
  Trash2,
  Database,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/audit-logs",
    icon: LayoutDashboard,
  },
  {
    name: "Login Logs",
    href: "/audit-logs/login-logs",
    icon: LogIn,
  },
  {
    name: "Activity Logs",
    href: "/audit-logs/activity-logs",
    icon: Activity,
  },
  {
    name: "Security Logs",
    href: "/audit-logs/security-logs",
    icon: Shield,
  },
  {
    name: "Deleted Records",
    href: "/audit-logs/deleted-records",
    icon: Trash2,
  },
  {
    name: "Backup Logs",
    href: "/audit-logs/backup-logs",
    icon: Database,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-[#111111] border-r border-zinc-800">

      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-yellow-500">
          Audit Logs
        </h1>
      </div>


      {/* Menu */}
      <nav className="p-5 space-y-3">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 
                px-4 py-3 
                rounded-xl 
                transition-all duration-300
                ${
                  pathname === item.href
                    ? "bg-yellow-500 text-black font-semibold"
                    : "text-gray-300 hover:bg-zinc-800 hover:text-yellow-400"
                }
              `}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}