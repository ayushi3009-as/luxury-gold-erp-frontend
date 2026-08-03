"use client";

import {
  ClipboardList,
  Factory,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    title: "Active Job Cards",
    value: "126",
    icon: ClipboardList,
    color: "text-blue-400",
  },
  {
    title: "Work In Progress",
    value: "48",
    icon: Factory,
    color: "text-yellow-400",
  },
  {
    title: "Completed Today",
    value: "31",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    title: "Pending QC",
    value: "12",
    icon: ShieldCheck,
    color: "text-red-400",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

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

              <div className="rounded-xl bg-[#1A1A1A] p-4">
                <Icon
                  size={28}
                  className={card.color}
                />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}