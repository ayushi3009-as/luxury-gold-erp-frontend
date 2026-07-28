"use client";

import { useState } from "react";

import BranchHeader from "@/components/multi-branch/BranchHeader";
import BranchSearch from "@/components/multi-branch/BranchSearch";
import BranchCard from "@/components/multi-branch/BranchCard";

const branches = [
  {
    id: 1,
    name: "Surat Head Office",
    location: "Surat, Gujarat",
    manager: "Raj Patel",
    employees: 35,
    status: "Active" as const,
  },
  {
    id: 2,
    name: "Ahmedabad Branch",
    location: "Ahmedabad, Gujarat",
    manager: "Priya Shah",
    employees: 24,
    status: "Active" as const,
  },
  {
    id: 3,
    name: "Mumbai Branch",
    location: "Mumbai, Maharashtra",
    manager: "Amit Mehta",
    employees: 30,
    status: "Inactive" as const,
  },
  {
    id: 4,
    name: "Rajkot Branch",
    location: "Rajkot, Gujarat",
    manager: "Neha Patel",
    employees: 18,
    status: "Active" as const,
  },
];

export default function BranchesPage() {
  const [search, setSearch] = useState("");

  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(search.toLowerCase()) ||
      branch.location.toLowerCase().includes(search.toLowerCase()) ||
      branch.manager.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <BranchHeader />

      <BranchSearch
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredBranches.map((branch) => (
          <BranchCard
            key={branch.id}
            id={branch.id}
            name={branch.name}
            location={branch.location}
            manager={branch.manager}
            employees={branch.employees}
            status={branch.status}
          />
        ))}

      </div>

    </main>
  );
}