"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function BarcodeTable() {
  const barcodes = [
   {
    id: 1,
    product: "Gold Ring",
    sku: "GLD001",
    barcode: "/barcode/barcode1.png",
    created: "24 Jul 2026",
   },
    {
      id: 2,
      product: "Gold Chain",
      sku: "GLD002",
      barcode: "/barcode/barcode2.png",
      created: "22 Jul 2026",
    },
    {
      id: 3,
      product: "Diamond Necklace",
      sku: "DMD001",
      barcode: "/barcode/barcode3.png",
      created: "20 Jul 2026",
    },
  ];

  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-background-tertiary">

            <tr>

              <th className="px-6 py-4 text-left text-accent-gold">
                Barcode
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Product
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                SKU
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Created
              </th>

              <th className="px-6 py-4 text-center text-accent-gold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {barcodes.map((item) => (

              <tr
                key={item.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4">
                  <img
                    src={item.barcode}
                    alt="Barcode"
                    className="h-16 w-40 object-contain bg-white rounded-lg p-2"
                  />
                </td>

                <td className="px-6 py-4 font-medium">
                  {item.product}
                </td>

                <td className="px-6 py-4">
                  {item.sku}
                </td>

                <td className="px-6 py-4 text-text-secondary">
                  {item.created}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <Link
                      href={`/products/barcode/details/${item.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/barcode/generate?id=${item.id}`}
                      className="text-accent-gold hover:text-accent-gold"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => {
                        if (
                          confirm("Delete this barcode?")
                        ) {
                          alert("Barcode deleted successfully!");
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