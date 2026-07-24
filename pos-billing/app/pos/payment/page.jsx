"use client";

import { useState } from "react";
import Link from "next/link";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [amountReceived, setAmountReceived] = useState("");

  const subtotal = 125000;
  const discount = 5000;
  const tax = 12000;
  const total = subtotal - discount + tax;

  const received = Number(amountReceived) || 0;
  const change = received > total ? received - total : 0;
  const remaining = received < total ? total - received : 0;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const paymentMethods = [
    {
      name: "Cash",
      icon: "💵",
    },
    {
      name: "Card",
      icon: "💳",
    },
    {
      name: "UPI",
      icon: "📱",
    },
    {
      name: "Bank Transfer",
      icon: "🏦",
    },
  ];

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

          <h1 className="text-2xl font-bold">Payment</h1>

          <p className="text-sm text-gray-500">
            Complete payment for the current invoice
          </p>
        </div>

        <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
          <p className="text-xs text-gray-500">Invoice Number</p>
          <p className="font-semibold">INV-2026-00124</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Section */}
        <div className="space-y-6 lg:col-span-2">
          {/* Customer Details */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Customer Details</h2>

              <button className="text-sm font-medium text-[#9b6b28]">
                + Add Customer
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-[#fbf8f2] p-4">
                <p className="text-xs text-gray-500">Customer Name</p>
                <p className="mt-1 font-semibold">Rahul Sharma</p>
              </div>

              <div className="rounded-xl bg-[#fbf8f2] p-4">
                <p className="text-xs text-gray-500">Mobile Number</p>
                <p className="mt-1 font-semibold">+91 98765 43210</p>
              </div>

              <div className="rounded-xl bg-[#fbf8f2] p-4">
                <p className="text-xs text-gray-500">Loyalty Points</p>
                <p className="mt-1 font-semibold">2,450 Points</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
              Select Payment Method
            </h2>

            <div className="grid gap-4 sm:grid-cols-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.name}
                  onClick={() => setPaymentMethod(method.name)}
                  className={`rounded-xl border p-5 text-center transition ${
                    paymentMethod === method.name
                      ? "border-[#9b6b28] bg-[#fffaf3]"
                      : "border-gray-200 hover:border-[#b88a45]"
                  }`}
                >
                  <div className="mb-2 text-3xl">{method.icon}</div>

                  <p className="text-sm font-semibold">
                    {method.name}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Details */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
              {paymentMethod} Payment Details
            </h2>

            {paymentMethod === "Cash" && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Amount Received
                  </label>

                  <input
                    type="number"
                    value={amountReceived}
                    onChange={(e) =>
                      setAmountReceived(e.target.value)
                    }
                    placeholder="Enter amount"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-lg outline-none focus:border-[#b88a45]"
                  />
                </div>

                <div className="rounded-xl bg-[#fbf8f2] p-4">
                  <p className="text-sm text-gray-500">
                    Change to Return
                  </p>

                  <p className="mt-2 text-2xl font-bold text-green-600">
                    {formatPrice(change)}
                  </p>
                </div>
              </div>
            )}

            {paymentMethod === "Card" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />

                <input
                  type="text"
                  placeholder="Transaction Reference"
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />
              </div>
            )}

            {paymentMethod === "UPI" && (
              <div className="rounded-xl bg-[#fbf8f2] p-6 text-center">
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-xl border-4 border-[#9b6b28] text-5xl">
                  QR
                </div>

                <p className="font-semibold">
                  Scan QR code to complete payment
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  UPI ID: goldstore@upi
                </p>
              </div>
            )}

            {paymentMethod === "Bank Transfer" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Bank Reference Number"
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />

                <input
                  type="text"
                  placeholder="Bank Name"
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">
            Invoice Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Discount</span>
              <span className="font-medium text-green-600">
                - {formatPrice(discount)}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax</span>
              <span className="font-medium">
                {formatPrice(tax)}
              </span>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  Total Amount
                </span>

                <span className="text-2xl font-bold text-[#9b6b28]">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            {received > 0 && (
              <div className="rounded-xl bg-[#fbf8f2] p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Amount Received
                  </span>

                  <span className="font-semibold">
                    {formatPrice(received)}
                  </span>
                </div>

                {remaining > 0 && (
                  <div className="mt-2 flex justify-between text-sm text-red-600">
                    <span>Remaining</span>
                    <span className="font-semibold">
                      {formatPrice(remaining)}
                    </span>
                  </div>
                )}
              </div>
            )}

            <button
              disabled={
                paymentMethod === "Cash" && received < total
              }
              className="w-full rounded-xl bg-[#9b6b28] py-4 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Complete Payment
            </button>

            <button className="w-full rounded-xl border border-gray-200 py-3 font-medium">
              Save as Pending
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}