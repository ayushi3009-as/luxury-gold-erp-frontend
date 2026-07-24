"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function CollectionTable() {
  const collections = [
    {
      id: 1,
      image: "/collections/bridal.jpg",
      name: "Bridal Collection",
      category: "Gold Jewellery",
      products: 120,
      status: "Active",
    },
    {
      id: 2,
      image: "/diamond/diamond1.jpg",
      name: "Diamond Collection",
      category: "Diamond Jewellery",
      products: 85,
      status: "Active",
    },
    {
      id: 3,
      image: "/gold/neckless_g.png",
      name: "Traditional Collection",
      category: "Gold Jewellery",
      products: 60,
      status: "Inactive",
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
                Collection Name
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Category
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Products
              </th>

              <th className="px-6 py-4 text-left text-yellow-500">
                Status
              </th>

              <th className="px-6 py-4 text-center text-yellow-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {collections.map((collection) => (

              <tr
                key={collection.id}
                className="border-t border-gray-800 hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4">

                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-16 h-16 rounded-xl object-cover border border-gray-700"
                  />

                </td>

                <td className="px-6 py-4 font-medium">
                  {collection.name}
                </td>

                <td className="px-6 py-4 text-gray-400">
                  {collection.category}
                </td>

                <td className="px-6 py-4">
                  {collection.products}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      collection.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {collection.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <Link
                      href={`/products/collections/details/${collection.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/collections/edit/${collection.id}`}
                      className="text-yellow-500 hover:text-yellow-400"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => {
                        if (
                          confirm(
                            "Are you sure you want to delete this collection?"
                          )
                        ) {
                          alert("Collection deleted successfully!");
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