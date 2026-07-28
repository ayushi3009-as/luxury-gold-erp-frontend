"use client";

import Link from "next/link";
import { Bell, AlertTriangle, Package, Clock3, CheckSquare, Settings } from "lucide-react";

const menuItems = [
  {
    name: "Alerts",
    icon: AlertTriangle,
    href: "/notifications/alerts",
  },
  {
    name: "Low Stock",
    icon: Package,
    href: "/notifications/low-stock",
  },
  {
    name: "Reminders",
    icon: Clock3,
    href: "/notifications/reminders",
  },
  {
    name: "Task Center",
    icon: CheckSquare,
    href: "/notifications/task-center",
  },
  {
    name: "System Notifications",
    icon: Settings,
    href: "/notifications/system-notifications",
  },
];

export default function NotificationsSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-[#272419] bg-[#0c0e0d] text-white">

      {/* LOGO */}
      <div className="flex h-[92px] items-center gap-3 border-b border-[#272419] px-5">

        <div className="text-4xl text-[#e4b52d]">
          ◇
        </div>

        <div>
          <h1 className="text-lg font-bold text-[#e4b52d]">
            Luxury Gold
          </h1>

          <p className="text-[10px] text-gray-400">
            Jewellery ERP System
          </p>
        </div>

      </div>

      {/* MODULE TITLE */}
      <div className="border-b border-[#272419] px-5 py-5">

        <div className="flex items-center gap-2">

          <Bell
            size={16}
            className="text-[#e4b52d]"
          />

          <p className="text-xs font-bold uppercase tracking-wider text-[#e4b52d]">
            Notifications
          </p>

        </div>

      </div>

      {/* MENU */}
      <nav className="space-y-2 p-4">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-[#211c0d] hover:text-[#e4b52d]"
            >

              <div className="flex items-center gap-3">

                <Icon
                  size={18}
                  className="text-gray-400 transition group-hover:text-[#e4b52d]"
                />

                <span>
                  {item.name}
                </span>

              </div>

              <span className="text-[#e4b52d]">
                ›
              </span>

            </Link>
          );

        })}

      </nav>

    </aside>
  );
}