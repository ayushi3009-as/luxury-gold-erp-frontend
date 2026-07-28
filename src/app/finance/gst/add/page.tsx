"use client";

import Link from "next/link";
import { Search, Plus, Eye, Pencil } from "lucide-react";

const gstData = [
  {
    id: "GST001",
    invoice: "INV-1001",
    customer: "Rahul Patel",
    taxableAmount: "₹2,00,000",
    gstRate: "3%",
    cgst: "₹3,000",
    sgst: "₹3,000",
    igst: "-",
    totalTax: "₹6,000",
  },
  {
    id: "GST002",
    invoice: "INV-1002",
    customer: "Amit Shah",
    taxableAmount: "₹1,50,000",
    gstRate: "3%",
    cgst: "₹2,250",
    sgst: "₹2,250",
    igst: "-",
    totalTax: "₹4,500",
  },
  {
    id: "GST003",
    invoice: "INV-1003",
    customer: "Priya Mehta",
    taxableAmount: "₹3,80,000",
    gstRate: "3%",
    cgst: "-",
    sgst: "-",
    igst: "₹11,400",
    totalTax: "₹11,400",
  },
];

export default function GSTPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            GST Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage GST records and tax calculations.
          </p>
        </div>

        <Link
          href="/finance/gst/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={18} />
          Add GST Record
        </Link>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />

        <input
          type="text"
          placeholder="Search GST record..."
          className="w-full bg-[#141414] border border-yellow-500/20 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#141414]">

        <table className="min-w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>

              <th className="px-6 py-4 text-left text-yellow-500">
                GST ID
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Invoice
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Taxable Amount
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                GST %
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                CGST
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                SGST
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                IGST
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Total Tax
              </th>

              <th className="px-6 py-4 text-center text-yellow-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {gstData.map((gst) => (

              <tr
                key={gst.id}
                className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
              >

                <td className="px-6 py-4">{gst.id}</td>
                <td className="px-6 py-4">{gst.invoice}</td>
                <td className="px-6 py-4">{gst.customer}</td>
                <td className="px-6 py-4">{gst.taxableAmount}</td>
                <td className="px-6 py-4">{gst.gstRate}</td>
                <td className="px-6 py-4">{gst.cgst}</td>
                <td className="px-6 py-4">{gst.sgst}</td>
                <td className="px-6 py-4">{gst.igst}</td>

                <td className="px-6 py-4 font-semibold text-yellow-500">
                  {gst.totalTax}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/finance/gst/view/${gst.id}`}
                      className="bg-blue-500 hover:bg-blue-400 p-2 rounded-lg"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/finance/gst/edit/${gst.id}`}
                      className="bg-green-500 hover:bg-green-400 p-2 rounded-lg"
                    >
                      <Pencil size={18} />
                    </Link>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}