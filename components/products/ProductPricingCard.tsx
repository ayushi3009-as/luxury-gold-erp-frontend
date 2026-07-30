"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2, IndianRupee } from "lucide-react";

interface ProductPricingCardProps {
  id: number;
  image: string;
  product: string;
  sku: string;
  costPrice: string;
  sellingPrice: string;
  profit: string;
}

export default function ProductPricingCard({
  id,
  image,
  product,
  sku,
  costPrice,
  sellingPrice,
  profit,
}: ProductPricingCardProps) {
  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden hover:border-yellow-500 transition">

      {/* Product Image */}

      <img
        src={image}
        alt={product}
        className="w-full h-56 object-cover"
      />

      {/* Details */}

      <div className="p-6">

        <div className="flex items-center gap-2 mb-4">

          <IndianRupee
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
          Cost Price :
          <span className="text-text-primary ml-2">
            {costPrice}
          </span>
        </p>

        <p className="text-text-secondary mt-2">
          Selling Price :
          <span className="text-green-400 ml-2 font-semibold">
            {sellingPrice}
          </span>
        </p>

        <p className="text-text-secondary mt-2">
          Profit :
          <span className="text-accent-gold ml-2 font-semibold">
            {profit}
          </span>
        </p>

        {/* Actions */}

        <div className="flex justify-between mt-8">

          <Link
            href={`/products/pricing/details/${id}`}
            className="text-blue-400 hover:text-blue-300"
          >
            <Eye size={22} />
          </Link>

          <Link
            href={`/products/pricing/edit/${id}`}
            className="text-accent-gold hover:text-accent-gold"
          >
            <Pencil size={22} />
          </Link>

          <button
            onClick={() => {
              if (confirm("Delete this pricing?")) {
                alert("Pricing deleted successfully!");
              }
            }}
            className="text-red-500 hover:text-red-400"
          >
            <Trash2 size={22} />
          </button>

        </div>

      </div>

    </div>
  );
}