"use client";

import { useState, useEffect } from "react";
import { Wrench, Loader2, Calendar, ClipboardList, Clock, CheckCircle, PackageCheck } from "lucide-react";
import Link from "next/link";

export default function RepairDashboard() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/repair')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const metrics = data?.metrics || { totalRepairs: 0, pending: 0, inProgress: 0, completed: 0, delivered: 0 };
  const orders = data?.orders || [];

  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold bg-clip-text text-transparent flex items-center gap-3">
              <Wrench size={36} className="text-accent-gold" />
              Repair Dashboard
            </h1>
            <p className="mt-2 text-text-secondary">Monitor repair operations, statuses, and customer deliveries.</p>
          </div>
          <Link 
            href="/repair/add"
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
          >
            <PlusIcon />
            New Repair Entry
          </Link>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-5 mb-10">
          <MetricCard icon={<ClipboardList />} title="Total Repairs" value={metrics.totalRepairs} color="text-white" />
          <MetricCard icon={<Clock />} title="Pending" value={metrics.pending} color="text-red-400" bg="bg-red-500/10" iconColor="text-red-500" />
          <MetricCard icon={<Wrench />} title="In Progress" value={metrics.inProgress} color="text-yellow-400" bg="bg-yellow-500/10" iconColor="text-yellow-500" />
          <MetricCard icon={<CheckCircle />} title="Completed" value={metrics.completed} color="text-green-400" bg="bg-green-500/10" iconColor="text-green-500" />
          <MetricCard icon={<PackageCheck />} title="Delivered" value={metrics.delivered} color="text-blue-400" bg="bg-blue-500/10" iconColor="text-blue-500" />
        </div>

        {/* TABLE */}
        <div className="rounded-2xl border border-white/5 bg-[#111111]/60 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/40 via-transparent to-transparent"></div>
          
          <h2 className="text-lg font-bold text-accent-gold mb-6 tracking-wider uppercase flex items-center gap-2">
            <Calendar size={18} /> Recent Repair Orders
          </h2>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-text-secondary uppercase">
                <tr>
                  <th className="px-6 py-4">Repair No.</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Item</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-text-secondary">
                      No repairs found. Click "New Repair Entry" to start.
                    </td>
                  </tr>
                ) : (
                  orders.map((order: any) => (
                    <tr key={order.id} className="transition-colors hover:bg-white/5 group">
                      <td className="px-6 py-4 font-mono font-medium text-white/70 group-hover:text-accent-gold">{order.repairNumber}</td>
                      <td className="px-6 py-4 font-bold text-white">{order.customerName}</td>
                      <td className="px-6 py-4 text-text-secondary">{order.itemName}</td>
                      <td className="px-6 py-4 text-text-secondary">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={order.status} />
                      </td>
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

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  );
}

function MetricCard({ icon, title, value, color, bg = "bg-accent-gold/10", iconColor = "text-accent-gold" }: any) {
  return (
    <div className="bg-[#111111]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${bg} ${iconColor}`}>
          {icon}
        </div>
        <h3 className="text-[10px] tracking-widest uppercase font-semibold text-text-secondary">{title}</h3>
      </div>
      <p className={`text-4xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  let colors = "bg-white/10 text-white border-white/20";
  if (status === 'PENDING') colors = "bg-red-500/10 text-red-500 border-red-500/20";
  if (status === 'IN_PROGRESS') colors = "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
  if (status === 'COMPLETED') colors = "bg-green-500/10 text-green-500 border-green-500/20";
  if (status === 'DELIVERED') colors = "bg-blue-500/10 text-blue-500 border-blue-500/20";

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${colors}`}>
      {status.replace('_', ' ')}
    </span>
  );
}