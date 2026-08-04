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
      <div className="flex gap-3 rounded-xl border border-border-theme bg-background-secondary p-2">

        {tabs.map((tab) => (

          <Link
            key={tab.value}
            href={`/manufacturing-manager/production?tab=${tab.value}`}
            className={`rounded-lg px-5 py-3 transition ${
              active === tab.value
                ? "bg-[#D4AF37] text-black"
                : "text-text-secondary hover:bg-background-tertiary hover:text-[#D4AF37]"
            }`}
          >
            {tab.title}
          </Link>

        ))}

      </div>
    </div>
  );
}