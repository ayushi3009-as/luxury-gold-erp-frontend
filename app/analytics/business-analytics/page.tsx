"use client";

import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Sparkles,
  Crown,
} from "lucide-react";



const kpiData = [
  {
    title: "Total Revenue",
    value: "$2.84M",
    change: "+18.6%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Total Sales",
    value: "12,486",
    change: "+12.4%",
    positive: true,
    icon: ShoppingCart,
  },
  {
    title: "Active Customers",
    value: "8,942",
    change: "+8.2%",
    positive: true,
    icon: Users,
  },
  {
    title: "Inventory Value",
    value: "$1.26M",
    change: "-3.4%",
    positive: false,
    icon: Package,
  },
];

const revenueData = [
  { month: "Jan", revenue: 42, sales: 35 },
  { month: "Feb", revenue: 58, sales: 48 },
  { month: "Mar", revenue: 49, sales: 43 },
  { month: "Apr", revenue: 72, sales: 61 },
  { month: "May", revenue: 65, sales: 56 },
  { month: "Jun", revenue: 86, sales: 74 },
];

export default function BusinessAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" min-h-screen p-8">

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

          <select className="rounded-lg border border-border-theme bg-[#11130f] px-4 py-2 text-xs text-text-secondary outline-none">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
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
                      item.positive
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.positive ? (
                      <ArrowUpRight size={14} />
                    ) : (
                      <ArrowDownRight size={14} />
                    )}

                    {item.change}
                  </span>
                </div>

                <p className="mt-5 text-xs text-text-secondary">
                  {item.title}
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {item.value}
                </h2>

                <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#292519]">
                  <div
                    className="h-full rounded-full bg-[#b98c20]"
                    style={{
                        width: "82%",
                }}
                  />
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
                <h2 className="text-lg font-semibold text-accent-gold">
                  Revenue Performance
                </h2>

                <p className="mt-1 text-xs text-text-secondary">
                  Revenue and sales performance over the last 6 months
                </p>
              </div>

              <TrendingUp
                size={20}
                className="text-green-400"
              />
            </div>

            <div className="mt-8 flex h-64 items-end gap-5">

              {revenueData.map((item) => (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >
                  <div className="flex h-full w-full items-end gap-1">

                    <div
                      className="flex-1 rounded-t-md bg-[#b98c20] transition hover:bg-accent-gold"
                      style={{
                        height: `${item.revenue}%`,
                      }}
                    />

                    <div
                      className="flex-1 rounded-t-md bg-[#4d4427] transition hover:bg-[#776b3d]"
                      style={{
                        height: `${item.sales}%`,
                      }}
                    />

                  </div>

                  <span className="mt-3 text-xs text-text-secondary">
                    {item.month}
                  </span>
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
                <Crown
                  size={20}
                  className="text-accent-gold"
                />
              </div>

              <div>
                <h2 className="font-semibold text-accent-gold">
                  Business Health
                </h2>

                <p className="text-xs text-text-secondary">
                  Overall performance score
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-[#b98c20]">
                <div className="text-center">
                  <p className="text-3xl font-bold">
                    86
                  </p>

                  <p className="text-xs text-text-secondary">
                    Excellent
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-4">

              <div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">
                    Sales Growth
                  </span>

                  <span className="text-green-400">
                    82%
                  </span>
                </div>

                <div className="mt-2 h-1.5 rounded-full bg-[#292519]">
                  <div className="h-full w-[82%] rounded-full bg-green-600" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">
                    Customer Growth
                  </span>

                  <span className="text-accent-gold">
                    74%
                  </span>
                </div>

                <div className="mt-2 h-1.5 rounded-full bg-[#292519]">
                  <div className="h-full w-[74%] rounded-full bg-[#b98c20]" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* LOWER SECTION */}
        <div className="mt-6 grid grid-cols-3 gap-6">

          {/* INSIGHTS */}
          <div className="col-span-2 rounded-xl border border-border-theme bg-[#11130f] p-6">

            <div className="flex items-center gap-3">
              <Sparkles
                size={20}
                className="text-accent-gold"
              />

              <div>
                <h2 className="font-semibold text-accent-gold">
                  Business Insights
                </h2>

                <p className="text-xs text-text-secondary">
                  Important performance observations
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-lg border border-[#2f2a1b] bg-[#151711] p-4">
                <div className="flex items-center gap-2 text-green-400">
                  <TrendingUp size={16} />

                  <span className="text-sm font-medium">
                    Revenue is growing
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-text-secondary">
                  Revenue increased by 18.6% compared to the previous period.
                </p>
              </div>

              <div className="rounded-lg border border-[#2f2a1b] bg-[#151711] p-4">
                <div className="flex items-center gap-2 text-accent-gold">
                  <Users size={16} />

                  <span className="text-sm font-medium">
                    Customer base expanded
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-text-secondary">
                  Active customers increased by 8.2% this period.
                </p>
              </div>

              <div className="rounded-lg border border-[#2f2a1b] bg-[#151711] p-4">
                <div className="flex items-center gap-2 text-accent-gold">
                  <ShoppingCart size={16} />

                  <span className="text-sm font-medium">
                    Sales performance improved
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-text-secondary">
                  Total sales volume is showing a strong upward trend.
                </p>
              </div>

              <div className="rounded-lg border border-[#2f2a1b] bg-[#151711] p-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Package size={16} />

                  <span className="text-sm font-medium">
                    Inventory remains healthy
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-text-secondary">
                  Inventory value is stable with efficient stock movement.
                </p>
              </div>

            </div>
          </div>

          {/* TOP PERFORMING */}
          <div className="rounded-xl border border-border-theme bg-[#11130f] p-6">

            <h2 className="font-semibold text-accent-gold">
              Top Performing
            </h2>

            <p className="mt-1 text-xs text-text-secondary">
              Best performing business segments
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <div className="flex justify-between text-sm">
                  <span>Gold Jewellery</span>
                  <span className="text-accent-gold">92%</span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-[#292519]">
                  <div className="h-full w-[92%] rounded-full bg-[#b98c20]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span>Diamond Jewellery</span>
                  <span className="text-accent-gold">78%</span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-[#292519]">
                  <div className="h-full w-[78%] rounded-full bg-[#b98c20]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span>Silver Jewellery</span>
                  <span className="text-accent-gold">64%</span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-[#292519]">
                  <div className="h-full w-[64%] rounded-full bg-[#b98c20]" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}