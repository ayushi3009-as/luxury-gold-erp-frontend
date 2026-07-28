"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddChequePage() {
  const [formData, setFormData] = useState({
    bank: "",
    chequeNo: "",
    payee: "",
    amount: "",
    chequeDate: "",
    remarks: "",
    status: "Pending",
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

    alert("Cheque Added Successfully!");
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Add Cheque
          </h1>

          <p className="text-gray-400 mt-2">
            Create a new cheque record.
          </p>
        </div>

        <Link
          href="/finance/cheques"
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
              Bank Account
            </label>

            <select
              name="bank"
              value={formData.bank}
              onChange={handleChange}
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            >
              <option value="">Select Bank</option>
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Cheque Number
            </label>

            <input
              type="text"
              name="chequeNo"
              value={formData.chequeNo}
              onChange={handleChange}
              required
              placeholder="458963"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Payee Name
            </label>

            <input
              type="text"
              name="payee"
              value={formData.payee}
              onChange={handleChange}
              required
              placeholder="ABC Jewellers"
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
              required
              placeholder="250000"
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Cheque Date
            </label>

            <input
              type="date"
              name="chequeDate"
              value={formData.chequeDate}
              onChange={handleChange}
              required
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            >
              <option value="Pending">Pending</option>
              <option value="Cleared">Cleared</option>
              <option value="Bounced">Bounced</option>
            </select>
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
            placeholder="Enter remarks..."
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />

        </div>

        <div className="flex justify-end">

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
          >
            Save Cheque
          </button>

        </div>

      </form>

    </main>
  );
}