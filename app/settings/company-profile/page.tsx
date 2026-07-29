"use client";

import { Save, RotateCcw, Upload } from "lucide-react";

export default function CompanyProfile() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Company Profile</h1>
        <p className="text-gray-400 mt-2">
          Manage your company information and business details.
        </p>
      </div>

      {/* Card */}
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8">

        {/* Logo */}
        <div className="flex items-center gap-6 mb-10">

          <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center">
            <Upload size={30} className="text-yellow-400" />
          </div>

          <div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-lg font-semibold">
              Upload Logo
            </button>

            <p className="text-gray-400 text-sm mt-2">
              PNG, JPG (Max 2MB)
            </p>
          </div>

        </div>

        {/* Form */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2">Company Name</label>
            <input
              type="text"
              placeholder="Luxury Gold ERP"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2">GST Number</label>
            <input
              type="text"
              placeholder="22AAAAA0000A1Z5"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2">PAN Number</label>
            <input
              type="text"
              placeholder="ABCDE1234F"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2">CIN Number</label>
            <input
              type="text"
              placeholder="L12345GJ2025PLC000001"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              placeholder="info@company.com"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2">Mobile Number</label>
            <input
              type="text"
              placeholder="+91 9876543210"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2">Company Address</label>
            <textarea
              rows={4}
              placeholder="Enter company address..."
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2">Website</label>
            <input
              type="text"
              placeholder="www.company.com"
              className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2">Time Zone</label>
            <select className="w-full bg-[#0F172A] border border-slate-600 rounded-lg p-3 outline-none focus:border-yellow-500">
              <option>Asia/Kolkata</option>
              <option>UTC</option>
              <option>Europe/London</option>
            </select>
          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-10">

          <button className="flex items-center gap-2 border border-slate-600 px-6 py-3 rounded-lg hover:bg-slate-700">

            <RotateCcw size={18} />

            Reset

          </button>

          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold">

            <Save size={18} />

            Save Changes

          </button>

        </div>

      </div>

    </div>
  );
}