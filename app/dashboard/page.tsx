import {
  Receipt,
  Users,
  FileText,
  Wallet,
  IndianRupee,
  Box,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CalendarDays,
  Bot,
  ArrowUpRight,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { 
  getDashboardStats, 
  getSalesByCategory, 
  getLiveMetalRates, 
  getRecentTransactions, 
  getLowStockProducts 
} from "@/lib/actions/dashboard.actions";
import { CustomizeDashboardButton, AskAIAssistantButton } from "./DashboardActionButtons";

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

export default async function Home() {
  const [statsData, categoryData, metalRates, transactions, lowStock] = await Promise.all([
    getDashboardStats(),
    getSalesByCategory(),
    getLiveMetalRates(),
    getRecentTransactions(),
    getLowStockProducts()
  ]);

  const fallbackStats = {
    totalSales: 0, totalOrders: 0, totalCustomers: 0, pendingOrders: 0, lowStockItems: 0, outstandingAmount: 0,
    changes: { sales: 0, orders: 0, customers: 0, pending: 0, lowStock: 0, outstanding: 0 }
  };
  const ds = statsData || fallbackStats;

  const formatIN = (num: number) => new Intl.NumberFormat('en-IN').format(num);

  const stats = [
    {
      title: "TOTAL SALES REVENUE",
      value: `₹ ${formatIN(ds.totalSales)}`,
      change: `${ds.changes.sales}%`,
      positive: ds.changes.sales >= 0,
      icon: IndianRupee,
    },
    {
      title: "TOTAL ORDERS",
      value: formatIN(ds.totalOrders),
      change: `${ds.changes.orders}%`,
      positive: ds.changes.orders >= 0,
      icon: Receipt,
    },
    {
      title: "TOTAL CUSTOMERS",
      value: formatIN(ds.totalCustomers),
      change: `${ds.changes.customers}%`,
      positive: ds.changes.customers >= 0,
      icon: Users,
    },
    {
      title: "PENDING ORDERS",
      value: formatIN(ds.pendingOrders),
      change: `${ds.changes.pending}%`,
      positive: ds.changes.pending <= 0,
      icon: FileText,
    },
    {
      title: "LOW STOCK ITEMS",
      value: formatIN(ds.lowStockItems),
      change: `${ds.changes.lowStock}%`,
      positive: ds.changes.lowStock <= 0,
      icon: Box,
    },
    {
      title: "OUTSTANDING AMOUNT",
      value: `₹ ${formatIN(ds.outstandingAmount)}`,
      change: `${ds.changes.outstanding}%`,
      positive: ds.changes.outstanding <= 0,
      icon: Wallet,
    },
  ];

  const catVal = categoryData || { total: 0, gold: 0, diamond: 0, silver: 0, platinum: 0 };
  const shortTotal = catVal.total > 100000 ? `₹${(catVal.total/100000).toFixed(1)}L` : `₹${formatIN(catVal.total)}`;

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
                  <span className="text-[10px] text-text-secondary">THIS MONTH</span>
                </div>
                <p className="mt-4 text-[10px] text-text-secondary">{stat.title}</p>
                <h3 className="mt-1 text-xl font-semibold">{stat.value}</h3>
                <div className="mt-2 flex items-center gap-1 text-xs">
                  {stat.positive ? (
                    <TrendingUp size={13} className="text-green-400" />
                  ) : (
                    <TrendingDown size={13} className="text-red-400" />
                  )}
                  <span className={stat.positive ? "text-green-400" : "text-red-400"}>
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
        {/* SALES OVERVIEW */}
        <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-accent-gold">TOTAL SALES REVENUE OVERVIEW</h3>
              <select className="rounded-md border border-border-theme bg-background-tertiary px-2 py-1 text-xs text-text-secondary">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-2xl font-semibold">₹ {formatIN(ds.totalSales)}</span>
              <span className="text-xs text-green-400">▲ {ds.changes.sales}%</span>
            </div>
            <div className="mt-7 flex h-44 items-end gap-2 border-b border-l border-border-theme px-3">
              {[30, 42, 35, 55, 42, 65, 48, 75, 58, 82, 65, 90].map((height, index) => (
                <div key={index} className="flex-1 rounded-t bg-accent-gold" style={{ height: `${height}%` }} />
              ))}
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
                <p className="font-semibold">{shortTotal}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <p>🟡 Gold Jewellery <span className="ml-5 text-text-secondary">{catVal.gold}%</span></p>
              <p>⚪ Diamond <span className="ml-10 text-text-secondary">{catVal.diamond}%</span></p>
              <p>⚫ Silver <span className="ml-12 text-text-secondary">{catVal.silver}%</span></p>
              <p>🟤 Platinum <span className="ml-7 text-text-secondary">{catVal.platinum}%</span></p>
            </div>
          </div>
        </div>

        {/* METAL RATES */}
        <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-accent-gold">LIVE METAL RATES</h3>
              <span className="cursor-pointer text-xs text-accent-gold">View All →</span>
            </div>
            <div className="mt-5 space-y-5">
              {[
                ["Gold (24K)", `₹ ${formatIN(metalRates?.gold24k || 7620)} /gm`, "▲ 0.35%"],
                ["Gold (22K)", `₹ ${formatIN(metalRates?.gold22k || 7010)} /gm`, "▲ 0.30%"],
                ["Silver", `₹ ${formatIN(metalRates?.silver || 85)} /gm`, "▲ 0.20%"],
                ["Platinum", `₹ ${formatIN(metalRates?.platinum || 3450)} /gm`, "▼ 0.15%"],
              ].map((rate) => (
                <div key={rate[0]} className="flex items-center justify-between border-b border-border-theme pb-3">
                  <div>
                    <p className="text-sm">{rate[0]}</p>
                    <p className="mt-1 font-semibold text-accent-gold">{rate[1]}</p>
                  </div>
                  <span className={rate[2].startsWith('▲') ? "text-xs text-green-400" : "text-xs text-red-400"}>{rate[2]}</span>
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
                <p className="text-[10px] text-text-secondary">Total Inventory Value</p>
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
              <h3 className="font-semibold text-accent-gold">RECENT TRANSACTION LOGS</h3>
              <span className="text-xs text-accent-gold">View All →</span>
            </div>
            <div className="mt-5 space-y-4 text-xs">
              {transactions && transactions.length > 0 ? (
                transactions.map((tx) => (
                  <div key={tx.id} className="grid grid-cols-3 border-b border-border-theme pb-3">
                    <span>{tx.customer?.name || 'Walk-in Customer'}</span>
                    <span className="text-text-secondary">Sale</span>
                    <span className="text-right text-accent-gold">₹ {formatIN(tx.totalAmount)}</span>
                  </div>
                ))
              ) : (
                <div className="text-text-secondary py-5 text-center">No recent transactions</div>
              )}
            </div>
          </div>
        </div>

        {/* STOCK ALERTS */}
        <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-accent-gold">CURRENT STOCK ALERTS</h3>
              <AlertTriangle size={18} className="text-accent-gold" />
            </div>
            <div className="mt-5 space-y-3">
              {lowStock && lowStock.length > 0 ? (
                lowStock.map((alert) => (
                  <div key={alert.id} className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-secondary p-3 text-xs">
                    <AlertTriangle size={15} className="text-accent-gold" />
                    {alert.product.name} - {alert.quantity} units left
                  </div>
                ))
              ) : (
                <div className="text-text-secondary py-5 text-center">Stock levels are healthy</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BRANCH PERFORMANCE */}
      <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-accent-gold">BRANCH PERFORMANCE</h3>
            <p className="mt-1 text-xs text-text-secondary">Performance overview across all branches</p>
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
            <div key={branch[0]} className="rounded-lg border border-border-theme bg-background-secondary p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{branch[0]}</p>
                <ArrowUpRight size={16} className="text-green-400" />
              </div>
              <p className="mt-3 text-lg font-semibold text-accent-gold">{branch[1]}</p>
              <div className="mt-3 h-2 rounded-full bg-background-tertiary">
                <div className="h-2 rounded-full bg-accent-gold" style={{ width: branch[2] }} />
              </div>
              <p className="mt-2 text-xs text-text-secondary">Performance: {branch[2]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SHORTCUTS */}
      <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-accent-gold">BUSINESS & MANAGEMENT SHORTCUTS</h3>
          <CustomizeDashboardButton />
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
              <h3 className="font-semibold text-accent-gold">Luxury AI Assistant</h3>
              <p className="mt-1 text-sm text-text-secondary">Your intelligent business assistant is ready to help.</p>
            </div>
          </div>
          <AskAIAssistantButton />
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-border-theme bg-background-secondary p-4 relative z-10">
            <p className="text-xs text-text-secondary">AI INSIGHT</p>
            <p className="mt-2 text-sm text-text-secondary">Sales are expected to increase by 18% next month.</p>
          </div>
          <div className="rounded-lg border border-border-theme bg-background-secondary p-4 relative z-10">
            <p className="text-xs text-text-secondary">AI RECOMMENDATION</p>
            <p className="mt-2 text-sm text-text-secondary">Consider restocking Gold Chain 22K products.</p>
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
