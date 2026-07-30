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
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-background-tertiary">

            <tr>

              <th className="px-6 py-4 text-left text-accent-gold">
                Image
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Collection Name
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Category
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Products
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Status
              </th>

              <th className="px-6 py-4 text-center text-accent-gold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {collections.map((collection) => (

              <tr
                key={collection.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
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

                <td className="px-6 py-4 text-text-secondary">
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
                      className="text-accent-gold hover:text-accent-gold"
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