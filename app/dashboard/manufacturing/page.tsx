"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Factory,
  PackageCheck,
  Users,
  Wrench,
  Loader2
} from "lucide-react";

export default function ManufacturingDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/manufacturing')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const totalProduction = orders.length;
  const pendingJobs = orders.filter(o => o.status !== 'COMPLETED').length;
  const completedJobs = orders.filter(o => o.status === 'COMPLETED').length;

  return (
    <div className="min-h-screen bg-background-primary p-5 text-text-primary">

      {/* HEADER */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-text-secondary">Dashboard / Manufacturing</p>
          <h1 className="mt-2 text-3xl font-bold">Manufacturing Dashboard</h1>
          <p className="mt-1 text-text-secondary">Monitor production, job cards, workers and manufacturing operations.</p>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Factory size={22} />
          </div>
          <p className="relative z-10 mt-5 text-xs text-text-secondary">TOTAL PRODUCTION ORDERS</p>
          <h3 className="relative z-10 mt-1 text-2xl font-bold">{loading ? <Loader2 className="animate-spin" size={24} /> : totalProduction}</h3>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Wrench size={22} />
          </div>
          <p className="relative z-10 mt-5 text-xs text-text-secondary">PENDING JOB CARDS</p>
          <h3 className="relative z-10 mt-1 text-2xl font-bold">{loading ? <Loader2 className="animate-spin" size={24} /> : pendingJobs}</h3>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <PackageCheck size={22} />
          </div>
          <p className="relative z-10 mt-5 text-xs text-text-secondary">COMPLETED ITEMS</p>
          <h3 className="relative z-10 mt-1 text-2xl font-bold">{loading ? <Loader2 className="animate-spin" size={24} /> : completedJobs}</h3>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Users size={22} />
          </div>
          <p className="relative z-10 mt-5 text-xs text-text-secondary">ACTIVE WORKERS</p>
          <h3 className="relative z-10 mt-1 text-2xl font-bold">12</h3>
        </div>
      </div>

      {/* RECENT JOB CARDS */}
      <div className="mt-6 rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-accent-gold">RECENT JOB CARDS (LIVE DATA)</h2>
          <span className="text-xs text-accent-gold cursor-pointer">View All →</span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {loading ? (
            <div className="col-span-full py-10 flex justify-center">
               <Loader2 className="animate-spin text-accent-gold" size={30} />
            </div>
          ) : orders.length === 0 ? (
            <div className="col-span-full py-10 text-center text-text-secondary">
               No manufacturing orders found. Start a new production job.
            </div>
          ) : (
            orders.slice(0, 8).map((job) => (
              <div
                key={job.id}
                className="rounded-xl border border-border-theme bg-background-tertiary p-5 hover:border-accent-gold/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary font-mono bg-background-primary px-2 py-1 rounded-md border border-border-theme">
                    {job.orderNumber}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-semibold border ${
                      job.status === "COMPLETED"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : "bg-accent-gold/10 text-accent-gold border-accent-gold/20"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                <h3 className="mt-4 font-bold text-lg text-text-primary">
                  {job.product?.name || 'Unknown Product'}
                </h3>
                <p className="mt-2 text-xs text-text-secondary flex items-center gap-2">
                  <Wrench size={14} className="text-accent-gold" />
                  Qty: {job.quantity} | {new Date(job.startDate).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}