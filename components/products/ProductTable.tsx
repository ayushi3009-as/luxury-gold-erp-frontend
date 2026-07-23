"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/images/login-bg.jpg",
    name: "22K Gold Necklace",
    category: "Necklace",
    price: "₹85,000",
    stock: 12,
    status: "In Stock",
  },
  {
    id: 2,
    image: "/images/login-bg.jpg",
    name: "Diamond Ring",
    category: "Ring",
    price: "₹45,000",
    stock: 5,
    status: "Low Stock",
  },
];

export default function ProductTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-yellow-500/20">
      <table className="w-full">
        <thead className="bg-[#1a1a1a]">
          <tr className="text-yellow-500">
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Stock</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t border-gray-800">
              <td className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
              </td>

              <td className="p-4 text-white">{product.name}</td>
              <td className="p-4 text-gray-300">{product.category}</td>
              <td className="p-4 text-yellow-400">{product.price}</td>
              <td className="p-4 text-white">{product.stock}</td>

              <td className="p-4">
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
                  {product.status}
                </span>
              </td>

              <td className="p-4">
                <div className="flex gap-3">
                  <Eye size={18} className="cursor-pointer text-blue-400" />
                  <Pencil size={18} className="cursor-pointer text-yellow-400" />
                  <Trash2 size={18} className="cursor-pointer text-red-400" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}