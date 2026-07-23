"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import ProductSearch from "@/components/products/ProductSearch";
import ProductFilter from "@/components/products/ProductFilter";
import ProductTable from "@/components/products/ProductTable";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  return (
    <main className="min-h-screen bg-[#0B0B0B] p-8 text-white">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Product Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all jewellery products
          </p>
        </div>

        <Link
          href="/products/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          Add Product
        </Link>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#141414] rounded-2xl p-6 border border-yellow-500/20">
          <h3 className="text-gray-400">Total Products</h3>
          <p className="text-3xl font-bold mt-3">154</p>
        </div>

        <div className="bg-[#141414] rounded-2xl p-6 border border-green-500/20">
          <h3 className="text-gray-400">In Stock</h3>
          <p className="text-3xl font-bold mt-3 text-green-400">132</p>
        </div>

        <div className="bg-[#141414] rounded-2xl p-6 border border-yellow-500/20">
          <h3 className="text-gray-400">Low Stock</h3>
          <p className="text-3xl font-bold mt-3 text-yellow-400">18</p>
        </div>

        <div className="bg-[#141414] rounded-2xl p-6 border border-red-500/20">
          <h3 className="text-gray-400">Out of Stock</h3>
          <p className="text-3xl font-bold mt-3 text-red-400">4</p>
        </div>

      </div>

      {/* Search & Filters */}

      <div className="flex flex-col lg:flex-row gap-5 justify-between mb-8">

        <ProductSearch
          value={search}
          onChange={setSearch}
        />

        <ProductFilter
          category={category}
          status={status}
          onCategoryChange={setCategory}
          onStatusChange={setStatus}
        />

      </div>

      {/* Product Table */}

      <ProductTable />

    </main>
  );
}