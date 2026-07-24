"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import GoldSearch from "@/components/products/GoldSearch";
import GoldFilter from "@/components/products/GoldFilter";
import GoldTable from "@/components/products/GoldTable";

export default function GoldPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Gold Products
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all gold jewellery products
          </p>
        </div>

        <Link
          href="/products/gold/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          Add Gold Product
        </Link>

      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-6">

        <GoldSearch
          value={search}
          onChange={setSearch}
        />

        <GoldFilter />

      </div>

      <GoldTable />

    </main>
  );
}