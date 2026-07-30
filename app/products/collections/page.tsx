"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import CollectionSearch from "@/components/products/CollectionSearch";
import CollectionTable from "@/components/products/CollectionTable";

export default function CollectionPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Collections
          </h1>

          <p className="text-text-secondary mt-2">
            Manage jewellery collections
          </p>
        </div>

        <Link
          href="/products/collections/add"
          className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-6 py-3 rounded-xl transition"
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