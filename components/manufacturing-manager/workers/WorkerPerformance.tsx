"use client";

import {
  Award,
  Briefcase,
  Clock3,
  TrendingUp,
  Gem,
  Users,
} from "lucide-react";

const performanceData = [
  {
    title: "Performance Score",
    value: "96%",
    icon: Award,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Completed Jobs",
    value: "248",
    icon: Briefcase,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Average Time",
    value: "2.8 Days",
    icon: Clock3,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Efficiency",
    value: "94%",
    icon: TrendingUp,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Gold Handled",
    value: "18.6 Kg",
    icon: Gem,
    color: "text-[#D4AF37]",
    bg: "bg-[#D4AF37]/10",
  },
  {
    title: "Active Workers",
    value: "32",
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function WorkerPerformance() {
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

                <p className="text-sm text-text-secondary">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-text-primary">
                  {item.value}
                </h2>

              </div>

              <div className={`rounded-xl p-4 ${item.bg}`}>
                <Icon
                  size={28}
                  className={item.color}
                />
              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}