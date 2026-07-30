"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import RepairForm from "@/components/repair/RepairForm";

export default function RepairEntryPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Repair Entry
          </h1>

          <p className="text-text-secondary mt-2">
            Create a new jewellery repair order
          </p>

        </div>

        <Link
          href="/repair"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Form */}

      <RepairForm buttonText="Save Repair" />

    </main>
  );
}