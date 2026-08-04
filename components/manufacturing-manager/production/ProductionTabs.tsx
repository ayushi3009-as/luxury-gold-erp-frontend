"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const tabs = [
  {
    title: "Production Orders",
    value: "orders",
  },
  {
    title: "Work In Progress",
    value: "wip",
  },
  {
    title: "Completed Production",
    value: "completed",
  },
  {
    title: "Production Summary",
    value: "summary",
  },
];

export default function ProductionTabs() {
  const searchParams = useSearchParams();

  const active = searchParams.get("tab") || "orders";

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-3 rounded-xl border border-[#2A2A2A] bg-[#111111] p-2">

        {tabs.map((tab) => (

          <Link
            key={tab.value}
            href={`/manufacturing-manager/production?tab=${tab.value}`}
            className={`rounded-lg px-5 py-3 transition ${
              active === tab.value
                ? "bg-[#D4AF37] text-black"
                : "text-gray-300 hover:bg-[#1A1A1A] hover:text-[#D4AF37]"
            }`}
          >
            {tab.title}
          </Link>

        ))}

      </div>
    </div>
  );
}