"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import CategorySearch from "@/components/products/CategorySearch";
import CategoryTable from "@/components/products/CategoryTable";

export default function CategoriesPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Categories
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all jewellery categories
          </p>

        </div>

        <Link
          href="/products/categories/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          Add Category
        </Link>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#141414] rounded-2xl p-6 border border-yellow-500/20">

          <h3 className="text-gray-400">
            Total Categories
          </h3>

          <p className="text-3xl font-bold mt-3">
            25
          </p>

        </div>

        <div className="bg-[#141414] rounded-2xl p-6 border border-yellow-500/20">

          <h3 className="text-gray-400">
            Active Categories
          </h3>

          <p className="text-3xl font-bold mt-3 text-green-400">
            22
          </p>

        </div>

        <div className="bg-[#141414] rounded-2xl p-6 border border-yellow-500/20">

          <h3 className="text-gray-400">
            Inactive Categories
          </h3>

          <p className="text-3xl font-bold mt-3 text-red-400">
            3
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="mb-6">

        <CategorySearch
          value={search}
          onChange={setSearch}
        />

      </div>

      {/* Table */}

      <CategoryTable />

    </main>
  );
}