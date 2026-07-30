"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function EditSalesPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Edit Sales Report
          </h1>

          <p className="text-text-secondary mt-2">
            Update Sales Information
          </p>

        </div>

        <Link
          href="/reports/sales"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="max-w-6xl mx-auto bg-background-secondary border border-border-theme rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2 text-accent-gold">
              Customer Name
            </label>

            <input
              type="text"
              defaultValue="Rahul Patel"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Invoice Number
            </label>

            <input
              type="text"
              defaultValue="INV001"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Product Name
            </label>

            <input
              type="text"
              defaultValue="Gold Ring"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Quantity
            </label>

            <input
              type="number"
              defaultValue="1"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Amount
            </label>

            <input
              type="number"
              defaultValue="45000"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Payment Status
            </label>

            <select
              defaultValue="Paid"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            >
              <option>Paid</option>
              <option>Pending</option>
            </select>

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Sales Date
            </label>

            <input
              type="date"
              defaultValue="2026-07-27"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block mb-2 text-accent-gold">
              Sales Executive
            </label>

            <input
              type="text"
              defaultValue="Ramesh"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="block mb-2 text-accent-gold">
            Remarks
          </label>

          <textarea
            rows={5}
            defaultValue="Customer purchased Gold Ring."
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
          />

        </div>

        <div className="mt-8">

          <button className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black px-8 py-3 rounded-xl font-semibold transition">

            <Save size={18} />

            Update Sales Report

          </button>

        </div>

      </div>

    </main>
  );
}