"use client";

import { useState } from "react";
import CRMSubNav from "@/app/components/crm-sub-nav";
import { ledgerEntries } from "@/app/components/customer-data";
import { BookOpen, ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function CustomerLedgerPage() {
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredLedger = ledgerEntries.filter(
    (l) => typeFilter === "All" || l.type === typeFilter
  );

  const totalDebit = filteredLedger.reduce((sum, l) => sum + l.debit, 0);
  const totalCredit = filteredLedger.reduce((sum, l) => sum + l.credit, 0);

  return (
    <div className="text-white max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Customer Financial Ledger
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Module 3 / Page 7: Debit & Credit Transaction Accounts Statement
        </p>
      </div>

      {/* CRM Sub Nav */}
      <CRMSubNav />

      {/* Summary Stat Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex items-center gap-2 text-red-400 text-xs font-semibold mb-1">
            <ArrowUpRight size={16} /> Total Debit (Billed Purchases)
          </div>
          <h3 className="text-3xl font-bold text-white">₹{totalDebit.toLocaleString()}</h3>
        </div>

        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
            <ArrowDownLeft size={16} /> Total Credit (Payments & Old Gold)
          </div>
          <h3 className="text-3xl font-bold text-white">₹{totalCredit.toLocaleString()}</h3>
        </div>

        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <div className="text-xs text-gray-400 font-semibold mb-1">Net Outstanding Balance</div>
          <h3 className="text-3xl font-bold text-[#D4AF37]">₹{(totalDebit - totalCredit).toLocaleString()}</h3>
        </div>
      </div>

      {/* Filter Header */}
      <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <BookOpen size={20} className="text-[#D4AF37]" />
          <span className="font-semibold text-white">Filter Transaction Type:</span>
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-[#101010] text-white border border-[#2C2C2C] rounded-xl px-4 py-2 text-sm outline-none focus:border-[#D4AF37]"
        >
          <option value="All">All Types</option>
          <option value="Purchase">Purchase</option>
          <option value="Payment Received">Payment Received</option>
          <option value="Gold Exchange">Gold Exchange</option>
        </select>
      </div>

      {/* Ledger Table */}
      <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1E1E1E] text-gray-400">
              <tr>
                <th className="p-4">Date</th>
                <th className="p-4">Reference No</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Description</th>
                <th className="p-4">Type</th>
                <th className="p-4 text-right">Debit (Dr)</th>
                <th className="p-4 text-right">Credit (Cr)</th>
                <th className="p-4 text-right">Running Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2C2C2C]">
              {filteredLedger.map((l) => (
                <tr key={l.id} className="hover:bg-[#202020] transition">
                  <td className="p-4 text-gray-400 text-xs font-mono">{l.date}</td>
                  <td className="p-4 font-mono font-semibold text-[#D4AF37]">{l.referenceNo}</td>
                  <td className="p-4 font-medium text-white">{l.customerName}</td>
                  <td className="p-4 text-gray-200">{l.description}</td>
                  <td className="p-4">
                    <span className="bg-[#222] border border-[#333] px-3 py-1 rounded-full text-xs text-gray-300">
                      {l.type}
                    </span>
                  </td>
                  <td className="p-4 text-right font-mono font-semibold text-red-400">
                    {l.debit > 0 ? `₹${l.debit.toLocaleString()}` : "-"}
                  </td>
                  <td className="p-4 text-right font-mono font-semibold text-emerald-400">
                    {l.credit > 0 ? `₹${l.credit.toLocaleString()}` : "-"}
                  </td>
                  <td className="p-4 text-right font-mono font-bold text-white">
                    ₹{l.runningBalance.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
