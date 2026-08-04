"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import {
  PackageCheck,
  Clock3,
  Factory,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

interface ProductionOrder {
  status: string;
  quantity: number;
  completedQty: number;
  startDate: string | null;
  endDate: string | null;
}

export default function ProductionSummary() {
  const [stats, setStats] = useState({
    total: 0,
    wip: 0,
    completed: 0,
    activeWorkers: 0,
    avgTime: "0 Days",
    efficiency: "0%",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const [ordersRes, workersRes] = await Promise.all([
        api.get("/production-orders"),
        api.get("/workers").catch(() => ({ data: { data: [] } })),
      ]);

      const orders: ProductionOrder[] = ordersRes.data.data || [];
      const workers = workersRes.data?.data || [];

      let totalQty = 0;
      let totalCompleted = 0;
      let totalDays = 0;
      let completedWithDates = 0;

      orders.forEach((o) => {
        totalQty += o.quantity;
        totalCompleted += o.completedQty;

        if (o.status === "Completed" && o.startDate && o.endDate) {
          const start = new Date(o.startDate).getTime();
          const end = new Date(o.endDate).getTime();
          const diffDays = (end - start) / (1000 * 3600 * 24);
          if (diffDays >= 0) {
            totalDays += diffDays;
            completedWithDates++;
          }
        }
      });

      setStats({
        total: orders.length,
        wip: orders.filter((o) => o.status === "In Progress").length,
        completed: orders.filter((o) => o.status === "Completed").length,
        activeWorkers: workers.filter((w: any) => w.status === "Active").length,
        avgTime: completedWithDates > 0 ? `${(totalDays / completedWithDates).toFixed(1)} Days` : "-",
        efficiency: totalQty > 0 ? `${Math.round((totalCompleted / totalQty) * 100)}%` : "0%",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Total Orders",
      value: stats.total.toString(),
      icon: PackageCheck,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Work In Progress",
      value: stats.wip.toString(),
      icon: Factory,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Completed Orders",
      value: stats.completed.toString(),
      icon: CheckCircle2,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Active Workers",
      value: stats.activeWorkers.toString(),
      icon: Users,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Avg. Production Time",
      value: stats.avgTime,
      icon: Clock3,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      title: "Efficiency",
      value: stats.efficiency,
      icon: TrendingUp,
      color: "text-[#D4AF37]",
      bg: "bg-[#D4AF37]/10",
    },
  ];

  if (loading) {
    return <div className="p-6 text-text-secondary">Loading Summary...</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className="rounded-2xl border border-border-theme bg-background-secondary p-6 transition hover:border-[#D4AF37]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary">
                  {card.title}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-text-primary">
                  {card.value}
                </h2>
              </div>
              <div className={`rounded-xl p-4 ${card.bg}`}>
                <Icon className={card.color} size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}