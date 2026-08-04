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

interface Worker {
  id: string;
  employeeId: string;
  fullName: string;
  phone: string;
  email?: string;
  specialization?: string;
  experience?: number;
  salary?: number;
  status: string;
}

export default function WorkerList() {

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [workers, setWorkers] =
    useState<Worker[]>([]);

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {

    try {

      setLoading(true);

      const response =
        await api.get("/workers");

      setWorkers(response.data.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load Workers");

    } finally {

      setLoading(false);

    }

  };

  const handleDelete = async (
    id: string
  ) => {

    const confirmDelete =
      window.confirm(
        "Delete Worker?"
      );

    if (!confirmDelete) return;

    try {

      await api.delete(
        `/workers/${id}`
      );

      alert("Worker Deleted");

      fetchWorkers();

    } catch (error) {

      console.error(error);

      alert("Delete Failed");

    }

  };

  const filteredWorkers =
    workers.filter((worker) => {

      const keyword =
        search.toLowerCase();

      return (
        worker.employeeId
          .toLowerCase()
          .includes(keyword) ||

        worker.fullName
          .toLowerCase()
          .includes(keyword) ||

        (worker.specialization || "")
          .toLowerCase()
          .includes(keyword)
      );

    });

  return (
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111]">

  {/* Header */}

  <div className="flex flex-col gap-4 border-b border-[#2A2A2A] p-6 md:flex-row md:items-center md:justify-between">

    <h2 className="text-xl font-semibold text-white">
      Worker List
    </h2>

    <div className="relative w-full md:w-80">

      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        type="text"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search Workers..."
        className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] py-3 pl-10 pr-4 text-white outline-none focus:border-[#D4AF37]"
      />

    </div>

  </div>

  <div className="overflow-x-auto">

    <table className="min-w-full">

      <thead className="bg-[#181818]">

        <tr>

          <th className="px-6 py-4 text-left text-gray-300">
            Employee ID
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Full Name
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Specialization
          </th>

          <th className="px-6 py-4 text-left text-gray-300">
            Experience
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
              colSpan={6}
              className="py-10 text-center text-gray-400"
            >
              Loading Workers...
            </td>

          </tr>

        ) : filteredWorkers.length === 0 ? (

          <tr>

            <td
              colSpan={6}
              className="py-10 text-center text-gray-400"
            >
              No Workers Found
            </td>

          </tr>

        ) : (

          filteredWorkers.map((worker) => (

            <tr
              key={worker.id}
              className="border-t border-[#2A2A2A] hover:bg-[#1A1A1A]"
            >

              <td className="px-6 py-4 font-semibold text-[#D4AF37]">
                {worker.employeeId}
              </td>

              <td className="px-6 py-4 text-white">
                {worker.fullName}
              </td>

              <td className="px-6 py-4 text-gray-300">
                {worker.specialization || "-"}
              </td>

              <td className="px-6 py-4 text-white">
                {worker.experience ?? 0} Years
              </td>

              <td className="px-6 py-4">

                <span
                  className={`rounded-lg px-3 py-1 text-sm ${
                    worker.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {worker.status}
                </span>

              </td>

              <td className="px-6 py-4">

                <div className="flex justify-center gap-2">

                  <Link
                    href={`/manufacturing-manager/workers?tab=details&id=${worker.id}`}
                    className="rounded-lg bg-[#1A1A1A] p-2 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    <Eye size={18} />
                  </Link>

                  <Link
                    href={`/manufacturing-manager/workers?tab=edit&id=${worker.id}`}
                    className="rounded-lg bg-[#1A1A1A] p-2 text-yellow-400 hover:bg-yellow-500 hover:text-white"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(worker.id)
                    }
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