"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface BrandCardProps {
  id: number;
  logo: string;
  name: string;
  country: string;
  products: number;
  status: string;
}

export default function BrandCard({
  id,
  logo,
  name,
  country,
  products,
  status,
}: BrandCardProps) {
  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 hover:border-yellow-500 transition">

      {/* Logo */}

      <div className="flex justify-center">

        <img
          src={logo}
          alt={name}
          className="w-24 h-24 rounded-xl object-cover border border-gray-700"
        />

      </div>

      {/* Brand Info */}

      <div className="mt-6 text-center">

        <h2 className="text-2xl font-semibold text-text-primary">
          {name}
        </h2>

        <p className="text-text-secondary mt-2">
          {country}
        </p>

        <p className="text-accent-gold font-semibold mt-2">
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

      <div className="flex justify-center gap-5 mt-8">

        <Link
          href={`/products/brands/details/${id}`}
          className="text-blue-400 hover:text-blue-300"
        >
          <Eye size={22} />
        </Link>

        <Link
          href={`/products/brands/edit/${id}`}
          className="text-accent-gold hover:text-accent-gold"
        >
          <Pencil size={22} />
        </Link>

        <button
          onClick={() => {
            if (confirm("Delete this brand?")) {
              alert("Brand deleted successfully!");
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