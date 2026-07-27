"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function EditSalesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Edit Sales Report
          </h1>

          <p className="text-gray-400 mt-2">
            Update Sales Information
          </p>

        </div>

        <Link
          href="/reports/sales"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="max-w-6xl mx-auto bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2 text-yellow-500">
              Customer Name
            </label>

            <input
              type="text"
              defaultValue="Rahul Patel"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-yellow-500">
              Invoice Number
            </label>

            <input
              type="text"
              defaultValue="INV001"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-yellow-500">
              Product Name
            </label>

            <input
              type="text"
              defaultValue="Gold Ring"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-yellow-500">
              Quantity
            </label>

            <input
              type="number"
              defaultValue="1"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-yellow-500">
              Amount
            </label>

            <input
              type="number"
              defaultValue="45000"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-yellow-500">
              Payment Status
            </label>

            <select
              defaultValue="Paid"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            >
              <option>Paid</option>
              <option>Pending</option>
            </select>

          </div>

          <div>

            <label className="block mb-2 text-yellow-500">
              Sales Date
            </label>

            <input
              type="date"
              defaultValue="2026-07-27"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-yellow-500">
              Sales Executive
            </label>

            <input
              type="text"
              defaultValue="Ramesh"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="block mb-2 text-yellow-500">
            Remarks
          </label>

          <textarea
            rows={5}
            defaultValue="Customer purchased Gold Ring."
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
          />

        </div>

        <div className="mt-8">

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold transition">

            <Save size={18} />

            Update Sales Report

          </button>

        </div>

      </div>

    </main>
  );
}