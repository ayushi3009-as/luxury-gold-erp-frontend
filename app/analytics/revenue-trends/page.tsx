"use client";

import {
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  CalendarDays,
  BarChart3,
} from "lucide-react";

import AnalyticsSidebar from "../AnalyticsSidebar";

const revenueData = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 58000 },
  { month: "Mar", revenue: 49000 },
  { month: "Apr", revenue: 72000 },
  { month: "May", revenue: 65000 },
  { month: "Jun", revenue: 86000 },
  { month: "Jul", revenue: 94000 },
  { month: "Aug", revenue: 108000 },
];

const categoryData = [
  { name: "Gold Jewellery", value: 92 },
  { name: "Diamond Jewellery", value: 78 },
  { name: "Silver Jewellery", value: 64 },
  { name: "Platinum Jewellery", value: 46 },
];

export default function RevenueTrendsPage() {
  const maxRevenue = Math.max(
    ...revenueData.map((item) => item.revenue)
  );

  return (
    <div className="min-h-screen bg-[#090a09] text-white">
      <AnalyticsSidebar />

      <main className="ml-64 min-h-screen p-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">

          <div>
            <p className="text-xs text-gray-500">
              Analytics / Revenue Trends
            </p>

            <div className="mt-2 flex items-center gap-3">
              <div className="rounded-xl bg-[#211c0d] p-3">
                <TrendingUp
                  size={25}
                  className="text-[#e4b52d]"
                />
              </div>

              <h1 className="text-3xl font-bold text-[#f0c43c]">
                Revenue Trends
              </h1>
            </div>

            <p className="mt-3 text-sm text-gray-400">
              Track revenue growth and understand your business performance.
            </p>
          </div>

          <select className="rounded-lg border border-[#40351b] bg-[#11130f] px-4 py-2 text-xs text-gray-300 outline-none">
            <option>Last 8 Months</option>
            <option>Last 12 Months</option>
            <option>This Year</option>
          </select>

        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-8 grid grid-cols-3 gap-5">

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Total Revenue
              </p>

              <DollarSign
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              $574K
            </h2>

            <p className="mt-2 flex items-center gap-1 text-xs text-green-400">
              <ArrowUpRight size={14} />
              +18.6% compared to last period
            </p>

          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Average Monthly Revenue
              </p>

              <BarChart3
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              $71.7K
            </h2>

            <p className="mt-2 text-xs text-gray-500">
              Based on the selected period
            </p>

          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Best Performing Month
              </p>

              <CalendarDays
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              August
            </h2>

            <p className="mt-2 text-xs text-green-400">
              $108,000 revenue generated
            </p>

          </div>

        </div>

        {/* REVENUE TREND CHART */}
        <div className="mt-6 rounded-xl border border-[#40351b] bg-[#11130f] p-6">

          <div className="flex items-start justify-between">

            <div>
              <h2 className="text-lg font-semibold text-[#f0c43c]">
                Revenue Growth
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Monthly revenue performance
              </p>
            </div>

            <span className="flex items-center gap-1 text-xs text-green-400">
              <TrendingUp size={15} />
              Growing
            </span>

          </div>

          <div className="mt-8 flex h-72 items-end gap-4">

            {revenueData.map((item) => {

              const height = (item.revenue / maxRevenue) * 100;

              return (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >

                  <div className="mb-3 text-[10px] text-gray-500">
                    ${(item.revenue / 1000).toFixed(0)}K
                  </div>

                  <div
                    className="w-full rounded-t-lg bg-[#b98c20] transition-all duration-300 hover:bg-[#e4b52d]"
                    style={{
                      height: `${height}%`,
                    }}
                  />

                  <span className="mt-3 text-xs text-gray-500">
                    {item.month}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

        {/* CATEGORY PERFORMANCE */}
        <div className="mt-6 rounded-xl border border-[#40351b] bg-[#11130f] p-6">

          <div>
            <h2 className="text-lg font-semibold text-[#f0c43c]">
              Revenue by Category
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Performance of major jewellery categories
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-10 gap-y-6">

            {categoryData.map((category) => (

              <div key={category.name}>

                <div className="flex justify-between text-sm">

                  <span className="text-gray-300">
                    {category.name}
                  </span>

                  <span className="text-[#e4b52d]">
                    {category.value}%
                  </span>

                </div>

                <div className="mt-2 h-2 rounded-full bg-[#292519]">

                  <div
                    className="h-full rounded-full bg-[#b98c20]"
                    style={{
                      width: `${category.value}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>
    </div>
  );
}