"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2, Barcode } from "lucide-react";

interface BarcodeCardProps {
  id: number;
  product: string;
  sku: string;
  barcode: string;
  created: string;
}

export default function BarcodeCard({
  id,
  product,
  sku,
  barcode,
  created,
}: BarcodeCardProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-500 transition">

      {/* Barcode Image */}

      <div className="bg-white p-6 flex justify-center">

        <img
          src={barcode}
          alt={product}
          className="h-24 object-contain"
        />

      </div>

      {/* Details */}

      <div className="p-6">

        <div className="flex items-center gap-2 mb-3">

          <Barcode className="text-yellow-500" size={22} />

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
          Created :
          <span className="text-white ml-2">
            {created}
          </span>
        </p>

        {/* Actions */}

        <div className="flex justify-between mt-8">

          <Link
            href={`/products/barcode/details/${id}`}
            className="text-blue-400 hover:text-blue-300"
          >
            <Eye size={22} />
          </Link>

          <Link
            href={`/products/barcode/generate?id=${id}`}
            className="text-yellow-500 hover:text-yellow-400"
          >
            <Pencil size={22} />
          </Link>

          <button
            onClick={() => {
              if (confirm("Delete this barcode?")) {
                alert("Barcode deleted successfully!");
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