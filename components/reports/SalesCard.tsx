"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function SalesCard() {
  const sales = [
    {
      id: "SAL001",
      customer: "Rahul Patel",
      invoice: "INV001",
      product: "Gold Ring",
      amount: "₹45,000",
      date: "27 Jul 2026",
      status: "Paid",
    },
    {
      id: "SAL002",
      customer: "Amit Shah",
      invoice: "INV002",
      product: "Diamond Necklace",
      amount: "₹82,500",
      date: "26 Jul 2026",
      status: "Pending",
    },
    {
      id: "SAL003",
      customer: "Priya Mehta",
      invoice: "INV003",
      product: "Gold Bracelet",
      amount: "₹1,25,000",
      date: "25 Jul 2026",
      status: "Paid",
    },
  ];

  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>

              <th className="px-6 py-4 text-left text-yellow-500">
                Sale ID
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Invoice
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Product
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Amount
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Date
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Status
              </th>

              <th className="px-6 py-4 text-center text-yellow-500">
                Actions
              </th>

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

                <td className="px-6 py-4">{sale.product}</td>

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

                  <div className="flex justify-center gap-4">

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
  );
}