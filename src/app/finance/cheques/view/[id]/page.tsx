"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  CreditCard,
  User,
  IndianRupee,
  Calendar,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function ViewChequePage() {
  const cheque = {
    id: "CHQ001",
    chequeNo: "458965",
    bank: "State Bank of India",
    payee: "ABC Jewellers",
    amount: "₹2,50,000",
    chequeDate: "28 Jul 2026",
    status: "Pending",
    remarks: "Gold jewellery purchase payment.",
  };

  const statusColor =
    cheque.status === "Cleared"
      ? "bg-green-500/20 text-green-400"
      : cheque.status === "Pending"
      ? "bg-yellow-500/20 text-yellow-400"
      : "bg-red-500/20 text-red-400";

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Cheque Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete cheque information.
          </p>
        </div>

        <Link
          href="/finance/cheques"
          className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#2B2B2B] px-5 py-3 rounded-xl"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Details */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex gap-4 items-center">
          <Building2 className="text-yellow-500" size={28} />
          <div>
            <p className="text-gray-400 text-sm">Bank Name</p>
            <h3 className="text-xl font-semibold">{cheque.bank}</h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex gap-4 items-center">
          <CreditCard className="text-blue-400" size={28} />
          <div>
            <p className="text-gray-400 text-sm">Cheque Number</p>
            <h3 className="text-xl font-semibold">{cheque.chequeNo}</h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex gap-4 items-center">
          <User className="text-green-400" size={28} />
          <div>
            <p className="text-gray-400 text-sm">Payee Name</p>
            <h3 className="text-xl font-semibold">{cheque.payee}</h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex gap-4 items-center">
          <IndianRupee className="text-green-400" size={28} />
          <div>
            <p className="text-gray-400 text-sm">Amount</p>
            <h3 className="text-2xl font-bold text-green-400">
              {cheque.amount}
            </h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex gap-4 items-center">
          <Calendar className="text-purple-400" size={28} />
          <div>
            <p className="text-gray-400 text-sm">Cheque Date</p>
            <h3 className="text-xl font-semibold">{cheque.chequeDate}</h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Status</p>

          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium ${statusColor}`}
          >
            <CheckCircle size={18} />
            {cheque.status}
          </span>
        </div>

        <div className="md:col-span-2 bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex gap-4">
          <FileText className="text-yellow-500 mt-1" size={24} />
          <div>
            <p className="text-gray-400 text-sm mb-2">Remarks</p>
            <p>{cheque.remarks}</p>
          </div>
        </div>

      </div>

    </main>
  );
}