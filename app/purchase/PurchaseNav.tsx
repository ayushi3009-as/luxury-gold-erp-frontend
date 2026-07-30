"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  FileBox,
  FileText,
  PackageCheck,
  Undo2,
  CreditCard,
  LineChart,
  FileSpreadsheet,
  MoreHorizontal,
  ChevronDown
} from "lucide-react";

const mainPages = [
  { name: "Dashboard", href: "/purchase", icon: LayoutDashboard },
  { name: "Purchase Order", href: "/purchase/purchase-order", icon: ShoppingCart },
  { name: "Purchase Entry", href: "/purchase/purchase-entry", icon: FileBox },
  { name: "Purchase Invoice", href: "/purchase/purchase-invoice", icon: FileText },
];

const morePages = [
  { name: "Goods Receipt", href: "/purchase/goods-receipt", icon: PackageCheck },
  { name: "Purchase Return", href: "/purchase/purchase-return", icon: Undo2 },
  { name: "Supplier Payment", href: "/purchase/supplier-payment", icon: CreditCard },
  { name: "Analytics", href: "/purchase/purchase-analytics", icon: LineChart },
  { name: "Reports", href: "/purchase/purchase-reports", icon: FileSpreadsheet },
];

export default function PurchaseNav() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative z-[100] flex items-center justify-between border-b border-white/5 bg-[#111111]/80 backdrop-blur-xl px-6 py-4 w-full">
      <div className="flex items-center gap-6">
        <span className="text-sm font-bold tracking-widest uppercase text-accent-gold hidden md:block">
          Purchase Modules
        </span>
        
        <div className="flex items-center gap-2">
          {mainPages.map((page) => {
            const Icon = page.icon;
            const isActive = pathname === page.href || (page.href !== "/purchase" && pathname.startsWith(page.href));

            return (
              <Link
                key={page.href}
                href={page.href}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-accent-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "text-text-secondary hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={16} />
                <span>{page.name}</span>
              </Link>
            );
          })}

          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-white/10 hover:text-white transition-all"
            >
              <MoreHorizontal size={16} />
              <span>More</span>
              <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#1a1a1a] p-2 shadow-2xl z-50">
                <div className="grid grid-cols-1 gap-1">
                  {morePages.map((page) => {
                    const Icon = page.icon;
                    const isActive = pathname === page.href;
                    return (
                      <Link
                        key={page.href}
                        href={page.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all ${
                          isActive
                            ? "bg-accent-gold/20 text-accent-gold font-semibold"
                            : "text-text-secondary hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <Icon size={16} />
                        <span>{page.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
