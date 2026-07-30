"use client";

import {
  LayoutDashboard,
  Receipt,
  Package,
  ShoppingCart,
  Users,
  Factory,
  Wrench,
  CircleDollarSign,
  Wallet,
  UserRound,
  FileText,
  BarChart3,
  Settings,
  Database,
  Search,
  Bell,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Box,
  IndianRupee,
  CalendarDays,
  Bot,
  ArrowUpRight,
  RefreshCw,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "TOTAL SALES REVENUE",
    value: "₹ 12,85,250",
    change: "18.2%",
    positive: true,
    icon: IndianRupee,
  },
  {
    title: "TOTAL ORDERS",
    value: "1,248",
    change: "12.5%",
    positive: true,
    icon: Receipt,
  },
  {
    title: "TOTAL CUSTOMERS",
    value: "856",
    change: "8.6%",
    positive: true,
    icon: Users,
  },
  {
    title: "PENDING ORDERS",
    value: "32",
    change: "2.4%",
    positive: false,
    icon: FileText,
  },
  {
    title: "LOW STOCK ITEMS",
    value: "18",
    change: "6.7%",
    positive: false,
    icon: Box,
  },
  {
    title: "OUTSTANDING AMOUNT",
    value: "₹ 4,65,320",
    change: "15.3%",
    positive: false,
    icon: Wallet,
  },
];

