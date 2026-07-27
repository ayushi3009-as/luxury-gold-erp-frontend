"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function AddSalesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Add Sales Report
          </h1>

          <p className="text-gray-400 mt-2">
            Create a new sales report
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

      {/* Form */}

      <div className="max-w-6xl mx-auto bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block text-yellow-500 mb-2">
              Customer Name
            </label>

            <input
              type="text"
              placeholder="Enter Customer Name"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-yellow-500 mb-2">
              Invoice Number
            </label>

            <input
              type="text"
              placeholder="INV001"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-yellow-500 mb-2">
              Product Name
            </label>

            <input
              type="text"
              placeholder="Gold Ring"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-yellow-500 mb-2">
              Quantity
            </label>

            <input
              type="number"
              placeholder="1"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-yellow-500 mb-2">
              Amount
            </label>

            <input
              type="number"
              placeholder="45000"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-yellow-500 mb-2">
              Payment Status
            </label>

            <select className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3">

              <option>Paid</option>
              <option>Pending</option>

            </select>

          </div>

          <div>

            <label className="block text-yellow-500 mb-2">
              Sales Date
            </label>

            <input
              type="date"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-yellow-500 mb-2">
              Sales Executive
            </label>

            <input
              type="text"
              placeholder="Employee Name"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="block text-yellow-500 mb-2">
            Remarks
          </label>

          <textarea
            rows={5}
            placeholder="Enter Remarks..."
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3"
          />

        </div>

        <div className="mt-8">

          <button
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
          >
            <Save size={18} />
            Save Sales Report
          </button>

        </div>

      </div>

    </main>
  );
}