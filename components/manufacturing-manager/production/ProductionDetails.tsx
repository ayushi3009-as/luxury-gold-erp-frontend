"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import api from "@/lib/api";

import {
  Factory,
  ClipboardList,
  Package,
  CalendarDays,
  CircleCheck,
} from "lucide-react";

interface ProductionOrder {
  id: string;
  productionNumber: string;
  quantity: number;
  completedQty: number;
  stage: string;
  status: string;
  startDate: string;
  endDate: string;
  remarks: string;

  jobCard: {
    jobCardNumber: string;
    productName: string;
  };
}

export default function ProductionDetails() {

  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const [loading, setLoading] = useState(true);

  const [production, setProduction] =
    useState<ProductionOrder | null>(null);

  useEffect(() => {

    if (id) {
      fetchProduction();
    }

  }, [id]);

  const fetchProduction = async () => {

    try {

      setLoading(true);

      const response = await api.get(
        `/production-orders/${id}`
      );

      setProduction(response.data.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load Production Order");

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return (
      <div className="p-10 text-center text-white">
        Loading...
      </div>
    );
  }

  if (!production) {
    return (
      <div className="p-10 text-center text-red-400">
        Production Order Not Found
      </div>
    );
  }

  return (

    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Production Details
          </h2>

          <p className="mt-2 text-gray-400">
            Complete Production Information
          </p>

        </div>

        <span
          className={`rounded-xl px-4 py-2 font-semibold ${
            production.status === "Completed"
              ? "bg-green-500/20 text-green-400"
              : production.status === "Pending"
              ? "bg-red-500/20 text-red-400"
              : "bg-blue-500/20 text-blue-400"
          }`}
        >
          {production.status}
        </span>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {/* Production Number */}

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <Factory className="mb-3 text-[#D4AF37]" size={28} />

          <p className="text-sm text-gray-400">
            Production Number
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {production.productionNumber}
          </h3>

        </div>

        {/* Job Card */}

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <ClipboardList className="mb-3 text-[#D4AF37]" size={28} />

          <p className="text-sm text-gray-400">
            Job Card
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {production.jobCard.jobCardNumber}
          </h3>

        </div>

        {/* Product */}

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <Package className="mb-3 text-[#D4AF37]" size={28} />

          <p className="text-sm text-gray-400">
            Product
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {production.jobCard.productName}
          </h3>

        </div>

        {/* Quantity */}

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <Package className="mb-3 text-[#D4AF37]" size={28} />

          <p className="text-sm text-gray-400">
            Quantity
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {production.quantity}
          </h3>

        </div>

        {/* Completed */}

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <CircleCheck className="mb-3 text-[#D4AF37]" size={28} />

          <p className="text-sm text-gray-400">
            Completed Qty
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {production.completedQty}
          </h3>

        </div>

        {/* Stage */}

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <Factory className="mb-3 text-[#D4AF37]" size={28} />

          <p className="text-sm text-gray-400">
            Stage
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {production.stage}
          </h3>

        </div>

        {/* Start Date */}

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <CalendarDays className="mb-3 text-[#D4AF37]" size={28} />

          <p className="text-sm text-gray-400">
            Start Date
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {production.startDate
              ? new Date(
                  production.startDate
                ).toLocaleDateString()
              : "-"}
          </h3>

        </div>

        {/* End Date */}

        <div className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-5">

          <CalendarDays className="mb-3 text-[#D4AF37]" size={28} />

          <p className="text-sm text-gray-400">
            End Date
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {production.endDate
              ? new Date(
                  production.endDate
                ).toLocaleDateString()
              : "-"}
          </h3>

        </div>

      </div>

      {/* Remarks */}

      <div className="mt-8 rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-6">

        <h3 className="mb-4 text-xl font-semibold text-white">
          Remarks
        </h3>

        <p className="leading-8 text-gray-300">
          {production.remarks || "No Remarks"}
        </p>

      </div>

    </div>

  );

}