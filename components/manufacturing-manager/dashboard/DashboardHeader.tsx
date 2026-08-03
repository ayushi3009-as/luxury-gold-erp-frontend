"use client";

import { Plus, Download } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Manufacturing Dashboard
        </h1>

        <p className="mt-2 text-gray-400">
          Monitor production, workers, quality checks, and manufacturing performance.
        </p>

      </div>

      {/* Right */}

      <div className="flex flex-wrap gap-3">

        <button className="flex items-center gap-2 rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-3 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]">

          <Download size={18} />

          Export Report

        </button>

        <button className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-[#E6C458]">

          <Plus size={18} />

          New Job Card

        </button>

      </div>

    </div>
  );
}