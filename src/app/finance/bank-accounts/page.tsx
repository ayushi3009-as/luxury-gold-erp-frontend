"use client";

import Link from "next/link";
import { Search, Plus, Eye, Pencil } from "lucide-react";

const bankAccounts = [
  {
    id: "BANK001",
    bankName: "State Bank of India",
    accountNumber: "XXXX XXXX 4589",
    branch: "Surat Main",
    balance: "₹18,50,000",
    status: "Active",
  },
  {
    id: "BANK002",
    bankName: "HDFC Bank",
    accountNumber: "XXXX XXXX 8745",
    branch: "Ring Road",
    balance: "₹9,75,000",
    status: "Active",
  },
  {
    id: "BANK003",
    bankName: "ICICI Bank",
    accountNumber: "XXXX XXXX 2365",
    branch: "Adajan",
    balance: "₹4,20,000",
    status: "Inactive",
  },
];

export default function BankAccountsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Bank Accounts
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all company bank accounts.
          </p>
        </div>

        <Link
          href="/finance/bank-accounts/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          <Plus size={18} />
          Add Bank Account
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
          placeholder="Search bank account..."
          className="w-full bg-[#141414] border border-yellow-500/20 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-yellow-500"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#141414]">

        <table className="min-w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>
              <th className="px-6 py-4 text-left text-yellow-500">ID</th>
              <th className="px-6 py-4 text-left text-yellow-500">Bank Name</th>
              <th className="px-6 py-4 text-left text-yellow-500">Account Number</th>
              <th className="px-6 py-4 text-left text-yellow-500">Branch</th>
              <th className="px-6 py-4 text-right text-yellow-500">Balance</th>
              <th className="px-6 py-4 text-center text-yellow-500">Status</th>
              <th className="px-6 py-4 text-center text-yellow-500">Actions</th>
            </tr>

          </thead>

          <tbody>

            {bankAccounts.map((account) => (

              <tr
                key={account.id}
                className="border-t border-yellow-500/10 hover:bg-[#1A1A1A]"
              >
                <td className="px-6 py-4">{account.id}</td>
                <td className="px-6 py-4">{account.bankName}</td>
                <td className="px-6 py-4">{account.accountNumber}</td>
                <td className="px-6 py-4">{account.branch}</td>

                <td className="px-6 py-4 text-right font-semibold text-green-400">
                  {account.balance}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      account.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {account.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/finance/bank-accounts/view/${account.id}`}
                      className="bg-blue-500 hover:bg-blue-400 p-2 rounded-lg"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/finance/bank-accounts/edit/${account.id}`}
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