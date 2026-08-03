"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardList,
  CalendarDays,
  ChevronDown,
  IndianRupee,
  PackageCheck,
  ShoppingCart,
  Users,
  Loader2
} from "lucide-react";

export default function PurchaseDashboard() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await fetch('/api/purchase/dashboard');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (error) {
        console.error("Failed to fetch purchase dashboard data", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDashboard();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const m = data?.metrics || { totalPurchaseValue: 0, totalOrders: 0, pendingOrders: 0, totalSuppliers: 0 };
  const recentOrders = data?.recentOrders || [];

  return (
    <div className="relative min-h-[80vh] p-6 text-text-primary">
      {/* Decorative Blur */}
      <div className="absolute top-[0%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-gold/80">Purchase Module</p>
            <h1 className="mt-1 text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent">Purchase Dashboard</h1>
            <p className="mt-1 text-sm text-text-secondary">Monitor supplier orders, goods receipt, and expenses.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-border-theme bg-background-secondary/50 backdrop-blur-md px-5 py-2.5 text-sm font-medium text-text-primary transition-all hover:border-accent-gold/50">
              <CalendarDays size={16} className="text-accent-gold" />
              This Month
              <ChevronDown size={15} />
            </button>
            <Link href="/purchase/purchase-order" className="rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]">
              New Purchase Order
            </Link>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="TOTAL PURCHASE VALUE"
            value={`₹ ${m.totalPurchaseValue.toLocaleString()}`}
            change="Approved only"
            icon={<IndianRupee size={22} />}
          />
          <StatCard
            title="TOTAL PURCHASE ORDERS"
            value={m.totalOrders.toLocaleString()}
            change="All time"
            icon={<ShoppingCart size={22} />}
          />
          <StatCard
            title="PENDING APPROVALS"
            value={m.pendingOrders.toLocaleString()}
            change="Requires action"
            icon={<ClipboardList size={22} />}
          />
          <StatCard
            title="ACTIVE SUPPLIERS"
            value={m.totalSuppliers.toString()}
            change="Registered"
            icon={<Users size={22} />}
          />
        </div>

        {/* RECENT ORDERS */}
        <div className="mt-8 rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/20 via-transparent to-transparent"></div>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold tracking-wide text-text-primary">RECENT PURCHASE ORDERS</h2>
              <p className="mt-0.5 text-xs text-text-secondary">Latest orders sent to suppliers</p>
            </div>
            <span className="cursor-pointer text-xs font-semibold text-accent-gold hover:text-yellow-400 transition-colors">View All →</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-5 py-4">PO NUMBER</th>
                  <th className="px-5 py-4">SUPPLIER</th>
                  <th className="px-5 py-4">DATE</th>
                  <th className="px-5 py-4">STATUS</th>
                  <th className="px-5 py-4 text-right">AMOUNT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-8 text-center text-text-secondary">No purchase orders found.</td>
                  </tr>
                ) : (
                  recentOrders.map((order: any, idx: number) => (
                    <tr key={idx} className="transition-colors hover:bg-text-primary/5 group">
                      <td className="px-5 py-4">
                        <span className="font-mono text-text-primary/70 group-hover:text-text-primary transition-colors">{order.id}</span>
                      </td>
                      <td className="px-5 py-4 font-semibold text-text-primary">{order.supplier}</td>
                      <td className="px-5 py-4 text-text-secondary">{new Date(order.date).toLocaleDateString()}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${
                          order.status === 'APPROVED' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                          order.status === 'PENDING' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                          'bg-text-primary/10 text-text-primary/70 border-border-theme'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right font-bold text-accent-gold">{order.amount}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
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
          <span className="flex items-center gap-1 rounded-full border border-border-theme bg-text-primary/5 px-3 py-1.5 text-xs font-medium text-text-primary/60">
            {change}
          </span>
        </div>

        <p className="mt-6 text-xs font-semibold tracking-wider text-text-secondary group-hover:text-text-primary/70 transition-colors">{title}</p>
        <h3 className="mt-1 text-3xl font-bold text-text-primary tracking-tight">{value}</h3>
      </div>
    </div>
  );
}