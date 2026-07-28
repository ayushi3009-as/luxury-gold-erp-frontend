"use client";

import { useMemo, useState } from "react";

import LoyaltyHeader from "@/components/offers-loyalty/LoyaltyHeader";
import LoyaltySearch from "@/components/offers-loyalty/LoyaltySearch";
import LoyaltyCard from "@/components/offers-loyalty/LoyaltyCard";

const members = [
  {
    id: 1,
    name: "Rahul Patel",
    mobile: "9876543210",
    membership: "Gold" as const,
    points: 2500,
  },
  {
    id: 2,
    name: "Priya Shah",
    mobile: "9876501234",
    membership: "Silver" as const,
    points: 1800,
  },
  {
    id: 3,
    name: "Amit Mehta",
    mobile: "9988776655",
    membership: "Bronze" as const,
    points: 900,
  },
  {
    id: 4,
    name: "Neha Joshi",
    mobile: "9090909090",
    membership: "Gold" as const,
    points: 3100,
  },
  {
    id: 5,
    name: "Karan Desai",
    mobile: "9898989898",
    membership: "Silver" as const,
    points: 1400,
  },
];

export default function LoyaltyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.mobile.includes(searchTerm);

      const matchesFilter =
        filter === "All" || member.membership === filter;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filter]);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <LoyaltyHeader />

      <LoyaltySearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />

      {filteredMembers.length === 0 ? (
        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-10 text-center">

          <h2 className="text-2xl font-bold text-yellow-500">
            No Members Found
          </h2>

          <p className="text-gray-400 mt-2">
            Try changing the search or filter.
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredMembers.map((member) => (
            <LoyaltyCard
              key={member.id}
              id={member.id}
              name={member.name}
              mobile={member.mobile}
              membership={member.membership}
              points={member.points}
            />
          ))}

        </div>
      )}

    </main>
  );
}