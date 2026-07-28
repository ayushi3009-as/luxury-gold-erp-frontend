"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddIncomePage() {
  const [formData, setFormData] = useState({
    source: "",
    amount: "",
    paymentMethod: "",
    date: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
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

    alert("Income Added Successfully!");
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Add Income
          </h1>

          <p className="text-gray-400 mt-2">
            Record a new income transaction.
          </p>
        </div>

        <Link
          href="/finance/income"
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
              Income Source
            </label>

            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="Enter income source"
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Amount
            </label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Payment Method
            </label>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            >
              <option value="">Select Payment Method</option>
              <option>Cash</option>
              <option>UPI</option>
              <option>Bank Transfer</option>
              <option>Cheque</option>
              <option>Credit Card</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Income Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

        </div>

        <div>

          <label className="block mb-2 text-gray-300">
            Description
          </label>

          <textarea
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description..."
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />

        </div>

        <div className="flex justify-end">

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
          >
            Save Income
          </button>

        </div>

      </form>

    </main>
  );
}