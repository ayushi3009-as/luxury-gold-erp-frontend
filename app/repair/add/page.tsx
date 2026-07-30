"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function AddRepairPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Add Repair
          </h1>

          <p className="text-text-secondary mt-2">
            Create a new repair entry
          </p>
        </div>

        <Link
          href="/repair"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Form */}

      <div className="max-w-5xl mx-auto bg-background-secondary border border-border-theme rounded-2xl p-8">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-accent-gold">
              Customer Name
            </label>

            <input
              type="text"
              placeholder="Enter customer name"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-accent-gold">
              Mobile Number
            </label>

            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-accent-gold">
              Product
            </label>

            <input
              type="text"
              placeholder="Gold Ring"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-accent-gold">
              Repair Type
            </label>

            <select className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none">

              <option>Ring Resize</option>
              <option>Polishing</option>
              <option>Stone Setting</option>

            </select>
          </div>

          <div>
            <label className="block mb-2 text-accent-gold">
              Worker
            </label>

            <input
              type="text"
              placeholder="Ramesh"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-accent-gold">
              Estimated Cost
            </label>

            <input
              type="number"
              placeholder="1500"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div className="md:col-span-2">

            <label className="block mb-2 text-accent-gold">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Repair description..."
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />

          </div>

          <div className="md:col-span-2">

            <button
              type="submit"
              className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-8 py-3 rounded-xl transition"
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