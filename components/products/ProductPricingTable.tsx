"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function ProductPricingTable() {
  const products = [
    {
      id: 1,
      image: "/gold/ring1.jpg",
      product: "Gold Ring",
      sku: "GLD001",
      costPrice: "₹65,000",
      sellingPrice: "₹75,000",
      profit: "₹10,000",
    },
    {
      id: 2,
      image: "/gold/chain1.jpg",
      product: "Gold Chain",
      sku: "GLD002",
      costPrice: "₹1,10,000",
      sellingPrice: "₹1,25,000",
      profit: "₹15,000",
    },
    {
      id: 3,
      image: "/diamond/necless1.jpg",
      product: "Diamond Necklace",
      sku: "DMD001",
      costPrice: "₹2,40,000",
      sellingPrice: "₹2,70,000",
      profit: "₹30,000",
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
                SKU
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Cost Price
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Selling Price
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Profit
              </th>

              <th className="px-6 py-4 text-center text-accent-gold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {products.map((item) => (

              <tr
                key={item.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A] transition"
              >

                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt={item.product}
                    className="w-16 h-16 rounded-lg object-cover border border-border-theme"
                  />
                </td>

                <td className="px-6 py-4 font-medium">
                  {item.product}
                </td>

                <td className="px-6 py-4">
                  {item.sku}
                </td>

                <td className="px-6 py-4">
                  {item.costPrice}
                </td>

                <td className="px-6 py-4 text-green-400 font-semibold">
                  {item.sellingPrice}
                </td>

                <td className="px-6 py-4 text-accent-gold font-semibold">
                  {item.profit}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <Link
                      href={`/products/pricing/details/${item.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={20} />
                    </Link>

                    <Link
                      href={`/products/pricing/edit/${item.id}`}
                      className="text-accent-gold hover:text-accent-gold"
                    >
                      <Pencil size={20} />
                    </Link>

                    <button
                      onClick={() => {
                        if (confirm("Delete this pricing?")) {
                          alert("Pricing deleted successfully!");
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