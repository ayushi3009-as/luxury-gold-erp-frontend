"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function AddTransferPage() {
  const [formData, setFormData] = useState({
    fromBranch: "",
    toBranch: "",
    transferDate: "",
    items: "",
    remarks: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Transfer Created Successfully!");
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            New Transfer
          </h1>

          <p className="text-gray-400 mt-2">
            Transfer inventory between branches.
          </p>
        </div>

        <Link
          href="/multi-branch/transfers"
          className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#2B2B2B] px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 space-y-6"
      >

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-gray-300">
              From Branch
            </label>

            <select
              name="fromBranch"
              value={formData.fromBranch}
              onChange={handleChange}
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            >
              <option value="">Select Branch</option>
              <option>Surat Head Office</option>
              <option>Ahmedabad Branch</option>
              <option>Mumbai Branch</option>
              <option>Rajkot Branch</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              To Branch
            </label>

            <select
              name="toBranch"
              value={formData.toBranch}
              onChange={handleChange}
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            >
              <option value="">Select Branch</option>
              <option>Surat Head Office</option>
              <option>Ahmedabad Branch</option>
              <option>Mumbai Branch</option>
              <option>Rajkot Branch</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Transfer Date
            </label>

            <input
              type="date"
              name="transferDate"
              value={formData.transferDate}
              onChange={handleChange}
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Number of Items
            </label>

            <input
              type="number"
              name="items"
              value={formData.items}
              onChange={handleChange}
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

        </div>

        <div>

          <label className="block mb-2 text-gray-300">
            Remarks
          </label>

          <textarea
            rows={4}
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Enter transfer remarks..."
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />

        </div>

        <div className="flex justify-end">

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
          >
            Save Transfer
          </button>

        </div>

      </form>

    </main>
  );
}