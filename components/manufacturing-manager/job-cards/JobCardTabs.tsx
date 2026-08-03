"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const tabs = [
  { label: "All Job Cards", tab: "all" },
  { label: "Add Job Card", tab: "add" },
  { label: "Job Details", tab: "details" },
  { label: "Edit Job Card", tab: "edit" },
  { label: "Bookmarked", tab: "bookmark" },
];

export default function JobCardTabs() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "all";

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-3 rounded-xl border border-[#2A2A2A] bg-[#111111] p-2 w-max">
        {tabs.map((item) => (
          <Link
            key={item.tab}
            href={`/manufacturing-manager/job-cards?tab=${item.tab}`}
            className={`rounded-lg px-5 py-2 transition ${
              activeTab === item.tab
                ? "bg-[#D4AF37] text-black"
                : "text-gray-300 hover:bg-[#1A1A1A] hover:text-[#D4AF37]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}