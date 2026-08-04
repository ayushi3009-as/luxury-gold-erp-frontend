"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Pencil, Trash2, Search } from "lucide-react";
import api from "@/lib/api";

interface JobCard {
  id: string;
  jobCardNumber: string;
  productName: string;
  designNumber: string;
  category: string;
  purity: string;
  grossWeight: number;
  netWeight: number;
  quantity: number;
  priority: string;
  status: string;
  remarks: string;
  createdAt: string;

  createdBy: {
    id: string;
    fullName: string;
    email: string;
  };
}

export default function JobCardTable() {
  const [jobCards, setJobCards] = useState<JobCard[]>([]);
  const [filteredJobCards, setFilteredJobCards] = useState<JobCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const fetchJobCards = async () => {
    try {
      setLoading(true);

      const response = await api.get("/job-cards");

      setJobCards(response.data.data);
      setFilteredJobCards(response.data.data);
    } catch (err: any) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Failed to load Job Cards"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobCards();
  }, []);

  useEffect(() => {
    const filtered = jobCards.filter((job) => {
      return (
        job.jobCardNumber
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        job.productName
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        job.createdBy.fullName
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        job.status
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });

    setFilteredJobCards(filtered);
  }, [search, jobCards]);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Job Card?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/job-cards/${id}`);

      alert("Job Card deleted successfully");

      fetchJobCards();
    } catch (err: any) {
      alert(
        err.response?.data?.message ||
          "Delete failed"
      );
    }
  };

   return (

    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111]">

      {/* Header */}

      <div className="flex flex-col gap-4 border-b border-[#2A2A2A] p-6 md:flex-row md:items-center md:justify-between">

        <h2 className="text-xl font-semibold text-white">
          All Job Cards
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
            placeholder="Search Job Card..."
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] py-3 pl-10 pr-4 text-white outline-none focus:border-[#D4AF37]"
          />

        </div>

      </div>

      {/* Loading */}

      {loading && (

        <div className="flex h-40 items-center justify-center text-white">
          Loading Job Cards...
        </div>

      )}

      {/* Error */}

      {!loading && error && (

        <div className="flex h-40 items-center justify-center text-red-500">
          {error}
        </div>

      )}

      {/* Table */}

      {!loading && !error && (

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="border-b border-[#2A2A2A] bg-[#181818]">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Job Card
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Created By
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Priority
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Quantity
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>{filteredJobCards.length === 0 ? (

  <tr>

    <td
      colSpan={7}
      className="py-10 text-center text-gray-400"
    >
      No Job Cards Found
    </td>

  </tr>

) : (

  filteredJobCards.map((job) => (

    <tr
      key={job.id}
      className="border-b border-[#2A2A2A] hover:bg-[#1A1A1A]"
    >

      <td className="px-6 py-4 font-medium text-[#D4AF37]">
        {job.jobCardNumber}
      </td>

      <td className="px-6 py-4 text-white">
        {job.productName}
      </td>

      <td className="px-6 py-4 text-white">
        {job.createdBy.fullName}
      </td>

      <td className="px-6 py-4">

        <span
          className={`rounded-lg px-3 py-1 text-sm ${
            job.status === "Pending"
              ? "bg-yellow-500/20 text-yellow-400"
              : job.status === "Completed"
              ? "bg-green-500/20 text-green-400"
              : "bg-blue-500/20 text-blue-400"
          }`}
        >
          {job.status}
        </span>

      </td>

      <td className="px-6 py-4">

        <span
          className={`rounded-lg px-3 py-1 text-sm ${
            job.priority === "High"
              ? "bg-red-500/20 text-red-400"
              : job.priority === "Medium"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-green-500/20 text-green-400"
          }`}
        >
          {job.priority}
        </span>

      </td>

      <td className="px-6 py-4 text-white">
        {job.quantity}
      </td>

      <td className="px-6 py-4">

        <div className="flex justify-center gap-2">

          {/* View */}

          <Link
            href={`/manufacturing-manager/job-cards?tab=details&id=${job.id}`}
            className="rounded-lg bg-[#1A1A1A] p-2 text-blue-400 hover:bg-blue-500 hover:text-white"
          >
            <Eye size={18} />
          </Link>

          {/* Edit */}

          <Link
            href={`/manufacturing-manager/job-cards?tab=edit&id=${job.id}`}
            className="rounded-lg bg-[#1A1A1A] p-2 text-yellow-400 hover:bg-yellow-500 hover:text-white"
          >
            <Pencil size={18} />
          </Link>

          {/* Delete */}

          <button
            onClick={() => handleDelete(job.id)}
            className="rounded-lg bg-[#1A1A1A] p-2 text-red-400 hover:bg-red-500 hover:text-white"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>

  ))

)}</tbody>
 </table>

        </div>

      )}

    </div>

  );
}
    