"use client";

import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

export default function SalesDetailsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Sales Report Details
          </h1>

          <p className="text-gray-400 mt-2">
            Complete Sales Information
          </p>

        </div>

        <div className="flex gap-3">

          <Link
            href="/reports/sales"
            className="flex items-center gap-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-5 py-3 rounded-xl transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href="/reports/sales/edit/SAL001"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold transition"
          >
            <Pencil size={18} />
            Edit
          </Link>

        </div>

      </div>

      {/* Details Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Product Image */}

          <div>

            <img
              src="/gold/ring1.jpg"
              alt="Gold Ring"
              className="w-full h-[420px] object-cover rounded-2xl border border-gray-700"
            />

          </div>

          {/* Details */}

          <div className="space-y-5">

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Sale ID</span>
              <span>SAL001</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Customer Name</span>
              <span>Rahul Patel</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Invoice No.</span>
              <span>INV001</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Product</span>
              <span>Gold Ring</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Quantity</span>
              <span>1</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Amount</span>
              <span className="text-yellow-500 font-bold">
                ₹45,000
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Sales Executive</span>
              <span>Ramesh</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Sales Date</span>
              <span>27 Jul 2026</span>
            </div>

            <div className="flex justify-between">

              <span className="text-gray-400">
                Payment Status
              </span>

              <span className="px-4 py-1 rounded-full bg-green-500/20 text-green-400">
                Paid
              </span>

            </div>

          </div>

        </div>

        {/* Remarks */}

        <div className="mt-10">

          <h2 className="text-xl font-bold text-yellow-500 mb-4">
            Remarks
          </h2>

          <p className="text-gray-400 leading-8">
            Customer purchased one Gold Ring.
            Full payment received successfully.
            Invoice generated and delivered to customer.
          </p>

        </div>

      </div>

    </main>
  );
}