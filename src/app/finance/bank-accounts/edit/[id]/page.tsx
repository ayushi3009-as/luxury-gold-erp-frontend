"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditBankAccountPage() {
  const [formData, setFormData] = useState({
    bankName: "State Bank of India",
    accountNumber: "123456789012",
    accountHolder: "Luxury Gold Pvt Ltd",
    ifscCode: "SBIN0001234",
    branch: "Surat Main Branch",
    openingBalance: "1000000",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Bank Account Updated Successfully!");
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Edit Bank Account
          </h1>

          <p className="text-gray-400 mt-2">
            Update bank account information.
          </p>
        </div>

        <Link
          href="/finance/bank-accounts"
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
              Bank Name
            </label>

            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Account Number
            </label>

            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Account Holder Name
            </label>

            <input
              type="text"
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              IFSC Code
            </label>

            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Branch Name
            </label>

            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Opening Balance
            </label>

            <input
              type="number"
              name="openingBalance"
              value={formData.openingBalance}
              onChange={handleChange}
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
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

        </div>

        <div className="flex justify-end">

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
          >
            Update Bank Account
          </button>

        </div>

      </form>

    </main>
  );
}