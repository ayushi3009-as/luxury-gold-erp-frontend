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
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <Package className="text-accent-gold" size={28} />
              <span className="flex items-center text-sm text-green-400">
                <ArrowUpRight size={16} /> Live
              </span>
            </div>
            <p className="relative z-10 mt-5 text-sm text-text-secondary">TOTAL STOCK VALUE</p>
            <h2 className="relative z-10 mt-2 text-2xl font-bold text-accent-gold">
              ₹ {stats.totalStockValue.toLocaleString()}
            </h2>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <Warehouse className="text-accent-gold" size={28} />
              <span className="flex items-center text-sm text-green-400">
                <ArrowUpRight size={16} /> Live
              </span>
            </div>
            <p className="relative z-10 mt-5 text-sm text-text-secondary">TOTAL PRODUCTS</p>
            <h2 className="relative z-10 mt-2 text-2xl font-bold">{stats.totalProducts}</h2>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <TrendingUp className="text-accent-gold" size={28} />
            </div>
            <p className="relative z-10 mt-5 text-sm text-text-secondary">STOCK MOVEMENT (MONTH)</p>
            <h2 className="relative z-10 mt-2 text-2xl font-bold">1,248</h2>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-between">
              <AlertTriangle className={stats.lowStockItems > 0 ? "text-red-500" : "text-accent-gold"} size={28} />
              {stats.lowStockItems > 0 && <span className="text-sm text-red-500 font-semibold animate-pulse">Attention</span>}
            </div>
            <p className="relative z-10 mt-5 text-sm text-text-secondary">LOW STOCK ALERTS</p>
            <h2 className={`relative z-10 mt-2 text-2xl font-bold ${stats.lowStockItems > 0 ? "text-red-500" : ""}`}>
              {stats.lowStockItems}
            </h2>
          </div>
        </div>

        {/* INVENTORY OVERVIEW */}
        <div className="mt-6 grid gap-5 xl:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
            <div className="flex items-center justify-between relative z-10">
              <h2 className="text-lg font-semibold text-accent-gold">INVENTORY OVERVIEW</h2>
              <button className="rounded-lg border border-border-theme px-3 py-1 text-xs text-text-secondary">This Month</button>
            </div>
            <div className="relative z-10 mt-8 h-64 rounded-lg border border-dashed border-border-theme p-5">
              <div className="flex h-full items-end justify-around gap-3">
                {[45, 70, 55, 85, 65, 95, 75, 90].map((height, index) => (
                  <div key={index} className="w-8 rounded-t-md bg-accent-gold/80 hover:bg-accent-gold transition-colors" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* STOCK ALERTS */}
          <div className="relative overflow-hidden rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-accent-gold">CURRENT STOCK ALERTS</h2>
                <AlertTriangle size={20} className="text-accent-gold" />
              </div>

              <div className="mt-5 space-y-3">
                {alerts.length === 0 ? (
                  <div className="p-4 border border-border-theme rounded-lg text-center text-text-secondary text-sm">
                    No low stock alerts. All inventory is well stocked!
                  </div>
                ) : (
                  alerts.map((alert: any) => (
                    <div
                      key={alert.id}
                      className="flex items-center justify-between rounded-lg border border-border-theme bg-background-tertiary p-4 transition-colors hover:border-accent-gold/50"
                    >
                      <div>
                        <p className="text-sm font-medium">{alert.product?.name}</p>
                        <p className="mt-1 text-xs text-red-500 font-semibold">
                          Only {alert.quantity} units left (Min: {alert.minimumStock})
                        </p>
                      </div>
                      <button className="rounded-md border border-border-theme px-3 py-1 text-xs text-accent-gold hover:bg-accent-gold/10 transition-colors">
                        Reorder
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>            
    </div>
  );
}