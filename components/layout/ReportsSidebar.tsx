"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Wrench,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/reports",
    icon: LayoutDashboard,
  },
  {
    title: "Inventory Reports",
    href: "/reports/inventory",
    icon: Package,
  },
  {
    title: "Sales Reports",
    href: "/reports/sales",
    icon: ShoppingCart,
  },
  {
    title: "Customer Reports",
    href: "/reports/customers",
    icon: Users,
  },
  {
    title: "Repair Reports",
    href: "/reports/repair",
    icon: Wrench,
  },
];

export default function ReportsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-[#111111] border-r border-yellow-500/20 p-6">
      <h2 className="text-2xl font-bold text-yellow-500 mb-10">
        Reports
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-yellow-500 text-black font-semibold"
                  : "text-gray-300 hover:bg-[#1B1B1B] hover:text-yellow-500"
              }`}
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}