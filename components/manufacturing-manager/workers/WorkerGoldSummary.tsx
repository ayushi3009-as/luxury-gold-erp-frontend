"use client";

import {
  Gem,
  Package,
  RotateCcw,
  TriangleAlert,
  TrendingUp,
} from "lucide-react";

const summaryCards = [
  {
    title: "Total Gold Issued",
    value: "25.80 Kg",
    icon: Gem,
    color: "text-[#D4AF37]",
    bg: "bg-[#D4AF37]/10",
  },
  {
    title: "Gold Used",
    value: "24.35 Kg",
    icon: Package,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Gold Returned",
    value: "1.05 Kg",
    icon: RotateCcw,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Gold Wastage",
    value: "0.40 Kg",
    icon: TriangleAlert,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    title: "Recovery Rate",
    value: "98.4%",
    icon: TrendingUp,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const workers = [
  {
    id: "WR-001",
    name: "Rahul Patel",
    issued: "4.80 Kg",
    used: "4.60 Kg",
    returned: "0.15 Kg",
    wastage: "0.05 Kg",
  },
  {
    id: "WR-002",
    name: "Amit Shah",
    issued: "3.25 Kg",
    used: "3.10 Kg",
    returned: "0.10 Kg",
    wastage: "0.05 Kg",
  },
  {
    id: "WR-003",
    name: "Kiran Joshi",
    issued: "5.10 Kg",
    used: "4.95 Kg",
    returned: "0.12 Kg",
    wastage: "0.03 Kg",
  },
];

export default function WorkerGoldSummary() {
  return (
    <div className="space-y-6">

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-border-theme bg-background-secondary p-5 transition hover:border-[#D4AF37]"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-text-secondary">
                    {card.title}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-text-primary">
                    {card.value}
                  </h2>

                </div>

                <div className={`rounded-xl p-3 ${card.bg}`}>
                  <Icon
                    size={24}
                    className={card.color}
                  />
                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Summary Table */}

      <div className="overflow-x-auto rounded-2xl border border-border-theme bg-background-secondary">

        <table className="min-w-full">

          <thead className="bg-[#181818]">

            <tr>

              <th className="px-6 py-4 text-left text-text-secondary">
                Worker
              </th>

              <th className="px-6 py-4 text-left text-text-secondary">
                Gold Issued
              </th>

              <th className="px-6 py-4 text-left text-text-secondary">
                Gold Used
              </th>

              <th className="px-6 py-4 text-left text-text-secondary">
                Returned
              </th>

              <th className="px-6 py-4 text-left text-text-secondary">
                Wastage
              </th>

            </tr>

          </thead>

          <tbody>

            {workers.map((worker) => (

              <tr
                key={worker.id}
                className="border-t border-border-theme hover:bg-background-tertiary"
              >

                <td className="px-6 py-4 font-semibold text-[#D4AF37]">
                  {worker.name}
                </td>

                <td className="px-6 py-4 text-text-primary">
                  {worker.issued}
                </td>

                <td className="px-6 py-4 text-text-primary">
                  {worker.used}
                </td>

                <td className="px-6 py-4 text-green-400">
                  {worker.returned}
                </td>

                <td className="px-6 py-4 text-red-400">
                  {worker.wastage}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}