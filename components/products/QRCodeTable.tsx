"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function QRCodeTable() {
  const qrcodes = [
    {
      id: 1,
      image: "/gold/ring1.jpg",
      product: "Gold Ring",
      sku: "GLD001",
      qrcode: "/qrcode/qrcode1.png",
      created: "24 Jul 2026",
    },
    {
      id: 2,
      image: "/gold/chain1.jpg",
      product: "Gold Chain",
      sku: "GLD002",
      qrcode: "/qrcode/qrcode2.png",
      created: "22 Jul 2026",
    },
    {
      id: 3,
      image: "/diamond/diamond1.jpg",
      product: "Diamond Necklace",
      sku: "DMD001",
      qrcode: "/qrcode/qrcode3.png",
      created: "20 Jul 2026",
    },
  ];

  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>

              <th className="px-6 py-4 text-left text-yellow-500">
                Product Image
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                QR Code
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Product
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                SKU
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Created
              </th>

              <th className="px-6 py-4 text-center text-yellow-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {qrcodes.map((item) => (

              <tr
                key={item.id}
                className="border-t border-gray-800 hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt={item.product}
                    className="w-16 h-16 rounded-lg object-cover border border-yellow-500/20"
                  />
                </td>

                <td className="px-6 py-4">
                  <img
                    src={item.qrcode}
                    alt="QR Code"
                    className="w-20 h-20 bg-white rounded-lg p-2"
                  />
                </td>

                <td className="px-6 py-4 font-medium">
                  {item.product}
                </td>

                <td className="px-6 py-4">
                  {item.sku}
                </td>

                <td className="px-6 py-4 text-gray-400">
                  {item.created}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <Link
                      href={`/products/qrcode/details/${item.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/qrcode/generate?id=${item.id}`}
                      className="text-yellow-500 hover:text-yellow-400"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => {
                        if (confirm("Delete this QR Code?")) {
                          alert("QR Code deleted successfully!");
                        }
                      }}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}