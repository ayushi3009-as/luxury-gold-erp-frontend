"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Brain,
  TrendingUp,
  ChartNoAxesCombined,
  Users,
  Package,
  Building2,
  Gauge,
  ChevronDown,
} from "lucide-react";

const analyticsPages = [
  {
    name: "Business Analytics",
    href: "/analytics/business-analytics",
    icon: BarChart3,
  },
  {
    name: "Revenue Trends",
    href: "/analytics/revenue-trends",
    icon: TrendingUp,
  },
  {
    name: "Sales Forecast",
    href: "/analytics/sales-forecast",
    icon: ChartNoAxesCombined,
  },
  {
    name: "AI Insights",
    href: "/analytics/ai-insights",
    icon: Brain,
  },
  {
    name: "Customer Analytics",
    href: "/analytics/customer-analytics",
    icon: Users,
  },
  {
    name: "Product Analytics",
    href: "/analytics/product-analytics",
    icon: Package,
  },
  {
    name: "Branch Analytics",
    href: "/analytics/branch-analytics",
    icon: Building2,
  },
  {
    name: "KPI Dashboard",
    href: "/analytics/kpi-dashboard",
    icon: Gauge,
  },
];

export default function AnalyticsNav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const visibleTabs = analyticsPages.slice(0, 3);
  const dropdownTabs = analyticsPages.slice(3);

  const isDropdownActive = dropdownTabs.some(
    (page) => pathname === page.href || pathname.startsWith(page.href + "/")
  );

  return (
    <nav className="flex items-center gap-3 border-b border-border-theme bg-background-primary px-6 py-3 w-full">
      {visibleTabs.map((page) => {
        const Icon = page.icon;
        const isActive = pathname === page.href || pathname.startsWith(page.href + "/");

        return (
          <Link
            key={page.name}
            href={page.href}
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border border-border-theme bg-background-tertiary text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                : "border border-transparent text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
            }`}
          >
            <Icon size={16} />
            <span>{page.name}</span>
          </Link>
        );
      })}

      {/* More Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            isDropdownActive
              ? "border border-border-theme bg-background-tertiary text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]"
              : "border border-transparent text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
          }`}
        >
          <span>More</span>
          <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-border-theme bg-background-secondary p-2 shadow-xl z-50 animate-in fade-in slide-in-from-top-2">
            {dropdownTabs.map((page) => {
              const Icon = page.icon;
              const isActive = pathname === page.href || pathname.startsWith(page.href + "/");

              return (
                <Link
                  key={page.name}
                  href={page.href}
                  onClick={() => setDropdownOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-background-tertiary text-accent-gold"
                      : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
                  }`}
                >
                  <Icon size={16} />
                  <span>{page.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}