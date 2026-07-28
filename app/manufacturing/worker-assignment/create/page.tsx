"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateWorkerAssignmentPage() {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Create Worker Assignment
          </h1>

          <p className="text-gray-400 mt-2">
            Assign a Job Card to a Worker
          </p>
        </div>

        <Link
          href="/manufacturing/worker-assignment"
          className="flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-lg text-white hover:border-yellow-500"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Form */}
      <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-gray-300">
              Assignment No
            </label>

            <input
              className="w-full h-11 rounded-lg bg-[#181818] border border-zinc-700 px-3 text-white"
              placeholder="WA-0001"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Assignment Date
            </label>

            <input
              type="date"
              className="w-full h-11 rounded-lg bg-[#181818] border border-zinc-700 px-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Job Card
            </label>

            <select className="w-full h-11 rounded-lg bg-[#181818] border border-zinc-700 px-3 text-white">
              <option>Select Job Card</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Worker
            </label>

            <select className="w-full h-11 rounded-lg bg-[#181818] border border-zinc-700 px-3 text-white">
              <option>Select Worker</option>
            </select>
          </div>

        </div>

        <div className="mt-8 flex justify-end">

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
            Save Assignment
          </button>

        </div>

      </div>

    </div>
  );
}