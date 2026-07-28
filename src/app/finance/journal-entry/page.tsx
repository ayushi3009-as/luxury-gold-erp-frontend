"use client";

import Link from "next/link";
import { Search, Plus, Eye, Pencil } from "lucide-react";

const journalEntries = [
  {
    id: "JE001",
    date: "28 Jul 2026",
    description: "Gold Sales Entry",
    debit: "Cash Account",
    credit: "Sales Account",
    amount: "₹1,20,000",
  },
  {
    id: "JE002",
    date: "27 Jul 2026",
    description: "Salary Payment",
    debit: "Salary Expense",
    credit: "Cash Account",
    amount: "₹85,000",
  },
  {
    id: "JE003",
    date: "26 Jul 2026",
    description: "Office Rent",
    debit: "Rent Expense",
    credit: "Bank Account",
    amount: "₹30,000",
  },
];

export default function JournalEntryPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Journal Entry
          </h1>

          <p className="text-gray-400 mt-2">
            Record and manage accounting journal entries.
          </p>
        </div>

        <Link
          href="/finance/journal-entry/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={18} />
          Add Journal Entry
        </Link>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search journal entry..."
          className="w-full bg-[#141414] border border-yellow-500/20 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#141414]">

        <table className="min-w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>

              <th className="px-6 py-4 text-left text-yellow-500">
                Entry ID
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Date
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Description
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Debit Account
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Credit Account
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Amount
              </th>

              <th className="px-6 py-4 text-center text-yellow-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {journalEntries.map((entry) => (

              <tr
                key={entry.id}
                className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
              >

                <td className="px-6 py-4">{entry.id}</td>

                <td className="px-6 py-4">{entry.date}</td>

                <td className="px-6 py-4">{entry.description}</td>

                <td className="px-6 py-4">{entry.debit}</td>

                <td className="px-6 py-4">{entry.credit}</td>

                <td className="px-6 py-4 font-semibold text-yellow-500">
                  {entry.amount}
                </td>

                <td className="px-6 py-4">

                  <div className="flex items-center justify-center gap-3">

                    <Link
                      href={`/finance/journal-entry/view/${entry.id}`}
                      className="p-2 rounded-lg bg-blue-500 hover:bg-blue-400"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/finance/journal-entry/edit/${entry.id}`}
                      className="p-2 rounded-lg bg-green-500 hover:bg-green-400"
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