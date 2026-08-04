"use client";
import { useRouter } from "next/navigation";
// import { Plus, Download } from "lucide-react";
import api from "@/lib/api";
import Link from "next/link";
import { Factory, Download, Plus } from "lucide-react";


export default function JobCardHeader() {

  const handleExport = async () => {
  try {
    const res = await api.get("/job-cards");

    const data = res.data.data || res.data;

    if (!data.length) {
      alert("No Job Cards Found");
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
    link.download = "job-cards.csv";

    link.click();

    window.URL.revokeObjectURL(url);

  } catch (err) {
    console.error(err);
    alert("Export Failed");
  }
};
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Job Cards
        </h1>

        <p className="mt-2 text-gray-400">
          Create, manage and track all manufacturing job cards.
        </p>

      </div>

      <div className="flex gap-3">

        <button
  onClick={handleExport}
  className="flex items-center gap-2 rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-3 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
>
  <Download size={18} />
  Export
</button>

        {/* <button className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-[#E6C458]">
          
          <Plus size={18} />
          Add Job Card
        </button> */}

        <Link
          href="/manufacturing-manager/job-cards?tab=add"
          className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-[#E6C458]"
        >

          <Plus size={18} />

          Add Job Card

        </Link>

      </div>

    </div>
  );
}