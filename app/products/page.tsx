"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import ProductSearch from "@/components/products/ProductSearch";
import ProductFilter from "@/components/products/ProductFilter";
import ProductTable from "@/components/products/ProductTable";

export default function ProductPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Product Management
          </h1>

          <p className="text-text-secondary mt-2">
            Manage all jewellery products
          </p>
        </div>

        <Link
          href="/products/add"
          className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          Add Product
        </Link>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme">
          <h3 className="text-text-secondary">Total Products</h3>
          <p className="text-3xl font-bold mt-3">420</p>
        </div>

        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme">
          <h3 className="text-text-secondary">Gold Products</h3>
          <p className="text-3xl font-bold mt-3">180</p>
        </div>

        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme">
          <h3 className="text-text-secondary">Diamond Products</h3>
          <p className="text-3xl font-bold mt-3">150</p>
        </div>

        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme">
          <h3 className="text-text-secondary">Categories</h3>
          <p className="text-3xl font-bold mt-3">25</p>
        </div>

      </div>

      {/* Search */}

      <div className="mb-6">
        <ProductSearch
          value={search}
          onChange={setSearch}
        />
      </div>

      {/* Filter */}

      <div className="mb-8">
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