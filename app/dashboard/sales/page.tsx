"use client";

import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ChevronDown,
  IndianRupee,
  Package,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";

const salesData = [
  { day: "Mon", value: 45 },
  { day: "Tue", value: 65 },
  { day: "Wed", value: 52 },
  { day: "Thu", value: 78 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 92 },
  { day: "Sun", value: 72 },
];

const topProducts = [
  ["Gold Ring", "128", "₹ 4,85,000"],
  ["Diamond Necklace", "86", "₹ 6,20,000"],
  ["Gold Chain", "74", "₹ 3,40,000"],
  ["Gold Bangle", "62", "₹ 2,85,000"],
];

export default function SalesDashboard() {
  return (
    <main className="min-h-screen bg-background-primary p-5 text-text-primary lg:ml-[230px]">

      {/* HEADER */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-text-secondary">
            Dashboard / Sales
          </p>

          <h1 className="mt-1 text-2xl font-semibold">
            Sales Dashboard
          </h1>

          <p className="mt-1 text-sm text-text-secondary">
            Monitor your jewellery sales performance and revenue.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-border-theme bg-[#12130f] px-4 py-2 text-sm text-text-secondary">
            <CalendarDays size={16} />
            This Month
            <ChevronDown size={15} />
          </button>

          <button className="rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black">
            Export Report
          </button>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="TOTAL SALES"
          value="₹ 12,85,250"
          change="18.2%"
          icon={<IndianRupee size={20} />}
        />

        <StatCard
          title="TOTAL ORDERS"
          value="1,248"
          change="12.5%"
          icon={<ShoppingBag size={20} />}
        />

        <StatCard
          title="AVERAGE ORDER VALUE"
          value="₹ 10,298"
          change="8.4%"
          icon={<BarChart3 size={20} />}
        />

        <StatCard
          title="NEW CUSTOMERS"
          value="186"
          change="14.6%"
          icon={<Users size={20} />}
        />

      </div>

      {/* CHART + TARGET */}
      <div className="mt-5 grid gap-5 xl:grid-cols-3">

        {/* SALES TREND */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5 xl:col-span-2">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-accent-gold">
                SALES TREND
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Weekly sales performance
              </p>
            </div>

            <span className="flex items-center gap-1 text-xs text-green-400">
              <TrendingUp size={14} />
              18.2% Growth
            </span>
          </div>

          <div className="mt-8 flex h-64 items-end gap-4 border-b border-l border-border-theme px-5">

            {salesData.map((item) => (
              <div
                key={item.day}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div
                  className="w-full max-w-[45px] rounded-t-md bg-accent-gold transition hover:bg-accent-gold"
                  style={{ height: `${item.value}%` }}
                />

                <span className="text-xs text-text-secondary">
                  {item.day}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* SALES TARGET */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

          <h2 className="font-semibold text-accent-gold">
            SALES TARGET
          </h2>

          <div className="mt-8 flex justify-center">
            <div className="flex h-44 w-44 items-center justify-center rounded-full border-[22px] border-accent-gold">
              <div className="text-center">
                <p className="text-3xl font-bold">
                  78%
                </p>

                <p className="text-xs text-text-secondary">
                  Achieved
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between text-sm">
            <div>
              <p className="text-text-secondary">
                Target
              </p>

              <p className="mt-1 font-semibold">
                ₹ 16,50,000
              </p>
            </div>

            <div className="text-right">
              <p className="text-text-secondary">
                Achieved
              </p>

              <p className="mt-1 font-semibold text-accent-gold">
                ₹ 12,85,250
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* LOWER CONTENT */}
      <div className="mt-5 grid gap-5 xl:grid-cols-3">

        {/* TOP PRODUCTS */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5 xl:col-span-2">

          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-accent-gold">
              TOP SELLING PRODUCTS
            </h2>

            <span className="cursor-pointer text-xs text-[#d9a928]">
              View All →
            </span>
          </div>

          <div className="mt-5 overflow-x-auto">

            <table className="w-full text-left text-sm">

              <thead className="border-b border-border-theme text-xs text-text-secondary">
                <tr>
                  <th className="pb-3">
                    PRODUCT
                  </th>

                  <th className="pb-3">
                    UNITS SOLD
                  </th>

                  <th className="pb-3 text-right">
                    REVENUE
                  </th>
                </tr>
              </thead>

              <tbody>
                {topProducts.map((product) => (
                  <tr
                    key={product[0]}
                    className="border-b border-[#24231b]"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#292210] text-[#d9a928]">
                          <Package size={17} />
                        </div>

                        {product[0]}
                      </div>
                    </td>

                    <td className="py-4 text-text-secondary">
                      {product[1]}
                    </td>

                    <td className="py-4 text-right text-accent-gold">
                      {product[2]}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>

        {/* QUICK SALES SUMMARY */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

          <h2 className="font-semibold text-accent-gold">
            SALES SUMMARY
          </h2>

          <div className="mt-5 space-y-5">

            <SummaryRow
              label="Gold Jewellery"
              value="₹ 7,05,000"
              percent="55%"
            />

            <SummaryRow
              label="Diamond Jewellery"
              value="₹ 3,20,000"
              percent="25%"
            />

            <SummaryRow
              label="Silver Jewellery"
              value="₹ 1,28,525"
              percent="10%"
            />

            <SummaryRow
              label="Other Products"
              value="₹ 1,31,725"
              percent="10%"
            />

          </div>

        </div>

      </div>

      {/* RECENT SALES */}
      <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-accent-gold">
            RECENT SALES TRANSACTIONS
          </h2>

          <span className="text-xs text-[#d9a928]">
            View All →
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-4">

          {[
            ["INV-1001", "Customer A", "Gold Ring", "₹ 85,000"],
            ["INV-1002", "Customer B", "Diamond Necklace", "₹ 2,40,000"],
            ["INV-1003", "Customer C", "Gold Chain", "₹ 1,20,000"],
            ["INV-1004", "Customer D", "Gold Bangle", "₹ 95,000"],
          ].map((sale) => (
            <div
              key={sale[0]}
              className="rounded-lg border border-border-theme bg-background-secondary p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">
                  {sale[0]}
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-green-400"
                />
              </div>

              <p className="mt-3 text-sm">
                {sale[1]}
              </p>

              <p className="mt-1 text-xs text-text-secondary">
                {sale[2]}
              </p>

              <p className="mt-3 font-semibold text-accent-gold">
                {sale[3]}
              </p>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}

function StatCard({
  title,
  value,
  change,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-theme bg-background-tertiary text-accent-gold">
          {icon}
        </div>

        <span className="flex items-center gap-1 text-xs text-green-400">
          <TrendingUp size={13} />
          {change}
        </span>
      </div>

      <p className="mt-5 text-xs text-text-secondary">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-semibold">
        {value}
      </h3>

      <p className="mt-2 text-xs text-text-secondary">
        Compared to last month
      </p>

    </div>
  );
}

function SummaryRow({
  label,
  value,
  percent,
}: {
  label: string;
  value: string;
  percent: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="text-text-secondary">
          {label}
        </span>

        <span className="text-accent-gold">
          {percent}
        </span>
      </div>

      <div className="mt-2 h-2 rounded-full bg-[#29271d]">
        <div
          className="h-2 rounded-full bg-accent-gold"
          style={{ width: percent }}
        />
      </div>

      <p className="mt-1 text-xs text-text-secondary">
        {value}
      </p>
    </div>
  );
}