function MiniChart() {
  return (
    <div className="mt-3 flex h-10 items-end gap-1">
      {[20, 28, 18, 32, 24, 42, 30, 48, 36, 55, 45, 65].map((height, index) => (
        <div
          key={index}
          className="w-1.5 rounded-t bg-accent-gold"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="p-5">
      {/* STATS */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] text-text-secondary">
                    THIS MONTH
                  </span>
                </div>
                <p className="mt-4 text-[10px] text-text-secondary">
                  {stat.title}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{stat.value}</h3>
                <div className="mt-2 flex items-center gap-1 text-xs">
                  {stat.positive ? (
                    <TrendingUp size={13} className="text-green-400" />
                  ) : (
                    <TrendingDown size={13} className="text-red-400" />
                  )}
                  <span
                    className={
                      stat.positive ? "text-green-400" : "text-red-400"
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="text-text-secondary">vs Yesterday</span>
                </div>
                <MiniChart />
              </div>
            </div>
          );
        })}
      </div>

      {/* MIDDLE SECTION */}
      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        {/* SALES */}
        <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-accent-gold">
                TOTAL SALES REVENUE OVERVIEW
              </h3>
              <select className="rounded-md border border-border-theme bg-background-tertiary px-2 py-1 text-xs text-text-secondary">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-2xl font-semibold">₹ 12,85,250</span>
              <span className="text-xs text-green-400">▲ 18.2%</span>
            </div>
            <div className="mt-7 flex h-44 items-end gap-2 border-b border-l border-border-theme px-3">
              {[30, 42, 35, 55, 42, 65, 48, 75, 58, 82, 65, 90].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-accent-gold"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>
        </div>

        {/* SALES CATEGORY */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <h3 className="font-semibold text-accent-gold">SALES BY CATEGORY</h3>
          <div className="mt-7 flex items-center gap-8">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-[22px] border-accent-gold">
              <div className="text-center">
                <p className="text-xs text-text-secondary">Total</p>
                <p className="font-semibold">₹12.8L</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <p>
                🟡 Gold Jewellery{" "}
                <span className="ml-5 text-text-secondary">55%</span>
              </p>
              <p>
                ⚪ Diamond{" "}
                <span className="ml-10 text-text-secondary">20%</span>
              </p>
              <p>
                ⚫ Silver <span className="ml-12 text-text-secondary">10%</span>
              </p>
              <p>
                🟤 Platinum <span className="ml-7 text-text-secondary">5%</span>
              </p>
            </div>
          </div>
        </div>

        {/* METAL RATES */}
        <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-accent-gold">
                LIVE METAL RATES
              </h3>
              <span className="cursor-pointer text-xs text-accent-gold">
                View All →
              </span>
            </div>
            <div className="mt-5 space-y-5">
              {[
                ["Gold (24K)", "₹ 7,620 /gm", "▲ 0.35%"],
                ["Silver", "₹ 85 /gm", "▲ 0.20%"],
                ["Platinum", "₹ 3,450 /gm", "▼ 0.15%"],
              ].map((rate) => (
                <div
                  key={rate[0]}
                  className="flex items-center justify-between border-b border-border-theme pb-3"
                >
                  <div>
                    <p className="text-sm">{rate[0]}</p>
                    <p className="mt-1 font-semibold text-accent-gold">
                      {rate[1]}
                    </p>
                  </div>
                  <span className="text-xs text-green-400">{rate[2]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        {/* INVENTORY */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <h3 className="font-semibold text-accent-gold">INVENTORY OVERVIEW</h3>
          <div className="mt-6 flex items-center gap-5">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-[20px] border-accent-gold">
              <div className="text-center">
                <p className="text-2xl font-bold">76%</p>
                <p className="text-[10px] text-text-secondary">
                  Total Inventory Value
                </p>
              </div>
            </div>
            <div className="space-y-3 text-xs text-text-secondary">
              <p>🟡 Gold Jewellery — 66.9%</p>
              <p>⚪ Diamond Jewellery — 17.2%</p>
              <p>⚫ Silver Items — 10.5%</p>
              <p>🟤 Platinum Items — 5.4%</p>
            </div>
          </div>
        </div>

        {/* TRANSACTIONS */}
        <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-accent-gold">
                RECENT TRANSACTION LOGS
              </h3>
              <span className="text-xs text-accent-gold">View All →</span>
            </div>
            <div className="mt-5 space-y-4 text-xs">
              {[
                ["Customer A", "Sale", "₹280.00"],
                ["Customer B", "Purchase", "₹80.00"],
                ["Customer C", "Sale", "₹290.00"],
                ["Customer D", "Purchase", "₹200.00"],
              ].map((transaction, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 border-b border-border-theme pb-3"
                >
                  <span>{transaction[0]}</span>
                  <span className="text-text-secondary">{transaction[1]}</span>
                  <span className="text-right text-accent-gold">
                    {transaction[2]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STOCK ALERTS */}
        <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-accent-gold">
                CURRENT STOCK ALERTS
              </h3>
              <AlertTriangle size={18} className="text-accent-gold" />
            </div>
            <div className="mt-5 space-y-3">
              {[
                "18K Diamond Rings - 3 units left",
                "24K Gold Chains - 5 units left",
                "Gold Bangles - 2 units left",
                "Diamond Earrings - 4 units left",
              ].map((alert) => (
                <div
                  key={alert}
                  className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-secondary p-3 text-xs"
                >
                  <AlertTriangle size={15} className="text-accent-gold" />
                  {alert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BRANCH PERFORMANCE */}
      <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-accent-gold">
              BRANCH PERFORMANCE
            </h3>
            <p className="mt-1 text-xs text-text-secondary">
              Performance overview across all branches
            </p>
          </div>
          <MapPin size={20} className="text-accent-gold" />
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Surat Branch", "₹ 5,85,250", "92%"],
            ["Mumbai Branch", "₹ 3,25,800", "78%"],
            ["Delhi Branch", "₹ 2,45,600", "69%"],
            ["Rajkot Branch", "₹ 1,28,600", "58%"],
          ].map((branch) => (
            <div
              key={branch[0]}
              className="rounded-lg border border-border-theme bg-background-secondary p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{branch[0]}</p>
                <ArrowUpRight size={16} className="text-green-400" />
              </div>
              <p className="mt-3 text-lg font-semibold text-accent-gold">
                {branch[1]}
              </p>
              <div className="mt-3 h-2 rounded-full bg-background-tertiary">
                <div
                  className="h-2 rounded-full bg-accent-gold"
                  style={{ width: branch[2] }}
                />
              </div>
              <p className="mt-2 text-xs text-text-secondary">
                Performance: {branch[2]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* LOW STOCK + REMINDERS */}
      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        {/* LOW STOCK ALERTS */}
        <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-accent-gold">
                  LOW STOCK ALERTS
                </h3>
                <p className="mt-1 text-xs text-text-secondary">
                  Items that require immediate restocking
                </p>
              </div>
              <AlertTriangle size={20} className="text-accent-gold" />
            </div>
            <div className="mt-5 space-y-3">
              {[
                ["Gold Chain 22K", "3 units left"],
                ["Gold Bangles 22K", "5 units left"],
                ["Diamond Earrings", "2 units left"],
              ].map((item) => (
                <div
                  key={item[0]}
                  className="flex items-center justify-between rounded-lg border border-border-theme bg-background-secondary p-4"
                >
                  <div>
                    <p className="text-sm font-medium">{item[0]}</p>
                    <p className="mt-1 text-xs text-red-400">{item[1]}</p>
                  </div>
                  <button className="rounded-md border border-border-theme px-3 py-2 text-xs text-accent-gold transition hover:bg-background-tertiary">
                    Reorder
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* REMINDERS */}
        <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-accent-gold">
                  TODAY'S REMINDERS
                </h3>
                <p className="mt-1 text-xs text-text-secondary">
                  Important activities for today
                </p>
              </div>
              <CalendarDays size={20} className="text-accent-gold" />
            </div>
            <div className="mt-5 space-y-3">
              {[
                ["10:00 AM", "Customer Meeting"],
                ["01:00 PM", "Vendor Payment"],
                ["03:00 PM", "Physical Stock Counting"],
                ["05:30 PM", "Gold Rate Update"],
              ].map((reminder) => (
                <div
                  key={reminder[0]}
                  className="flex items-center gap-4 rounded-lg border border-border-theme bg-background-secondary p-4"
                >
                  <div className="flex items-center gap-2 text-xs text-accent-gold">
                    <Clock size={15} />
                    {reminder[0]}
                  </div>
                  <div className="h-6 w-px bg-border-theme" />
                  <span className="text-sm text-text-secondary">
                    {reminder[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SHORTCUTS */}
      <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-accent-gold">
            BUSINESS & MANAGEMENT SHORTCUTS
          </h3>
          <button className="rounded-md border border-border-theme px-3 py-2 text-xs text-accent-gold hover:bg-background-tertiary">
            Customize Dashboard
          </button>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {[
            "Daily Activity Report",
            "Label in Stock",
            "Label Summary",
            "Order Query",
            "Outstanding",
            "Customer Ledger",
            "Metal Balance Sheet",
            "Backup & Restore",
            "Toolbar Setup",
            "Shortcut Setup",
            "More Reports",
          ].map((shortcut) => (
            <div
              key={shortcut}
              className="cursor-pointer rounded-lg border border-border-theme bg-background-secondary p-3 text-xs text-text-secondary transition hover:border-accent-gold hover:text-accent-gold"
            >
              {shortcut}
            </div>
          ))}
        </div>
      </div>

      {/* LUXURY AI ASSISTANT */}
      <div className="mt-6 relative overflow-hidden rounded-2xl border border-accent-gold/30 bg-gradient-to-r from-background-secondary to-background-tertiary p-6 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
        <div className="absolute right-0 top-0 w-64 h-64 bg-accent-gold/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-theme bg-background-tertiary text-accent-gold">
              <Bot size={25} />
            </div>
            <div>
              <h3 className="font-semibold text-accent-gold">
                Luxury AI Assistant
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Your intelligent business assistant is ready to help.
              </p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-lg bg-accent-gold px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500">
            <Bot size={17} />
            Ask AI Assistant
          </button>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-border-theme bg-background-secondary p-4 relative z-10">
            <p className="text-xs text-text-secondary">AI INSIGHT</p>
            <p className="mt-2 text-sm text-text-secondary">
              Sales are expected to increase by 18% next month.
            </p>
          </div>
          <div className="rounded-lg border border-border-theme bg-background-secondary p-4 relative z-10">
            <p className="text-xs text-text-secondary">AI RECOMMENDATION</p>
            <p className="mt-2 text-sm text-text-secondary">
              Consider restocking Gold Chain 22K products.
            </p>
          </div>
          <div className="rounded-lg border border-border-theme bg-background-secondary p-4 relative z-10">
            <p className="text-xs text-text-secondary">AI STATUS</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-green-400">
              <CheckCircle2 size={16} />
              System Analysis Active
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
