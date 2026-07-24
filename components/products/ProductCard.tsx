"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: number;
  status: string;
}

export default function ProductCard({
  id,
  image,
  name,
  sku,
  category,
  price,
  stock,
  status,
}: ProductCardProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-5 hover:border-yellow-500 transition">

      {/* Image */}

      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-xl"
      />

      {/* Details */}

      <div className="mt-5 space-y-2">

        <h2 className="text-xl font-semibold text-white">
          {name}
        </h2>

        <p className="text-gray-400">
          SKU : {sku}
        </p>

        <p className="text-gray-400">
          Category : {category}
        </p>

        <p className="text-yellow-400 font-bold text-lg">
          {price}
        </p>

        <p className="text-gray-400">
          Stock : {stock}
        </p>

        <span
          className={`inline-block px-3 py-1 rounded-full text-sm ${
            status === "Available"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status}
        </span>

      </div>

      {/* Actions */}

      <div className="flex justify-between mt-6">

        <Link
          href={`/products/details/${id}`}
          className="text-blue-400 hover:text-blue-300"
        >
          <Eye size={22} />
        </Link>

        <Link
          href={`/products/edit/${id}`}
          className="text-yellow-500 hover:text-yellow-400"
        >
          <Pencil size={22} />
        </Link>

        <button className="text-red-500 hover:text-red-400">
          <Trash2 size={22} />
        </button>

      </div>

    </div>
  );
}