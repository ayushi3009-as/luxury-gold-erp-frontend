"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Crown,
  Loader2,
  RefreshCw,
} from "lucide-react";

export default function BusinessAnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchAnalytics() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/analytics/business');
      if (res.status === 401) {
        window.location.href = '/login';
        return;
      }
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (isLoading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-primary">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const kpiData = [
    {
      title: "Total Revenue",
      value: `₹ ${(data?.totalRevenue || 0).toLocaleString("en-IN")}`,
      change: "+18.6%",
      positive: true,
      icon: DollarSign,
    },
    {
      title: "Total Sales",
      value: (data?.totalSales || 0).toLocaleString("en-IN"),
      change: "+12.4%",
      positive: true,
      icon: ShoppingCart,
    },
    {
      title: "Active Customers",
      value: (data?.activeCustomers || 0).toLocaleString("en-IN"),
      change: "+8.2%",
      positive: true,
      icon: Users,
    },
    {
      title: "Inventory Value",
      value: `₹ ${(data?.inventoryValue || 0).toLocaleString("en-IN")}`,
      change: "-3.4%",
      positive: false,
      icon: Package,
    },
  ];

  const revenueData = data?.revenueData || [
    { month: "Jan", revenue: 0, sales: 0 },
    { month: "Feb", revenue: 0, sales: 0 },
    { month: "Mar", revenue: 0, sales: 0 },
    { month: "Apr", revenue: 0, sales: 0 },
    { month: "May", revenue: 0, sales: 0 },
    { month: "Jun", revenue: 0, sales: 0 },
  ];

  // Calculate max for chart scaling
  const maxVal = Math.max(...revenueData.map((d: any) => Math.max(d.revenue, d.sales))) || 1;

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="min-h-screen p-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-text-secondary">
              Analytics / Business Analytics
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-accent-gold">
              Business Analytics
            </h1>
            <p className="mt-2 text-sm text-text-secondary">
              Monitor your business performance, revenue, customers and growth.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={fetchAnalytics}
              className="flex items-center gap-2 rounded-lg border border-[#6d5318] bg-[#17150d] px-4 py-2 text-sm text-accent-gold hover:bg-[#2a2414] transition-colors"
            >
              <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
              Refresh
            </button>
            <select className="rounded-lg border border-border-theme bg-[#11130f] px-4 py-2 text-xs text-text-secondary outline-none">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
            </select>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">
          {kpiData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-border-theme bg-[#11130f] p-5 transition hover:border-[#b98c20]"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-lg bg-[#211c0d] p-3">
                    <Icon size={20} className="text-accent-gold" />
                  </div>
                  <span
                    className={`flex items-center gap-1 text-xs ${
                      item.positive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {item.change}
                  </span>
                </div>
                <p className="mt-5 text-xs text-text-secondary">{item.title}</p>
                <h2 className="mt-1 text-2xl font-bold">{item.value}</h2>
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#292519]">
                  <div className="h-full rounded-full bg-[#b98c20]" style={{ width: "82%" }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* MAIN ANALYTICS GRID */}
        <div className="mt-6 grid grid-cols-3 gap-6">

          {/* REVENUE CHART */}
          <div className="col-span-2 rounded-xl border border-border-theme bg-[#11130f] p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-accent-gold">Revenue Performance</h2>
                <p className="mt-1 text-xs text-text-secondary">Revenue and sales performance over the last 6 months</p>
              </div>
              <TrendingUp size={20} className="text-green-400" />
            </div>

            <div className="mt-8 flex h-64 items-end gap-5">
              {revenueData.map((item: any) => (
                <div key={item.month} className="flex h-full flex-1 flex-col items-center justify-end">
                  <div className="flex h-full w-full items-end gap-1">
                    <div
                      className="flex-1 rounded-t-md bg-[#b98c20] transition hover:bg-accent-gold duration-1000"
                      style={{ height: `${(item.revenue / maxVal) * 100}%` }}
                    />
                    <div
                      className="flex-1 rounded-t-md bg-[#4d4427] transition hover:bg-[#776b3d] duration-1000"
                      style={{ height: `${(item.sales / maxVal) * 100}%` }}
                    />
                  </div>
                  <span className="mt-3 text-xs text-text-secondary">{item.month}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-6 text-xs text-text-secondary">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#b98c20]" />
                Revenue
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#4d4427]" />
                Sales
              </span>
            </div>
          </div>

          {/* BUSINESS HEALTH */}
          <div className="rounded-xl border border-border-theme bg-[#11130f] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#211c0d] p-3">
                <Crown size={20} className="text-accent-gold" />
              </div>
              <div>
                <h2 className="font-semibold text-accent-gold">Business Health</h2>
                <p className="text-xs text-text-secondary">Overall performance score</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-[#b98c20]">
                <div className="text-center">
                  <p className="text-3xl font-bold">86</p>
                  <p className="text-xs text-text-secondary">Excellent</p>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              <div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Sales Growth</span>
                  <span className="text-green-400">Good</span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-[#292519]">
                  <div className="h-full w-[80%] rounded-full bg-green-400" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Customer Retention</span>
                  <span className="text-accent-gold">Stable</span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-[#292519]">
                  <div className="h-full w-[65%] rounded-full bg-accent-gold" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Inventory Turnover</span>
                  <span className="text-red-400">Needs Attention</span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-[#292519]">
                  <div className="h-full w-[30%] rounded-full bg-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}