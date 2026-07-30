"use client";

import { useState } from "react";

import ProductHistorySearch from "@/components/products/ProductHistorySearch";
import ProductHistoryTable from "@/components/products/ProductHistoryTable";

export default function ProductHistoryPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-accent-gold">
          Product History
        </h1>

        <p className="text-text-secondary mt-2">
          View product activity and history
        </p>

      </div>

      <div className="mb-6">
        <ProductHistorySearch
          value={search}
          onChange={setSearch}
        />
      </div>

      <ProductHistoryTable />

    </main>
  );
}