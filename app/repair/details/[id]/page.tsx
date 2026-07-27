"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

export default function RepairDetailsPage() {
  const params = useParams();
  const id = params.id;

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Repair Details
          </h1>

          <p className="text-gray-400 mt-2">
            Repair ID: {id}
          </p>
        </div>

        <div className="flex gap-3">

          <Link
            href="/repair"
            className="px-5 py-3 border border-yellow-500 rounded-xl text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
          >
            <ArrowLeft className="inline mr-2" size={18} />
            Back
          </Link>

          <Link
            href={`/repair/edit/${id}`}
            className="px-5 py-3 bg-yellow-500 rounded-xl text-black font-semibold hover:bg-yellow-400 transition"
          >
            <Pencil className="inline mr-2" size={18} />
            Edit
          </Link>

        </div>

      </div>

      {/* Details Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <img
          src="/repair/ring-repair.jpg"
          alt="Repair Product"
          className="w-80 rounded-xl border border-gray-700 mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <h3 className="text-gray-400">Customer</h3>
            <p className="text-xl">Rahul Patel</p>
          </div>

          <div>
            <h3 className="text-gray-400">Mobile</h3>
            <p className="text-xl">9876543210</p>
          </div>

          <div>
            <h3 className="text-gray-400">Product</h3>
            <p className="text-xl">Gold Ring</p>
          </div>

          <div>
            <h3 className="text-gray-400">Repair Type</h3>
            <p className="text-xl">Ring Resize</p>
          </div>

          <div>
            <h3 className="text-gray-400">Worker</h3>
            <p className="text-xl">Ramesh</p>
          </div>

          <div>
            <h3 className="text-gray-400">Estimated Cost</h3>
            <p className="text-xl text-yellow-500 font-bold">
              ₹1,500
            </p>
          </div>

          <div>
            <h3 className="text-gray-400">Delivery Date</h3>
            <p className="text-xl">30 Jul 2026</p>
          </div>

          <div>
            <h3 className="text-gray-400">Status</h3>

            <span className="inline-block mt-2 px-4 py-1 rounded-full bg-blue-500/20 text-blue-400">
              In Progress
            </span>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-xl font-bold text-yellow-500 mb-4">
            Problem Description
          </h2>

          <p className="text-gray-400 leading-8">
            Customer requested resizing and polishing of the ring.
            Stone tightening is also required before delivery.
          </p>

        </div>

      </div>

    </main>
  );
}