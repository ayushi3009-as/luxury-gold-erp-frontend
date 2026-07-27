"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function SalesReportPage() {
  const sales = [
    {
      id: "SAL001",
      customer: "Rahul Patel",
      invoice: "INV001",
      amount: "₹45,000",
      date: "27 Jul 2026",
      status: "Paid",
    },
    {
      id: "SAL002",
      customer: "Amit Shah",
      invoice: "INV002",
      amount: "₹82,500",
      date: "26 Jul 2026",
      status: "Pending",
    },
    {
      id: "SAL003",
      customer: "Priya Mehta",
      invoice: "INV003",
      amount: "₹1,25,000",
      date: "25 Jul 2026",
      status: "Paid",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Sales Report
          </h1>

          <p className="text-gray-400 mt-2">
            View all sales transactions
          </p>

        </div>

        <div className="flex gap-3">

          <Link
            href="/reports"
            className="flex items-center gap-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-5 py-3 rounded-xl transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href="/reports/sales/add"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold transition"
          >
            <Plus size={18} />
            Add Sale
          </Link>

        </div>

      </div>

      {/* Table */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#1B1B1B]">

              <tr>

                <th className="px-6 py-4 text-left text-yellow-500">Sale ID</th>
                <th className="px-6 py-4 text-left text-yellow-500">Customer</th>
                <th className="px-6 py-4 text-left text-yellow-500">Invoice</th>
                <th className="px-6 py-4 text-left text-yellow-500">Amount</th>
                <th className="px-6 py-4 text-left text-yellow-500">Date</th>
                <th className="px-6 py-4 text-left text-yellow-500">Status</th>
                <th className="px-6 py-4 text-center text-yellow-500">Actions</th>

              </tr>

            </thead>

            <tbody>

              {sales.map((sale) => (

                <tr
                  key={sale.id}
                  className="border-t border-gray-800 hover:bg-[#1A1A1A]"
                >

                  <td className="px-6 py-4">{sale.id}</td>

                  <td className="px-6 py-4">{sale.customer}</td>

                  <td className="px-6 py-4">{sale.invoice}</td>

                  <td className="px-6 py-4 font-semibold text-yellow-500">
                    {sale.amount}
                  </td>

                  <td className="px-6 py-4">{sale.date}</td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        sale.status === "Paid"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {sale.status}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/reports/sales/details/${sale.id}`}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Eye size={18} />
                      </Link>

                      <Link
                        href={`/reports/sales/edit/${sale.id}`}
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        <Pencil size={18} />
                      </Link>

                      <button className="text-red-400 hover:text-red-300">
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}