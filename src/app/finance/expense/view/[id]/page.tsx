"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Wallet,
  CreditCard,
  FileText,
  BadgeIndianRupee,
  CheckCircle,
} from "lucide-react";

export default function ViewExpensePage() {
  const expense = {
    id: "EXP001",
    category: "Employee Salary",
    amount: "₹85,000",
    paymentMethod: "Bank Transfer",
    date: "28 Jul 2026",
    status: "Paid",
    description:
      "Salary payment made to employees for the month of July 2026.",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Expense Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete expense transaction details.
          </p>
        </div>

        <Link
          href="/finance/expense"
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
            <BadgeIndianRupee className="text-yellow-500" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Expense ID</p>
              <h3 className="font-semibold text-lg">{expense.id}</h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <Wallet className="text-red-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Expense Category</p>
              <h3 className="font-semibold text-lg">{expense.category}</h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <BadgeIndianRupee className="text-yellow-500" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Amount</p>
              <h3 className="text-2xl font-bold text-yellow-500">
                {expense.amount}
              </h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <CreditCard className="text-blue-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Payment Method</p>
              <h3 className="font-semibold text-lg">
                {expense.paymentMethod}
              </h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <Calendar className="text-purple-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Expense Date</p>
              <h3 className="font-semibold text-lg">{expense.date}</h3>
            </div>
          </div>

          <div className="bg-[#1B1B1B] rounded-xl p-5 flex items-center gap-4">
            <CheckCircle className="text-green-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Status</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                {expense.status}
              </span>
            </div>
          </div>

        </div>

        {/* Description */}

        <div className="mt-8 bg-[#1B1B1B] rounded-xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-yellow-500" size={24} />
            <h2 className="text-xl font-semibold text-yellow-500">
              Description
            </h2>
          </div>

          <p className="text-gray-300 leading-7">
            {expense.description}
          </p>

        </div>

      </div>

    </main>
  );
}