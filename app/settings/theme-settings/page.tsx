"use client";

import { Palette, Save, RotateCcw, Monitor, Moon, Sun } from "lucide-react";

export default function ThemeSettings() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Theme Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Customize your ERP appearance and theme preferences.
        </p>

      </div>

      {/* Card */}

      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8">

        <div className="flex items-center gap-4 mb-8">

          <div className="bg-yellow-500/20 p-4 rounded-xl">

            <Palette
              size={30}
              className="text-yellow-400"
            />

          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              Theme Preferences
            </h2>

            <p className="text-gray-400">
              Select your preferred application theme.
            </p>

          </div>

        </div>

        {/* Theme Options */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="border border-yellow-500 rounded-xl p-6 bg-[#0F172A] hover:bg-slate-800 cursor-pointer transition">

            <Monitor
              className="text-yellow-400 mb-4"
              size={36}
            />

            <h3 className="text-xl font-semibold">
              System
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Automatically match your device theme.
            </p>

          </div>

          <div className="border border-slate-700 rounded-xl p-6 bg-[#0F172A] hover:border-yellow-500 hover:bg-slate-800 cursor-pointer transition">

            <Moon
              className="text-blue-400 mb-4"
              size={36}
            />

            <h3 className="text-xl font-semibold">
              Dark Mode
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Best for low-light environments.
            </p>

          </div>

          <div className="border border-slate-700 rounded-xl p-6 bg-[#0F172A] hover:border-yellow-500 hover:bg-slate-800 cursor-pointer transition">

            <Sun
              className="text-orange-400 mb-4"
              size={36}
            />

            <h3 className="text-xl font-semibold">
              Light Mode
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Bright and clean interface.
            </p>

          </div>

        </div>

        {/* Accent Color */}

        <div className="mb-8">

          <label className="block mb-3 text-lg font-medium">
            Accent Color
          </label>

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-full bg-yellow-500 border-2 border-white cursor-pointer"></div>

            <div className="w-10 h-10 rounded-full bg-blue-500 cursor-pointer"></div>

            <div className="w-10 h-10 rounded-full bg-green-500 cursor-pointer"></div>

            <div className="w-10 h-10 rounded-full bg-red-500 cursor-pointer"></div>

            <div className="w-10 h-10 rounded-full bg-purple-500 cursor-pointer"></div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4">

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