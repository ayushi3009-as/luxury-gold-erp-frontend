"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import BrandSearch from "@/components/products/BrandSearch";
import BrandTable from "@/components/products/BrandTable";

export default function BrandPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Brands
          </h1>

          <p className="text-gray-400 mt-2">
            Manage jewellery brands
          </p>
        </div>

        <Link
          href="/products/brands/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          Add Brand
        </Link>

      </div>

      <div className="mb-6">
        <BrandSearch
          value={search}
          onChange={setSearch}
        />
      </div>

      <BrandTable />

    </main>
  );
}