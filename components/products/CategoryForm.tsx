"use client";

import Link from "next/link";

interface CategoryFormProps {
  buttonText: string;
}

export default function CategoryForm({
  buttonText,
}: CategoryFormProps) {
  return (
    <form className="bg-background-secondary border border-border-theme rounded-2xl p-8 max-w-4xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Category Name */}

        <div>

          <label className="block mb-2 text-accent-gold">
            Category Name
          </label>

          <input
            type="text"
            placeholder="Enter category name"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />

        </div>

        {/* Category Code */}

        <div>

          <label className="block mb-2 text-accent-gold">
            Category Code
          </label>

          <input
            type="text"
            placeholder="CAT001"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
          />

        </div>

      </div>

      {/* Description */}

      <div className="mt-6">

        <label className="block mb-2 text-accent-gold">
          Description
        </label>

        <textarea
          rows={5}
          placeholder="Category Description..."
          className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
        />

      </div>

      {/* Status */}

      <div className="mt-6">

        <label className="block mb-2 text-accent-gold">
          Status
        </label>

        <select
          className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 mt-8">

        <Link
          href="/products/categories"
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