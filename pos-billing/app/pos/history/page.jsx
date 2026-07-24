"use client";

import { useState } from "react";
import Link from "next/link";

export default function HistoryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const invoices = [
    {
      id: 1,
      invoice: "INV-2026-00124",
      customer: "Rahul Sharma",
      date: "23 Jul 2026",
      amount: 132000,
      payment: "UPI",
      status: "Paid",
    },
    {
      id: 2,
      invoice: "INV-2026-00123",
      customer: "Priya Mehta",
      date: "23 Jul 2026",
      amount: 78500,
      payment: "Card",
      status: "Paid",
    },
    {
      id: 3,
      invoice: "INV-2026-00122",
      customer: "Amit Shah",
      date: "22 Jul 2026",
      amount: 45000,
      payment: "Cash",
      status: "Paid",
    },
    {
      id: 4,
      invoice: "INV-2026-00121",
      customer: "Neha Patel",
      date: "22 Jul 2026",
      amount: 210000,
      payment: "Bank Transfer",
      status: "Pending",
    },
    {
      id: 5,
      invoice: "INV-2026-00120",
      customer: "Karan Joshi",
      date: "21 Jul 2026",
      amount: 62500,
      payment: "Cash",
      status: "Refunded",
    },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.invoice
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      invoice.customer
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || invoice.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#f8f6f2] p-6 text-[#29241f]">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <Link
            href="/pos"
            className="mb-2 inline-block text-sm text-[#9b6b28]"
          >
            ← Back to POS
          </Link>

          <h1 className="text-2xl font-bold">Sales History</h1>

          <p className="text-sm text-gray-500">
            View and manage all your sales invoices
          </p>
        </div>

        <button className="rounded-xl bg-[#29241f] px-5 py-3 font-medium text-white">
          Export Report
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Today's Sales</p>
          <p className="mt-2 text-2xl font-bold">₹2,76,500</p>
          <p className="mt-1 text-xs text-green-600">
            ↑ 12.5% from yesterday
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Invoices</p>
          <p className="mt-2 text-2xl font-bold">124</p>
          <p className="mt-1 text-xs text-gray-500">
            This month
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Average Bill Value</p>
          <p className="mt-2 text-2xl font-bold">₹85,420</p>
          <p className="mt-1 text-xs text-green-600">
            ↑ 8.2% from last month
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pending Payments</p>
          <p className="mt-2 text-2xl font-bold">₹2,10,000</p>
          <p className="mt-1 text-xs text-orange-600">
            1 invoice pending
          </p>
        </div>
      </div>

      {/* History Table */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        {/* Toolbar */}
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search invoice or customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 outline-none focus:border-[#b88a45]"
            />

            <span className="absolute left-3 top-3 text-gray-400">
              🔍
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {["All", "Paid", "Pending", "Refunded"].map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium ${
                    filter === status
                      ? "bg-[#29241f] text-white"
                      : "bg-[#f8f6f2] text-gray-600"
                  }`}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="p-3">Invoice</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Date</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="border-b last:border-0 hover:bg-[#fffaf3]"
                >
                  <td className="p-3 font-semibold">
                    {invoice.invoice}
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eadbc5] font-semibold text-[#9b6b28]">
                        {invoice.customer.charAt(0)}
                      </div>

                      <span>{invoice.customer}</span>
                    </div>
                  </td>

                  <td className="p-3 text-sm text-gray-500">
                    {invoice.date}
                  </td>

                  <td className="p-3 font-semibold">
                    {formatPrice(invoice.amount)}
                  </td>

                  <td className="p-3">
                    <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium">
                      {invoice.payment}
                    </span>
                  </td>

                  <td className="p-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        invoice.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : invoice.status === "Pending"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>

                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
                        View
                      </button>

                      <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
                        Print
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredInvoices.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-3 text-4xl">📄</div>

            <h3 className="font-semibold">
              No invoices found
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Try changing your search or filter
            </p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-5 flex items-center justify-between border-t pt-5">
          <p className="text-sm text-gray-500">
            Showing 1 to {filteredInvoices.length} of 124 invoices
          </p>

          <div className="flex gap-2">
            <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm">
              Previous
            </button>

            <button className="rounded-lg bg-[#29241f] px-3 py-2 text-sm text-white">
              1
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm">
              2
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}