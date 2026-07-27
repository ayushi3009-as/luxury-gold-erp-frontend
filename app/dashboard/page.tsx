"use client";

import Link from "next/link";

import {
  Receipt,
  Package,
  Users,
  FileText,
  Wallet,
  MoreHorizontal,
  AlertTriangle,
  Clock3,
  ArrowUpRight,
  Coins,
  Gem,
  Bot,
} from "lucide-react";

const revenueData = [
  42, 48, 45, 58, 51, 65, 56, 72, 63, 80, 70, 92,
];

const shortcuts = [
  ["Daily Activity Report", "View all daily activities", "/reports"],
  ["Label in Stock", "Check labels in stock", "/inventory"],
  ["Label Summary", "Summary of all labels", "/inventory"],
  ["Order Query", "Search & track orders", "/sales"],
  ["Outstanding", "Customer & party due", "/finance"],
  ["Customer Ledger", "Ledger wise details", "/customers"],
  ["Metal / Amount Outstanding", "Metal & amount due", "/finance"],
  ["Metal & Currency Ledger", "Metal & currency ledger", "/finance"],
  ["Wt. Range Wise Label Summary", "Weight range summary", "/reports"],
  ["Label Query", "Search label details", "/inventory"],
  ["Party Detail", "View party details", "/customers"],
  ["Trial Balance", "Trial balance report", "/reports"],
  ["Metal Balance Sheet", "Metal balance report", "/inventory"],
  ["Backup & Restore", "Backup & restore data", "/backup-restore"],
  ["Toolbar Setup", "Customize toolbar", "/settings"],
  ["Shortcut Setup", "Manage shortcuts", "/settings"],
];

