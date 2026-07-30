"use client";

import Link from "next/link";


import { usePathname } from "next/navigation";
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

export default function GoldRateNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">

    

      

      {/* Menu */}
      
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name} href={item.href}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) ? "border border-border-theme bg-background-tertiary text-accent-gold"
                  : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span>{item.name}</span>
              </div>

              
            </Link>
          );
        })}
      

    
  
    </nav>
  );
}