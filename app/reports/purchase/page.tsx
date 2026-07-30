"use client";

import PurchaseSearch from "@/components/reports/PurchaseSearch";
import PurchaseCard from "@/components/reports/PurchaseCard";

export default function PurchaseReportPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-accent-gold">
          Purchase Report
        </h1>

        <p className="text-text-secondary mt-2">
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