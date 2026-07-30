"use client";

import Link from "next/link";

interface GoldFormProps {
  buttonText: string;
}

export default function GoldForm({
  buttonText,
}: GoldFormProps) {
  return (
    <form className="bg-background-secondary border border-border-theme rounded-2xl p-8 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-accent-gold mb-8">
        Gold Product Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product Name */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Product Name
          </label>

          <input
            type="text"
            placeholder="Enter Product Name"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* SKU */}

        <div>

          <label className="block mb-2 text-text-secondary">
            SKU
          </label>

          <input
            type="text"
            placeholder="GLD001"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Gold Purity */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Gold Purity
          </label>

          <select
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          >
            <option>18K</option>
            <option>22K</option>
            <option>24K</option>
          </select>

        </div>

        {/* Weight */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Weight (gm)
          </label>

          <input
            type="number"
            placeholder="10"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Making Charges */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Making Charges
          </label>

          <input
            type="number"
            placeholder="5000"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Selling Price */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Selling Price
          </label>

          <input
            type="number"
            placeholder="65000"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Stock */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Stock Quantity
          </label>

          <input
            type="number"
            placeholder="20"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Product Image */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Product Image
          </label>

          <input
            type="file"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary file:bg-accent-gold file:text-black file:border-0 file:px-4 file:py-2 file:rounded-lg"
          />

        </div>

        {/* Description */}

        <div className="md:col-span-2">

          <label className="block mb-2 text-text-secondary">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Enter Product Description..."
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary resize-none outline-none focus:border-yellow-500"
          />

        </div>

        {/* Status */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Status
          </label>

          <select
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-10">

        <button
          type="submit"
          className="bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-8 py-3 rounded-xl transition"
        >
          {buttonText}
        </button>

        <Link
          href="/products/gold"
          className="border border-gray-700 hover:border-yellow-500 px-8 py-3 rounded-xl transition"
        >
          Cancel
        </Link>

      </div>

    </form>
  );
}