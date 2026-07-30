"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2, Star } from "lucide-react";

interface ProductImageCardProps {
  id: number;
  image: string;
  productName: string;
  totalImages: number;
  primary: boolean;
}

export default function ProductImageCard({
  id,
  image,
  productName,
  totalImages,
  primary,
}: ProductImageCardProps) {
  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden hover:border-yellow-500 transition">

      {/* Product Image */}
      <div className="relative">

        <img
          src={image}
          alt={productName}
          className="w-full h-56 object-cover"
        />

        {primary && (
          <div className="absolute top-3 right-3 bg-accent-gold text-black rounded-full p-2">
            <Star size={16} fill="black" />
          </div>
        )}

      </div>

      {/* Details */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-text-primary">
          {productName}
        </h2>

        <p className="text-text-secondary mt-2">
          Total Images :
          <span className="text-accent-gold font-semibold ml-2">
            {totalImages}
          </span>
        </p>

        <p className="mt-2">
          Status :
          <span
            className={`ml-2 font-semibold ${
              primary ? "text-green-400" : "text-text-secondary"
            }`}
          >
            {primary ? "Primary Image" : "Gallery Image"}
          </span>
        </p>

        {/* Buttons */}

        <div className="flex justify-between mt-6">

          <Link
            href={`/products/images/details/${id}`}
            className="text-blue-400 hover:text-blue-300"
          >
            <Eye size={22} />
          </Link>

          <Link
            href={`/products/images/upload?id=${id}`}
            className="text-accent-gold hover:text-accent-gold"
          >
            <Pencil size={22} />
          </Link>

          <button
            onClick={() => {
              if (confirm("Delete this image?")) {
                alert("Image deleted successfully!");
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