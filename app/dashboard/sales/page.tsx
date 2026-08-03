"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  BarChart3,
  IndianRupee,
  Package,
  ShoppingBag,
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
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    async function fetchSalesData() {
      setIsLoading(true);
      try {
        const res = await fetch('/api/sales?range=' + encodeURIComponent(timeFilter));
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
  }, [timeFilter]);

  const handleExport = async () => {
    try {
      setIsExporting(true);
      const res = await fetch('/api/sales/export?range=' + encodeURIComponent(timeFilter));
      if (res.ok) {
        const json = await res.json();
        exportToCsv(`sales_report_${timeFilter.replace(' ', '_').toLowerCase()}.csv`, json.data);
      } else {
        alert("Failed to fetch export data");
      }
    } catch (e) {
      console.error(e);
      alert("Error exporting");
    } finally {
      setIsExporting(false);
    }
  };

  if (isLoading && !data) {
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
            <div className="relative">
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                disabled={isLoading}
                className="rounded-xl border border-border-theme bg-background-secondary/50 backdrop-blur-md px-5 py-2.5 text-sm font-medium text-text-primary outline-none transition-all hover:border-accent-gold/50 cursor-pointer appearance-none disabled:opacity-50"
              >
                <option value="Today">Today</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
                <option value="This Year">This Year</option>
                <option value="All Time">All Time</option>
              </select>
              {isLoading && <Loader2 className="absolute right-2 top-2.5 animate-spin text-accent-gold" size={16} />}
            </div>

            <button onClick={handleExport} disabled={isExporting} className="rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2">
              {isExporting ? <Loader2 className="animate-spin" size={16} /> : null}
              Export Report
            </button>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="TOTAL SALES"
            value={`₹ ${m.totalSales.toLocaleString()}`}
            icon={<IndianRupee size={22} />}
          />
          <StatCard
            title="TOTAL ORDERS"
            value={m.totalOrders.toLocaleString()}
            icon={<ShoppingBag size={22} />}
          />
          <StatCard
            title="AVERAGE ORDER VALUE"
            value={`₹ ${m.averageOrderValue.toLocaleString(undefined, {maximumFractionDigits: 0})}`}
            icon={<BarChart3 size={22} />}
          />
          <StatCard
            title="NEW CUSTOMERS"
            value={m.newCustomers.toString()}
            icon={<Users size={22} />}
          />
        </div>

        {/* LOWER CONTENT */}
        <div className="mt-8 grid gap-6">
          
          {/* TOP PRODUCTS */}
          <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl">
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
                      <td colSpan={3} className="px-5 py-8 text-center text-text-secondary">No products sold in this period.</td>
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
               <p className="text-text-secondary text-sm">No recent transactions in this period.</p>
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

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode; }) {
  return (
    <div className="group rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl transition-all hover:border-accent-gold/30 hover:bg-text-primary/5 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 bg-accent-gold/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gold/10 text-accent-gold ring-1 ring-accent-gold/20 shadow-inner">
            {icon}
          </div>
        </div>

        <p className="mt-6 text-xs font-semibold tracking-wider text-text-secondary group-hover:text-text-primary/70 transition-colors">{title}</p>
        <h3 className="mt-1 text-3xl font-bold text-text-primary tracking-tight">{value}</h3>
      </div>
    </div>
  );
}