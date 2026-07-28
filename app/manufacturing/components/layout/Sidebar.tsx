"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Coins,
  Users,
  Factory,
  Gem,
  ShieldCheck,
  PackageCheck,
  FileText,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/manufacturing",
    icon: LayoutDashboard,
  },
  {
    title: "Job Card",
    href: "/manufacturing/job-card",
    icon: ClipboardList,
  },
  {
    title: "Gold Issue",
    href: "/manufacturing/gold-issue",
    icon: Coins,
  },
  {
    title: "Worker Assignment",
    href: "/manufacturing/worker-assignment",
    icon: Users,
  },
  {
    title: "Production Tracking",
    href: "/manufacturing/production-tracking",
    icon: Factory,
  },
  {
    title: "Quality Check",
    href: "/manufacturing/quality-check",
    icon: ShieldCheck,
  },
  {
    title: "Diamond Setting",
    href: "/manufacturing/diamond-setting",
    icon: Gem,
  },
  {
    title: "Finished Goods",
    href: "/manufacturing/finished-goods",
    icon: PackageCheck,
  },
  {
    title: "Reports",
    href: "/manufacturing/manufacturing-reports",
    icon: FileText,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#0f0f10] border-r border-yellow-500/20 min-h-screen">
      <div className="p-6 border-b border-yellow-500/20">
        <h1 className="text-2xl font-bold text-yellow-400">
          Luxury ERP
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Manufacturing
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/manufacturing" &&
              pathname.startsWith(item.href));

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
              ${
                active
                  ? "bg-yellow-500 text-black font-semibold"
                  : "text-gray-300 hover:bg-zinc-800 hover:text-yellow-400"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}