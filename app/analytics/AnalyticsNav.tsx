"use client";

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

export default function AnalyticsNav() {
  const pathname = usePathname();
  
  return (
    <nav className="flex items-center gap-2 overflow-x-auto border-b border-border-theme bg-background-primary px-6 py-3 w-full [&::-webkit-scrollbar]:hidden">

    
      
      

      {/* Navigation */}
      
        {analyticsPages.map((page) => {
          const Icon = page.icon;
          const isActive = pathname === page.href || pathname.startsWith(page.href + '/');

          return (
            <Link
              key={page.name}
              href={page.href}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive 
                  ? "border border-border-theme bg-background-tertiary text-accent-gold"
                  : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span>{page.name}</span>
              </div>

              
            </Link>
          );
        })}
      
    
  
    </nav>
  );
}