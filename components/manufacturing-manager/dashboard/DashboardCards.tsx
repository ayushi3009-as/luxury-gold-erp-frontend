"use client";

import {
  ClipboardList,
  Factory,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

interface DashboardCardsProps {
  cardsData?: {
    activeJobCards: number;
    wip: number;
    completedToday: number;
    pendingQC: number;
  };
}

export default function DashboardCards({ cardsData }: DashboardCardsProps) {
  const cards = [
    {
      title: "Active Job Cards",
      value: cardsData?.activeJobCards || 0,
      icon: ClipboardList,
      color: "text-blue-400",
    },
    {
      title: "Work In Progress",
      value: cardsData?.wip || 0,
      icon: Factory,
      color: "text-yellow-400",
    },
    {
      title: "Completed Today",
      value: cardsData?.completedToday || 0,
      icon: CheckCircle2,
      color: "text-green-400",
    },
    {
      title: "Pending QC",
      value: cardsData?.pendingQC || 0,
      icon: ShieldCheck,
      color: "text-red-400",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
              <div className="rounded-xl bg-background-tertiary p-4">
                <Icon size={28} className={card.color} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}