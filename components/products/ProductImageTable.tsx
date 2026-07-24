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
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#1B1B1B]">

            <tr>

              <th className="px-6 py-4 text-left text-yellow-500">
                Image
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Product
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Total Images
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Primary
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Last Updated
              </th>

              <th className="px-6 py-4 text-center text-yellow-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {images.map((item) => (

              <tr
                key={item.id}
                className="border-t border-gray-800 hover:bg-[#1A1A1A] transition"
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
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {item.primary}
                  </span>

                </td>

                <td className="px-6 py-4 text-gray-400">
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
                      className="text-yellow-500 hover:text-yellow-400"
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