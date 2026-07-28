"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditJournalEntryPage() {
  const [formData, setFormData] = useState({
    date: "2026-07-28",
    debitAccount: "Cash Account",
    creditAccount: "Sales Account",
    amount: "120000",
    description:
      "Gold jewellery sales transaction recorded for customer invoice INV-1001.",
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

    alert("Journal Entry Updated Successfully!");
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Edit Journal Entry
          </h1>

          <p className="text-gray-400 mt-2">
            Update journal entry information.
          </p>
        </div>

        <Link
          href="/finance/journal-entry"
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
              Entry Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
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
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Debit Account
            </label>

            <select
              name="debitAccount"
              value={formData.debitAccount}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            >
              <option>Cash Account</option>
              <option>Bank Account</option>
              <option>Purchase Account</option>
              <option>Salary Expense</option>
              <option>Rent Expense</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Credit Account
            </label>

            <select
              name="creditAccount"
              value={formData.creditAccount}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            >
              <option>Sales Account</option>
              <option>Cash Account</option>
              <option>Bank Account</option>
              <option>Capital Account</option>
            </select>
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
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />

        </div>

        <div className="flex justify-end">

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
          >
            Update Journal Entry
          </button>

        </div>

      </form>

    </main>
  );
}