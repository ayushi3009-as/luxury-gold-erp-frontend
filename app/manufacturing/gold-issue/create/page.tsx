"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateGoldIssuePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Create Gold Issue
          </h1>

          <p className="text-gray-400 mt-2">
            Issue gold to manufacturing worker.
          </p>
        </div>

        <Link
          href="/manufacturing/gold-issue"
          className="flex items-center gap-2 border border-zinc-700 px-5 py-3 rounded-xl text-white hover:border-yellow-500"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Form */}

      <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div>
            <label className="block text-gray-300 mb-2">
              Issue No
            </label>

            <input
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
              placeholder="GI-0001"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Issue Date
            </label>

            <input
              type="date"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Job Card
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>Select Job Card</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Worker
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>Select Worker</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Gold Purity
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>18K</option>
              <option>22K</option>
              <option>24K</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Gold Weight (gm)
            </label>

            <input
              type="number"
              placeholder="0.000"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Wastage %
            </label>

            <input
              type="number"
              placeholder="0"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Expected Return Date
            </label>

            <input
              type="date"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

        </div>

        <div className="mt-8">

          <label className="block text-gray-300 mb-2">
            Remarks
          </label>

          <textarea
            rows={4}
            placeholder="Enter Remarks..."
            className="w-full rounded-xl bg-[#181818] border border-zinc-700 p-4 text-white"
          />

        </div>

        <div className="flex justify-end mt-8">

          <button
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
          >
            <Save size={18} />
            Save Gold Issue
          </button>

        </div>

      </div>

    </div>
  );
}