function MiniChart({ values }: { values: number[] }) {
  const max = Math.max(...values);

  return (
    <div className="mt-4 flex h-10 items-end gap-1">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex-1 rounded-t bg-[#d9a91f]/80"
          style={{
            height: `${(value / max) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function KpiCard({
  icon: Icon,
  title,
  value,
  percentage,
  negative,
}: {
  icon: any;
  title: string;
  value: string;
  percentage: string;
  negative?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#3a3017] bg-[#11130f] p-4 transition hover:border-[#b88a1b]">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5d4816] bg-[#1b180d]">
          <Icon
            size={22}
            className="text-[#e5b72d]"
          />
        </div>

        <span
          className={`text-xs ${
            negative
              ? "text-red-400"
              : "text-green-400"
          }`}
        >
          {negative ? "▼" : "▲"} {percentage}
        </span>
      </div>

      <p className="mt-4 text-[10px] uppercase tracking-wide text-gray-500">
        {title}
      </p>

      <h2 className="mt-1 text-2xl font-semibold text-white">
        {value}
      </h2>

      <p className="mt-1 text-[10px] text-gray-500">
        vs Yesterday
      </p>

      <MiniChart values={revenueData} />
    </div>
  );
}

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[#3a3017] bg-[#11130f] p-4 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#e3b52b]">
          {title}
        </h3>

        <MoreHorizontal
          size={18}
          className="text-gray-500"
        />
      </div>

      {children}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#080a09] text-white">

      {/* TOP HEADER */}
      <header className="sticky top-0 z-40 flex h-[70px] items-center justify-between border-b border-[#292416] bg-[#080a09]/95 px-6 backdrop-blur">

        <div>
          <h1 className="text-2xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-xs text-gray-500">
            Welcome back to Luxury Gold ERP
          </p>
        </div>

        <div className="flex items-center gap-3">

          <Link
            href="/gold-rate"
            className="hidden items-center gap-2 rounded-lg border border-[#4b3a17] bg-[#14130d] px-4 py-2 text-sm text-[#e8bd3b] md:flex"
          >
            <Coins size={17} />
            Gold 22K: $68.50/g
          </Link>

          <button className="rounded-lg border border-[#332b1b] p-2 text-gray-400 hover:text-[#e8bd3b]">
            🔍
          </button>

          <Link
            href="/notifications"
            className="rounded-lg border border-[#332b1b] p-2 text-gray-400 hover:text-[#e8bd3b]"
          >
            🔔
          </Link>

          <div className="hidden rounded-lg border border-[#40351b] px-4 py-2 text-sm text-gray-300 md:block">
            Admin
          </div>

        </div>
      </header>

      {/* CONTENT */}
      <div className="space-y-5 p-5">

        {/* KPI CARDS */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">

          <Link href="/sales">
            <KpiCard
              icon={Receipt}
              title="Total Sales Revenue"
              value="$12,85,250"
              percentage="18.2%"
            />
          </Link>

          <Link href="/sales">
            <KpiCard
              icon={Receipt}
              title="Total Orders"
              value="1,248"
              percentage="12.5%"
            />
          </Link>

          <Link href="/customers">
            <KpiCard
              icon={Users}
              title="Total Customers"
              value="856"
              percentage="8.6%"
            />
          </Link>

          <Link href="/sales">
            <KpiCard
              icon={FileText}
              title="Pending Orders"
              value="32"
              percentage="2.4%"
              negative
            />
          </Link>

          <Link href="/inventory">
            <KpiCard
              icon={Package}
              title="Low Stock Items"
              value="18"
              percentage="6.7%"
              negative
            />
          </Link>

          <Link href="/finance">
            <KpiCard
              icon={Wallet}
              title="Outstanding Amount"
              value="$4,65,320"
              percentage="15.3%"
            />
          </Link>

        </div>

        {/* ROW 2 */}
        <div className="grid gap-5 xl:grid-cols-3">

          {/* REVENUE */}
          <Panel
            title="Total Sales Revenue Overview"
            className="xl:col-span-1"
          >

            <div className="flex items-end justify-between">

              <div>
                <p className="text-2xl font-bold">
                  $12,85,250
                </p>

                <p className="mt-1 text-xs text-green-400">
                  ▲ 18.2% vs Last Month
                </p>
              </div>

              <select className="rounded-lg border border-[#4a3a1c] bg-[#15150f] px-3 py-2 text-xs text-gray-300 outline-none">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>

            </div>

            <div className="mt-8 flex h-44 items-end gap-2">

              {[35, 48, 42, 61, 49, 70, 55, 82, 63, 78, 67, 92].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-[#d6a91f]"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                )
              )}

            </div>

            <div className="mt-3 flex justify-between text-[10px] text-gray-600">
              <span>01</span>
              <span>05</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
              <span>25</span>
              <span>30</span>
            </div>

          </Panel>

          {/* SALES CATEGORY */}
          <Panel title="Sales by Category">

            <div className="flex items-center justify-center gap-8">

              <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#e2b52a_0deg_198deg,#c8a83a_198deg_270deg,#777_270deg_306deg,#555_306deg_342deg,#333_342deg_360deg)]">

                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#11130f]">

                  <span className="text-xs text-gray-500">
                    Total
                  </span>

                  <b className="text-lg">
                    $12,85,250
                  </b>

                </div>

              </div>

              <div className="space-y-3 text-xs">

                <div className="flex justify-between gap-8">
                  <span className="text-gray-300">
                    ● Gold Jewellery
                  </span>
                  <span>55%</span>
                </div>

                <div className="flex justify-between gap-8">
                  <span className="text-gray-300">
                    ● Diamond
                  </span>
                  <span>20%</span>
                </div>

                <div className="flex justify-between gap-8">
                  <span className="text-gray-300">
                    ● Silver
                  </span>
                  <span>10%</span>
                </div>

                <div className="flex justify-between gap-8">
                  <span className="text-gray-300">
                    ● Platinum
                  </span>
                  <span>5%</span>
                </div>

                <div className="flex justify-between gap-8">
                  <span className="text-gray-300">
                    ● Others
                  </span>
                  <span>10%</span>
                </div>

              </div>

            </div>

          </Panel>

          {/* METAL RATES */}
          <Panel title="Live Metal Rates">

            <div className="space-y-4">

              {[
                ["Gold (24K)", "$7,620 /gm", Gem],
                ["Silver", "$85 /gm", Coins],
                ["Platinum", "$3,450 /gm", Gem],
              ].map(([name, value, Icon]: any) => (

                <div
                  key={name}
                  className="flex items-center justify-between border-b border-[#282317] pb-3"
                >

                  <div className="flex items-center gap-3">

                    <Icon
                      className="text-[#e1b22a]"
                      size={24}
                    />

                    <div>

                      <p className="text-sm text-gray-300">
                        {name}
                      </p>

                      <p className="font-semibold text-white">
                        {value}
                      </p>

                    </div>

                  </div>

                  <span className="text-xs text-green-400">
                    ▲ 0.35%
                  </span>

                </div>

              ))}

            </div>

          </Panel>

        </div>

        {/* ROW 3 */}
        <div className="grid gap-5 xl:grid-cols-3">

          {/* INVENTORY */}
          <Panel title="Inventory Overview">

            <div className="flex items-center gap-7">

              <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#dfb12a_0deg_274deg,#777_274deg_330deg,#444_330deg_360deg)]">

                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#11130f]">

                  <b className="text-2xl">
                    76%
                  </b>

                  <span className="text-[10px] text-gray-500">
                    Total Inventory
                  </span>

                </div>

              </div>

              <div className="space-y-3 text-xs text-gray-300">

                <p>● Gold Jewellery — 66.9%</p>
                <p>● Diamond Jewellery — 17.2%</p>
                <p>● Silver Items — 10.5%</p>
                <p>● Platinum Items — 5.4%</p>

              </div>

            </div>

            <Link
              href="/inventory"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#725516] px-4 py-2 text-xs text-[#e6b82d] hover:bg-[#2a2413]"
            >
              View Details
              <ArrowUpRight size={14} />
            </Link>

          </Panel>

          {/* TRANSACTIONS */}
          <Panel title="Recent Transaction Logs">

            <div className="space-y-3 text-xs">

              {[
                ["10/11/2023", "Customer A", "Sale", "$280.00"],
                ["10/11/2023", "Customer B", "Purchase", "$80.00"],
                ["10/11/2023", "Customer B", "Sale", "$290.00"],
                ["10/11/2023", "Customer A", "Purchase", "$20.00"],
                ["10/11/2023", "Customer D", "Sale", "$100.00"],
              ].map((row, index) => (

                <div
                  key={index}
                  className="grid grid-cols-4 border-b border-[#282317] pb-2 text-gray-400"
                >
                  <span>{row[0]}</span>
                  <span>{row[1]}</span>
                  <span>{row[2]}</span>
                  <span className="text-right text-[#dcb12d]">
                    {row[3]}
                  </span>
                </div>

              ))}

            </div>

          </Panel>

          {/* BRANCH PERFORMANCE */}
          <Panel title="Branch Performance">

            <div className="space-y-4">

              {[
                ["Surat Branch", "$4,25,850", "18.2%"],
                ["Mumbai Branch", "$2,85,650", "14.5%"],
                ["Delhi Branch", "$2,35,400", "10.3%"],
                ["Vadodara Branch", "$1,80,350", "8.9%"],
                ["Rajkot Branch", "$1,58,900", "6.4%"],
              ].map((branch) => (

                <div key={branch[0]}>

                  <div className="mb-1 flex justify-between text-xs">

                    <span>
                      {branch[0]}
                    </span>

                    <span className="text-gray-400">
                      {branch[1]}
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#29271d]">

                    <div
                      className="h-2 rounded-full bg-[#d6a91f]"
                      style={{
                        width: `${Math.min(
                          parseFloat(branch[2]) * 4,
                          100
                        )}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </Panel>

        </div>

        {/* ROW 4 */}
        <div className="grid gap-5 xl:grid-cols-3">

          {/* STOCK ALERTS */}
          <Panel
            title="Current Stock Alerts"
            className="xl:col-span-2"
          >

            <div className="space-y-3">

              {[
                "18K Diamond Rings - 3 units left",
                "24K Gold Chains - 5 units left",
                "18K Diamond Rings - 3 units left",
                "24K Gold Chains - 5 units left",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-[#302918] bg-[#15150f] px-4 py-3"
                >

                  <div className="flex items-center gap-3">

                    <AlertTriangle
                      size={17}
                      className="text-[#e1b22a]"
                    />

                    <span className="text-sm text-gray-300">
                      {item}
                    </span>

                  </div>

                  <Link
                    href="/inventory/low-stock"
                    className="rounded-lg border border-[#725516] px-3 py-1 text-xs text-[#e1b22a] hover:bg-[#2a2413]"
                  >
                    Reorder
                  </Link>

                </div>

              ))}

            </div>

          </Panel>

          {/* REMINDERS */}
          <Panel title="Today's Reminders">

            <div className="space-y-4">

              {[
                ["Customer Meeting", "02:00 PM"],
                ["Vendor Payment", "03:30 PM"],
                ["Stock Physical Counting", "05:00 PM"],
                ["Gold Rate Update", "06:00 PM"],
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between text-xs"
                >

                  <div className="flex items-center gap-3">

                    <Clock3
                      size={15}
                      className="text-[#e1b22a]"
                    />

                    <span className="text-gray-300">
                      {item[0]}
                    </span>

                  </div>

                  <span className="text-gray-500">
                    {item[1]}
                  </span>

                </div>

              ))}

            </div>

          </Panel>

        </div>

        {/* SHORTCUTS */}
        <Panel title="Business & Management Shortcuts">

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">

            {shortcuts.map(
              ([title, subtitle, href]) => (

                <Link
                  key={title}
                  href={href}
                  className="rounded-lg border border-[#302918] bg-[#15150f] p-3 transition hover:border-[#b38a1d] hover:bg-[#1b180d]"
                >

                  <p className="text-xs font-medium text-gray-200">
                    {title}
                  </p>

                  <p className="mt-1 text-[10px] text-gray-500">
                    {subtitle}
                  </p>

                </Link>

              )
            )}

          </div>

        </Panel>

        {/* AI ASSISTANT */}
        <div className="rounded-xl border border-[#58451b] bg-[#17150e] p-5">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#9a751b] bg-[#29200c]">

                <Bot
                  size={34}
                  className="text-[#e6b82d]"
                />

              </div>

              <div>

                <h3 className="text-lg font-semibold text-[#e6b82d]">
                  LUXRAY AI ASSISTANT
                </h3>

                <p className="text-sm text-gray-400">
                  Your intelligent business assistant is ready to help.
                </p>

              </div>

            </div>

            <button className="flex items-center justify-center gap-2 rounded-lg border border-[#9a751b] px-5 py-3 text-sm text-[#e6b82d] hover:bg-[#2a2413]">
              Start Conversation
              <ArrowUpRight size={16} />
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}