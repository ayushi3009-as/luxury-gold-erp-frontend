"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  CreditCard,
  User,
  Landmark,
  IndianRupee,
  CheckCircle,
} from "lucide-react";

export default function ViewBankAccountPage() {
  const account = {
    id: "BANK001",
    bankName: "State Bank of India",
    accountNumber: "XXXX XXXX 4589",
    accountHolder: "Luxury Gold Pvt Ltd",
    ifscCode: "SBIN0001234",
    branch: "Surat Main Branch",
    openingBalance: "₹10,00,000",
    currentBalance: "₹18,50,000",
    status: "Active",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Bank Account Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete bank account information.
          </p>
        </div>

        <Link
          href="/finance/bank-accounts"
          className="flex items-center gap-2 bg-[#1F1F1F] hover:bg-[#2B2B2B] px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Details */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex items-center gap-4">
          <Building2 className="text-yellow-500" size={30} />
          <div>
            <p className="text-gray-400 text-sm">Bank Name</p>
            <h3 className="text-xl font-semibold">{account.bankName}</h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex items-center gap-4">
          <CreditCard className="text-blue-400" size={30} />
          <div>
            <p className="text-gray-400 text-sm">Account Number</p>
            <h3 className="text-xl font-semibold">{account.accountNumber}</h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex items-center gap-4">
          <User className="text-green-400" size={30} />
          <div>
            <p className="text-gray-400 text-sm">Account Holder</p>
            <h3 className="text-xl font-semibold">{account.accountHolder}</h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 flex items-center gap-4">
          <Landmark className="text-purple-400" size={30} />
          <div>
            <p className="text-gray-400 text-sm">Branch</p>
            <h3 className="text-xl font-semibold">{account.branch}</h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">IFSC Code</p>
          <h3 className="text-xl font-semibold">{account.ifscCode}</h3>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Opening Balance</p>
          <div className="flex items-center gap-2">
            <IndianRupee className="text-green-400" size={22} />
            <h3 className="text-2xl font-bold text-green-400">
              {account.openingBalance}
            </h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Current Balance</p>
          <div className="flex items-center gap-2">
            <IndianRupee className="text-yellow-500" size={22} />
            <h3 className="text-2xl font-bold text-yellow-500">
              {account.currentBalance}
            </h3>
          </div>
        </div>

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Status</p>

          <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-medium">
            <CheckCircle size={18} />
            {account.status}
          </span>
        </div>

      </div>

    </main>
  );
}