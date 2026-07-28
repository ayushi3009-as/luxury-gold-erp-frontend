"use client";

import Link from "next/link";
import { Search, Plus, Eye, Pencil } from "lucide-react";

const cheques = [
  {
    id: "CHQ001",
    chequeNo: "458965",
    bank: "State Bank of India",
    payee: "ABC Jewellers",
    amount: "₹2,50,000",
    date: "28 Jul 2026",
    status: "Pending",
  },
  {
    id: "CHQ002",
    chequeNo: "874563",
    bank: "HDFC Bank",
    payee: "Gold Supplier Pvt Ltd",
    amount: "₹5,75,000",
    date: "24 Jul 2026",
    status: "Cleared",
  },
  {
    id: "CHQ003",
    chequeNo: "125478",
    bank: "ICICI Bank",
    payee: "Diamond Traders",
    amount: "₹1,80,000",
    date: "20 Jul 2026",
    status: "Bounced",
  },
];

export default function ChequesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Cheques
          </h1>

          <p className="text-gray-400 mt-2">
            Manage issued and received cheques.
          </p>
        </div>

        <Link
          href="/finance/cheques/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={18} />
          Add Cheque
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
          placeholder="Search cheque..."
          className="w-full bg-[#141414] border border-yellow-500/20 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#141414]">

        <table className="min-w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>
              <th className="px-6 py-4 text-left text-yellow-500">Cheque ID</th>
              <th className="px-6 py-4 text-left text-yellow-500">Cheque No.</th>
              <th className="px-6 py-4 text-left text-yellow-500">Bank</th>
              <th className="px-6 py-4 text-left text-yellow-500">Payee</th>
              <th className="px-6 py-4 text-right text-yellow-500">Amount</th>
              <th className="px-6 py-4 text-left text-yellow-500">Cheque Date</th>
              <th className="px-6 py-4 text-center text-yellow-500">Status</th>
              <th className="px-6 py-4 text-center text-yellow-500">Actions</th>
            </tr>

          </thead>

          <tbody>

            {cheques.map((cheque) => (

              <tr
                key={cheque.id}
                className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
              >
                <td className="px-6 py-4">{cheque.id}</td>
                <td className="px-6 py-4">{cheque.chequeNo}</td>
                <td className="px-6 py-4">{cheque.bank}</td>
                <td className="px-6 py-4">{cheque.payee}</td>

                <td className="px-6 py-4 text-right font-semibold text-green-400">
                  {cheque.amount}
                </td>

                <td className="px-6 py-4">{cheque.date}</td>

                <td className="px-6 py-4 text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      cheque.status === "Cleared"
                        ? "bg-green-500/20 text-green-400"
                        : cheque.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {cheque.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/finance/cheques/view/${cheque.id}`}
                      className="bg-blue-500 hover:bg-blue-400 p-2 rounded-lg"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/finance/cheques/edit/${cheque.id}`}
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