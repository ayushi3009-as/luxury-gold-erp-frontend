"use client";

import Link from "next/link";

interface ProductFormProps {
  buttonText: string;
}

export default function ProductForm({
  buttonText,
}: ProductFormProps) {
  return (
    <form className="bg-background-secondary border border-border-theme rounded-2xl p-8 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-accent-gold mb-8">
        Product Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product Name */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Product Name
          </label>

          <input
            type="text"
            placeholder="Enter product name"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          />

        </div>

        {/* SKU */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Product SKU
          </label>

          <input
            type="text"
            placeholder="SKU001"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          />

        </div>

        {/* Category */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Category
          </label>

          <input
            type="text"
            placeholder="e.g. Necklace, Ring, etc."
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          />

        </div>

        {/* Brand */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Brand
          </label>

          <select
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          >
            <option>Select Brand</option>
            <option>Tanishq</option>
            <option>Kalyan</option>
            <option>Malabar</option>
          </select>

        </div>

        {/* Collection */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Collection
          </label>

          <input
            type="text"
            placeholder="Wedding Collection"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          />

        </div>

        {/* Product Type */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Product Type
          </label>

          <select
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          >
            <option>Select Type</option>
            <option>Ring</option>
            <option>Necklace</option>
            <option>Bangle</option>
            <option>Earrings</option>
          </select>

        </div>
                {/* Gold Purity */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Gold Purity
          </label>

          <select
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          >
            <option>Select Purity</option>
            <option>18K</option>
            <option>22K</option>
            <option>24K</option>
          </select>

        </div>

        {/* Diamond Quality */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Diamond Quality
          </label>

          <select
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          >
            <option>Select Quality</option>
            <option>VVS1</option>
            <option>VVS2</option>
            <option>VS1</option>
            <option>VS2</option>
            <option>SI1</option>
          </select>

        </div>

        {/* Weight */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Weight (gm)
          </label>

          <input
            type="number"
            placeholder="Enter Weight"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          />

        </div>

        {/* Making Charges */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Making Charges
          </label>

          <input
            type="number"
            placeholder="Enter Making Charges"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          />

        </div>

        {/* Selling Price */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Selling Price
          </label>

          <input
            type="number"
            placeholder="Enter Selling Price"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          />

        </div>

        {/* Stock */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Stock Quantity
          </label>

          <input
            type="number"
            placeholder="Enter Stock"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          />

        </div>

        {/* Status */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Status
          </label>

          <select
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

                {/* Product Image */}

        <div className="md:col-span-2">

          <label className="block mb-2 text-text-secondary">
            Product Image
          </label>

          <input
            type="file"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary file:bg-accent-gold file:text-black file:border-0 file:px-4 file:py-2 file:rounded-lg cursor-pointer"
          />

        </div>

        {/* Description */}

        <div className="md:col-span-2">

          <label className="block mb-2 text-text-secondary">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Enter product description..."
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary resize-none focus:border-yellow-500 outline-none"
          />

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
          href="/products"
          className="border border-gray-700 hover:border-yellow-500 px-8 py-3 rounded-xl transition"
        >
          Cancel
        </Link>

      </div>

    </form>
  );
}