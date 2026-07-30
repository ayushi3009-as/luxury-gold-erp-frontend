"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PurchaseForm from "@/components/reports/PurchaseForm";

export default function EditPurchaseReportPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Edit Purchase Report
          </h1>

          <p className="text-text-secondary mt-2">
            Update purchase report information
          </p>

        </div>

        <Link
          href="/reports/purchase"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Form */}

      <PurchaseForm isEdit />

    </main>
  );
}