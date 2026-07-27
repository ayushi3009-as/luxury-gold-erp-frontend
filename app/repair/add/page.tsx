"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function AddRepairPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Add Repair
          </h1>

          <p className="text-gray-400 mt-2">
            Create a new repair entry
          </p>
        </div>

        <Link
          href="/repair"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Form */}

      <div className="max-w-5xl mx-auto bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-yellow-500">
              Customer Name
            </label>

            <input
              type="text"
              placeholder="Enter customer name"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-yellow-500">
              Mobile Number
            </label>

            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-yellow-500">
              Product
            </label>

            <input
              type="text"
              placeholder="Gold Ring"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-yellow-500">
              Repair Type
            </label>

            <select className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none">

              <option>Ring Resize</option>
              <option>Polishing</option>
              <option>Stone Setting</option>

            </select>
          </div>

          <div>
            <label className="block mb-2 text-yellow-500">
              Worker
            </label>

            <input
              type="text"
              placeholder="Ramesh"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-yellow-500">
              Estimated Cost
            </label>

            <input
              type="number"
              placeholder="1500"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div className="md:col-span-2">

            <label className="block mb-2 text-yellow-500">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Repair description..."
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />

          </div>

          <div className="md:col-span-2">

            <button
              type="submit"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
            >
              <Save size={18} />
              Save Repair
            </button>

          </div>

        </form>

      </div>

    </main>
  );
}