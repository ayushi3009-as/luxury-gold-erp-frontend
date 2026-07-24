"use client";

import { useState } from "react";
import Link from "next/link";

export default function SalesReturnPage() {
  const [invoiceNo, setInvoiceNo] = useState("");
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "Gold Ring",
      sku: "GR-001",
      qty: 1,
      price: "₹45,000",
      total: "₹45,000",
    },
    {
      id: 2,
      name: "Diamond Necklace",
      sku: "DN-002",
      qty: 1,
      price: "₹1,25,000",
      total: "₹1,25,000",
    },
  ];

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f6f2] p-6 text-[#29241f]">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Link
            href="/pos"
            className="mb-2 inline-block text-sm text-[#9b6b28]"
          >
            ← Back to POS
          </Link>

          <h1 className="text-2xl font-bold">Sales Return</h1>
          <p className="text-sm text-gray-500">
            Process product returns and refunds
          </p>
        </div>

        <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
          <p className="text-xs text-gray-500">Return Date</p>
          <p className="font-semibold">
            {new Date().toLocaleDateString("en-IN")}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Find Invoice</h2>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter invoice number"
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b88a45]"
              />

              <button className="rounded-xl bg-[#29241f] px-6 py-3 font-medium text-white">
                Search
              </button>
            </div>

            <div className="mt-5 rounded-xl bg-[#fbf8f2] p-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-gray-500">Invoice No.</p>
                  <p className="font-semibold">INV-2026-00124</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Customer</p>
                  <p className="font-semibold">Rahul Sharma</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Purchase Date</p>
                  <p className="font-semibold">23 Jul 2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Select Products</h2>

              <input
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-52 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b text-sm text-gray-500">
                    <th className="p-3">Select</th>
                    <th className="p-3">Product</th>
                    <th className="p-3">SKU</th>
                    <th className="p-3">Qty</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {products
                    .filter((product) =>
                      product.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((product) => (
                      <tr key={product.id} className="border-b last:border-0">
                        <td className="p-3">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(product.id)}
                            onChange={() => toggleItem(product.id)}
                            className="h-4 w-4"
                          />
                        </td>

                        <td className="p-3 font-medium">{product.name}</td>
                        <td className="p-3 text-sm text-gray-500">
                          {product.sku}
                        </td>
                        <td className="p-3">{product.qty}</td>
                        <td className="p-3">{product.price}</td>
                        <td className="p-3 font-semibold">{product.total}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">Return Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Selected Items</span>
              <span className="font-semibold">{selectedItems.length}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Return Amount</span>
              <span className="font-semibold">₹0</span>
            </div>

            <div className="border-t pt-4">
              <label className="mb-2 block text-sm font-medium">
                Return Reason
              </label>

              <select className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none">
                <option>Product Defect</option>
                <option>Customer Request</option>
                <option>Wrong Product</option>
                <option>Size Issue</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Additional Notes
              </label>

              <textarea
                rows="4"
                placeholder="Enter notes..."
                className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none"
              />
            </div>

            <button className="w-full rounded-xl bg-[#9b6b28] py-3 font-semibold text-white">
              Process Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}