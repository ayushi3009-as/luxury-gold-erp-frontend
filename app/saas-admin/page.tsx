"use client";

import { useEffect, useState } from "react";
import { Users, Server, DollarSign, Activity, Loader2, ArrowRight, Sparkles, Building2, Globe, CreditCard } from "lucide-react";
import Link from "next/link";

export default function SaaSAdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalClients: 0,
    activeSubscriptions: 0,
    mrr: 0
  });
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/saas/clients");
        const data = await res.json();
        
        if (Array.isArray(data)) {
          setClients(data);
          setStats({
            totalClients: data.length,
            activeSubscriptions: data.filter((c: any) => c.subscriptions?.some((s: any) => s.status === 'ACTIVE')).length,
            mrr: data.reduce((acc: number, c: any) => {
              const activeSub = c.subscriptions?.find((s: any) => s.status === 'ACTIVE');
              return acc + (activeSub?.plan?.pricePerMonth || 0);
            }, 0)
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-8 pb-20 animate-fade-in text-text-primary space-y-8 relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-background-secondary via-background-primary to-background-secondary border border-border-theme p-8 shadow-[0_0_50px_rgba(212,175,55,0.03)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 blur-3xl rounded-full" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles size={14} /> SaaS Control Center
            </div>
            <h1 className="text-4xl font-bold text-text-primary mb-2 tracking-tight">
              Master Dashboard
            </h1>
            <p className="text-text-secondary text-lg max-w-xl">
              Monitor your global jewellery ERP network, manage client subscriptions, and track recurring revenue in real-time.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/saas-admin/clients" className="bg-background-tertiary border border-border-theme text-text-primary hover:text-text-primary px-6 py-3 rounded-xl font-medium transition-all hover:border-accent-gold shadow-sm flex items-center gap-2">
              <Building2 size={18} /> Manage Clients
            </Link>
            <button className="bg-gradient-to-r from-accent-gold to-yellow-500 text-black px-6 py-3 rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-2">
              <Globe size={18} /> Deploy New Tenant
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center h-64 bg-background-secondary/50 rounded-3xl border border-border-theme backdrop-blur-sm">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-gold/20 blur-xl rounded-full animate-pulse" />
            <Loader2 className="w-10 h-10 animate-spin text-accent-gold relative z-10" />
          </div>
          <p className="mt-4 text-text-secondary font-medium tracking-wide">Syncing Global Network...</p>
        </div>
      ) : (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="group bg-background-secondary/50 backdrop-blur-md border border-border-theme hover:border-blue-500/30 rounded-3xl p-6 shadow-sm transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full group-hover:bg-blue-500/10 transition-colors" />
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-500">
                  <Building2 size={24} />
                </div>
                <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                  <ArrowRight size={12} className="-rotate-45 mr-1" /> +2 this month
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-text-primary tracking-tight">{stats.totalClients}</h3>
                <p className="text-sm text-text-secondary font-medium mt-1">Total Active Tenants</p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="group bg-background-secondary/50 backdrop-blur-md border border-border-theme hover:border-green-500/30 rounded-3xl p-6 shadow-sm transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-2xl rounded-full group-hover:bg-green-500/10 transition-colors" />
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-green-500/10 rounded-2xl border border-green-500/20 text-green-500">
                  <Activity size={24} />
                </div>
                <span className="flex items-center text-xs font-bold text-text-secondary bg-background-tertiary px-2 py-1 rounded-full border border-border-theme">
                  98% Uptime
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-text-primary tracking-tight">{stats.activeSubscriptions}</h3>
                <p className="text-sm text-text-secondary font-medium mt-1">Live Subscriptions</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="group bg-background-secondary/50 backdrop-blur-md border border-border-theme hover:border-accent-gold/30 rounded-3xl p-6 shadow-sm transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-2xl rounded-full group-hover:bg-accent-gold/10 transition-colors" />
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-accent-gold/10 rounded-2xl border border-accent-gold/20 text-accent-gold">
                  <DollarSign size={24} />
                </div>
                <span className="flex items-center text-xs font-bold text-accent-gold bg-accent-gold/10 px-2 py-1 rounded-full border border-accent-gold/20">
                  Monthly MRR
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-200 tracking-tight">
                  ₹{stats.mrr.toLocaleString()}
                </h3>
                <p className="text-sm text-text-secondary font-medium mt-1">Total Recurring Revenue</p>
              </div>
            </div>
          </div>

          {/* Recent Clients */}
          <div className="bg-background-secondary/40 backdrop-blur-md border border-border-theme rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="p-6 border-b border-border-theme/50 flex justify-between items-center bg-background-secondary/50">
              <h3 className="font-bold text-xl text-text-primary flex items-center gap-2">
                <Users className="text-accent-gold" size={20} />
                Recent Deployments
              </h3>
              <Link href="/saas-admin/clients" className="text-sm text-accent-gold hover:text-text-primary font-medium transition-colors flex items-center gap-1 group">
                View Network <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-tertiary/30">
                    <th className="p-5 text-xs uppercase tracking-widest text-text-secondary font-bold border-b border-border-theme/50">Enterprise Client</th>
                    <th className="p-5 text-xs uppercase tracking-widest text-text-secondary font-bold border-b border-border-theme/50">Mapped Domain</th>
                    <th className="p-5 text-xs uppercase tracking-widest text-text-secondary font-bold border-b border-border-theme/50">Active Plan</th>
                    <th className="p-5 text-xs uppercase tracking-widest text-text-secondary font-bold border-b border-border-theme/50 text-right">System Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-theme/50">
                  {clients.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-12 text-center">
                        <div className="flex flex-col items-center justify-center text-text-secondary">
                          <Globe size={40} className="mb-4 opacity-20" />
                          <p className="text-lg">No clients deployed yet.</p>
                          <p className="text-sm mt-1">Your network is currently empty.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    clients.slice(0, 5).map((client: any) => (
                      <tr key={client.id} className="hover:bg-background-tertiary/40 transition-colors group">
                        <td className="p-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-background-tertiary border border-border-theme flex items-center justify-center text-accent-gold font-bold text-lg group-hover:border-accent-gold/50 transition-colors">
                              {client.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold text-text-primary">{client.name}</p>
                              <p className="text-xs text-text-secondary flex items-center gap-1 mt-0.5">
                                <CreditCard size={12} /> {client.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-5">
                          <a href={`https://${client.domain}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-sm text-accent-gold/80 hover:text-accent-gold hover:underline bg-accent-gold/5 px-3 py-1.5 rounded-lg border border-accent-gold/10 transition-colors">
                            <Globe size={14} /> {client.domain}
                          </a>
                        </td>
                        <td className="p-5">
                          <span className="font-medium text-sm text-text-primary/90">
                            {client.subscriptions?.[0]?.plan?.name || "Trial Mode"}
                          </span>
                        </td>
                        <td className="p-5 text-right">
                          {client.subscriptions?.[0]?.status === 'ACTIVE' ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Operational
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              Suspended
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
