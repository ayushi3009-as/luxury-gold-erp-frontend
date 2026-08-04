"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const tabs = [
  {
    title: "Pending QC",
    value: "pending",
  },
  {
    title: "Passed",
    value: "passed",
  },
  {
    title: "Failed",
    value: "failed",
  },
  {
    title: "Rework",
    value: "rework",
  },
];

export default function QualityCheckTabs() {
  const searchParams = useSearchParams();

  const active = searchParams.get("tab") || "pending";

  return (
    <div className="overflow-x-auto">

      <div className="flex gap-3 rounded-xl border border-border-theme bg-background-secondary p-2">

        {tabs.map((tab) => (

          <Link
            key={tab.value}
            href={`/manufacturing-manager/quality-check?tab=${tab.value}`}
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