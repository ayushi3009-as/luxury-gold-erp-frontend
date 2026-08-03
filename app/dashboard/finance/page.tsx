"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  CreditCard,
  IndianRupee,
  PieChart,
  TrendingUp,
  Wallet,
  Loader2,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

export default function FinanceDashboard() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchDashboardData() {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/finance/dashboard?t=${Date.now()}`);
      if (res.status === 401) {
        console.warn('Unauthorized fetch to finance dashboard');
      }
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

  // Fallback for empty DB
  const dashboardData = data || {
    totalRevenue: 0,
    totalExpenses: 0,
    netProfit: 0,
    cashBalance: 0,
    monthlyData: [],
    expenseBreakdown: [],
    accounts: [],
    recentTransactions: [],
    profitMargin: "0.0"
  };

  return (
    <div className="min-h-screen bg-background-primary p-5 text-text-primary">
      {/* HEADER */}
      <div className="mb-6 flex justify-between items-end">
        <div>
          <p className="text-sm text-text-secondary">Dashboard / Finance</p>
          <h1 className="mt-2 text-3xl font-bold">Finance Dashboard</h1>
          <p className="mt-1 text-text-secondary">Monitor revenue, expenses, profit and financial performance.</p>
        </div>
        <button onClick={fetchDashboardData} className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-secondary px-4 py-2 text-sm text-accent-gold hover:bg-background-tertiary transition-colors">
          <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* KPI CARDS */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <FinanceCard
          title="TOTAL REVENUE"
          value={`₹ ${dashboardData.totalRevenue.toLocaleString("en-IN")}`}
          change="0.0%"
          positive
          icon={<IndianRupee size={22} />}
        />
        <FinanceCard
          title="TOTAL EXPENSES"
          value={`₹ ${dashboardData.totalExpenses.toLocaleString("en-IN")}`}
          change="0.0%"
          positive={false}
          icon={<CreditCard size={22} />}
        />
        <FinanceCard
          title="NET PROFIT"
          value={`₹ ${dashboardData.netProfit.toLocaleString("en-IN")}`}
          change="0.0%"
          positive={dashboardData.netProfit >= 0}
          icon={<TrendingUp size={22} />}
        />
        <FinanceCard
          title="CASH BALANCE"
          value={`₹ ${dashboardData.cashBalance.toLocaleString("en-IN")}`}
          change="0.0%"
          positive
          icon={<Wallet size={22} />}
        />
      </div>

      {/* REVENUE + PROFIT */}
      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        {/* REVENUE CHART */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-accent-gold">REVENUE & PROFIT OVERVIEW</h2>
              <p className="mt-1 text-xs text-text-secondary">Monthly financial performance</p>
            </div>
            <span className="flex items-center gap-1 text-xs text-green-400">
              <TrendingUp size={14} />
              {dashboardData.totalRevenue > 0 ? 'Active' : 'No Data'}
            </span>
          </div>

          <div className="mt-8 flex h-64 items-end gap-4 border-b border-l border-border-theme px-5">
            {dashboardData.monthlyData.map((item: any) => (
              <div key={item.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="w-full max-w-[42px] rounded-t-md bg-accent-gold transition-all duration-1000" style={{ height: `${item.value}%` }} />
                <span className="text-xs text-text-secondary">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PROFIT MARGIN */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <h2 className="font-semibold text-accent-gold">PROFIT MARGIN</h2>
          <div className="mt-8 flex justify-center">
            <div className="flex h-44 w-44 items-center justify-center rounded-full border-[22px] border-accent-gold">
              <div className="text-center">
                <p className="text-3xl font-bold">{dashboardData.profitMargin}%</p>
                <p className="text-xs text-text-secondary">Net Profit</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between text-sm">
            <div>
              <p className="text-text-secondary">Revenue</p>
              <p className="mt-1 font-semibold">₹ {(dashboardData.totalRevenue / 100000).toFixed(2)}L</p>
            </div>
            <div className="text-right">
              <p className="text-text-secondary">Profit</p>
              <p className="mt-1 font-semibold text-accent-gold">₹ {(dashboardData.netProfit / 100000).toFixed(2)}L</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXPENSES + ACCOUNTS */}
      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        {/* EXPENSE BREAKDOWN */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-accent-gold">EXPENSE BREAKDOWN</h2>
            <PieChart size={20} className="text-[#d9a928]" />
          </div>
          <div className="mt-6 space-y-5">
            {dashboardData.expenseBreakdown.length > 0 ? dashboardData.expenseBreakdown.map((exp: any, idx: number) => {
              const percentage = dashboardData.totalExpenses > 0 ? ((exp.amount / dashboardData.totalExpenses) * 100).toFixed(1) : "0";
              return (
                <ExpenseRow key={idx} label={exp.category} value={`₹ ${exp.amount.toLocaleString("en-IN")}`} percentage={`${percentage}%`} />
              );
            }) : (
              <p className="text-sm text-text-secondary text-center py-4">No expenses recorded.</p>
            )}
          </div>
        </div>

        {/* FINANCIAL ACCOUNTS */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-accent-gold">FINANCIAL ACCOUNTS</h2>
            <Banknote size={20} className="text-[#d9a928]" />
          </div>
          <div className="mt-5 space-y-4">
            {dashboardData.accounts.length > 0 ? dashboardData.accounts.map((acc: any) => (
              <div key={acc.name} className="flex items-center justify-between border-b border-border-theme pb-3">
                <span className="text-sm text-text-secondary">{acc.name}</span>
                <span className="font-semibold text-accent-gold">₹ {acc.balance.toLocaleString("en-IN")}</span>
              </div>
            )) : (
              <p className="text-sm text-text-secondary text-center py-4">No financial accounts found.</p>
            )}
          </div>
        </div>
      </div>

      {/* RECENT FINANCIAL TRANSACTIONS */}
      <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-accent-gold">RECENT FINANCIAL TRANSACTIONS</h2>
          <Link href="/dashboard" className="text-xs text-[#d9a928] hover:underline">View All →</Link>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {dashboardData.recentTransactions.length > 0 ? dashboardData.recentTransactions.map((transaction: any) => (
            <div key={transaction.id} className="rounded-lg border border-border-theme bg-background-secondary p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">{transaction.txId}</span>
                {transaction.isPositive ? (
                  <ArrowUpRight size={16} className="text-green-400" />
                ) : (
                  <ArrowDownRight size={16} className="text-red-400" />
                )}
              </div>
              <p className="mt-3 text-sm truncate">{transaction.type}</p>
              <p className={`mt-2 font-semibold ${transaction.isPositive ? "text-green-400" : "text-red-400"}`}>
                {transaction.isPositive ? "+" : "-"}₹ {transaction.amount.toLocaleString("en-IN")}
              </p>
            </div>
          )) : (
            <p className="text-sm text-text-secondary text-center py-4 col-span-4">No recent transactions.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function FinanceCard({ title, value, change, positive, icon }: { title: string; value: string; change: string; positive: boolean; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-theme bg-background-tertiary text-accent-gold">
          {icon}
        </div>
        <span className={`flex items-center gap-1 text-xs ${positive ? "text-green-400" : "text-red-400"}`}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </span>
      </div>
      <p className="mt-5 text-xs text-text-secondary">{title}</p>
      <h3 className="mt-1 text-2xl font-semibold">{value}</h3>
      <p className="mt-2 text-xs text-text-secondary">Since last month</p>
    </div>
  );
}

function ExpenseRow({ label, value, percentage }: { label: string; value: string; percentage: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="text-text-secondary">{label}</span>
        <span className="text-accent-gold">{percentage}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-background-tertiary">
        <div className="h-2 rounded-full bg-accent-gold" style={{ width: percentage }} />
      </div>
      <p className="mt-1 text-xs text-text-secondary">{value}</p>
    </div>
  );
}