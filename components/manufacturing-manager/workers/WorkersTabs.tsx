"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const tabs = [
  {
    title: "Worker List",
    value: "list",
  },
  {
    title: "Assign Workers",
    value: "assign",
  },
  {
    title: "Worker Performance",
    value: "performance",
  },
  {
    title: "Worker Gold Summary",
    value: "gold-summary",
  },
];

export default function WorkersTabs() {
  const searchParams = useSearchParams();

  const active = searchParams.get("tab") || "list";

  return (
    <div className="overflow-x-auto">

      <div className="flex gap-3 rounded-xl border border-[#2A2A2A] bg-[#111111] p-2">

        {tabs.map((tab) => (

          <Link
            key={tab.value}
            href={`/manufacturing-manager/workers?tab=${tab.value}`}
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