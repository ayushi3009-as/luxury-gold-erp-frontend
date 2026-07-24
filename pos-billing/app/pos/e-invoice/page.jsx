"use client";

import { useState } from "react";
import Link from "next/link";

export default function EInvoicePage() {
  const [invoiceNumber, setInvoiceNumber] = useState(
    "INV-2026-00124"
  );

  const [invoiceStatus, setInvoiceStatus] = useState("Ready");

  const [customer, setCustomer] = useState({
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@email.com",
    gstin: "",
    address: "Ahmedabad, Gujarat",
  });

  const [items, setItems] = useState([
    {
      id: 1,
      name: "22K Gold Ring",
      hsn: "7113",
      qty: 1,
      price: 45000,
      gst: 3,
    },
    {
      id: 2,
      name: "Diamond Necklace",
      hsn: "7116",
      qty: 1,
      price: 125000,
      gst: 3,
    },
  ]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const subtotal = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const totalGST = items.reduce(
    (sum, item) =>
      sum + (item.qty * item.price * item.gst) / 100,
    0
  );

  const grandTotal = subtotal + totalGST;

  const handleGenerate = () => {
    setInvoiceStatus("Generated");
  };

  return (
    <div className="min-h-screen bg-[#f8f6f2] p-6 text-[#29241f]">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <Link
            href="/pos"
            className="mb-2 inline-block text-sm text-[#9b6b28]"
          >
            ← Back to POS
          </Link>

          <h1 className="text-2xl font-bold">
            E-Invoice
          </h1>

          <p className="text-sm text-gray-500">
            Generate and manage GST-compliant electronic invoices
          </p>
        </div>

        <div
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            invoiceStatus === "Generated"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          ● {invoiceStatus}
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Form */}
        <div className="space-y-6 lg:col-span-2">
          {/* Invoice Information */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
              Invoice Information
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Invoice Number
                </label>

                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) =>
                    setInvoiceNumber(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#b88a45]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Invoice Date
                </label>

                <input
                  type="date"
                  defaultValue="2026-07-23"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Supply Type
                </label>

                <select className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none">
                  <option>B2C - Business to Consumer</option>
                  <option>B2B - Business to Business</option>
                  <option>Export</option>
                </select>
              </div>
            </div>
          </div>

          {/* Seller Details */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
              Seller Details
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[#fbf8f2] p-4">
                <p className="text-xs text-gray-500">
                  Business Name
                </p>

                <p className="mt-1 font-semibold">
                  Golden Jewels
                </p>
              </div>

              <div className="rounded-xl bg-[#fbf8f2] p-4">
                <p className="text-xs text-gray-500">
                  GSTIN
                </p>

                <p className="mt-1 font-semibold">
                  24ABCDE1234F1Z5
                </p>
              </div>

              <div className="rounded-xl bg-[#fbf8f2] p-4">
                <p className="text-xs text-gray-500">
                  State
                </p>

                <p className="mt-1 font-semibold">
                  Gujarat
                </p>
              </div>

              <div className="rounded-xl bg-[#fbf8f2] p-4">
                <p className="text-xs text-gray-500">
                  State Code
                </p>

                <p className="mt-1 font-semibold">
                  24
                </p>
              </div>
            </div>
          </div>

          {/* Buyer Details */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
              Buyer Details
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Customer Name
                </label>

                <input
                  type="text"
                  value={customer.name}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Mobile Number
                </label>

                <input
                  type="text"
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      phone: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  value={customer.email}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Buyer GSTIN
                </label>

                <input
                  type="text"
                  value={customer.gstin}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      gstin: e.target.value,
                    })
                  }
                  placeholder="Optional"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Address
                </label>

                <textarea
                  rows="3"
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      address: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
              Invoice Items
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead>
                  <tr className="border-b text-sm text-gray-500">
                    <th className="p-3">Product</th>
                    <th className="p-3">HSN/SAC</th>
                    <th className="p-3">Qty</th>
                    <th className="p-3">Rate</th>
                    <th className="p-3">GST %</th>
                    <th className="p-3 text-right">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item) => {
                    const itemTotal =
                      item.qty * item.price;

                    return (
                      <tr
                        key={item.id}
                        className="border-b last:border-0"
                      >
                        <td className="p-3 font-medium">
                          {item.name}
                        </td>

                        <td className="p-3">
                          {item.hsn}
                        </td>

                        <td className="p-3">
                          {item.qty}
                        </td>

                        <td className="p-3">
                          {formatPrice(item.price)}
                        </td>

                        <td className="p-3">
                          {item.gst}%
                        </td>

                        <td className="p-3 text-right font-semibold">
                          {formatPrice(itemTotal)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">
            E-Invoice Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Invoice Number
              </span>

              <span className="font-semibold">
                {invoiceNumber}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Taxable Amount
              </span>

              <span className="font-semibold">
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Total GST
              </span>

              <span className="font-semibold">
                {formatPrice(totalGST)}
              </span>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">
                  Grand Total
                </span>

                <span className="text-2xl font-bold text-[#9b6b28]">
                  {formatPrice(grandTotal)}
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-[#fbf8f2] p-4">
              <p className="mb-3 text-sm font-semibold">
                Compliance Checklist
              </p>

              <div className="space-y-2 text-sm">
                <p className="text-green-600">
                  ✓ Seller GSTIN available
                </p>

                <p className="text-green-600">
                  ✓ Invoice number available
                </p>

                <p className="text-green-600">
                  ✓ HSN/SAC codes available
                </p>

                <p className="text-green-600">
                  ✓ Tax calculation completed
                </p>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              className="w-full rounded-xl bg-[#9b6b28] py-4 font-semibold text-white"
            >
              Generate E-Invoice
            </button>

            <button className="w-full rounded-xl border border-gray-200 py-3 font-medium">
              Download JSON
            </button>

            <button className="w-full rounded-xl border border-gray-200 py-3 font-medium">
              Print E-Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}