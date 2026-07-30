"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function PurchaseCard() {
  const purchases = [
    {
      id: "PUR001",
      supplier: "Shree Gold Traders",
      invoice: "INV1001",
      product: "22K Gold Chain",
      quantity: 10,
      amount: "₹2,50,000",
      date: "27 Jul 2026",
      status: "Paid",
    },
    {
      id: "PUR002",
      supplier: "Royal Diamonds",
      invoice: "INV1002",
      product: "Diamond Ring",
      quantity: 5,
      amount: "₹1,80,000",
      date: "26 Jul 2026",
      status: "Pending",
    },
    {
      id: "PUR003",
      supplier: "Patel Jewellers",
      invoice: "INV1003",
      product: "Gold Bracelet",
      quantity: 8,
      amount: "₹95,000",
      date: "25 Jul 2026",
      status: "Paid",
    },
  ];

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete Purchase ${id}?`
    );

    if (!confirmDelete) return;

    alert(`Purchase ${id} deleted successfully.`);

    // Backend API call later
    // await fetch(`/api/purchase/${id}`, {
    //   method: "DELETE",
    // });
  };

  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-background-tertiary">

            <tr>
              <th className="px-6 py-4 text-left text-accent-gold">
                Purchase ID
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Supplier
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Invoice
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Product
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Qty
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Amount
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Date
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

            {purchases.map((purchase) => (

              <tr
                key={purchase.id}
                className="border-t border-border-theme hover:bg-[#1A1A1A]"
              >

                <td className="px-6 py-4">{purchase.id}</td>

                <td className="px-6 py-4">{purchase.supplier}</td>

                <td className="px-6 py-4">{purchase.invoice}</td>

                <td className="px-6 py-4">{purchase.product}</td>

                <td className="px-6 py-4">{purchase.quantity}</td>

                <td className="px-6 py-4 text-accent-gold font-semibold">
                  {purchase.amount}
                </td>

                <td className="px-6 py-4">{purchase.date}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      purchase.status === "Paid"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {purchase.status}
                  </span>
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    {/* View */}

                    <Link
                      href={`/reports/purchase/details/${purchase.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={18} />
                    </Link>

                    {/* Edit */}

                    <Link
                      href={`/reports/purchase/edit/${purchase.id}`}
                      className="text-accent-gold hover:text-yellow-300"
                    >
                      <Pencil size={18} />
                    </Link>

                    {/* Delete */}

                    <button
                      onClick={() => handleDelete(purchase.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
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