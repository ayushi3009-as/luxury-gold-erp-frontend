"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Download,
  Plus,
} from "lucide-react";
import api from "@/lib/api";

export default function QualityCheckHeader() {
  const handleExport = async () => {
  try {
    const res = await api.get("/quality-checks");

    const data = res.data.data || res.data;

    if (!data.length) {
      alert("No Quality Check Records Found");
      return;
    }

    const headers = Object.keys(data[0]);

    const csv = [
      headers.join(","),
      ...data.map((row: any) =>
        headers.map((field) => `"${row[field] ?? ""}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "quality-check.csv";

    link.click();

    window.URL.revokeObjectURL(url);

  } catch (err) {
    console.error(err);
    alert("Export Failed");
  }
};
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37] shadow-lg">

          <ShieldCheck
            size={30}
            className="text-black"
          />

        </div>

        <div>

          <h1 className="text-3xl font-bold text-white">
            Quality Check
          </h1>

          <p className="mt-1 text-gray-400">
            Inspect finished jewellery and manage quality approvals.
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex gap-3">

      <button
  onClick={handleExport}
  className="flex items-center gap-2 rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-3 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
>
  <Download size={18} />
  Export
</button>

        <Link
          href="/manufacturing-manager/quality-check?tab=add"
          className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-[#E6C458]"
        >

          <Plus size={18} />

          New QC

        </Link>

      </div>

    </div>
  );
}