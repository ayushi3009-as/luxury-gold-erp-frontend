"use client";

import { Download, FileSpreadsheet } from "lucide-react";

const assets = [
  { name: "Cash", amount: "₹5,00,000" },
  { name: "Bank Balance", amount: "₹8,50,000" },
  { name: "Gold Inventory", amount: "₹75,00,000" },
  { name: "Diamond Inventory", amount: "₹40,00,000" },
  { name: "Furniture & Equipment", amount: "₹6,00,000" },
];

const liabilities = [
  { name: "Supplier Payables", amount: "₹15,00,000" },
  { name: "Bank Loan", amount: "₹20,00,000" },
  { name: "GST Payable", amount: "₹2,50,000" },
];

const equity = [
  { name: "Owner Capital", amount: "₹97,00,000" },
];

export default function BalanceSheetPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Balance Sheet
          </h1>

          <p className="text-gray-400 mt-2">
            Financial position of the business.
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

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Assets */}

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-yellow-500 mb-6">
            Assets
          </h2>

          <div className="space-y-4">

            {assets.map((item) => (
              <div
                key={item.name}
                className="flex justify-between bg-[#1B1B1B] rounded-xl p-4"
              >
                <span>{item.name}</span>
                <span className="font-semibold text-green-400">
                  {item.amount}
                </span>
              </div>
            ))}

          </div>

          <div className="flex justify-between mt-6 border-t border-yellow-500/20 pt-4 text-xl font-bold">
            <span>Total Assets</span>
            <span className="text-yellow-500">
              ₹1,34,50,000
            </span>
          </div>

        </div>

        {/* Liabilities & Equity */}

        <div className="space-y-8">

          <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-yellow-500 mb-6">
              Liabilities
            </h2>

            <div className="space-y-4">

              {liabilities.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between bg-[#1B1B1B] rounded-xl p-4"
                >
                  <span>{item.name}</span>

                  <span className="font-semibold text-red-400">
                    {item.amount}
                  </span>
                </div>
              ))}

            </div>

            <div className="flex justify-between mt-6 border-t border-yellow-500/20 pt-4 text-xl font-bold">
              <span>Total Liabilities</span>

              <span className="text-yellow-500">
                ₹37,50,000
              </span>
            </div>

          </div>

          <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-yellow-500 mb-6">
              Owner's Equity
            </h2>

            <div className="space-y-4">

              {equity.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between bg-[#1B1B1B] rounded-xl p-4"
                >
                  <span>{item.name}</span>

                  <span className="font-semibold text-green-400">
                    {item.amount}
                  </span>
                </div>
              ))}

            </div>

            <div className="flex justify-between mt-6 border-t border-yellow-500/20 pt-4 text-xl font-bold">
              <span>Total Equity</span>

              <span className="text-yellow-500">
                ₹97,00,000
              </span>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}