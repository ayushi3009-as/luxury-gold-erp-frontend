"use client";

import { Download, FileSpreadsheet, Calendar } from "lucide-react";

const revenue = [
  { title: "Gold Jewellery Sales", amount: "₹85,00,000" },
  { title: "Diamond Jewellery Sales", amount: "₹42,00,000" },
  { title: "Silver Jewellery Sales", amount: "₹8,00,000" },
];

const expenses = [
  { title: "Purchase Cost", amount: "₹95,00,000" },
  { title: "Salary Expense", amount: "₹5,50,000" },
  { title: "Rent Expense", amount: "₹1,20,000" },
  { title: "Electricity", amount: "₹45,000" },
  { title: "Marketing", amount: "₹80,000" },
];

export default function ProfitLossPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Profit & Loss Statement
          </h1>

          <p className="text-gray-400 mt-2">
            View business income, expenses and profitability.
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

      {/* Filter */}

      <div className="flex items-center gap-3 mb-8">

        <Calendar className="text-yellow-500" size={20} />

        <input
          type="date"
          className="bg-[#141414] border border-yellow-500/20 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#141414] rounded-2xl border border-green-500/20 p-6">
          <p className="text-gray-400">Total Revenue</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            ₹1,35,00,000
          </h2>
        </div>

        <div className="bg-[#141414] rounded-2xl border border-red-500/20 p-6">
          <p className="text-gray-400">Total Expenses</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2">
            ₹1,03,95,000
          </h2>
        </div>

        <div className="bg-[#141414] rounded-2xl border border-blue-500/20 p-6">
          <p className="text-gray-400">Gross Profit</p>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">
            ₹31,05,000
          </h2>
        </div>

        <div className="bg-[#141414] rounded-2xl border border-yellow-500/20 p-6">
          <p className="text-gray-400">Net Profit</p>
          <h2 className="text-3xl font-bold text-yellow-500 mt-2">
            ₹28,80,000
          </h2>
        </div>

      </div>

      {/* Revenue & Expense */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Revenue */}

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Revenue
          </h2>

          <div className="space-y-4">

            {revenue.map((item) => (
              <div
                key={item.title}
                className="flex justify-between bg-[#1B1B1B] rounded-xl p-4"
              >
                <span>{item.title}</span>

                <span className="text-green-400 font-semibold">
                  {item.amount}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Expenses */}

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-red-400 mb-6">
            Expenses
          </h2>

          <div className="space-y-4">

            {expenses.map((item) => (
              <div
                key={item.title}
                className="flex justify-between bg-[#1B1B1B] rounded-xl p-4"
              >
                <span>{item.title}</span>

                <span className="text-red-400 font-semibold">
                  {item.amount}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}