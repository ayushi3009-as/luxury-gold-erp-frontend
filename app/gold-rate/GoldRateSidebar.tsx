"use client";

import {
  CircleDollarSign,
  Coins,
  Gem,
  History,
  RefreshCw,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    name: "Live Gold Rate",
    icon: CircleDollarSign,
    href: "/gold-rate",
  },
  {
    name: "Silver Rate",
    icon: Coins,
    href: "/gold-rate/silver-rate",
  },
  {
    name: "Platinum Rate",
    icon: Gem,
    href: "/gold-rate/platinum-rate",
  },
  {
    name: "Gold Rate History",
    icon: History,
    href: "/gold-rate/gold-rate-history",
  },
  {
    name: "Auto Update",
    icon: RefreshCw,
    href: "/gold-rate/auto-update",
  },
  {
    name: "Rate Comparison",
    icon: BarChart3,
    href: "/gold-rate/rate-comparison",
  },
];

export default function GoldRateSidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-[#2b2617] bg-[#0c0e0d] lg:block">

      {/* Logo */}
      <div className="flex h-[92px] items-center gap-3 border-b border-[#272419] px-5">
        <div className="text-4xl text-[#e4b52d]">
          ◇
        </div>

        <div>
          <h1 className="text-lg font-bold text-[#f0c43c]">
            Luxury Gold
          </h1>

          <p className="text-[10px] text-gray-400">
            Jewellery ERP System
          </p>
        </div>
      </div>

      {/* Module Title */}
      <div className="px-5 pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#e4b52d]">
          Gold Rate Management
        </p>
      </div>

      {/* Menu */}
      <nav className="mt-4 space-y-1 px-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.href}
              className={`group flex items-center justify-between rounded-lg px-3 py-3 text-sm transition ${
                index === 0
                  ? "border border-[#8e6b1c] bg-[#2a2413] text-[#f0c43c]"
                  : "text-gray-300 hover:bg-[#1c1a12] hover:text-[#f0c43c]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span>{item.name}</span>
              </div>

              <ChevronRight
                size={15}
                className="text-[#d1a82e]"
              />
            </a>
          );
        })}
      </nav>

      {/* Current Branch */}
      <div className="absolute bottom-5 left-3 right-3 rounded-lg border border-[#40351b] bg-[#15150f] p-3">
        <p className="text-[10px] text-gray-500">
          CURRENT BRANCH
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-[#e8bd3b]">
            Surat Branch
          </span>

          <ChevronRight size={15} />
        </div>
      </div>

    </aside>
  );
}