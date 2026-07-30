"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function BrandTable() {
  const brands = [
    {
      id: 1,
      logo: "/brands/tanishq.png",
      name: "Tanishq",
      country: "India",
      products: 120,
      status: "Active",
    },
    {
      id: 2,
      logo: "/brands/kalyan.png",
      name: "Kalyan Jewellers",
      country: "India",
      products: 95,
      status: "Active",
    },
    {
      id: 3,
      logo: "/brands/malabar.png",
      name: "Malabar Gold",
      country: "India",
      products: 80,
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
                Logo
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Brand Name
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Country
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

            {brands.map((brand) => (

              <tr
                key={brand.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4">

                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-14 h-14 rounded-lg object-cover border border-gray-700"
                  />

                </td>

                <td className="px-6 py-4 font-medium">
                  {brand.name}
                </td>

                <td className="px-6 py-4 text-text-secondary">
                  {brand.country}
                </td>

                <td className="px-6 py-4">
                  {brand.products}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      brand.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {brand.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <Link
                      href={`/products/brands/details/${brand.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/brands/edit/${brand.id}`}
                      className="text-accent-gold hover:text-accent-gold"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => {
                        if (
                          confirm(
                            "Are you sure you want to delete this brand?"
                          )
                        ) {
                          alert("Brand deleted successfully!");
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