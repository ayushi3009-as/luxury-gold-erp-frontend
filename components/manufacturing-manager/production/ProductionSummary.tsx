"use client";

import {
  PackageCheck,
  Clock3,
  Factory,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const cards = [
  {
    title: "Total Orders",
    value: "245",
    icon: PackageCheck,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Work In Progress",
    value: "68",
    icon: Factory,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Completed Orders",
    value: "177",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Active Workers",
    value: "34",
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Avg. Production Time",
    value: "3.2 Days",
    icon: Clock3,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Efficiency",
    value: "96%",
    icon: TrendingUp,
    color: "text-[#D4AF37]",
    bg: "bg-[#D4AF37]/10",
  },
];

export default function ProductionSummary() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 transition hover:border-[#D4AF37]"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-400">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {card.value}
                </h2>

              </div>

              <div
                className={`rounded-xl p-4 ${card.bg}`}
              >
                <Icon
                  className={card.color}
                  size={28}
                />
              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}