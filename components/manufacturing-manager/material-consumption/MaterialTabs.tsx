"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const tabs = [
  {
    title: "Gold Consumption",
    value: "gold",
  },
  {
    title: "Silver Consumption",
    value: "silver",
  },
  {
    title: "Diamond Consumption",
    value: "diamond",
  },
  {
    title: "Stone Consumption",
    value: "stone",
  },
  {
    title: "Material Summary",
    value: "summary",
  },
];

export default function MaterialTabs() {
  const searchParams = useSearchParams();

  const active = searchParams.get("tab") || "gold";

  return (
    <div className="overflow-x-auto">

      <div className="flex gap-3 rounded-xl border border-[#2A2A2A] bg-[#111111] p-2">

        {tabs.map((tab) => (

          <Link
            key={tab.value}
            href={`/manufacturing-manager/material-consumption?tab=${tab.value}`}
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