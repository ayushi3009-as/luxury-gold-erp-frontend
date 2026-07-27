"use client";

import {
  Building2,
  TrendingUp,
  MapPin,
  Users,
  DollarSign,
  ArrowUpRight,
  Store,
} from "lucide-react";

import AnalyticsSidebar from "../AnalyticsSidebar";

const branches = [
  {
    name: "Surat Main Branch",
    location: "Surat, Gujarat",
    revenue: "$428K",
    sales: "3,842",
    customers: "2,486",
    growth: "+24.6%",
    performance: 92,
  },
  {
    name: "Ahmedabad Branch",
    location: "Ahmedabad, Gujarat",
    revenue: "$326K",
    sales: "2,964",
    customers: "1,928",
    growth: "+18.4%",
    performance: 84,
  },
  {
    name: "Mumbai Branch",
    location: "Mumbai, Maharashtra",
    revenue: "$284K",
    sales: "2,486",
    customers: "1,642",
    growth: "+14.8%",
    performance: 76,
  },
  {
    name: "Rajkot Branch",
    location: "Rajkot, Gujarat",
    revenue: "$196K",
    sales: "1,742",
    customers: "1,124",
    growth: "+11.2%",
    performance: 68,
  },
];

const monthlyPerformance = [
  { month: "Jan", surat: 62, ahmedabad: 48, mumbai: 42 },
  { month: "Feb", surat: 68, ahmedabad: 54, mumbai: 48 },
  { month: "Mar", surat: 74, ahmedabad: 58, mumbai: 52 },
  { month: "Apr", surat: 80, ahmedabad: 66, mumbai: 60 },
  { month: "May", surat: 86, ahmedabad: 72, mumbai: 68 },
  { month: "Jun", surat: 92, ahmedabad: 84, mumbai: 76 },
];

export default function BranchAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#090a09] text-white">
      <AnalyticsSidebar />

      <main className="ml-64 min-h-screen p-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">

          <div>
            <p className="text-xs text-gray-500">
              Analytics / Branch Analytics
            </p>

            <div className="mt-2 flex items-center gap-3">
              <div className="rounded-xl bg-[#211c0d] p-3">
                <Building2
                  size={25}
                  className="text-[#e4b52d]"
                />
              </div>

              <h1 className="text-3xl font-bold text-[#f0c43c]">
                Branch Analytics
              </h1>
            </div>

            <p className="mt-3 text-sm text-gray-400">
              Compare branch performance, revenue and customer growth.
            </p>
          </div>

          <select className="rounded-lg border border-[#40351b] bg-[#11130f] px-4 py-2 text-xs text-gray-300 outline-none">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>

        </div>

        {/* KPI CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Total Branches
              </p>

              <Building2
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              12
            </h2>

            <p className="mt-2 text-xs text-green-400">
              +2 new branches this year
            </p>
          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Total Branch Revenue
              </p>

              <DollarSign
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              $1.23M
            </h2>

            <p className="mt-2 flex items-center gap-1 text-xs text-green-400">
              <ArrowUpRight size={14} />
              +18.6% growth
            </p>
          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Total Branch Sales
              </p>

              <Store
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              11,034
            </h2>

            <p className="mt-2 text-xs text-green-400">
              Strong sales performance
            </p>
          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Total Customers
              </p>

              <Users
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              7,180
            </h2>

            <p className="mt-2 text-xs text-green-400">
              +12.8% customer growth
            </p>
          </div>

        </div>

        {/* BRANCH PERFORMANCE */}
        <div className="mt-6 rounded-xl border border-[#40351b] bg-[#11130f] p-6">

          <div className="flex items-start justify-between">

            <div>
              <h2 className="text-lg font-semibold text-[#f0c43c]">
                Branch Performance
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Monthly performance comparison between major branches
              </p>
            </div>

            <TrendingUp
              size={20}
              className="text-green-400"
            />

          </div>

          <div className="mt-8 flex h-64 items-end gap-5">

            {monthlyPerformance.map((item) => (

              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end"
              >

                <div className="flex h-full w-full items-end gap-1">

                  <div
                    className="flex-1 rounded-t-md bg-[#e4b52d]"
                    style={{
                      height: `${item.surat}%`,
                    }}
                  />

                  <div
                    className="flex-1 rounded-t-md bg-[#9b781e]"
                    style={{
                      height: `${item.ahmedabad}%`,
                    }}
                  />

                  <div
                    className="flex-1 rounded-t-md bg-[#51441f]"
                    style={{
                      height: `${item.mumbai}%`,
                    }}
                  />

                </div>

                <span className="mt-3 text-xs text-gray-500">
                  {item.month}
                </span>

              </div>

            ))}

          </div>

          <div className="mt-6 flex gap-6 text-xs text-gray-400">

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#e4b52d]" />
              Surat
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#9b781e]" />
              Ahmedabad
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#51441f]" />
              Mumbai
            </span>

          </div>

        </div>

        {/* BRANCH TABLE */}
        <div className="mt-6 rounded-xl border border-[#40351b] bg-[#11130f] p-6">

          <div className="flex items-center gap-3">

            <MapPin
              size={20}
              className="text-[#e4b52d]"
            />

            <div>
              <h2 className="text-lg font-semibold text-[#f0c43c]">
                Branch Overview
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Detailed branch-wise performance
              </p>
            </div>

          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-[#2f2a1b]">

            <div className="grid grid-cols-6 border-b border-[#2f2a1b] bg-[#151711] px-5 py-4 text-xs text-gray-500">

              <span>Branch</span>
              <span>Location</span>
              <span>Revenue</span>
              <span>Sales</span>
              <span>Customers</span>
              <span>Growth</span>

            </div>

            {branches.map((branch) => (

              <div
                key={branch.name}
                className="grid grid-cols-6 items-center border-b border-[#242117] px-5 py-4 last:border-b-0"
              >

                <span className="text-sm font-medium">
                  {branch.name}
                </span>

                <span className="text-xs text-gray-500">
                  {branch.location}
                </span>

                <span className="text-sm text-[#e4b52d]">
                  {branch.revenue}
                </span>

                <span className="text-sm">
                  {branch.sales}
                </span>

                <span className="text-sm">
                  {branch.customers}
                </span>

                <span className="text-sm text-green-400">
                  {branch.growth}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* PERFORMANCE SCORE */}
        <div className="mt-6 grid grid-cols-4 gap-5">

          {branches.map((branch) => (

            <div
              key={branch.name}
              className="rounded-xl border border-[#40351b] bg-[#11130f] p-5"
            >

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium">
                  {branch.name}
                </span>

                <span className="text-lg font-bold text-[#e4b52d]">
                  {branch.performance}%
                </span>

              </div>

              <div className="mt-4 h-2 rounded-full bg-[#292519]">

                <div
                  className="h-full rounded-full bg-[#b98c20]"
                  style={{
                    width: `${branch.performance}%`,
                  }}
                />

              </div>

              <p className="mt-3 text-xs text-gray-500">
                Branch performance score
              </p>

            </div>

          ))}

        </div>

      </main>
    </div>
  );
}