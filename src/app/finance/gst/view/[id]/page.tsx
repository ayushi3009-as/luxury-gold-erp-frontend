"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Receipt,
  User,
  BadgeIndianRupee,
  Percent,
  FileText,
} from "lucide-react";

export default function ViewGSTPage() {
  const gst = {
    id: "GST001",
    invoice: "INV-1001",
    customer: "Rahul Patel",
    taxableAmount: "₹2,00,000",
    gstRate: "3%",
    cgst: "₹3,000",
    sgst: "₹3,000",
    igst: "₹0",
    totalTax: "₹6,000",
    description:
      "GST collected on Gold Jewellery Invoice INV-1001.",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            GST Record Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete GST transaction details.
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

      {/* Details */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex gap-4 items-center">
            <Receipt className="text-yellow-500" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Invoice Number</p>
              <h3 className="font-semibold text-lg">{gst.invoice}</h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex gap-4 items-center">
            <User className="text-blue-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Customer</p>
              <h3 className="font-semibold text-lg">{gst.customer}</h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex gap-4 items-center">
            <BadgeIndianRupee className="text-green-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Taxable Amount</p>
              <h3 className="font-semibold text-lg">
                {gst.taxableAmount}
              </h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex gap-4 items-center">
            <Percent className="text-purple-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">GST Rate</p>
              <h3 className="font-semibold text-lg">{gst.gstRate}</h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <p className="text-gray-400 text-sm">CGST</p>
            <h3 className="text-xl font-bold text-yellow-500">
              {gst.cgst}
            </h3>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <p className="text-gray-400 text-sm">SGST</p>
            <h3 className="text-xl font-bold text-yellow-500">
              {gst.sgst}
            </h3>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <p className="text-gray-400 text-sm">IGST</p>
            <h3 className="text-xl font-bold text-yellow-500">
              {gst.igst}
            </h3>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5">
            <p className="text-gray-400 text-sm">Total GST</p>
            <h3 className="text-2xl font-bold text-green-400">
              {gst.totalTax}
            </h3>
          </div>

        </div>

        {/* Description */}

        <div className="mt-8 bg-[#1B1B1B] rounded-xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-yellow-500" size={24} />
            <h2 className="text-xl font-semibold text-yellow-500">
              Description
            </h2>
          </div>

          <p className="text-gray-300 leading-7">
            {gst.description}
          </p>

        </div>

      </div>

    </main>
  );
}