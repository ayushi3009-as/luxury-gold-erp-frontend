"use client";

import { Search, Download, FileSpreadsheet } from "lucide-react";

const trialBalanceData = [
  {
    account: "Cash Account",
    debit: "₹5,00,000",
    credit: "-",
  },
  {
    account: "Bank Account",
    debit: "₹2,50,000",
    credit: "-",
  },
  {
    account: "Sales Account",
    debit: "-",
    credit: "₹6,80,000",
  },
  {
    account: "Purchase Account",
    debit: "₹1,20,000",
    credit: "-",
  },
  {
    account: "Salary Expense",
    debit: "₹85,000",
    credit: "-",
  },
  {
    account: "Rent Expense",
    debit: "₹30,000",
    credit: "-",
  },
  {
    account: "Capital Account",
    debit: "-",
    credit: "₹3,05,000",
  },
];

export default function TrialBalancePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Trial Balance
          </h1>

          <p className="text-gray-400 mt-2">
            Review debit and credit balances for all ledger accounts.
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

      {/* Filters */}

      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search account..."
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
              <th className="px-6 py-4 text-left text-yellow-500">
                Account Name
              </th>

              <th className="px-6 py-4 text-right text-yellow-500">
                Debit
              </th>

              <th className="px-6 py-4 text-right text-yellow-500">
                Credit
              </th>
            </tr>

          </thead>

          <tbody>

            {trialBalanceData.map((row, index) => (

              <tr
                key={index}
                className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
              >
                <td className="px-6 py-4">{row.account}</td>

                <td className="px-6 py-4 text-right text-green-400 font-medium">
                  {row.debit}
                </td>

                <td className="px-6 py-4 text-right text-red-400 font-medium">
                  {row.credit}
                </td>
              </tr>

            ))}

          </tbody>

          <tfoot className="bg-[#1B1B1B] font-bold">

            <tr>

              <td className="px-6 py-4 text-yellow-500">
                Total
              </td>

              <td className="px-6 py-4 text-right text-green-400">
                ₹9,85,000
              </td>

              <td className="px-6 py-4 text-right text-red-400">
                ₹9,85,000
              </td>

            </tr>

          </tfoot>

        </table>

      </div>

    </main>
  );
}