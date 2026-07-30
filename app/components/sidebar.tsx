"use client";

import {
  LayoutDashboard,
  Boxes,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Headphones,
  Gem,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Boxes,
    title: "Inventory",
    href: "/dashboard/inventory",
  },
  {
    icon: ShoppingCart,
    title: "Sales",
    href: "/dashboard/sales",
  },
  {
    icon: Users,
    title: "Customers",
    href: "/dashboard/customers",
  },
  {
    icon: BarChart3,
    title: "Reports",
    href: "/dashboard/reports",
  },
  {
    icon: Settings,
    title: "Settings",
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-background-secondary border-r border-[#2C2C2C] flex flex-col h-full text-text-primary shrink-0">
      <div className="px-8 py-7 border-b border-[#2C2C2C] flex items-center gap-3">
        <div className="p-2 bg-[#171717] border border-[#2C2C2C] rounded-xl text-[#D4AF37]">
          <Gem size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#D4AF37]">Luxray</h1>
          <p className="text-text-secondary text-xs mt-0.5">Jewellery ERP System</p>
        </div>
      </div>

      <div className="flex-1 mt-6 px-4 space-y-1 overflow-y-auto">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-5 py-3.5 font-medium transition ${
                isActive
                  ? "bg-[#D4AF37] text-black shadow-md shadow-amber-500/10 font-semibold"
                  : "text-text-secondary hover:text-text-primary hover:bg-[#1D1D1D]"
              }`}
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="m-5 rounded-2xl border border-[#2C2C2C] bg-[#171717] p-5">
        <div className="flex items-center gap-3 text-[#D4AF37]">
          <Headphones size={22} />
          <h3 className="font-semibold text-text-primary text-sm">Customer Support</h3>
        </div>
        <p className="text-text-secondary mt-2 text-xs font-mono">+91 98765 43210</p>
        <p className="text-text-secondary text-xs font-mono">support@luxray.com</p>
      </div>
    </aside>
  );
}