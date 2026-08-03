"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  PackagePlus,
  PackageMinus,
  ArrowLeftRight,
  ClipboardCheck,
  Radio,
  ScanLine,
  Warehouse,
  Scale,
  Gem,
  Diamond,
  AlertTriangle,
  Trash2,
  Settings,
  History,
  MoreHorizontal,
  ChevronDown
} from "lucide-react";

const mainPages = [
  { name: "Dashboard", href: "/inventory", icon: LayoutDashboard },
  { name: "Stock Entry", href: "/inventory/stock-entry", icon: PackagePlus },
  { name: "Stock Out", href: "/inventory/stock-out", icon: PackageMinus },
  { name: "Transfer", href: "/inventory/stock-transfer", icon: ArrowLeftRight },
];


export default function InventoryNav() {
  const pathname = usePathname();

  return (
    <nav className="relative z-[100] flex items-center justify-between border-b border-border-theme bg-background-primary/80 backdrop-blur-xl px-8 py-5 w-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex w-full items-center justify-between md:justify-start md:gap-12">
        <div className="hidden md:flex flex-col">
          <span className="text-xs font-bold tracking-[0.2em] text-accent-gold uppercase">
            Inventory
          </span>
          <span className="text-[10px] text-text-secondary uppercase tracking-widest mt-0.5">Management</span>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {mainPages.map((page) => {
            const Icon = page.icon;
            const isActive = pathname === page.href || (page.href !== "/inventory" && pathname.startsWith(page.href));

            return (
              <Link
                key={page.href}
                href={page.href}
                className={`flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-accent-gold"
                    : "text-text-secondary hover:text-accent-gold"
                }`}
              >
                <Icon size={18} className={isActive ? "text-accent-gold" : ""} />
                <span>{page.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}