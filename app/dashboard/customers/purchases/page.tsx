"use client";

import { useState } from "react";
import CRMSubNav from "@/app/components/crm-sub-nav";
import { purchaseRecords } from "@/app/components/customer-data";
import { ShoppingBag, Download } from "lucide-react";

export default function PurchaseHistoryPage() {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredRecords = purchaseRecords.filter(
    (p) => categoryFilter === "All" || p.category === categoryFilter
  );

  const totalAmount = filteredRecords.reduce((sum, p) => sum + p.amount, 0);
  const totalWeight = filteredRecords.reduce((sum, p) => sum + p.weightGrams, 0);

  return (
    <div className="text-white max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Purchase History
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Module 3 / Page 4: Jewellery Transactions & Invoices Log
        </p>
      </div>

      {/* CRM Sub Nav */}
      <CRMSubNav />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <p className="text-xs text-gray-400">Total Purchase Volume</p>
          <h3 className="text-3xl font-bold text-[#D4AF37] mt-1">₹{totalAmount.toLocaleString()}</h3>
        </div>
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <p className="text-xs text-gray-400">Total Jewellery Weight</p>
          <h3 className="text-3xl font-bold text-white mt-1">{totalWeight.toFixed(1)} g</h3>
        </div>
        <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-6">
          <p className="text-xs text-gray-400">Completed Invoices</p>
          <h3 className="text-3xl font-bold text-emerald-400 mt-1">{filteredRecords.length} Bills</h3>
        </div>
      </div>

      {/* Filter Header */}
      <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <ShoppingBag size={20} className="text-[#D4AF37]" />
          <span className="font-semibold text-white">Filter by Category:</span>
        </div>
        <div className="flex gap-2">
          {["All", "Gold", "Diamond", "Silver"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                categoryFilter === cat
                  ? "bg-[#D4AF37] text-black"
                  : "bg-[#101010] text-gray-300 border border-[#2C2C2C] hover:bg-[#222]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#171717] border border-[#2C2C2C] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1E1E1E] text-gray-400">
              <tr>
                <th className="p-4">Invoice No</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Item Details</th>
                <th className="p-4">Category</th>
                <th className="p-4">Weight</th>
                <th className="p-4">Purity</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2C2C2C]">
              {filteredRecords.map((p) => (
                <tr key={p.id} className="hover:bg-[#202020] transition">
                  <td className="p-4 font-mono font-semibold text-[#D4AF37]">{p.invoiceNo}</td>
                  <td className="p-4 font-medium text-white">{p.customerName}</td>
                  <td className="p-4 text-gray-200">{p.item}</td>
                  <td className="p-4">
                    <span className="bg-[#222] border border-[#333] px-3 py-1 rounded-full text-xs text-gray-300">
                      {p.category}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-gray-300">{p.weightGrams} g</td>
                  <td className="p-4 text-gray-400 text-xs">{p.purity}</td>
                  <td className="p-4 font-semibold text-white">₹{p.amount.toLocaleString()}</td>
                  <td className="p-4 text-gray-300">{p.paymentMethod}</td>
                  <td className="p-4 text-gray-400 text-xs">{p.date}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => alert(`Downloading GST Invoice ${p.invoiceNo}`)}
                      className="p-2 rounded-lg border border-[#2C2C2C] hover:bg-[#2C2C2C] text-gray-300 hover:text-white transition"
                      title="Download Invoice"
                    >
                      <Download size={16} />
                    </button>
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
