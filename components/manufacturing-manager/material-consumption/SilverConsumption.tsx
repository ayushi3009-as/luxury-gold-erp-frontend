"use client";

import { Coins } from "lucide-react";

const records = [
  {
    id: "SC-001",
    jobCard: "JC-1010",
    worker: "Rahul Patel",
    issued: "250 g",
    consumed: "245 g",
    balance: "5 g",
  },
  {
    id: "SC-002",
    jobCard: "JC-1011",
    worker: "Amit Shah",
    issued: "180 g",
    consumed: "176 g",
    balance: "4 g",
  },
  {
    id: "SC-003",
    jobCard: "JC-1012",
    worker: "Kiran Joshi",
    issued: "300 g",
    consumed: "294 g",
    balance: "6 g",
  },
];

export default function SilverConsumption() {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111]">

      <div className="flex items-center justify-between border-b border-[#2A2A2A] p-6">

        <h2 className="text-xl font-semibold text-white">
          Silver Consumption
        </h2>

        <Coins className="text-[#D4AF37]" />

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-[#181818]">
            <tr>
              <th className="px-6 py-4 text-left text-gray-300">ID</th>
              <th className="px-6 py-4 text-left text-gray-300">Job Card</th>
              <th className="px-6 py-4 text-left text-gray-300">Worker</th>
              <th className="px-6 py-4 text-left text-gray-300">Issued</th>
              <th className="px-6 py-4 text-left text-gray-300">Consumed</th>
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
                  {item.worker}
                </td>

                <td className="px-6 py-4 text-blue-400">
                  {item.issued}
                </td>

                <td className="px-6 py-4 text-green-400">
                  {item.consumed}
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