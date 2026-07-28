"use client";

import {
  Search,
  Download,
  FileSpreadsheet,
  Calendar,
} from "lucide-react";

const taxReports = [
  {
    id: "GST001",
    period: "July 2026",
    taxableAmount: "₹15,50,000",
    gstCollected: "₹2,79,000",
    gstPaid: "₹1,85,000",
    payable: "₹94,000",
    status: "Pending",
  },
  {
    id: "GST002",
    period: "June 2026",
    taxableAmount: "₹12,80,000",
    gstCollected: "₹2,30,400",
    gstPaid: "₹1,72,000",
    payable: "₹58,400",
    status: "Filed",
  },
  {
    id: "GST003",
    period: "May 2026",
    taxableAmount: "₹10,20,000",
    gstCollected: "₹1,83,600",
    gstPaid: "₹1,42,000",
    payable: "₹41,600",
    status: "Filed",
  },
];

export default function TaxReportsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Tax Reports
          </h1>

          <p className="text-gray-400 mt-2">
            GST summary and tax filing reports.
          </p>
        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-5 py-3 rounded-xl transition">
            <FileSpreadsheet size={18} />
            Export Excel
          </button>

          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-500 px-5 py-3 rounded-xl transition">
            <Download size={18} />
            Export PDF
          </button>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#141414] rounded-2xl border border-blue-500/20 p-6">
          <p className="text-gray-400">Taxable Sales</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">
            ₹38,50,000
          </h2>
        </div>

        <div className="bg-[#141414] rounded-2xl border border-green-500/20 p-6">
          <p className="text-gray-400">GST Collected</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            ₹6,93,000
          </h2>
        </div>

        <div className="bg-[#141414] rounded-2xl border border-orange-500/20 p-6">
          <p className="text-gray-400">GST Paid</p>
          <h2 className="text-3xl font-bold text-orange-400 mt-2">
            ₹4,99,000
          </h2>
        </div>

        <div className="bg-[#141414] rounded-2xl border border-yellow-500/20 p-6">
          <p className="text-gray-400">GST Payable</p>
          <h2 className="text-3xl font-bold text-yellow-500 mt-2">
            ₹1,94,000
          </h2>
        </div>

      </div>

      {/* Filters */}

      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search report..."
            className="w-full bg-[#141414] border border-yellow-500/20 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-yellow-500"
          />

        </div>

        <div className="relative">

          <Calendar
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="date"
            className="w-full bg-[#141414] border border-yellow-500/20 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-yellow-500"
          />

        </div>

        <input
          type="date"
          className="bg-[#141414] border border-yellow-500/20 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#141414]">

        <table className="min-w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>
              <th className="px-6 py-4 text-left text-yellow-500">Report ID</th>
              <th className="px-6 py-4 text-left text-yellow-500">Period</th>
              <th className="px-6 py-4 text-right text-yellow-500">Taxable Amount</th>
              <th className="px-6 py-4 text-right text-yellow-500">GST Collected</th>
              <th className="px-6 py-4 text-right text-yellow-500">GST Paid</th>
              <th className="px-6 py-4 text-right text-yellow-500">Payable</th>
              <th className="px-6 py-4 text-center text-yellow-500">Status</th>
            </tr>

          </thead>

          <tbody>

            {taxReports.map((report) => (

              <tr
                key={report.id}
                className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
              >
                <td className="px-6 py-4">{report.id}</td>
                <td className="px-6 py-4">{report.period}</td>
                <td className="px-6 py-4 text-right">{report.taxableAmount}</td>
                <td className="px-6 py-4 text-right text-green-400">{report.gstCollected}</td>
                <td className="px-6 py-4 text-right text-orange-400">{report.gstPaid}</td>
                <td className="px-6 py-4 text-right text-yellow-500 font-semibold">{report.payable}</td>

                <td className="px-6 py-4 text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      report.status === "Filed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {report.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}