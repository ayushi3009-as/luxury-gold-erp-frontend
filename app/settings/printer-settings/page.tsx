"use client";

import { Printer, Save, RotateCcw } from "lucide-react";

export default function PrinterSettings() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Printer Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Configure your default printer and printing preferences.
        </p>

      </div>

      {/* Card */}

      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8">

        <div className="flex items-center gap-4 mb-8">

          <div className="bg-yellow-500/20 p-4 rounded-xl">

            <Printer
              size={30}
              className="text-yellow-400"
            />

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              Printer Configuration
            </h2>

            <p className="text-gray-400">
              Manage your printing preferences.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2">
              Default Printer
            </label>

            <select className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500">

              <option>HP LaserJet Pro</option>
              <option>Epson L3250</option>
              <option>Canon Pixma G3010</option>

            </select>

          </div>

          <div>

            <label className="block mb-2">
              Paper Size
            </label>

            <select className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500">

              <option>A4</option>
              <option>A5</option>
              <option>Letter</option>

            </select>

          </div>

          <div>

            <label className="block mb-2">
              Print Quality
            </label>

            <select className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500">

              <option>High</option>
              <option>Medium</option>
              <option>Low</option>

            </select>

          </div>

          <div>

            <label className="block mb-2">
              Orientation
            </label>

            <select className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500">

              <option>Portrait</option>
              <option>Landscape</option>

            </select>

          </div>

          <div>

            <label className="block mb-2">
              Copies
            </label>

            <input
              type="number"
              defaultValue={1}
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="block mb-2">
              Default Color
            </label>

            <select className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500">

              <option>Color</option>
              <option>Black & White</option>

            </select>

          </div>

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <button className="flex items-center gap-2 border border-slate-600 px-6 py-3 rounded-lg hover:bg-slate-700">

            <RotateCcw size={18} />

            Reset

          </button>

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg">

            <Save size={18} />

            Save Settings

          </button>

        </div>

      </div>

    </div>
  );
}