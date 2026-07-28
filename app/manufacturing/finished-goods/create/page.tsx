"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateFinishedGoodsPage() {

  return (

    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Create Finished Goods
          </h1>

          <p className="text-gray-400 mt-2">
            Add completed jewellery into finished stock.
          </p>

        </div>

        <Link
          href="/manufacturing/finished-goods"
          className="flex items-center gap-2 border border-zinc-700 px-5 py-3 rounded-xl text-white hover:border-yellow-500"
        >
          <ArrowLeft size={18}/>
          Back
        </Link>

      </div>

      {/* Form */}

      <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div>
            <label className="block mb-2 text-gray-300">
              FG No
            </label>

            <input
              placeholder="FG-0001"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Receive Date
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
              Product Name
            </label>

            <input
              placeholder="Gold Ring"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Gross Weight
            </label>

            <input
              type="number"
              placeholder="0.000"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Net Weight
            </label>

            <input
              type="number"
              placeholder="0.000"
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Purity
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>18K</option>
              <option>22K</option>
              <option>24K</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Quantity
            </label>

            <input
              type="number"
              defaultValue={1}
              className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              QC Status
            </label>

            <select className="w-full h-12 rounded-xl bg-[#181818] border border-zinc-700 px-4 text-white">
              <option>Passed</option>
              <option>Pending</option>
              <option>Rejected</option>
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
            Save Finished Goods
          </button>

        </div>

      </div>

    </div>
  );
}