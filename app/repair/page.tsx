"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import RepairSearch from "@/components/repair/RepairSearch";
import RepairFilter from "@/components/repair/RepairFilter";
import RepairTable from "@/components/repair/RepairTable";

export default function RepairPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [worker, setWorker] = useState("");

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Repair Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all jewellery repair orders
          </p>

        </div>

        <Link
          href="/repair/entry"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          New Repair
        </Link>

      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400">Total Repairs</p>
          <h2 className="text-3xl font-bold mt-3">248</h2>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400">Pending</p>
          <h2 className="text-3xl font-bold mt-3 text-yellow-500">32</h2>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400">In Progress</p>
          <h2 className="text-3xl font-bold mt-3 text-blue-400">18</h2>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400">Completed</p>
          <h2 className="text-3xl font-bold mt-3 text-green-400">198</h2>
        </div>

      </div>

      {/* Search */}

      <div className="mb-6">

        <RepairSearch
          value={search}
          onChange={setSearch}
        />

      </div>

      {/* Filter */}

      <div className="mb-8">

        <RepairFilter
          status={status}
          worker={worker}
          onStatusChange={setStatus}
          onWorkerChange={setWorker}
        />

      </div>

      {/* Table */}

      <RepairTable />

    </main>
  );
}