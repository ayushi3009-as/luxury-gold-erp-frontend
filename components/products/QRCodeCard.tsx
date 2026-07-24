"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2, QrCode } from "lucide-react";

interface QRCodeCardProps {
  id: number;
  image: string;
  product: string;
  sku: string;
  qrcode: string;
  created: string;
}

export default function QRCodeCard({
  id,
  image,
  product,
  sku,
  qrcode,
  created,
}: QRCodeCardProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-500 transition">

      {/* Product Image */}

      <img
        src={image}
        alt={product}
        className="w-full h-48 object-cover"
      />

      {/* QR Code */}

      <div className="flex justify-center bg-white py-4">

        <img
          src={qrcode}
          alt="QR Code"
          className="w-28 h-28 object-contain"
        />

      </div>

      {/* Details */}

      <div className="p-6">

        <div className="flex items-center gap-2 mb-4">

          <QrCode className="text-yellow-500" size={22} />

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
            href={`/products/qrcode/details/${id}`}
            className="text-blue-400 hover:text-blue-300"
          >
            <Eye size={22} />
          </Link>

          <Link
            href={`/products/qrcode/generate?id=${id}`}
            className="text-yellow-500 hover:text-yellow-400"
          >
            <Pencil size={22} />
          </Link>

          <button
            onClick={() => {
              if (confirm("Delete this QR Code?")) {
                alert("QR Code deleted successfully!");
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