"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function RepairStatusPage() {
  const steps = [
    {
      title: "Repair Received",
      date: "22 Jul 2026",
      completed: true,
    },
    {
      title: "Inspection",
      date: "23 Jul 2026",
      completed: true,
    },
    {
      title: "Worker Assigned",
      date: "24 Jul 2026",
      completed: true,
    },
    {
      title: "Repair In Progress",
      date: "25 Jul 2026",
      completed: true,
    },
    {
      title: "Quality Check",
      date: "26 Jul 2026",
      completed: false,
    },
    {
      title: "Ready For Delivery",
      date: "--",
      completed: false,
    },
    {
      title: "Delivered",
      date: "--",
      completed: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Repair Status
          </h1>

          <p className="text-gray-400 mt-2">
            Current repair progress
          </p>

        </div>

        <Link
          href="/repair"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-yellow-500 mb-8">
          Repair Timeline
        </h2>

        <div className="space-y-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="flex items-start gap-5"
            >

              <div>

                <CheckCircle2
                  size={28}
                  className={
                    step.completed
                      ? "text-green-400"
                      : "text-gray-600"
                  }
                />

                {index !== steps.length - 1 && (
                  <div className="w-1 h-16 bg-gray-700 ml-3 mt-2"></div>
                )}

              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {step.date}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}