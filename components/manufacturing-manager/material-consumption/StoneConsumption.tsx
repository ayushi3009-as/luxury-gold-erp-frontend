"use client";

import { Diamond } from "lucide-react";

const records = [
  {
    id: "ST-001",
    jobCard: "JC-1030",
    stone: "Ruby",
    issued: "100 pcs",
    used: "98 pcs",
    balance: "2 pcs",
  },
  {
    id: "ST-002",
    jobCard: "JC-1031",
    stone: "Emerald",
    issued: "75 pcs",
    used: "74 pcs",
    balance: "1 pc",
  },
  {
    id: "ST-003",
    jobCard: "JC-1032",
    stone: "Sapphire",
    issued: "120 pcs",
    used: "116 pcs",
    balance: "4 pcs",
  },
];

export default function StoneConsumption() {
  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary">

      <div className="flex items-center justify-between border-b border-border-theme p-6">

        <h2 className="text-xl font-semibold text-text-primary">
          Stone Consumption
        </h2>

        <Diamond className="text-[#D4AF37]" />

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-[#181818]">
            <tr>
              <th className="px-6 py-4 text-left text-text-secondary">ID</th>
              <th className="px-6 py-4 text-left text-text-secondary">Job Card</th>
              <th className="px-6 py-4 text-left text-text-secondary">Stone</th>
              <th className="px-6 py-4 text-left text-text-secondary">Issued</th>
              <th className="px-6 py-4 text-left text-text-secondary">Used</th>
              <th className="px-6 py-4 text-left text-text-secondary">Balance</th>
            </tr>
          </thead>

          <tbody>

            {records.map((item) => (

              <tr
                key={item.id}
                className="border-t border-border-theme hover:bg-background-tertiary"
              >
                <td className="px-6 py-4 font-semibold text-[#D4AF37]">
                  {item.id}
                </td>

                <td className="px-6 py-4 text-text-primary">
                  {item.jobCard}
                </td>

                <td className="px-6 py-4 text-text-primary">
                  {item.stone}
                </td>

                <td className="px-6 py-4 text-blue-400">
                  {item.issued}
                </td>

                <td className="px-6 py-4 text-green-400">
                  {item.used}
                </td>

                <td className="px-6 py-4 text-yellow-400">
                  {item.balance}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}