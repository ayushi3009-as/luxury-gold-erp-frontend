"use client";

import { useEffect, useState } from "react";
import {
  Package,
  AlertTriangle,
  Warehouse,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Loader2,
} from "lucide-react";

export default function InventoryDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStockItems: 0,
    totalStockValue: 0
  });
  const [alerts, setAlerts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch('/api/inventory');
        if (res.ok) {
          const data = await res.json();
          setStats(data.stats);
          
          // Generate alerts from items where quantity <= minimumStock
          const lowStockItems = data.items.filter((item: any) => item.quantity <= item.minimumStock);
          setAlerts(lowStockItems);
        }
      } catch (err) {
        console.error("Error fetching inventory:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background-primary flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="p-5">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm text-text-secondary">Dashboard / Inventory</p>
          <h1 className="mt-2 text-3xl font-bold">Inventory Dashboard</h1>
          <p className="mt-1 text-text-secondary">Monitor jewellery stock, warehouse and inventory performance.</p>
        </div>

        {/* KPI CARDS */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <Package className="text-accent-gold" size={28} />
              <span className="flex items-center text-sm text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                <ArrowUpRight size={14} className="mr-1"/> Live
              </span>
            </div>
            <p className="relative z-10 mt-6 text-xs font-semibold tracking-wider text-text-secondary">TOTAL STOCK VALUE</p>
            <h2 className="relative z-10 mt-2 text-3xl font-bold text-accent-gold">
              ₹ {stats.totalStockValue.toLocaleString()}
            </h2>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <Warehouse className="text-accent-gold" size={28} />
              <span className="flex items-center text-sm text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                <ArrowUpRight size={14} className="mr-1"/> Live
              </span>
            </div>
            <p className="relative z-10 mt-6 text-xs font-semibold tracking-wider text-text-secondary">TOTAL PRODUCTS</p>
            <h2 className="relative z-10 mt-2 text-3xl font-bold">{stats.totalProducts}</h2>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <AlertTriangle className={stats.lowStockItems > 0 ? "text-red-500" : "text-accent-gold"} size={28} />
              {stats.lowStockItems > 0 && <span className="text-xs text-red-400 font-semibold bg-red-500/10 px-2 py-1 rounded-full animate-pulse">Attention</span>}
            </div>
            <p className="relative z-10 mt-6 text-xs font-semibold tracking-wider text-text-secondary">LOW STOCK ALERTS</p>
            <h2 className={`relative z-10 mt-2 text-3xl font-bold ${stats.lowStockItems > 0 ? "text-red-500" : ""}`}>
              {stats.lowStockItems}
            </h2>
          </div>
        </div>

        {/* STOCK ALERTS - FULL WIDTH */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-8 shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-border-theme pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent-gold/10 rounded-lg">
                    <AlertTriangle size={24} className="text-accent-gold" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-accent-gold">CURRENT STOCK ALERTS</h2>
                    <p className="text-sm text-text-secondary mt-1">Products requiring immediate restocking</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {alerts.length === 0 ? (
                  <div className="p-8 border border-dashed border-border-theme rounded-xl text-center flex flex-col items-center justify-center bg-background-primary/50">
                    <Package size={40} className="text-text-secondary mb-3 opacity-50" />
                    <p className="text-lg font-medium text-text-primary">All good!</p>
                    <p className="text-sm text-text-secondary mt-1">No low stock alerts. Your inventory is perfectly balanced.</p>
                  </div>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {alerts.map((alert: any) => (
                      <div
                        key={alert.id}
                        className="flex flex-col justify-between rounded-xl border border-border-theme bg-background-primary p-5 transition-colors hover:border-accent-gold/50 group"
                      >
                        <div>
                          <p className="text-lg font-bold text-white group-hover:text-accent-gold transition-colors">{alert.product?.name}</p>
                          <p className="mt-2 text-sm bg-red-500/10 text-red-400 py-2 px-3 rounded-lg border border-red-500/20 inline-block font-medium">
                            {alert.quantity} units left (Min: {alert.minimumStock})
                          </p>
                        </div>
                        <div className="mt-5 pt-4 border-t border-border-theme flex justify-end">
                          <button className="rounded-lg border border-border-theme px-4 py-2 text-sm font-semibold text-accent-gold hover:bg-accent-gold hover:text-black hover:border-accent-gold transition-all">
                            Reorder Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>            
    </div>
  );
}