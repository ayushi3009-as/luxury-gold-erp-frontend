"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function ProductImageTable() {
  const images = [
    {
      id: 1,
      image: "/gold/ring1.jpg",
      product: "Gold Ring",
      totalImages: 5,
      primary: "Yes",
      updated: "24 Jul 2026",
    },
    {
      id: 2,
      image: "/diamond/diamond1.jpg",
      product: "Diamond Necklace",
      totalImages: 8,
      primary: "Yes",
      updated: "22 Jul 2026",
    },
    {
      id: 3,
      image: "/gold/chain1.jpg",
      product: "Gold Chain",
      totalImages: 4,
      primary: "No",
      updated: "20 Jul 2026",
    },
  ];

  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-background-tertiary">

            <tr>

              <th className="px-6 py-4 text-left text-accent-gold">
                Image
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Product
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Total Images
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Primary
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Last Updated
              </th>

              <th className="px-6 py-4 text-center text-accent-gold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {images.map((item) => (

              <tr
                key={item.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4">

                  <img
                    src={item.image}
                    alt={item.product}
                    className="w-16 h-16 rounded-xl object-cover border border-gray-700"
                  />

                </td>

                <td className="px-6 py-4 font-medium">
                  {item.product}
                </td>

                <td className="px-6 py-4">
                  {item.totalImages}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.primary === "Yes"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-500/20 text-text-secondary"
                    }`}
                  >
                    {item.primary}
                  </span>

                </td>

                <td className="px-6 py-4 text-text-secondary">
                  {item.updated}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <Link
                      href={`/products/images/details/${item.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/images/upload?id=${item.id}`}
                      className="text-accent-gold hover:text-accent-gold"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => {
                        if (
                          confirm(
                            "Are you sure you want to delete these images?"
                          )
                        ) {
                          alert("Images deleted successfully!");
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