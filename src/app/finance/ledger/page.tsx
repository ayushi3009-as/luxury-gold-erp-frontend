"use client";

import { Search, Download } from "lucide-react";

const ledgerData = [
  {
    id: "LD001",
    account: "Cash Account",
    debit: "₹50,000",
    credit: "-",
    balance: "₹50,000",
  },
  {
    id: "LD002",
    account: "Sales Account",
    debit: "-",
    credit: "₹1,20,000",
    balance: "₹1,70,000",
  },
  {
    id: "LD003",
    account: "Purchase Account",
    debit: "₹35,000",
    credit: "-",
    balance: "₹1,35,000",
  },
  {
    id: "LD004",
    account: "Salary Account",
    debit: "₹25,000",
    credit: "-",
    balance: "₹1,10,000",
  },
];

export default function LedgerPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Ledger
          </h1>

          <p className="text-gray-400 mt-2">
            View all account ledger transactions.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition">
          <Download size={18} />
          Export Ledger
        </button>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />

        <input
          type="text"
          placeholder="Search ledger..."
          className="w-full bg-[#141414] border border-yellow-500/20 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#141414]">

        <table className="min-w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>

              <th className="px-6 py-4 text-left text-yellow-500">
                Ledger ID
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Account
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Debit
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Credit
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Balance
              </th>

            </tr>

          </thead>

          <tbody>

            {ledgerData.map((ledger) => (

              <tr
                key={ledger.id}
                className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
              >

                <td className="px-6 py-4">{ledger.id}</td>

                <td className="px-6 py-4">{ledger.account}</td>

                <td className="px-6 py-4 text-green-400">
                  {ledger.debit}
                </td>

                <td className="px-6 py-4 text-red-400">
                  {ledger.credit}
                </td>

                <td className="px-6 py-4 font-semibold text-yellow-500">
                  {ledger.balance}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}