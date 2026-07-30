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
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden hover:border-yellow-500 transition">

      <img
        src={image}
        alt={product}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <div className="flex items-center gap-2 mb-4">

          <History
            size={22}
            className="text-accent-gold"
          />

          <h2 className="text-xl font-bold text-text-primary">
            {product}
          </h2>

        </div>

        <p className="text-text-secondary">
          SKU :
          <span className="text-text-primary ml-2">
            {sku}
          </span>
        </p>

        <p className="text-text-secondary mt-2">
          Action :
          <span className="text-accent-gold ml-2">
            {action}
          </span>
        </p>

        <p className="text-text-secondary mt-2">
          User :
          <span className="text-text-primary ml-2">
            {user}
          </span>
        </p>

        <p className="text-text-secondary mt-2">
          Date :
          <span className="text-text-primary ml-2">
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