"use client";

import Link from "next/link";
import { Eye, History } from "lucide-react";

interface ProductHistoryCardProps {
  id: number;
  image: string;
  product: string;
  sku: string;
  action: string;
  user: string;
  date: string;
}

export default function ProductHistoryCard({
  id,
  image,
  product,
  sku,
  action,
  user,
  date,
}: ProductHistoryCardProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-500 transition">

      <img
        src={image}
        alt={product}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <div className="flex items-center gap-2 mb-4">

          <History
            size={22}
            className="text-yellow-500"
          />

          <h2 className="text-xl font-bold text-white">
            {product}
          </h2>

        </div>

        <p className="text-gray-400">
          SKU :
          <span className="text-white ml-2">
            {sku}
          </span>
        </p>

        <p className="text-gray-400 mt-2">
          Action :
          <span className="text-yellow-500 ml-2">
            {action}
          </span>
        </p>

        <p className="text-gray-400 mt-2">
          User :
          <span className="text-white ml-2">
            {user}
          </span>
        </p>

        <p className="text-gray-400 mt-2">
          Date :
          <span className="text-white ml-2">
            {date}
          </span>
        </p>

        <div className="flex justify-center mt-8">

          <Link
            href={`/products/history/details/${id}`}
            className="text-blue-400 hover:text-blue-300"
          >
            <Eye size={22} />
          </Link>

        </div>

      </div>

    </div>
  );
}