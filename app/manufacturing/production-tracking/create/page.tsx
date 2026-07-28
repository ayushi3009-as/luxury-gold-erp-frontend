"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateProductionTrackingPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Production Tracking
          </h1>

          <p className="text-gray-400 mt-2">
            Update production progress.
          </p>
        </div>

        <Link
          href="/manufacturing/production-tracking"
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
            <label className="block mb-2 text-gray-300">
              Tracking No
            </label>

            <input
              placeholder="PT-0001"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Job Card
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>Select Job Card</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Worker
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>Select Worker</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Process
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>Casting</option>
              <option>Filing</option>
              <option>Setting</option>
              <option>Polishing</option>
              <option>Finishing</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Progress (%)
            </label>

            <input
              type="number"
              placeholder="0"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Status
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Hold</option>
            </select>
          </div>

        </div>

        <div className="mt-6">

          <label className="block mb-2 text-gray-300">
            Remarks
          </label>

          <textarea
            rows={4}
            placeholder="Enter remarks..."
            className="w-full rounded-xl bg-[#181818] border border-zinc-700 p-4 text-white"
          />

        </div>

        <div className="flex justify-end mt-8">

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
            <Save size={18}/>
            Save Tracking
          </button>

        </div>

      </div>

    </div>
  );
}