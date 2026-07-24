"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function GoldTable() {
  const products = [
    {
      id: 1,
      image: "/gold/ring1.jpg",
      name: "Gold Ring",
      sku: "GLD001",
      purity: "22K",
      weight: "8 gm",
      price: "₹65,000",
      stock: 12,
      status: "Active",
    },
    {
      id: 2,
      image: "/gold/chain1.jpg",
      name: "Gold Chain",
      sku: "GLD002",
      purity: "24K",
      weight: "18 gm",
      price: "₹1,20,000",
      stock: 6,
      status: "Active",
    },
    {
      id: 3,
      image: "/gold/bangel1.jpg",
      name: "Gold Bangle",
      sku: "GLD003",
      purity: "18K",
      weight: "25 gm",
      price: "₹1,75,000",
      stock: 0,
      status: "Inactive",
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
                Product
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                SKU
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Purity
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Weight
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

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-t border-gray-800 hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover border border-gray-700"
                  />
                </td>

                <td className="px-6 py-4 font-medium">
                  {product.name}
                </td>

                <td className="px-6 py-4">
                  {product.sku}
                </td>

                <td className="px-6 py-4">
                  {product.purity}
                </td>

                <td className="px-6 py-4">
                  {product.weight}
                </td>

                <td className="px-6 py-4 text-yellow-400 font-semibold">
                  {product.price}
                </td>

                <td className="px-6 py-4">
                  {product.stock}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      product.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {product.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <Link
                      href={`/products/gold/details/${product.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/gold/edit/${product.id}`}
                      className="text-yellow-500 hover:text-yellow-400"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => {
                        if (
                          confirm(
                            "Are you sure you want to delete this product?"
                          )
                        ) {
                          alert("Gold product deleted successfully!");
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