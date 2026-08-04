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

interface ProductionOrder {
  id: string;
  productionNumber: string;
  quantity: number;
  stage: string;
  status: string;

  jobCard: {
    jobCardNumber: string;
    productName: string;
  };
}

export default function ProductionOrders() {
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [productionOrders, setProductionOrders] =
    useState<ProductionOrder[]>([]);

  useEffect(() => {
    fetchProductionOrders();
  }, []);

  const fetchProductionOrders = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        "/production-orders"
      );

      setProductionOrders(response.data.data);
    } catch (error) {
      console.error(error);

      alert("Failed to load Production Orders");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (
    id: string
  ) => {
    const confirmDelete = window.confirm(
      "Delete Production Order?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(
        `/production-orders/${id}`
      );

      alert("Production Order Deleted");

      fetchProductionOrders();
    } catch (error) {
      console.error(error);

      alert("Delete Failed");
    }
  };

  const filteredOrders =
    productionOrders.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.productionNumber
          .toLowerCase()
          .includes(keyword) ||
        item.jobCard.jobCardNumber
          .toLowerCase()
          .includes(keyword) ||
        item.jobCard.productName
          .toLowerCase()
          .includes(keyword)
      );
    });

  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111]">

      {/* Header */}

      <div className="flex flex-col gap-4 border-b border-[#2A2A2A] p-6 md:flex-row md:items-center md:justify-between">

        <h2 className="text-xl font-semibold text-white">
          Production Orders
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
            placeholder="Search Production..."
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] py-3 pl-10 pr-4 text-white outline-none focus:border-[#D4AF37]"
          />

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-[#181818]">

            <tr>

              <th className="px-6 py-4 text-left text-gray-300">
                Production No
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Job Card
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Product
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Quantity
              </th>

              <th className="px-6 py-4 text-left text-gray-300">
                Stage
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
      colSpan={7}
      className="py-10 text-center text-gray-400"
    >
      Loading Production Orders...
    </td>

  </tr>

) : filteredOrders.length === 0 ? (

  <tr>

    <td
      colSpan={7}
      className="py-10 text-center text-gray-400"
    >
      No Production Orders Found
    </td>

  </tr>

) : (

  filteredOrders.map((order) => (

    <tr
      key={order.id}
      className="border-t border-[#2A2A2A] hover:bg-[#1A1A1A]"
    >

      <td className="px-6 py-4 font-semibold text-[#D4AF37]">
        {order.productionNumber}
      </td>

      <td className="px-6 py-4 text-white">
        {order.jobCard.jobCardNumber}
      </td>

      <td className="px-6 py-4 text-white">
        {order.jobCard.productName}
      </td>

      <td className="px-6 py-4 text-white">
        {order.quantity}
      </td>

      <td className="px-6 py-4 text-gray-300">
        {order.stage}
      </td>

      <td className="px-6 py-4">

        <span
          className={`rounded-lg px-3 py-1 text-sm ${
            order.status === "Completed"
              ? "bg-green-500/20 text-green-400"
              : order.status === "Pending"
              ? "bg-red-500/20 text-red-400"
              : "bg-blue-500/20 text-blue-400"
          }`}
        >
          {order.status}
        </span>

      </td>

      <td className="px-6 py-4">

        <div className="flex justify-center gap-2">

          {/* View */}

          <Link
           href={`/manufacturing-manager/production?tab=details&id=${order.id}`}
           className="rounded-lg bg-[#1A1A1A] p-2 text-blue-400 hover:bg-blue-500 hover:text-white"
           >
          <Eye size={18} />
          </Link>

          {/* Edit */}

          <Link
            href={`/manufacturing-manager/production?tab=edit&id=${order.id}`}
            className="rounded-lg bg-[#1A1A1A] p-2 text-yellow-400 hover:bg-yellow-500 hover:text-white"
            >
          <Pencil size={18} />
          </Link>

          {/* Delete */}

          <button
            onClick={() =>
              handleDelete(order.id)
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