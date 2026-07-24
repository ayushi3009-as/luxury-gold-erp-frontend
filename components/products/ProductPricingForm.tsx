"use client";

import Link from "next/link";

interface ProductPricingFormProps {
  buttonText: string;
}

export default function ProductPricingForm({
  buttonText,
}: ProductPricingFormProps) {
  return (
    <form className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-yellow-500 mb-8">
        Product Pricing Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product */}

        <div>
          <label className="block mb-2 text-gray-300">
            Product
          </label>

          <select className="w-full bg-[#0B0B0B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none">
            <option>Select Product</option>
            <option>Gold Ring</option>
            <option>Gold Chain</option>
            <option>Diamond Necklace</option>
          </select>
        </div>

        {/* SKU */}

        <div>
          <label className="block mb-2 text-gray-300">
            SKU
          </label>

          <input
            type="text"
            placeholder="GLD001"
            className="w-full bg-[#0B0B0B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none"
          />
        </div>

        {/* Cost Price */}

        <div>
          <label className="block mb-2 text-gray-300">
            Cost Price (₹)
          </label>

          <input
            type="number"
            placeholder="65000"
            className="w-full bg-[#0B0B0B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none"
          />
        </div>

        {/* Selling Price */}

        <div>
          <label className="block mb-2 text-gray-300">
            Selling Price (₹)
          </label>

          <input
            type="number"
            placeholder="75000"
            className="w-full bg-[#0B0B0B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none"
          />
        </div>

        {/* Discount */}

        <div>
          <label className="block mb-2 text-gray-300">
            Discount (%)
          </label>

          <input
            type="number"
            placeholder="10"
            className="w-full bg-[#0B0B0B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none"
          />
        </div>

        {/* Tax */}

        <div>
          <label className="block mb-2 text-gray-300">
            GST (%)
          </label>

          <input
            type="number"
            placeholder="3"
            className="w-full bg-[#0B0B0B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none"
          />
        </div>

      </div>

      {/* Notes */}

      <div className="mt-6">

        <label className="block mb-2 text-gray-300">
          Notes
        </label>

        <textarea
          rows={4}
          placeholder="Additional pricing notes..."
          className="w-full bg-[#0B0B0B] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none resize-none"
        />

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-10">

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
        >
          {buttonText}
        </button>

        <Link
          href="/products/pricing"
          className="border border-gray-700 hover:border-yellow-500 px-8 py-3 rounded-xl transition"
        >
          Cancel
        </Link>

      </div>

    </form>
  );
}