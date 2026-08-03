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
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111]">

      <div className="flex items-center justify-between border-b border-[#2A2A2A] p-6">

        <h2 className="text-xl font-semibold text-white">
          Stone Consumption
        </h2>

        <Diamond className="text-[#D4AF37]" />

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-[#181818]">
            <tr>
              <th className="px-6 py-4 text-left text-gray-300">ID</th>
              <th className="px-6 py-4 text-left text-gray-300">Job Card</th>
              <th className="px-6 py-4 text-left text-gray-300">Stone</th>
              <th className="px-6 py-4 text-left text-gray-300">Issued</th>
              <th className="px-6 py-4 text-left text-gray-300">Used</th>
              <th className="px-6 py-4 text-left text-gray-300">Balance</th>
            </tr>
          </thead>

          <tbody>

            {records.map((item) => (

              <tr
                key={item.id}
                className="border-t border-[#2A2A2A] hover:bg-[#1A1A1A]"
              >
                <td className="px-6 py-4 font-semibold text-[#D4AF37]">
                  {item.id}
                </td>

                <td className="px-6 py-4 text-white">
                  {item.jobCard}
                </td>

                <td className="px-6 py-4 text-white">
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