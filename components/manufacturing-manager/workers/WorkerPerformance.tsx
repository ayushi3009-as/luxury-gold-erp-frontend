"use client";

import { useEffect, useState } from "react";
import { Award, Briefcase, Clock3, TrendingUp, Gem, Users } from "lucide-react";
import api from "@/lib/api";

export default function WorkerPerformance() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    api.get("/worker-analytics").then((res) => {
      if (res.data?.success) {
        setData(res.data.performance);
      }
    }).catch(console.error);
  }, []);

  const performanceData = [
    {
      title: "Performance Score",
      value: data ? `${data.score}%` : "0%",
      icon: Award,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Completed Jobs",
      value: data ? data.completedJobs : "0",
      icon: Briefcase,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Average Time",
      value: data ? data.avgTime : "0 Days",
      icon: Clock3,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Efficiency",
      value: data ? `${data.efficiency}%` : "0%",
      icon: TrendingUp,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Gold Handled",
      value: data ? data.goldHandled : "0 Kg",
      icon: Gem,
      color: "text-[#D4AF37]",
      bg: "bg-[#D4AF37]/10",
    },
    {
      title: "Active Workers",
      value: data ? data.activeWorkers : "0",
      icon: Users,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {performanceData.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-border-theme bg-background-secondary p-6 transition hover:border-[#D4AF37]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary">{item.title}</p>
                <h2 className="mt-3 text-3xl font-bold text-text-primary">{item.value}</h2>
              </div>
              <div className={`rounded-xl p-4 ${item.bg}`}>
                <Icon size={28} className={item.color} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}