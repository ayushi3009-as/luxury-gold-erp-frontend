"use client";

import Link from "next/link";
import { Eye } from "lucide-react";

export default function ProductHistoryTable() {
  const history = [
    {
      id: 1,
      image: "/gold/ring1.jpg",
      product: "Gold Ring",
      sku: "GLD001",
      action: "Created",
      user: "Admin",
      date: "24 Jul 2026",
    },
    {
      id: 2,
      image: "/gold/chain1.jpg",
      product: "Gold Chain",
      sku: "GLD002",
      action: "Updated",
      user: "Manager",
      date: "22 Jul 2026",
    },
    {
      id: 3,
      image: "/diamond/bride.jpg",
      product: "Diamond Necklace",
      sku: "DMD001",
      action: "Deleted",
      user: "Admin",
      date: "20 Jul 2026",
    },
  ];

  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-background-tertiary">

            <tr>

              <th className="px-6 py-4 text-left text-accent-gold">
                Image
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Product
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                SKU
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Action
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                User
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Date
              </th>

              <th className="px-6 py-4 text-center text-accent-gold">
                Details
              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((item) => (

              <tr
                key={item.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt={item.product}
                    className="w-16 h-16 rounded-lg object-cover border border-border-theme"
                  />
                </td>

                <td className="px-6 py-4 font-medium">
                  {item.product}
                </td>

                <td className="px-6 py-4">
                  {item.sku}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        item.action === "Created"
                          ? "bg-green-500/20 text-green-400"
                          : item.action === "Updated"
                          ? "bg-accent-gold/20 text-accent-gold"
                          : "bg-red-500/20 text-red-400"
                      }`}
                  >
                    {item.action}
                  </span>

                </td>

                <td className="px-6 py-4">
                  {item.user}
                </td>

                <td className="px-6 py-4 text-text-secondary">
                  {item.date}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center">

                    <Link
                      href={`/products/history/details/${item.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

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