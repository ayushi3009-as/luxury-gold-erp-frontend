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
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>

              <th className="px-6 py-4 text-left text-yellow-500">
                Image
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Diamond
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                SKU
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Carat
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Color
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Clarity
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Price
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Stock
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

            {diamonds.map((diamond) => (

              <tr
                key={diamond.id}
                className="border-t border-gray-800 hover:bg-[#1A1A1A] transition"
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

                <td className="px-6 py-4 text-gray-400">
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

                <td className="px-6 py-4 text-yellow-400 font-semibold">
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
                      className="text-yellow-500 hover:text-yellow-400"
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