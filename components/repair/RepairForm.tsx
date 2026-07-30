"use client";

import Link from "next/link";

interface RepairFormProps {
  buttonText: string;
}

export default function RepairForm({
  buttonText,
}: RepairFormProps) {
  return (
    <form className="bg-background-secondary border border-border-theme rounded-2xl p-8 max-w-6xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 text-accent-gold">
            Customer Name
          </label>

          <input
            type="text"
            placeholder="Enter customer name"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-accent-gold">
            Mobile Number
          </label>

          <input
            type="text"
            placeholder="9876543210"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-accent-gold">
            Product Name
          </label>

          <input
            type="text"
            placeholder="Gold Ring"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-accent-gold">
            Repair Type
          </label>

          <select className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500">
            <option>Polishing</option>
            <option>Stone Setting</option>
            <option>Ring Resize</option>
            <option>Chain Repair</option>
            <option>Soldering</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-accent-gold">
            Estimated Cost
          </label>

          <input
            type="number"
            placeholder="1000"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-accent-gold">
            Delivery Date
          </label>

          <input
            type="date"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

      </div>

      <div className="mt-6">

        <label className="block mb-2 text-accent-gold">
          Problem Description
        </label>

        <textarea
          rows={5}
          placeholder="Describe repair issue..."
          className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
        />

      </div>

      <div className="mt-6">

        <label className="block mb-2 text-accent-gold">
          Upload Product Image
        </label>

        <input
          type="file"
          className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
        />

      </div>

      <div className="flex justify-end gap-4 mt-8">

        <Link
          href="/repair"
          className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-700 transition"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold transition"
        >
          {buttonText}
        </button>

      </div>

    </form>
  );
}