"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  Package,
  Tags,
  BadgeCheck,
  Layers,
  Gem,
  Image as ImageIcon,
  ScanBarcode,
  QrCode,
  IndianRupee,
  History,
  CircleDollarSign,
  MoreHorizontal,
  ChevronDown
} from "lucide-react";

const mainPages = [
  { name: "Products", href: "/products", icon: Package },
  { name: "Categories", href: "/products/categories", icon: Tags },
  { name: "Brands", href: "/products/brands", icon: BadgeCheck },
];

const morePages = [
  { name: "Collections", href: "/products/collections", icon: Layers },
  { name: "History", href: "/products/history", icon: History },
];

export default function ProductNav() {
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
    <nav className="relative z-[100] flex items-center justify-between border-b border-border-theme bg-background-secondary/80 backdrop-blur-xl px-6 py-4 w-full">
      <div className="flex items-center gap-6">
        <span className="text-sm font-bold tracking-widest uppercase text-accent-gold hidden md:block">
          Products
        </span>
        
        <div className="flex items-center gap-2">
          {mainPages.map((page) => {
            const Icon = page.icon;
            // Highlight main button if exact match or if inside its tree (excluding root /products for exact matches)
            const isActive = pathname === page.href;

            return (
              <Link
                key={page.href}
                href={page.href}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-accent-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "text-text-secondary hover:bg-text-primary/10 hover:text-text-primary"
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
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                morePages.some(p => pathname === p.href) 
                ? "bg-accent-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
                : "text-text-secondary hover:bg-text-primary/10 hover:text-text-primary"
              }`}
            >
              <MoreHorizontal size={16} />
              <span>More</span>
              <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 rounded-2xl border border-border-theme bg-background-secondary p-2 shadow-2xl z-50">
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
                            : "text-text-secondary hover:bg-text-primary/5 hover:text-text-primary"
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