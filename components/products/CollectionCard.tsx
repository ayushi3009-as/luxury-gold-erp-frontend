"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface CollectionCardProps {
  id: number;
  image: string;
  name: string;
  category: string;
  products: number;
  status: string;
}

export default function CollectionCard({
  id,
  image,
  name,
  category,
  products,
  status,
}: CollectionCardProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500 transition">

      {/* Image */}

      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover rounded-xl"
      />

      {/* Details */}

      <div className="mt-5">

        <h2 className="text-2xl font-semibold text-white">
          {name}
        </h2>

        <p className="text-gray-400 mt-2">
          Category : {category}
        </p>

        <p className="text-yellow-400 mt-2 font-semibold">
          {products} Products
        </p>

        <span
          className={`inline-block mt-4 px-4 py-1 rounded-full text-sm ${
            status === "Active"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status}
        </span>

      </div>

      {/* Actions */}

      <div className="flex justify-between mt-8">

        <Link
          href={`/products/collections/details/${id}`}
          className="text-blue-400 hover:text-blue-300"
        >
          <Eye size={22} />
        </Link>

        <Link
          href={`/products/collections/edit/${id}`}
          className="text-yellow-500 hover:text-yellow-400"
        >
          <Pencil size={22} />
        </Link>

        <button
          onClick={() => {
            if (confirm("Delete this collection?")) {
              alert("Collection deleted successfully!");
            }
          }}
          className="text-red-500 hover:text-red-400"
        >
          <Trash2 size={22} />
        </button>

      </div>

    </div>
  );
}