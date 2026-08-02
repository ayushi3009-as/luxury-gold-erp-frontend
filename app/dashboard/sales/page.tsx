"use client";

import { useState, useEffect } from "react";
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
  Loader2
} from "lucide-react";
import { exportToCsv } from "@/lib/exportCsv";
import { useRouter } from "next/navigation";

export default function SalesDashboard() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState("This Month");

  useEffect(() => {
    async function fetchSalesData() {
      try {
        const res = await fetch('/api/sales');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (error) {
        console.error("Failed to fetch sales data", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSalesData();
  }, []);

  const salesDataChart = [
    { day: "Mon", value: 45 },
    { day: "Tue", value: 65 },
    { day: "Wed", value: 52 },
    { day: "Thu", value: 78 },
    { day: "Fri", value: 60 },
    { day: "Sat", value: 92 },
    { day: "Sun", value: 72 },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-primary">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const m = data?.metrics || { totalSales: 0, totalOrders: 0, averageOrderValue: 0, newCustomers: 0 };
  const topProducts = data?.topProducts || [];
  const recentTransactions = data?.recentTransactions || [];

  return (
    <main className="min-h-screen bg-background-primary text-text-primary relative overflow-hidden p-6">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-gold/80">Dashboard / Sales</p>
            <h1 className="mt-1 text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent">Sales Dashboard</h1>
            <p className="mt-1 text-sm text-text-secondary">Monitor your jewellery sales performance and revenue.</p>
          </div>

          <div className="flex items-center gap-3">
            <select 
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="rounded-xl border border-border-theme bg-background-secondary/50 backdrop-blur-md px-5 py-2.5 text-sm font-medium text-text-primary outline-none transition-all hover:border-accent-gold/50 cursor-pointer appearance-none"
            >
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="This Year">This Year</option>
            </select>

            <button onClick={() => exportToCsv('sales_report.csv', recentTransactions)} className="rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]">
              Export Report
            </button>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="TOTAL SALES"
            value={`₹ ${m.totalSales.toLocaleString()}`}
            change="18.2%"
            icon={<IndianRupee size={22} />}
          />
          <StatCard
            title="TOTAL ORDERS"
            value={m.totalOrders.toLocaleString()}
            change="12.5%"
            icon={<ShoppingBag size={22} />}
          />
          <StatCard
            title="AVERAGE ORDER VALUE"
            value={`₹ ${m.averageOrderValue.toLocaleString(undefined, {maximumFractionDigits: 0})}`}
            change="8.4%"
            icon={<BarChart3 size={22} />}
          />
          <StatCard
            title="NEW CUSTOMERS"
            value={m.newCustomers.toString()}
            change="14.6%"
            icon={<Users size={22} />}
          />
        </div>

        {/* CHART + TARGET */}
        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          {/* SALES TREND */}
          <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl xl:col-span-2 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/20 via-transparent to-transparent"></div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold tracking-wide text-text-primary">SALES TREND</h2>
                <p className="mt-0.5 text-xs text-text-secondary">Weekly sales performance</p>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                <TrendingUp size={14} />
                18.2% Growth
              </span>
            </div>

            <div className="mt-10 flex h-64 items-end gap-4 border-b border-l border-border-theme px-5">
              {salesDataChart.map((item) => (
                <div key={item.day} className="group flex h-full flex-1 flex-col items-center justify-end gap-3">
                  <div
                    className="w-full max-w-[45px] rounded-t-xl bg-gradient-to-t from-accent-gold/50 to-accent-gold transition-all duration-500 group-hover:from-yellow-400/60 group-hover:to-yellow-400 shadow-[0_0_10px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                    style={{ height: `${item.value}%` }}
                  />
                  <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SALES TARGET */}
          <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>
            <div>
              <h2 className="text-lg font-bold tracking-wide text-text-primary">SALES TARGET</h2>
              <p className="mt-0.5 text-xs text-text-secondary">Monthly goal progression</p>
            </div>

            <div className="mt-8 flex justify-center relative">
              {/* Decorative glows for the circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-gold/10 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-[24px] border-border-theme shadow-inner">
                {/* Fake SVG Circle for Target (simulated with CSS for now) */}
                <svg className="absolute top-[-24px] left-[-24px] w-[192px] h-[192px] -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" fill="none" className="text-accent-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - (Math.min(m.totalSales/2000000, 1)))} />
                </svg>

                <div className="text-center z-10">
                  <p className="text-4xl font-bold text-text-primary bg-gradient-to-br from-text-primary to-text-secondary bg-clip-text">
                    {Math.min(Math.round((m.totalSales / 2000000) * 100), 100)}%
                  </p>
                  <p className="text-xs font-semibold tracking-wider text-accent-gold mt-1">ACHIEVED</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between text-sm bg-background-tertiary p-4 rounded-xl border border-border-theme">
              <div>
                <p className="text-xs font-medium text-text-secondary">Target</p>
                <p className="mt-1 font-bold text-text-primary">₹ 20,00,000</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-text-secondary">Achieved</p>
                <p className="mt-1 font-bold text-accent-gold">₹ {m.totalSales.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER CONTENT */}
        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          
          {/* TOP PRODUCTS */}
          <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl xl:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold tracking-wide text-text-primary">TOP SELLING PRODUCTS</h2>
              <button onClick={() => router.push('/reports/sales')} className="cursor-pointer text-xs font-semibold text-accent-gold hover:text-yellow-400 transition-colors">View All →</button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary">
                  <tr>
                    <th className="px-5 py-4">PRODUCT</th>
                    <th className="px-5 py-4">UNITS SOLD</th>
                    <th className="px-5 py-4 text-right">REVENUE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-theme">
                  {topProducts.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-5 py-8 text-center text-text-secondary">No products sold yet.</td>
                    </tr>
                  ) : (
                    topProducts.map((product: any, idx: number) => (
                      <tr key={idx} className="transition-colors hover:bg-text-primary/5">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold shadow-[0_0_10px_rgba(212,175,55,0.1)] ring-1 ring-accent-gold/20">
                              <Package size={18} />
                            </div>
                            <span className="font-semibold text-text-primary">{product.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 font-medium text-text-primary/80">{product.units}</td>
                        <td className="px-5 py-4 text-right font-bold text-accent-gold">{product.revenue}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* QUICK SALES SUMMARY */}
          <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl">
            <h2 className="text-lg font-bold tracking-wide text-text-primary">SALES SUMMARY</h2>
            
            <div className="mt-8 space-y-6">
              <SummaryRow label="Gold Jewellery" value="₹ 7,05,000" percent="55%" />
              <SummaryRow label="Diamond Jewellery" value="₹ 3,20,000" percent="25%" />
              <SummaryRow label="Silver Items" value="₹ 1,28,525" percent="10%" />
              <SummaryRow label="Other Products" value="₹ 1,31,725" percent="10%" />
            </div>
          </div>
        </div>

        {/* RECENT SALES */}
        <div className="mt-6 rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"></div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold tracking-wide text-text-primary">RECENT TRANSACTIONS</h2>
            <button onClick={() => router.push('/reports/sales')} className="cursor-pointer text-xs font-semibold text-accent-gold hover:text-yellow-400 transition-colors">View All →</button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {recentTransactions.length === 0 ? (
               <p className="text-text-secondary text-sm">No recent transactions.</p>
            ) : (
              recentTransactions.map((sale: any, idx: number) => (
                <div key={idx} className="group rounded-xl border border-border-theme bg-background-tertiary p-5 transition-all hover:bg-text-primary/5 hover:border-accent-gold/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-md bg-text-primary/10 px-2.5 py-1 text-xs font-mono font-medium text-text-primary/70 group-hover:text-text-primary transition-colors">{sale.id}</span>
                    <ArrowUpRight size={18} className="text-green-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm font-semibold text-text-primary">{sale.customerName}</p>
                  <p className="mt-1 text-xs text-text-secondary">{sale.productName}</p>
                  <p className="mt-4 text-lg font-bold text-accent-gold">{sale.amount}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({ title, value, change, icon }: { title: string; value: string; change: string; icon: React.ReactNode; }) {
  return (
    <div className="group rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl transition-all hover:border-accent-gold/30 hover:bg-text-primary/5 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 bg-accent-gold/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gold/10 text-accent-gold ring-1 ring-accent-gold/20 shadow-inner">
            {icon}
          </div>
          <span className="flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-400">
            <TrendingUp size={14} />
            {change}
          </span>
        </div>

        <p className="mt-6 text-xs font-semibold tracking-wider text-text-secondary group-hover:text-text-primary/70 transition-colors">{title}</p>
        <h3 className="mt-1 text-3xl font-bold text-text-primary tracking-tight">{value}</h3>
        <p className="mt-2 text-xs font-medium text-text-secondary/60">Compared to last month</p>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, percent }: { label: string; value: string; percent: string; }) {
  return (
    <div className="group">
      <div className="flex justify-between text-sm font-medium mb-2">
        <span className="text-text-primary/80 group-hover:text-text-primary transition-colors">{label}</span>
        <span className="text-accent-gold font-bold">{percent}</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-background-tertiary overflow-hidden border border-border-theme">
        <div className="h-full rounded-full bg-gradient-to-r from-accent-gold/70 to-yellow-300 shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-1000 ease-out" style={{ width: percent }} />
      </div>
      <p className="mt-2 text-xs font-semibold text-text-secondary">{value}</p>
    </div>
  );
}