"use client";

import Link from "next/link";
import {
  BarChart3,
  Brain,
  TrendingUp,
  ChartNoAxesCombined,
  Users,
  Package,
  Building2,
  Gauge,
  ChevronRight,
} from "lucide-react";

const analyticsPages = [
  {
    name: "Business Analytics",
    href: "/analytics/business-analytics",
    icon: BarChart3,
  },
  {
    name: "AI Insights",
    href: "/analytics/ai-insights",
    icon: Brain,
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

export default function AnalyticsSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-[#2b2617] bg-[#0c0e0d]">
      {/* Header */}
      <div className="flex h-24 items-center gap-3 border-b border-[#272419] px-5">
        <div className="text-4xl text-[#e4b52d]">◇</div>

        <div>
          <h1 className="text-lg font-bold text-[#f0c43c]">
            Analytics
          </h1>

          <p className="text-[10px] text-gray-400">
            Business Intelligence
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-5 space-y-1 px-3">
        {analyticsPages.map((page) => {
          const Icon = page.icon;

          return (
            <Link
              key={page.name}
              href={page.href}
              className="group flex items-center justify-between rounded-lg px-3 py-3 text-sm text-gray-300 transition hover:bg-[#1c1a12] hover:text-[#f0c43c]"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span>{page.name}</span>
              </div>

              <ChevronRight
                size={15}
                className="text-[#d1a82e]"
              />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}