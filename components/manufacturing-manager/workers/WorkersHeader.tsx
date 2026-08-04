"use client";

import Link from "next/link";
import { Users, Download, Plus } from "lucide-react";
import api from "@/lib/api";

export default function WorkersHeader() {

  const handleExport = async () => {
    try {

      const res = await api.get("/workers");

      const workers = res.data.data || [];

      if (workers.length === 0) {
        alert("No workers found");
        return;
      }

      const csvRows = [];

      csvRows.push([
        "Employee ID",
        "Full Name",
        "Phone",
        "Email",
        "Specialization",
        "Experience",
        "Salary",
        "Status",
      ].join(","));

      workers.forEach((worker: any) => {
        csvRows.push([
          worker.employeeId,
          worker.fullName,
          worker.phone,
          worker.email || "",
          worker.specialization || "",
          worker.experience || "",
          worker.salary || "",
          worker.status,
        ].join(","));
      });

      const csv = csvRows.join("\n");

      const blob = new Blob([csv], {
        type: "text/csv;charset=utf-8;",
      });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = "workers.csv";

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

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37] shadow-lg">

          <Users
            size={30}
            className="text-black"
          />

        </div>

        <div>

          <h1 className="text-3xl font-bold text-text-primary">
            Workers
          </h1>

          <p className="mt-1 text-text-secondary">
            Manage workers, assignments and production performance.
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex gap-3">

        <button
          onClick={handleExport}
          className="flex items-center gap-2 rounded-xl border border-border-theme bg-background-secondary px-5 py-3 text-text-primary transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
        >

          <Download size={18} />

          Export

        </button>

        <Link
          href="/manufacturing-manager/workers?tab=add"
          className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-[#E6C458]"
        >

          <Plus size={18} />

          Add Worker

        </Link>

      </div>

    </div>
  );
}