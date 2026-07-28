"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateJobCardPage() {
  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Create Job Card
          </h1>

          <p className="text-gray-400 mt-2">
            Add a new manufacturing job card
          </p>
        </div>

        <Link
          href="/manufacturing/job-card"
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
            <label className="text-gray-300 block mb-2">
              Job Card No
            </label>

            <input
              className="w-full h-12 bg-[#181818] rounded-xl border border-zinc-700 px-4 text-white"
              placeholder="JC-1001"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Customer Name
            </label>

            <input
              className="w-full h-12 bg-[#181818] rounded-xl border border-zinc-700 px-4 text-white"
              placeholder="Customer Name"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Design No
            </label>

            <input
              className="w-full h-12 bg-[#181818] rounded-xl border border-zinc-700 px-4 text-white"
              placeholder="Design Number"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Jewellery Type
            </label>

            <select className="w-full h-12 bg-[#181818] rounded-xl border border-zinc-700 px-4 text-white">
              <option>Ring</option>
              <option>Pendant</option>
              <option>Necklace</option>
              <option>Bangle</option>
              <option>Earrings</option>
            </select>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Metal
            </label>

            <select className="w-full h-12 bg-[#181818] rounded-xl border border-zinc-700 px-4 text-white">
              <option>Gold</option>
              <option>Silver</option>
              <option>Platinum</option>
            </select>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Purity
            </label>

            <select className="w-full h-12 bg-[#181818] rounded-xl border border-zinc-700 px-4 text-white">
              <option>18K</option>
              <option>22K</option>
              <option>24K</option>
            </select>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Gross Weight (gm)
            </label>

            <input
              type="number"
              className="w-full h-12 bg-[#181818] rounded-xl border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Worker
            </label>

            <select className="w-full h-12 bg-[#181818] rounded-xl border border-zinc-700 px-4 text-white">
              <option>Select Worker</option>
            </select>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Due Date
            </label>

            <input
              type="date"
              className="w-full h-12 bg-[#181818] rounded-xl border border-zinc-700 px-4 text-white"
            />
          </div>

        </div>

        <div className="mt-8">

          <label className="text-gray-300 block mb-2">
            Remarks
          </label>

          <textarea
            rows={4}
            className="w-full bg-[#181818] rounded-xl border border-zinc-700 p-4 text-white"
            placeholder="Enter remarks..."
          />

        </div>

        <div className="flex justify-end mt-8">

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
            <Save size={18} />
            Save Job Card
          </button>

        </div>

      </div>

    </div>
  );
}