"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Gem,
  LayoutDashboard,
  PlusCircle,
  ClipboardList,
  Users,
  Activity,
  Truck,
  Receipt,
  BarChart3,
  Bell,
} from "lucide-react";

export default function RepairSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Repair Dashboard",
      href: "/repair",
      icon: LayoutDashboard,
    },
    {
      title: "Repair Entry",
      href: "/repair/add",
      icon: PlusCircle,
    },
    {
      title: "Repair Tracking",
      href: "/repair/tracking",
      icon: ClipboardList,
    },
    {
      title: "Worker Assignment",
      href: "/repair/worker-assignment",
      icon: Users,
    },
    {
      title: "Repair Status",
      href: "/repair/status",
      icon: Activity,
    },
    {
      title: "Delivery",
      href: "/repair/delivery",
      icon: Truck,
    },
    {
      title: "Repair Invoice",
      href: "/repair/invoice",
      icon: Receipt,
    },
    {
      title: "Repair Reports",
      href: "/repair/reports",
      icon: BarChart3,
    },
    {
      title: "Customer Notifications",
      href: "/repair/notifications",
      icon: Bell,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-[#111111] border-r border-yellow-500/20 flex flex-col">

      {/* Logo */}

      <div className="h-28 border-b border-yellow-500/20 flex items-center justify-center">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">

            <Gem className="w-8 h-8 text-yellow-500" />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-yellow-500">
              Luxury Gold ERP
            </h1>

            <p className="text-sm text-gray-400">
              Jewellery Management
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 p-5 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            item.href === "/repair"
              ? pathname === "/repair"
              : pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                active
                  ? "bg-yellow-500 text-black font-semibold shadow-lg"
                  : "text-gray-300 hover:bg-[#1B1B1B] hover:text-yellow-500"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>

            </Link>
          );
        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-yellow-500/20 p-5">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white font-bold">
            N
          </div>

          <div>

            <p className="text-white font-medium">
              Admin
            </p>

            <p className="text-xs text-gray-400">
              Luxury Gold ERP
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}