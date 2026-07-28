"use client";

import PurchaseSearch from "@/components/reports/PurchaseSearch";
import PurchaseCard from "@/components/reports/PurchaseCard";

export default function PurchaseReportPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-yellow-500">
          Purchase Report
        </h1>

        <p className="text-gray-400 mt-2">
          View and manage all purchase reports
        </p>

      </div>

      {/* Search */}

      <PurchaseSearch />

      {/* Purchase Report Table */}

      <PurchaseCard />

    </main>
  );
}