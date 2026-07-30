"use client";

import {
  Gauge,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  Target,
  Activity,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";



const kpis = [
  {
    title: "Revenue",
    value: "$2.84M",
    target: "$3.20M",
    progress: 89,
    change: "+18.6%",
    icon: DollarSign,
  },
  {
    title: "Sales",
    value: "12,486",
    target: "15,000",
    progress: 83,
    change: "+12.4%",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: "8,942",
    target: "10,000",
    progress: 89,
    change: "+8.2%",
    icon: Users,
  },
  {
    title: "Inventory Turnover",
    value: "6.8x",
    target: "8.0x",
    progress: 85,
    change: "+6.4%",
    icon: Package,
  },
];

const performanceData = [
  { label: "Revenue Target", value: 89 },
  { label: "Sales Target", value: 83 },
  { label: "Customer Growth", value: 76 },
  { label: "Inventory Efficiency", value: 85 },
  { label: "Branch Performance", value: 92 },
];

export default function KPIDashboardPage() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" min-h-screen p-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">

          <div>
            <p className="text-xs text-text-secondary">
              Analytics / KPI Dashboard
            </p>

            <div className="mt-2 flex items-center gap-3">

              <div className="rounded-xl bg-[#211c0d] p-3">
                <Gauge
                  size={25}
                  className="text-accent-gold"
                />
              </div>

              <h1 className="text-3xl font-bold text-accent-gold">
                KPI Dashboard
              </h1>

            </div>

            <p className="mt-3 text-sm text-text-secondary">
              Track your most important business performance indicators.
            </p>
          </div>

          <select className="rounded-lg border border-border-theme bg-[#11130f] px-4 py-2 text-xs text-text-secondary outline-none">
            <option>Current Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>

        </div>

        {/* KPI CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">

          {kpis.map((kpi) => {
            const Icon = kpi.icon;

            return (
              <div
                key={kpi.title}
                className="rounded-xl border border-border-theme bg-[#11130f] p-5"
              >

                <div className="flex items-start justify-between">

                  <div className="rounded-lg bg-[#211c0d] p-3">
                    <Icon
                      size={20}
                      className="text-accent-gold"
                    />
                  </div>

                  <span className="flex items-center gap-1 text-xs text-green-400">
                    <ArrowUpRight size={14} />
                    {kpi.change}
                  </span>

                </div>

                <p className="mt-5 text-xs text-text-secondary">
                  {kpi.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {kpi.value}
                </h2>

                <div className="mt-4 flex justify-between text-[10px] text-text-secondary">
                  <span>
                    Target: {kpi.target}
                  </span>

                  <span className="text-accent-gold">
                    {kpi.progress}%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-[#292519]">

                  <div
                    className="h-full rounded-full bg-[#b98c20]"
                    style={{
                      width: `${kpi.progress}%`,
                    }}
                  />

                </div>

              </div>
            );
          })}

        </div>

        {/* MAIN KPI SECTION */}
        <div className="mt-6 grid grid-cols-3 gap-6">

          {/* OVERALL SCORE */}
          <div className="rounded-xl border border-border-theme bg-[#11130f] p-6">

            <div className="flex items-center gap-3">

              <div className="rounded-lg bg-[#211c0d] p-3">
                <Activity
                  size={20}
                  className="text-accent-gold"
                />
              </div>

              <div>
                <h2 className="font-semibold text-accent-gold">
                  Overall KPI Score
                </h2>

                <p className="text-xs text-text-secondary">
                  Current business health
                </p>
              </div>

            </div>

            <div className="mt-8 flex justify-center">

              <div className="flex h-44 w-44 items-center justify-center rounded-full border-[16px] border-[#b98c20]">

                <div className="text-center">

                  <p className="text-4xl font-bold">
                    86
                  </p>

                  <p className="mt-1 text-xs text-green-400">
                    Excellent
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-green-400">

              <TrendingUp size={15} />

              Business performance is improving

            </div>

          </div>

          {/* PERFORMANCE METRICS */}
          <div className="col-span-2 rounded-xl border border-border-theme bg-[#11130f] p-6">

            <div className="flex items-center gap-3">

              <div className="rounded-lg bg-[#211c0d] p-3">
                <Target
                  size={20}
                  className="text-accent-gold"
                />
              </div>

              <div>
                <h2 className="font-semibold text-accent-gold">
                  Performance Metrics
                </h2>

                <p className="text-xs text-text-secondary">
                  Progress toward business goals
                </p>
              </div>

            </div>

            <div className="mt-7 space-y-6">

              {performanceData.map((item) => (

                <div key={item.label}>

                  <div className="flex justify-between text-sm">

                    <span className="text-text-secondary">
                      {item.label}
                    </span>

                    <span className="text-accent-gold">
                      {item.value}%
                    </span>

                  </div>

                  <div className="mt-2 h-2 rounded-full bg-[#292519]">

                    <div
                      className="h-full rounded-full bg-[#b98c20]"
                      style={{
                        width: `${item.value}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* KPI STATUS */}
        <div className="mt-6 rounded-xl border border-border-theme bg-[#11130f] p-6">

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={21}
              className="text-green-400"
            />

            <div>

              <h2 className="font-semibold text-accent-gold">
                KPI Status Overview
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Current status of key business indicators
              </p>

            </div>

          </div>

          <div className="mt-6 grid grid-cols-4 gap-5">

            <div className="rounded-lg bg-[#151711] p-5">

              <p className="text-xs text-text-secondary">
                Revenue
              </p>

              <p className="mt-2 text-sm text-green-400">
                On Track
              </p>

              <p className="mt-2 text-xs text-text-secondary">
                89% of target achieved
              </p>

            </div>

            <div className="rounded-lg bg-[#151711] p-5">

              <p className="text-xs text-text-secondary">
                Sales
              </p>

              <p className="mt-2 text-sm text-green-400">
                On Track
              </p>

              <p className="mt-2 text-xs text-text-secondary">
                Strong sales momentum
              </p>

            </div>

            <div className="rounded-lg bg-[#151711] p-5">

              <p className="text-xs text-text-secondary">
                Customer Growth
              </p>

              <p className="mt-2 text-sm text-accent-gold">
                Improving
              </p>

              <p className="mt-2 text-xs text-text-secondary">
                Retention rate is healthy
              </p>

            </div>

            <div className="rounded-lg bg-[#151711] p-5">

              <p className="text-xs text-text-secondary">
                Inventory
              </p>

              <p className="mt-2 text-sm text-green-400">
                Healthy
              </p>

              <p className="mt-2 text-xs text-text-secondary">
                Efficient stock movement
              </p>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}