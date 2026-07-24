"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import CollectionSearch from "@/components/products/CollectionSearch";
import CollectionTable from "@/components/products/CollectionTable";

export default function CollectionPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Collections
          </h1>

          <p className="text-gray-400 mt-2">
            Manage jewellery collections
          </p>
        </div>

        <Link
          href="/products/collections/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          Add Collection
        </Link>

      </div>

      <div className="mb-6">
        <CollectionSearch
          value={search}
          onChange={setSearch}
        />
      </div>

      <CollectionTable />

    </main>
  );
}