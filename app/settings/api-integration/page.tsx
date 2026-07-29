"use client";

import {
  Cable,
  Save,
  RefreshCw,
  Shield,
  Globe,
} from "lucide-react";

export default function ApiIntegration() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-yellow-400">
          API Integration
        </h1>
        <p className="text-gray-400 mt-2">
          Connect your ERP with third-party services.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto bg-[#111111] border border-yellow-500/20 rounded-2xl p-8 shadow-2xl">

        {/* Top Icon */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-yellow-500/10 p-4 rounded-xl">
            <Cable className="text-yellow-400" size={32} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              API Configuration
            </h2>
            <p className="text-gray-400">
              Configure external API connections
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="text-sm text-gray-300">
              API Name
            </label>

            <input
              type="text"
              placeholder="Payment Gateway"
              className="mt-2 w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">
              Endpoint
            </label>

            <input
              type="text"
              placeholder="https://api.example.com"
              className="mt-2 w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-300">
              API Key
            </label>

            <input
              type="password"
              placeholder="Enter Secret Key"
              className="mt-2 w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">
              Environment
            </label>

            <select className="mt-2 w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none">
              <option>Production</option>
              <option>Development</option>
              <option>Testing</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-300">
              Status
            </label>

            <select className="mt-2 w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-300">
              Description
            </label>

            <textarea
              rows={4}
              placeholder="Write API description..."
              className="mt-2 w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-10">

          <div className="flex gap-3">

            <div className="bg-[#1A1A1A] px-4 py-2 rounded-lg flex items-center gap-2">
              <Shield size={18} className="text-green-400" />
              <span className="text-sm">Secure</span>
            </div>

            <div className="bg-[#1A1A1A] px-4 py-2 rounded-lg flex items-center gap-2">
              <Globe size={18} className="text-blue-400" />
              <span className="text-sm">Online</span>
            </div>

          </div>

          <div className="flex gap-4">

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 transition">
              <RefreshCw size={18} />
              Test
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition">
              <Save size={18} />
              Save API
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}