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
                Purity
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Weight
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

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
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

                <td className="px-6 py-4 text-accent-gold font-semibold">
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
                      className="text-accent-gold hover:text-accent-gold"
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