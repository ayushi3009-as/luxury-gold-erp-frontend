"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  Pencil,
  CheckCircle,
} from "lucide-react";

export default function RepairDeliveryPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Repair Delivery
          </h1>

          <p className="text-text-secondary mt-2">
            Deliver repaired jewellery to customer
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <Link
            href="/repair"
            className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href="/repair/details/REP001"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-text-primary px-5 py-3 rounded-xl transition"
          >
            <Eye size={18} />
            Details
          </Link>

          <Link
            href="/repair/edit/REP001"
            className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black px-5 py-3 rounded-xl transition"
          >
            <Pencil size={18} />
            Edit
          </Link>

        </div>

      </div>

      {/* Delivery Form */}

      <div className="max-w-6xl mx-auto bg-background-secondary border border-border-theme rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block text-accent-gold mb-2">
              Customer Name
            </label>

            <input
              type="text"
              defaultValue="Rahul Patel"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="block text-accent-gold mb-2">
              Mobile Number
            </label>

            <input
              type="text"
              defaultValue="9876543210"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="block text-accent-gold mb-2">
              Repair ID
            </label>

            <input
              type="text"
              defaultValue="REP001"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="block text-accent-gold mb-2">
              Product
            </label>

            <input
              type="text"
              defaultValue="Gold Ring"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="block text-accent-gold mb-2">
              Repair Charge
            </label>

            <input
              type="text"
              defaultValue="₹1,500"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="block text-accent-gold mb-2">
              Payment Status
            </label>

            <select className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500">

              <option>Paid</option>
              <option>Pending</option>

            </select>

          </div>

                    <div>

            <label className="block text-accent-gold mb-2">
              Delivery OTP
            </label>

            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="block text-accent-gold mb-2">
              Delivery Date
            </label>

            <input
              type="date"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
            />

          </div>

        </div>

        {/* Notes */}

        <div className="mt-6">

          <label className="block text-accent-gold mb-2">
            Delivery Notes
          </label>

          <textarea
            rows={4}
            placeholder="Enter delivery remarks..."
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            onClick={() => alert("Repair Delivered Successfully")}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-3 rounded-xl transition"
          >
            <CheckCircle size={20} />
            Confirm Delivery
          </button>

          <button
            onClick={() => window.print()}
            className="bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-8 py-3 rounded-xl transition"
          >
            Print Delivery Slip
          </button>

        </div>

      </div>

    </main>
  );
}