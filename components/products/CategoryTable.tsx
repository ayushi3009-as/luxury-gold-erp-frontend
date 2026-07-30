"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function CategoryTable() {
  const categories = [
    {
      id: 1,
      name: "Gold Jewellery",
      code: "CAT001",
      products: 120,
      status: "Active",
    },
    {
      id: 2,
      name: "Diamond Jewellery",
      code: "CAT002",
      products: 85,
      status: "Active",
    },
    {
      id: 3,
      name: "Silver Jewellery",
      code: "CAT003",
      products: 45,
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
                Category Name
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Category Code
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

            {categories.map((category) => (

              <tr
                key={category.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4 font-medium">
                  {category.name}
                </td>

                <td className="px-6 py-4 text-text-secondary">
                  {category.code}
                </td>

                <td className="px-6 py-4">
                  {category.products}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      category.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {category.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/products/categories/details/${category.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/categories/edit/${category.id}`}
                      className="text-accent-gold hover:text-accent-gold"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => {
                        if (
                          confirm("Delete this category?")
                        ) {
                          alert("Category deleted successfully!");
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