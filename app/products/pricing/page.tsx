"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import ProductPricingSearch from "@/components/products/ProductPricingSearch";
import ProductPricingTable from "@/components/products/ProductPricingTable";

export default function ProductPricingPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Product Pricing
          </h1>

          <p className="text-text-secondary mt-2">
            Manage product pricing information
          </p>
        </div>

        <Link
          href="/products/pricing/add"
          className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={20} />
          Add Pricing
        </Link>

      </div>

      <div className="mb-6">
        <ProductPricingSearch
          value={search}
          onChange={setSearch}
        />
      </div>

      <ProductPricingTable />

    </main>
  );
}