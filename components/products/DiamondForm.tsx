"use client";

import Link from "next/link";

interface DiamondFormProps {
  buttonText: string;
}

export default function DiamondForm({
  buttonText,
}: DiamondFormProps) {
  return (
    <form className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 max-w-5xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 text-yellow-500">
            Diamond Name
          </label>

          <input
            type="text"
            placeholder="Enter diamond name"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-yellow-500">
            SKU
          </label>

          <input
            type="text"
            placeholder="DMD001"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-yellow-500">
            Carat
          </label>

          <input
            type="text"
            placeholder="1.50"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-yellow-500">
            Color
          </label>

          <input
            type="text"
            placeholder="D"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-yellow-500">
            Clarity
          </label>

          <input
            type="text"
            placeholder="VVS1"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-yellow-500">
            Price
          </label>

          <input
            type="number"
            placeholder="250000"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-yellow-500">
            Stock
          </label>

          <input
            type="number"
            placeholder="10"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-yellow-500">
            Status
          </label>

          <select
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          >
            <option>Available</option>
            <option>Out of Stock</option>
          </select>
        </div>

      </div>

      <div className="mt-6">

        <label className="block mb-2 text-yellow-500">
          Description
        </label>

        <textarea
          rows={5}
          placeholder="Enter diamond description..."
          className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
        />

      </div>

      <div className="mt-6">

        <label className="block mb-2 text-yellow-500">
          Upload Diamond Image
        </label>

        <input
          type="file"
          className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 file:bg-yellow-500 file:text-black file:border-0 file:px-4 file:py-2 file:rounded-lg"
        />

      </div>

      <div className="flex justify-end gap-4 mt-8">

        <Link
          href="/products/diamond"
          className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-700 transition"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition"
        >
          {buttonText}
        </button>

      </div>

    </form>
  );
}