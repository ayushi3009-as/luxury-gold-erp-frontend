"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";

import {
  Search,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

interface QualityCheck {
  id: string;
  jobCardId: string;
  inspectorName: string;
  qualityStatus: string;
  defects?: string;
  remarks?: string;
  inspectionDate: string;
  jobCard?: {
    id: string;
    productName?: string;
  };
}

export default function PendingQC() {

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [qualityChecks, setQualityChecks] =
    useState<QualityCheck[]>([]);

  useEffect(() => {
    fetchQualityChecks();
  }, []);

  const fetchQualityChecks = async () => {

    try {

      setLoading(true);

      const response =
        await api.get("/quality-checks");

      setQualityChecks(response.data.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load Quality Checks");

    } finally {

      setLoading(false);

    }

  };

  const handleDelete = async (
    id: string
  ) => {

    const confirmDelete =
      window.confirm(
        "Delete Quality Check?"
      );

    if (!confirmDelete) return;

    try {

      await api.delete(
        `/quality-checks/${id}`
      );

      alert(
        "Quality Check Deleted Successfully"
      );

      fetchQualityChecks();

    } catch (error) {

      console.error(error);

      alert("Delete Failed");

    }

  };

  const filteredQC =
    qualityChecks.filter((item) => {

      const keyword =
        search.toLowerCase();

      return (
        item.qualityStatus === "Pending" &&
        (
          item.inspectorName
            .toLowerCase()
            .includes(keyword) ||

          item.jobCardId
            .toLowerCase()
            .includes(keyword) ||

          (item.jobCard?.productName || "")
            .toLowerCase()
            .includes(keyword)
        )
      );

    });

  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111]">

  {/* Header */}

  <div className="flex flex-col gap-4 border-b border-[#2A2A2A] p-6 md:flex-row md:items-center md:justify-between">

    <h2 className="text-xl font-semibold text-white">
      Pending Quality Checks
    </h2>

    <div className="relative w-full md:w-80">

      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search QC..."
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] py-3 pl-10 pr-4 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

  </div>

  {/* Table */}

  <div className="overflow-x-auto">

    <table className="min-w-full">

      <thead className="bg-[#181818]">

        <tr>

          <th className="px-6 py-4 text-left text-gray-300">
            Job Card
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Inspector
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Product
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Status
          </th>

          <th className="px-6 py-4 text-center text-gray-300">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {loading ? (

          <tr>

            <td
              colSpan={5}
              className="py-10 text-center text-gray-400"
            >
              Loading Quality Checks...
            </td>

          </tr>

        ) : filteredQC.length === 0 ? (

          <tr>

            <td
              colSpan={5}
              className="py-10 text-center text-gray-400"
            >
              No Pending Quality Checks Found
            </td>

          </tr>

        ) : (

          filteredQC.map((item) => (

            <tr
              key={item.id}
              className="border-t border-[#2A2A2A] hover:bg-[#1A1A1A]"
            >

              <td className="px-6 py-4 font-semibold text-[#D4AF37]">
                {item.jobCardId}
              </td>

              <td className="px-6 py-4 text-white">
                {item.inspectorName}
              </td>

              <td className="px-6 py-4 text-gray-300">
                {item.jobCard?.productName || "-"}
              </td>

              <td className="px-6 py-4">

                <span className="rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
                  {item.qualityStatus}
                </span>

              </td>

              <td className="px-6 py-4">

                <div className="flex justify-center gap-2">

                  <Link
                    href={`/manufacturing-manager/quality-check?tab=details&id=${item.id}`}
                    className="rounded-lg bg-[#1A1A1A] p-2 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    <Eye size={18} />
                  </Link>

                  <Link
                    href={`/manufacturing-manager/quality-check?tab=edit&id=${item.id}`}
                    className="rounded-lg bg-[#1A1A1A] p-2 text-yellow-400 hover:bg-yellow-500 hover:text-white"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg bg-[#1A1A1A] p-2 text-red-400 hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))

        )}

      </tbody>

    </table>

  </div>

</div>
  );
}