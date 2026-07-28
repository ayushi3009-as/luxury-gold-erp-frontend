"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  CreditCard,
  Wallet,
  FileText,
  Hash,
} from "lucide-react";

export default function ViewJournalEntryPage() {
  const journalEntry = {
    id: "JE001",
    date: "28 Jul 2026",
    debitAccount: "Cash Account",
    creditAccount: "Sales Account",
    amount: "₹1,20,000",
    description:
      "Gold jewellery sales transaction recorded for customer invoice INV-1001.",
    status: "Completed",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Journal Entry Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete journal entry information.
          </p>
        </div>

        <Link
          href="/finance/journal-entry"
          className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#2B2B2B] px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Details Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <Hash className="text-yellow-500" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Entry ID</p>
              <h3 className="font-semibold text-lg">
                {journalEntry.id}
              </h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <Calendar className="text-yellow-500" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Entry Date</p>
              <h3 className="font-semibold text-lg">
                {journalEntry.date}
              </h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <CreditCard className="text-green-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Debit Account</p>
              <h3 className="font-semibold text-lg">
                {journalEntry.debitAccount}
              </h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <CreditCard className="text-red-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Credit Account</p>
              <h3 className="font-semibold text-lg">
                {journalEntry.creditAccount}
              </h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <Wallet className="text-yellow-500" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Amount</p>
              <h3 className="font-bold text-2xl text-yellow-500">
                {journalEntry.amount}
              </h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <FileText className="text-blue-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Status</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                {journalEntry.status}
              </span>
            </div>
          </div>

        </div>

        {/* Description */}

        <div className="mt-8 bg-[#1B1B1B] rounded-xl p-6">

          <h3 className="text-xl font-semibold text-yellow-500 mb-4">
            Description
          </h3>

          <p className="text-gray-300 leading-7">
            {journalEntry.description}
          </p>

        </div>

      </div>

    </main>
  );
}