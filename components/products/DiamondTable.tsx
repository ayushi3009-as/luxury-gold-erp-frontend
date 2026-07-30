"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function DiamondTable() {
  const diamonds = [
    {
      id: 1,
      image: "/diamond/diamond1.jpg",
      name: "Round Brilliant Diamond",
      sku: "DMD001",
      carat: "1.20 ct",
      color: "D",
      clarity: "VVS1",
      price: "₹2,45,000",
      stock: 5,
      status: "Available",
    },
    {
      id: 2,
      image: "/diamond/princess.png",
      name: "Princess Cut Diamond",
      sku: "DMD002",
      carat: "0.90 ct",
      color: "E",
      clarity: "VS1",
      price: "₹1,85,000",
      stock: 3,
      status: "Available",
    },
    {
      id: 3,
      image: "/diamond/oval.png",
      name: "Oval Diamond",
      sku: "DMD003",
      carat: "2.00 ct",
      color: "F",
      clarity: "IF",
      price: "₹5,25,000",
      stock: 0,
      status: "Out of Stock",
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
                Diamond
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                SKU
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Carat
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Color
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Clarity
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Price
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Stock
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Status
              </th>

              <th className="px-6 py-4 text-center text-accent-gold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {diamonds.map((diamond) => (

              <tr
                key={diamond.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4">
                  <img
                    src={diamond.image}
                    alt={diamond.name}
                    className="w-14 h-14 rounded-lg object-cover border border-gray-700"
                  />
                </td>

                <td className="px-6 py-4 font-medium">
                  {diamond.name}
                </td>

                <td className="px-6 py-4 text-text-secondary">
                  {diamond.sku}
                </td>

                <td className="px-6 py-4">
                  {diamond.carat}
                </td>

                <td className="px-6 py-4">
                  {diamond.color}
                </td>

                <td className="px-6 py-4">
                  {diamond.clarity}
                </td>

                <td className="px-6 py-4 text-accent-gold font-semibold">
                  {diamond.price}
                </td>

                <td className="px-6 py-4">
                  {diamond.stock}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      diamond.status === "Available"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {diamond.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/products/diamond/details/${diamond.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/diamond/edit/${diamond.id}`}
                      className="text-accent-gold hover:text-accent-gold"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => {
                        if (confirm("Delete this diamond?")) {
                          alert("Diamond deleted successfully!");
                        }
                      }}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 size={20} />
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