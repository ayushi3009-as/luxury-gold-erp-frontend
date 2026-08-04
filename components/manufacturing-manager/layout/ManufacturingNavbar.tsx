"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  ClipboardList,
  Factory,
  Users,
  ShieldCheck,
  Recycle,
  Package,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/manufacturing-manager",
    icon: LayoutDashboard,
  },
  {
    title: "Job Cards",
    href: "/manufacturing-manager/job-cards",
    icon: ClipboardList,
  },
  {
    title: "Production",
    href: "/manufacturing-manager/production",
    icon: Factory,
  },
  {
    title: "Workers",
    href: "/manufacturing-manager/workers",
    icon: Users,
  },
  {
    title: "Quality Check",
    href: "/manufacturing-manager/quality-check",
    icon: ShieldCheck,
  },
  {
    title: "Material",
    href: "/manufacturing-manager/material-consumption",
    icon: Package,
  },
];

export default function ManufacturingNavbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-20 z-40 border-b border-[#2A2A2A] bg-[#111111]">
      <div className="overflow-x-auto">
        <div className="flex min-w-max items-center gap-2 px-6 py-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-[#D4AF37] text-black shadow-lg"
                    : "text-gray-300 hover:bg-[#1A1A1A] hover:text-[#D4AF37]"
                }`}
              >
                <Icon size={18} />

                <span>{item.title}</span>

                {!active && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#D4AF37] transition-all duration-300 group-hover:w-4/5" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}