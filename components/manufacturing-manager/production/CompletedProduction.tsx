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
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">

      <h2 className="mb-6 text-xl font-semibold text-text-primary">
        Completed Production
      </h2>

      <div className="space-y-4">

        {completedJobs.map((job) => (

          <div
            key={job.id}
            className="flex items-center justify-between rounded-xl border border-border-theme bg-background-primary p-5"
          >

            <div>

              <h3 className="font-semibold text-text-primary">
                {job.product}
              </h3>

              <p className="mt-1 text-sm text-text-secondary">
                {job.id}
              </p>

            </div>

            <div className="text-center">

              <p className="text-sm text-text-secondary">
                Quantity
              </p>

              <p className="font-semibold text-text-primary">
                {job.quantity}
              </p>

            </div>

            <div className="text-center">

              <p className="text-sm text-text-secondary">
                Completed On
              </p>

              <p className="font-semibold text-text-primary">
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