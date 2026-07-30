"use client";

import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

export default function SalesDetailsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Sales Report Details
          </h1>

          <p className="text-text-secondary mt-2">
            Complete Sales Information
          </p>

        </div>

        <div className="flex gap-3">

          <Link
            href="/reports/sales"
            className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href="/reports/sales/edit/SAL001"
            className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black px-5 py-3 rounded-xl font-semibold transition"
          >
            <Pencil size={18} />
            Edit
          </Link>

        </div>

      </div>

      {/* Details Card */}

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-8">

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
              <span className="text-text-secondary">Sale ID</span>
              <span>SAL001</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-text-secondary">Customer Name</span>
              <span>Rahul Patel</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-text-secondary">Invoice No.</span>
              <span>INV001</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-text-secondary">Product</span>
              <span>Gold Ring</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-text-secondary">Quantity</span>
              <span>1</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-text-secondary">Amount</span>
              <span className="text-accent-gold font-bold">
                ₹45,000
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-text-secondary">Sales Executive</span>
              <span>Ramesh</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-text-secondary">Sales Date</span>
              <span>27 Jul 2026</span>
            </div>

            <div className="flex justify-between">

              <span className="text-text-secondary">
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

          <h2 className="text-xl font-bold text-accent-gold mb-4">
            Remarks
          </h2>

          <p className="text-text-secondary leading-8">
            Customer purchased one Gold Ring.
            Full payment received successfully.
            Invoice generated and delivered to customer.
          </p>

        </div>

      </div>

    </main>
  );
}