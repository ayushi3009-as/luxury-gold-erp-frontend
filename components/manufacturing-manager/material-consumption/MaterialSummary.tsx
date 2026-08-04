"use client";

import {
  Coins,
  Gem,
  Diamond,
  Package,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "Gold Used",
    value: "447.5 g",
    icon: Coins,
    color: "text-yellow-400",
  },
  {
    title: "Silver Used",
    value: "715 g",
    icon: Package,
    color: "text-text-secondary",
  },
  {
    title: "Diamond Used",
    value: "136 pcs",
    icon: Gem,
    color: "text-blue-400",
  },
  {
    title: "Stone Used",
    value: "288 pcs",
    icon: Diamond,
    color: "text-green-400",
  },
  {
    title: "Efficiency",
    value: "97.8%",
    icon: TrendingUp,
    color: "text-[#D4AF37]",
  },
];

export default function MaterialSummary() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-border-theme bg-background-secondary p-6 hover:border-[#D4AF37]"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-text-secondary">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-text-primary">
                  {card.value}
                </h2>

              </div>

              <Icon
                size={30}
                className={card.color}
              />

            </div>

          </div>
        );
      })}

    </div>
  );
}