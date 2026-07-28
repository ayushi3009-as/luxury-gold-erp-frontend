"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditGSTPage() {
  const [formData, setFormData] = useState({
    invoice: "INV-1001",
    customer: "Rahul Patel",
    taxableAmount: "200000",
    gstRate: "3",
    cgst: "3000.00",
    sgst: "3000.00",
    igst: "0.00",
    totalTax: "6000.00",
    description: "GST collected on Gold Jewellery Invoice INV-1001.",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    const updated = {
      ...formData,
      [name]: value,
    };

    if (name === "taxableAmount" || name === "gstRate") {
      const amount =
        Number(
          name === "taxableAmount"
            ? value
            : updated.taxableAmount
        ) || 0;

      const rate =
        Number(
          name === "gstRate"
            ? value
            : updated.gstRate
        ) || 0;

      const totalTax = (amount * rate) / 100;

      updated.totalTax = totalTax.toFixed(2);
      updated.cgst = (totalTax / 2).toFixed(2);
      updated.sgst = (totalTax / 2).toFixed(2);
      updated.igst = "0.00";
    }

    setFormData(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("GST Record Updated Successfully!");
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Edit GST Record
          </h1>

          <p className="text-gray-400 mt-2">
            Update GST transaction information.
          </p>
        </div>

        <Link
          href="/finance/gst"
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
              Invoice Number
            </label>

            <input
              type="text"
              name="invoice"
              value={formData.invoice}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Customer Name
            </label>

            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Taxable Amount
            </label>

            <input
              type="number"
              name="taxableAmount"
              value={formData.taxableAmount}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              GST Rate
            </label>

            <select
              name="gstRate"
              value={formData.gstRate}
              onChange={handleChange}
              className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
            >
              <option value="3">3%</option>
              <option value="5">5%</option>
              <option value="12">12%</option>
              <option value="18">18%</option>
              <option value="28">28%</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              CGST
            </label>

            <input
              value={formData.cgst}
              readOnly
              className="w-full bg-[#222] border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              SGST
            </label>

            <input
              value={formData.sgst}
              readOnly
              className="w-full bg-[#222] border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              IGST
            </label>

            <input
              value={formData.igst}
              readOnly
              className="w-full bg-[#222] border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Total GST
            </label>

            <input
              value={formData.totalTax}
              readOnly
              className="w-full bg-[#222] border border-gray-700 rounded-xl px-4 py-3 text-yellow-500 font-bold"
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
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />

        </div>

        <div className="flex justify-end">

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition"
          >
            Update GST Record
          </button>

        </div>

      </form>

    </main>
  );
}