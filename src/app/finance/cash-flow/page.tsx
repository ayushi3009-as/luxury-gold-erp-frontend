"use client";

import { Download, FileSpreadsheet, Calendar } from "lucide-react";

const cashFlowData = [
  {
    date: "01 Jul 2026",
    description: "Opening Balance",
    inflow: "-",
    outflow: "-",
    balance: "₹10,00,000",
  },
  {
    date: "05 Jul 2026",
    description: "Gold Jewellery Sales",
    inflow: "₹8,50,000",
    outflow: "-",
    balance: "₹18,50,000",
  },
  {
    date: "10 Jul 2026",
    description: "Gold Purchase",
    inflow: "-",
    outflow: "₹5,20,000",
    balance: "₹13,30,000",
  },
  {
    date: "15 Jul 2026",
    description: "Employee Salary",
    inflow: "-",
    outflow: "₹85,000",
    balance: "₹12,45,000",
  },
  {
    date: "22 Jul 2026",
    description: "Diamond Jewellery Sales",
    inflow: "₹6,20,000",
    outflow: "-",
    balance: "₹18,65,000",
  },
];

export default function CashFlowPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Cash Flow
          </h1>

          <p className="text-gray-400 mt-2">
            Track business cash inflow and outflow.
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

      {/* Date Filter */}

      <div className="flex items-center gap-3 mb-8">

        <Calendar className="text-yellow-500" size={20} />

        <input
          type="date"
          className="bg-[#141414] border border-yellow-500/20 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Summary */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#141414] border border-blue-500/20 rounded-2xl p-6">
          <p className="text-gray-400">Opening Balance</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">
            ₹10,00,000
          </h2>
        </div>

        <div className="bg-[#141414] border border-green-500/20 rounded-2xl p-6">
          <p className="text-gray-400">Cash Inflow</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            ₹14,70,000
          </h2>
        </div>

        <div className="bg-[#141414] border border-red-500/20 rounded-2xl p-6">
          <p className="text-gray-400">Cash Outflow</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">
            ₹6,05,000
          </h2>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400">Closing Balance</p>
          <h2 className="text-3xl font-bold text-yellow-500 mt-2">
            ₹18,65,000
          </h2>
        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#141414]">

        <table className="min-w-full">

          <thead className="bg-[#1B1B1B]">
            <tr>
              <th className="px-6 py-4 text-left text-yellow-500">Date</th>
              <th className="px-6 py-4 text-left text-yellow-500">Description</th>
              <th className="px-6 py-4 text-right text-yellow-500">Cash In</th>
              <th className="px-6 py-4 text-right text-yellow-500">Cash Out</th>
              <th className="px-6 py-4 text-right text-yellow-500">Balance</th>
            </tr>
          </thead>

          <tbody>

            {cashFlowData.map((item, index) => (

              <tr
                key={index}
                className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
              >
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.description}</td>

                <td className="px-6 py-4 text-right text-green-400 font-medium">
                  {item.inflow}
                </td>

                <td className="px-6 py-4 text-right text-red-400 font-medium">
                  {item.outflow}
                </td>

                <td className="px-6 py-4 text-right font-semibold text-yellow-500">
                  {item.balance}
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}