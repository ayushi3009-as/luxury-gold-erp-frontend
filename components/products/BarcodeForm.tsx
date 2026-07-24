"use client";

import Link from "next/link";

interface BarcodeFormProps {
  buttonText: string;
}

export default function BarcodeForm({
  buttonText,
}: BarcodeFormProps) {
  return (
    <form className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-yellow-500 mb-8">
        Generate Product Barcode
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product */}

        <div>

          <label className="block mb-2 text-gray-300">
            Product
          </label>

          <select
            className="w-full rounded-xl bg-[#0B0B0B] border border-gray-700 px-4 py-3 text-white outline-none focus:border-yellow-500"
          >
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
            className="w-full rounded-xl bg-[#0B0B0B] border border-gray-700 px-4 py-3 text-white outline-none focus:border-yellow-500"
          />

        </div>

        {/* Barcode Value */}

        <div>

          <label className="block mb-2 text-gray-300">
            Barcode Value
          </label>

          <input
            type="text"
            placeholder="123456789012"
            className="w-full rounded-xl bg-[#0B0B0B] border border-gray-700 px-4 py-3 text-white outline-none focus:border-yellow-500"
          />

        </div>

        {/* Barcode Type */}

        <div>

          <label className="block mb-2 text-gray-300">
            Barcode Type
          </label>

          <select
            className="w-full rounded-xl bg-[#0B0B0B] border border-gray-700 px-4 py-3 text-white outline-none focus:border-yellow-500"
          >
            <option>Code128</option>
            <option>EAN-13</option>
            <option>UPC</option>
          </select>

        </div>

      </div>

      {/* Barcode Preview */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold text-yellow-500 mb-4">
          Barcode Preview
        </h3>

        <div className="bg-white rounded-xl p-6 flex justify-center">

          <img
            src="/barcode/barcode1.png"
            alt="Barcode Preview"
            className="h-24 object-contain"
          />

        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-10">

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
        >
          {buttonText}
        </button>

        <button
          type="button"
          className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-xl transition"
        >
          Download Barcode
        </button>

        <Link
          href="/products/barcode"
          className="border border-gray-700 hover:border-yellow-500 px-8 py-3 rounded-xl transition"
        >
          Cancel
        </Link>

      </div>

    </form>
  );
}
