"use client";

import { CheckCircle } from "lucide-react";

const completedJobs = [
  {
    id: "PO-1001",
    product: "22K Gold Ring",
    quantity: 15,
    completedOn: "29 Jul 2026",
  },
  {
    id: "PO-1002",
    product: "Diamond Necklace",
    quantity: 8,
    completedOn: "28 Jul 2026",
  },
  {
    id: "PO-1003",
    product: "Gold Bracelet",
    quantity: 12,
    completedOn: "27 Jul 2026",
  },
];

export default function CompletedProduction() {
  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        Completed Production
      </h2>

      <div className="space-y-4">

        {completedJobs.map((job) => (

          <div
            key={job.id}
            className="flex items-center justify-between rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5"
          >

            <div>

              <h3 className="font-semibold text-white">
                {job.product}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                {job.id}
              </p>

            </div>

            <div className="text-center">

              <p className="text-sm text-gray-400">
                Quantity
              </p>

              <p className="font-semibold text-white">
                {job.quantity}
              </p>

            </div>

            <div className="text-center">

              <p className="text-sm text-gray-400">
                Completed On
              </p>

              <p className="font-semibold text-white">
                {job.completedOn}
              </p>

            </div>

            <div className="flex items-center gap-2 rounded-xl bg-green-500/20 px-4 py-2 text-green-400">

              <CheckCircle size={18} />

              Completed

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}