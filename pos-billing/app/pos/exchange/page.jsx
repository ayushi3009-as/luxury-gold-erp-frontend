"use client";

import { useState } from "react";
import Link from "next/link";

export default function ExchangePage() {
  const [oldInvoice, setOldInvoice] = useState("");
  const [oldProduct, setOldProduct] = useState(null);
  const [newProduct, setNewProduct] = useState(null);
  const [search, setSearch] = useState("");

  const availableProducts = [
    {
      id: 1,
      name: "Gold Ring",
      sku: "GR-001",
      price: 45000,
    },
    {
      id: 2,
      name: "Diamond Necklace",
      sku: "DN-002",
      price: 125000,
    },
    {
      id: 3,
      name: "Gold Bracelet",
      sku: "GB-003",
      price: 78000,
    },
    {
      id: 4,
      name: "Diamond Earrings",
      sku: "DE-004",
      price: 65000,
    },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const difference =
    newProduct && oldProduct
      ? newProduct.price - oldProduct.price
      : 0;

  return (
    <div className="min-h-screen bg-[#f8f6f2] p-6 text-[#29241f]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Link
            href="/pos"
            className="mb-2 inline-block text-sm text-[#9b6b28]"
          >
            ← Back to POS
          </Link>

          <h1 className="text-2xl font-bold">Product Exchange</h1>

          <p className="text-sm text-gray-500">
            Exchange purchased products with another product
          </p>
        </div>

        <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
          <p className="text-xs text-gray-500">Exchange Date</p>
          <p className="font-semibold">
            {new Date().toLocaleDateString("en-IN")}
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Search Invoice */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">
              Find Original Invoice
            </h2>

            <div className="flex gap-3">
              <input
                type="text"
                value={oldInvoice}
                onChange={(e) => setOldInvoice(e.target.value)}
                placeholder="Enter invoice number"
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b88a45]"
              />

              <button
                onClick={() =>
                  setOldProduct({
                    name: "Gold Ring",
                    sku: "GR-001",
                    price: 45000,
                  })
                }
                className="rounded-xl bg-[#29241f] px-6 py-3 font-medium text-white"
              >
                Search
              </button>
            </div>

            {/* Invoice Details */}
            {oldProduct && (
              <div className="mt-5 rounded-xl bg-[#fbf8f2] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">Original Purchase</h3>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Eligible for Exchange
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-4">
                  <div>
                    <p className="text-xs text-gray-500">Invoice</p>
                    <p className="font-semibold">
                      {oldInvoice || "INV-2026-00124"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Customer</p>
                    <p className="font-semibold">Rahul Sharma</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Product</p>
                    <p className="font-semibold">{oldProduct.name}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Value</p>
                    <p className="font-semibold">
                      {formatPrice(oldProduct.price)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Old Product */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">
              Product Being Returned
            </h2>

            {oldProduct ? (
              <div className="flex items-center justify-between rounded-xl border border-[#eadbc5] bg-[#fffaf3] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eadbc5] text-2xl">
                    💍
                  </div>

                  <div>
                    <p className="font-semibold">{oldProduct.name}</p>
                    <p className="text-sm text-gray-500">
                      SKU: {oldProduct.sku}
                    </p>
                  </div>
                </div>

                <p className="font-bold">
                  {formatPrice(oldProduct.price)}
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
                Search an invoice to select the product
              </div>
            )}
          </div>

          {/* New Product */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Select Replacement Product
              </h2>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search product..."
                className="w-52 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {availableProducts
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setNewProduct(product)}
                    className={`flex items-center justify-between rounded-xl border p-4 text-left transition ${
                      newProduct?.id === product.id
                        ? "border-[#9b6b28] bg-[#fffaf3]"
                        : "border-gray-200 hover:border-[#b88a45]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1eadf] text-xl">
                        💎
                      </div>

                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-xs text-gray-500">
                          {product.sku}
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold">
                      {formatPrice(product.price)}
                    </p>
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">
            Exchange Summary
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">
                Returned Product
              </span>

              <span className="font-semibold">
                {oldProduct
                  ? formatPrice(oldProduct.price)
                  : "₹0"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-500">
                New Product
              </span>

              <span className="font-semibold">
                {newProduct
                  ? formatPrice(newProduct.price)
                  : "₹0"}
              </span>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="font-medium">
                  {difference > 0
                    ? "Additional Amount"
                    : "Refund Amount"}
                </span>

                <span
                  className={`text-xl font-bold ${
                    difference > 0
                      ? "text-[#9b6b28]"
                      : "text-green-600"
                  }`}
                >
                  {formatPrice(Math.abs(difference))}
                </span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Exchange Reason
              </label>

              <select className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none">
                <option>Size Issue</option>
                <option>Product Defect</option>
                <option>Customer Preference</option>
                <option>Wrong Product</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Notes
              </label>

              <textarea
                rows="3"
                placeholder="Enter exchange notes..."
                className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none"
              />
            </div>

            <button
              disabled={!oldProduct || !newProduct}
              className="w-full rounded-xl bg-[#9b6b28] py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Confirm Exchange
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}