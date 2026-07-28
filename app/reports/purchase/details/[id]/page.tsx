"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PurchaseReportDetailsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Purchase Report Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete purchase report information
          </p>

        </div>

        <Link
          href="/reports/purchase"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Details Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              Purchase ID
            </h3>

            <p className="text-lg">
              PUR001
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              Supplier Name
            </h3>

            <p className="text-lg">
              Shree Gold Traders
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              Invoice Number
            </h3>

            <p className="text-lg">
              INV-1001
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              Product Name
            </h3>

            <p className="text-lg">
              22K Gold Chain
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              Category
            </h3>

            <p className="text-lg">
              Chain
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              Quantity
            </h3>

            <p className="text-lg">
              10
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              Purchase Amount
            </h3>

            <p className="text-lg font-semibold text-yellow-500">
              ₹2,50,000
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              GST
            </h3>

            <p className="text-lg">
              3%
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              Purchase Date
            </h3>

            <p className="text-lg">
              27 Jul 2026
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-sm mb-2">
              Payment Status
            </h3>

            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">
              Paid
            </span>
          </div>

        </div>

        {/* Remarks */}

        <div className="mt-8">

          <h3 className="text-yellow-500 mb-2">
            Remarks
          </h3>

          <div className="bg-[#1B1B1B] rounded-xl p-5 border border-gray-700">

            <p className="text-gray-300 leading-7">
              Gold Chain purchased from Shree Gold Traders.
              Payment completed successfully and inventory updated.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}