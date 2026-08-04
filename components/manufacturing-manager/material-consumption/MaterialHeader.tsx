"use client";

import Link from "next/link";
import { Package, Download, Plus } from "lucide-react";
import api from "@/lib/api";

export default function MaterialHeader() {
  const handleExport = async () => {
    try {
      const response = await api.get("/material-consumptions");

      const data = response.data.data || [];

      if (data.length === 0) {
        alert("No data available to export.");
        return;
      }

      const csv = [
        [
          "Job Card",
          "Material",
          "Required Qty",
          "Issued Qty",
          "Consumed Qty",
          "Remaining Qty",
          "Unit",
          "Remarks",
        ],
        ...data.map((item: any) => [
          item.jobCard?.jobCardNumber ?? "",
          item.materialName,
          item.requiredQuantity,
          item.issuedQuantity,
          item.consumedQuantity,
          item.remainingQuantity,
          item.unit,
          item.remarks ?? "",
        ]),
      ]
        .map((row) => row.join(","))
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", "material-consumption.csv");

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Export failed");
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]">
          <Package size={30} className="text-black" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            Material Consumption
          </h1>

          <p className="mt-1 text-gray-400">
            Monitor gold, silver, diamond and stone consumption in production.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex gap-3">
        <button
          onClick={handleExport}
          className="flex items-center gap-2 rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-3 text-white hover:border-[#D4AF37]"
        >
          <Download size={18} />
          Export
        </button>

        <Link
          href="/manufacturing-manager/material-consumption?tab=add"
          className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black hover:bg-[#E6C458]"
        >
          <Plus size={18} />
          Add Record
        </Link>
      </div>
    </div>
  );
}