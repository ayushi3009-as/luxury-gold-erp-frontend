"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  IndianRupee,
  CreditCard,
  TrendingUp,
  Wallet,
  Loader2,
  RefreshCw,
  Clock,
  ShoppingCart,
} from "lucide-react";

export default function FinanceDashboard() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchDashboardData() {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/finance/dashboard?t=${Date.now()}`);
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (isLoading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-primary">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const d = data || {
    totalRevenue: 0, totalExpenses: 0, netProfit: 0, cashBalance: 0,
    totalSalesCount: 0, monthlyData: [], expenseBreakdown: [], recentTransactions: [],
    profitMargin: "0.0", pendingReceivables: 0, pendingReceivablesCount: 0,
    pendingPayables: 0, pendingPayablesCount: 0,
  };

  const formatCurrency = (v: number) => `₹ ${Number(v).toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-background-primary p-5 text-text-primary">
      {/* HEADER */}
      <div className="mb-6 flex justify-between items-end">
        <div>
          <p className="text-sm text-text-secondary">Dashboard / Finance</p>
          <h1 className="mt-2 text-3xl font-bold">Finance Dashboard</h1>
          <p className="mt-1 text-text-secondary">Revenue, expenses and profit from sales & purchases.</p>
        </div>
        <button onClick={fetchDashboardData} className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-secondary px-4 py-2 text-sm text-accent-gold hover:bg-background-tertiary transition-colors">
          <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* KPI CARDS */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="TOTAL REVENUE" value={formatCurrency(d.totalRevenue)} subtitle={`${d.totalSalesCount} invoices`} positive icon={<IndianRupee size={22} />} />
        <KpiCard title="TOTAL EXPENSES" value={formatCurrency(d.totalExpenses)} subtitle="Purchases + Expenses" positive={false} icon={<CreditCard size={22} />} />
        <KpiCard title="NET PROFIT" value={formatCurrency(d.netProfit)} subtitle={`${d.profitMargin}% margin`} positive={d.netProfit >= 0} icon={<TrendingUp size={22} />} />
        <KpiCard title="CASH BALANCE" value={formatCurrency(d.cashBalance)} subtitle="Received - Paid" positive={d.cashBalance >= 0} icon={<Wallet size={22} />} />
      </div>

      {/* PENDING AMOUNTS */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <Clock size={24} />
          </div>
          <div className="flex-1">
            <p className="text-xs text-text-secondary uppercase tracking-wider">Pending Receivables</p>
            <p className="text-xl font-bold mt-1">{formatCurrency(d.pendingReceivables)}</p>
          </div>
          <span className="text-xs text-text-secondary bg-background-tertiary px-3 py-1 rounded-full">{d.pendingReceivablesCount} invoices</span>
        </div>
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
            <ShoppingCart size={24} />
          </div>
          <div className="flex-1">
            <p className="text-xs text-text-secondary uppercase tracking-wider">Pending Payables</p>
            <p className="text-xl font-bold mt-1">{formatCurrency(d.pendingPayables)}</p>
          </div>
          <span className="text-xs text-text-secondary bg-background-tertiary px-3 py-1 rounded-full">{d.pendingPayablesCount} purchases</span>
        </div>
      </div>

      {/* REVENUE CHART + PROFIT MARGIN */}
      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        {/* REVENUE CHART */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-accent-gold">MONTHLY REVENUE</h2>
              <p className="mt-1 text-xs text-text-secondary">Last 6 months from sales invoices</p>
            </div>
            <span className="flex items-center gap-1 text-xs text-green-500">
              <TrendingUp size={14} />
              {d.totalRevenue > 0 ? 'Active' : 'No Data'}
            </span>
          </div>

          {d.monthlyData.length > 0 ? (
            <div className="mt-8 flex h-56 items-end gap-4 border-b border-l border-border-theme px-5">
              {d.monthlyData.map((item: any) => (
                <div key={item.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2 group relative">
                  <div className="absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-background-tertiary border border-border-theme text-xs rounded px-2 py-1 whitespace-nowrap">
                    {formatCurrency(item.amount)}
                  </div>
                  <div className="w-full max-w-[42px] rounded-t-md bg-accent-gold hover:bg-accent-gold/80 transition-all duration-300 cursor-pointer" style={{ height: `${Math.max(item.value, 4)}%` }} />
                  <span className="text-xs text-text-secondary">{item.month}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 h-56 flex items-center justify-center text-sm text-text-secondary">No invoice data yet</div>
          )}
        </div>

        {/* PROFIT MARGIN */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <h2 className="font-semibold text-accent-gold">PROFIT MARGIN</h2>
          <div className="mt-8 flex justify-center">
            <div className="relative flex h-44 w-44 items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="16" className="text-background-tertiary" />
                <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="16" className="text-accent-gold" strokeDasharray={`${Number(d.profitMargin) * 4.4} 440`} strokeLinecap="round" />
              </svg>
              <div className="text-center z-10">
                <p className="text-3xl font-bold">{d.profitMargin}%</p>
                <p className="text-xs text-text-secondary">Net Profit</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between text-sm">
            <div>
              <p className="text-text-secondary">Revenue</p>
              <p className="mt-1 font-semibold">{formatCurrency(d.totalRevenue)}</p>
            </div>
            <div className="text-right">
              <p className="text-text-secondary">Profit</p>
              <p className="mt-1 font-semibold text-accent-gold">{formatCurrency(d.netProfit)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXPENSE BREAKDOWN */}
      {d.expenseBreakdown.length > 0 && (
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <h2 className="font-semibold text-accent-gold mb-5">PURCHASE BREAKDOWN BY CATEGORY</h2>
          <div className="space-y-4">
            {d.expenseBreakdown.map((exp: any, idx: number) => {
              const pct = d.totalExpenses > 0 ? ((exp.amount / d.totalExpenses) * 100).toFixed(1) : "0";
              return (
                <div key={idx}>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">{exp.category}</span>
                    <span className="text-accent-gold">{pct}% · {formatCurrency(exp.amount)}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-background-tertiary">
                    <div className="h-2 rounded-full bg-accent-gold transition-all duration-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* RECENT TRANSACTIONS */}
      <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
        <h2 className="font-semibold text-accent-gold mb-4">RECENT TRANSACTIONS</h2>
        {d.recentTransactions.length > 0 ? (
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {d.recentTransactions.map((tx: any) => (
              <div key={tx.id} className="rounded-lg border border-border-theme bg-background-primary p-4 hover:border-accent-gold/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-text-secondary">{tx.txId}</span>
                  {tx.isPositive ? (
                    <ArrowUpRight size={16} className="text-green-500" />
                  ) : (
                    <ArrowDownRight size={16} className="text-red-400" />
                  )}
                </div>
                <p className="mt-3 text-sm font-medium">{tx.type}</p>
                <p className={`mt-1 font-semibold ${tx.isPositive ? "text-green-500" : "text-red-400"}`}>
                  {tx.isPositive ? "+" : "-"}{formatCurrency(tx.amount)}
                </p>
                <p className="mt-1 text-[10px] text-text-secondary">{new Date(tx.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-secondary text-center py-6">No transactions yet. Create a sales invoice or purchase order to see data here.</p>
        )}
      </div>
    </div>
  );
}

function KpiCard({ title, value, subtitle, positive, icon }: { title: string; value: string; subtitle: string; positive: boolean; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-theme bg-background-tertiary text-accent-gold">
          {icon}
        </div>
        <span className={`flex items-center gap-1 text-xs ${positive ? "text-green-500" : "text-red-400"}`}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        </span>
      </div>
      <p className="mt-5 text-xs text-text-secondary uppercase tracking-wider">{title}</p>
      <h3 className="mt-1 text-2xl font-semibold">{value}</h3>
      <p className="mt-2 text-xs text-text-secondary">{subtitle}</p>
    </div>
  );
}