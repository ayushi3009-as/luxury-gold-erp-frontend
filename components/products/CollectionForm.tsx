"use client";

import Link from "next/link";

interface CollectionFormProps {
  buttonText: string;
}

export default function CollectionForm({
  buttonText,
}: CollectionFormProps) {
  return (
    <form className="bg-background-secondary border border-border-theme rounded-2xl p-8 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-accent-gold mb-8">
        Collection Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Collection Name */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Collection Name
          </label>

          <input
            type="text"
            placeholder="Enter Collection Name"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Category */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Category
          </label>

          <select
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          >
            <option>Gold Jewellery</option>
            <option>Diamond Jewellery</option>
            <option>Silver Jewellery</option>
            <option>Platinum Jewellery</option>
          </select>

        </div>

        {/* Banner Image */}

        <div className="md:col-span-2">

          <label className="block mb-2 text-text-secondary">
            Collection Banner
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
            placeholder="Enter Collection Description..."
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
          href="/products/collections"
          className="border border-gray-700 hover:border-yellow-500 px-8 py-3 rounded-xl transition"
        >
          Cancel
        </Link>

      </div>

    </form>
  );
}