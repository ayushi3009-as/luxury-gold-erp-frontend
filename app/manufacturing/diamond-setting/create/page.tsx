"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateDiamondSettingPage() {

  return (

    <div className="max-w-7xl mx-auto space-y-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Create Diamond Setting
          </h1>

          <p className="text-gray-400 mt-2">
            Assign diamonds to jewellery.
          </p>
        </div>

        <Link
          href="/manufacturing/diamond-setting"
          className="flex items-center gap-2 border border-zinc-700 px-5 py-3 rounded-xl text-white hover:border-yellow-500"
        >
          <ArrowLeft size={18}/>
          Back
        </Link>

      </div>

      <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div>
            <label className="block mb-2 text-gray-300">
              Setting No
            </label>

            <input
              placeholder="DS-0001"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Setting Date
            </label>

            <input
              type="date"
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
              <option>Select Setter</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Setting Type
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>Prong</option>
              <option>Channel</option>
              <option>Bezel</option>
              <option>Pave</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Status
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

        </div>

        <div className="mt-6">

          <label className="block mb-2 text-gray-300">
            Remarks
          </label>

          <textarea
            rows={4}
            className="w-full rounded-xl bg-[#181818] border border-zinc-700 p-4 text-white"
            placeholder="Enter Remarks..."
          />

        </div>

        <div className="flex justify-end mt-8">

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
            <Save size={18}/>
            Save Diamond Setting
          </button>

        </div>

      </div>

    </div>
  );
}