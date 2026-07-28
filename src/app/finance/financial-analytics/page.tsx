"use client";

import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  Wallet,
  Download,
  FileSpreadsheet,
} from "lucide-react";

const monthlyData = [
  {
    month: "Jan",
    revenue: "₹58,00,000",
    expense: "₹42,00,000",
    profit: "₹16,00,000",
  },
  {
    month: "Feb",
    revenue: "₹62,00,000",
    expense: "₹45,00,000",
    profit: "₹17,00,000",
  },
  {
    month: "Mar",
    revenue: "₹71,00,000",
    expense: "₹51,00,000",
    profit: "₹20,00,000",
  },
  {
    month: "Apr",
    revenue: "₹65,00,000",
    expense: "₹47,00,000",
    profit: "₹18,00,000",
  },
  {
    month: "May",
    revenue: "₹78,00,000",
    expense: "₹54,00,000",
    profit: "₹24,00,000",
  },
  {
    month: "Jun",
    revenue: "₹82,00,000",
    expense: "₹56,00,000",
    profit: "₹26,00,000",
  },
];

export default function FinancialAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Financial Analytics
          </h1>

          <p className="text-gray-400 mt-2">
            Analyze revenue, expenses and profitability.
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

      {/* KPI Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#141414] border border-green-500/20 rounded-2xl p-6">
          <TrendingUp className="text-green-400 mb-3" size={32} />
          <p className="text-gray-400">Total Revenue</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            ₹8.45 Cr
          </h2>
        </div>

        <div className="bg-[#141414] border border-red-500/20 rounded-2xl p-6">
          <TrendingDown className="text-red-400 mb-3" size={32} />
          <p className="text-gray-400">Total Expenses</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">
            ₹5.90 Cr
          </h2>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <IndianRupee className="text-yellow-500 mb-3" size={32} />
          <p className="text-gray-400">Net Profit</p>
          <h2 className="text-3xl font-bold text-yellow-500 mt-2">
            ₹2.55 Cr
          </h2>
        </div>

        <div className="bg-[#141414] border border-blue-500/20 rounded-2xl p-6">
          <Wallet className="text-blue-400 mb-3" size={32} />
          <p className="text-gray-400">Cash Balance</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">
            ₹1.86 Cr
          </h2>
        </div>

      </div>

      {/* Revenue vs Expense */}

      <div className="grid lg:grid-cols-2 gap-6 mb-8">

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
            Revenue Trend
          </h2>

          <div className="space-y-4">

            {monthlyData.map((item) => (

              <div
                key={item.month}
                className="flex justify-between border-b border-gray-800 pb-3"
              >
                <span>{item.month}</span>

                <span className="text-green-400 font-semibold">
                  {item.revenue}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
            Expense Analysis
          </h2>

          <div className="space-y-4">

            {monthlyData.map((item) => (

              <div
                key={item.month}
                className="flex justify-between border-b border-gray-800 pb-3"
              >
                <span>{item.month}</span>

                <span className="text-red-400 font-semibold">
                  {item.expense}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Top Revenue Sources */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 mb-8">

        <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
          Top Revenue Sources
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b border-gray-800 pb-3">
            <span>Gold Jewellery Sales</span>
            <span className="text-green-400">₹4.10 Cr</span>
          </div>

          <div className="flex justify-between border-b border-gray-800 pb-3">
            <span>Diamond Jewellery Sales</span>
            <span className="text-green-400">₹2.35 Cr</span>
          </div>

          <div className="flex justify-between border-b border-gray-800 pb-3">
            <span>Silver Jewellery Sales</span>
            <span className="text-green-400">₹1.15 Cr</span>
          </div>

          <div className="flex justify-between">
            <span>Repair Services</span>
            <span className="text-green-400">₹85 Lakh</span>
          </div>

        </div>

      </div>

      {/* Monthly Summary */}

      <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#141414]">

        <table className="min-w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>
              <th className="px-6 py-4 text-left text-yellow-500">Month</th>
              <th className="px-6 py-4 text-right text-yellow-500">Revenue</th>
              <th className="px-6 py-4 text-right text-yellow-500">Expenses</th>
              <th className="px-6 py-4 text-right text-yellow-500">Profit</th>
            </tr>

          </thead>

          <tbody>

            {monthlyData.map((item) => (

              <tr
                key={item.month}
                className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
              >
                <td className="px-6 py-4">{item.month}</td>

                <td className="px-6 py-4 text-right text-green-400">
                  {item.revenue}
                </td>

                <td className="px-6 py-4 text-right text-red-400">
                  {item.expense}
                </td>

                <td className="px-6 py-4 text-right text-yellow-500 font-semibold">
                  {item.profit}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}