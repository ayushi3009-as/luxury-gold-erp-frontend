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

export default function ReportsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-4 w-full [&::-webkit-scrollbar]:hidden">
      <h2 className="text-2xl font-bold text-accent-gold mr-4">
        Reports
      </h2>
      
      {menuItems.map((item) => {
        const Icon = item.icon;

        const active = item.href === "/reports" 
          ? pathname === "/reports" 
          : pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition whitespace-nowrap ${
              active
                ? "bg-accent-gold text-black font-semibold"
                : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
            }`}
          >
            <Icon size={20} />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}