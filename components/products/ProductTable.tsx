"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function ProductTable() {
  const products = [
    {
      id: 1,
      image: "/diamond/ring1_d.png",
      name: "Diamond Ring",
      sku: "PRD001",
      category: "Diamond",
      price: "₹85,000",
      stock: 12,
      status: "Available",
    },
    {
      id: 2,
      image: "/gold/neckless_g.png",
      name: "Gold Necklace",
      sku: "PRD002",
      category: "Gold",
      price: "₹1,45,000",
      stock: 8,
      status: "Available",
    },
    {
      id: 3,
      image: "/gold/gold_b.png",
      name: "Gold Bracelet",
      sku: "PRD003",
      category: "Gold",
      price: "₹72,000",
      stock: 0,
      status: "Out of Stock",
    },
  ];

  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#1B1B1B]">

            <tr className="text-left">

              <th className="px-6 py-4 text-yellow-500">Image</th>
              <th className="px-6 py-4 text-yellow-500">Product</th>
              <th className="px-6 py-4 text-yellow-500">SKU</th>
              <th className="px-6 py-4 text-yellow-500">Category</th>
              <th className="px-6 py-4 text-yellow-500">Price</th>
              <th className="px-6 py-4 text-yellow-500">Stock</th>
              <th className="px-6 py-4 text-yellow-500">Status</th>
              <th className="px-6 py-4 text-yellow-500 text-center">
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

                {/* Image */}

                <td className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-lg object-cover border border-gray-700"
                  />
                </td>

                {/* Product */}

                <td className="px-6 py-4 font-medium">
                  {product.name}
                </td>

                {/* SKU */}

                <td className="px-6 py-4 text-gray-400">
                  {product.sku}
                </td>

                {/* Category */}

                <td className="px-6 py-4">
                  {product.category}
                </td>

                {/* Price */}

                <td className="px-6 py-4 text-yellow-400 font-semibold">
                  {product.price}
                </td>

                {/* Stock */}

                <td className="px-6 py-4">
                  {product.stock}
                </td>

                {/* Status */}

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === "Available"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {product.status}
                  </span>

                </td>

                {/* Actions */}

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/products/details/${product.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/edit/${product.id}`}
                      className="text-yellow-500 hover:text-yellow-400"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                    onClick={() => {
                    if (confirm("Are you sure you want to delete this product?")) {
                    alert("Product Deleted Successfully");
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