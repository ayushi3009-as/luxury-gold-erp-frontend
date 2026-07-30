"use client";

import Link from "next/link";

interface BrandFormProps {
  buttonText: string;
}

export default function BrandForm({
  buttonText,
}: BrandFormProps) {
  return (
    <form className="bg-background-secondary border border-border-theme rounded-2xl p-8 max-w-4xl mx-auto">

      <h2 className="text-3xl font-bold text-accent-gold mb-8">
        Brand Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Brand Name */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Brand Name
          </label>

          <input
            type="text"
            placeholder="Enter Brand Name"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Country */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Country
          </label>

          <input
            type="text"
            placeholder="Enter Country"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Website */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Website
          </label>

          <input
            type="url"
            placeholder="https://example.com"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Contact Email */}

        <div>

          <label className="block mb-2 text-text-secondary">
            Contact Email
          </label>

          <input
            type="email"
            placeholder="brand@email.com"
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary outline-none focus:border-yellow-500"
          />

        </div>

        {/* Brand Logo */}

        <div className="md:col-span-2">

          <label className="block mb-2 text-text-secondary">
            Brand Logo
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
            placeholder="Enter Brand Description..."
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
          href="/products/brands"
          className="border border-gray-700 hover:border-yellow-500 px-8 py-3 rounded-xl transition"
        >
          Cancel
        </Link>

      </div>

    </form>
  );
}