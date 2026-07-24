"use client";

import Link from "next/link";

export default function PrintPage() {
  const invoice = {
    number: "INV-2026-00124",
    date: "23 Jul 2026",
    time: "04:15 PM",
    customer: "Rahul Sharma",
    phone: "+91 98765 43210",
    payment: "UPI",
  };

  const products = [
    {
      id: 1,
      name: "22K Gold Ring",
      sku: "GR-001",
      qty: 1,
      price: 45000,
      total: 45000,
    },
    {
      id: 2,
      name: "Diamond Necklace",
      sku: "DN-002",
      qty: 1,
      price: 125000,
      total: 125000,
    },
  ];

  const subtotal = 170000;
  const discount = 5000;
  const tax = 12000;
  const total = 177000;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f8f6f2] p-6 text-[#29241f]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between print:hidden">
        <div>
          <Link
            href="/pos"
            className="mb-2 inline-block text-sm text-[#9b6b28]"
          >
            ← Back to POS
          </Link>

          <h1 className="text-2xl font-bold">
            Print Invoice
          </h1>

          <p className="text-sm text-gray-500">
            Preview and print customer invoice
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handlePrint}
            className="rounded-xl bg-[#29241f] px-5 py-3 font-medium text-white"
          >
            🖨 Print Invoice
          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-medium">
            Download PDF
          </button>
        </div>
      </div>

      {/* Invoice Preview */}
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm print:max-w-none print:rounded-none print:p-0 print:shadow-none">
        {/* Invoice Header */}
        <div className="flex flex-col justify-between gap-6 border-b pb-6 sm:flex-row">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eadbc5] text-2xl">
                ✦
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#9b6b28]">
                  GOLDEN JEWELS
                </h2>

                <p className="text-xs text-gray-500">
                  Premium Jewellery Store
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              123 Jewellery Market, Ahmedabad, Gujarat
            </p>

            <p className="text-sm text-gray-500">
              Phone: +91 79 1234 5678
            </p>

            <p className="text-sm text-gray-500">
              GSTIN: 24ABCDE1234F1Z5
            </p>
          </div>

          <div className="text-left sm:text-right">
            <h1 className="text-3xl font-bold">
              INVOICE
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Invoice No.
            </p>

            <p className="font-semibold">
              {invoice.number}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Date: {invoice.date}
            </p>

            <p className="text-sm text-gray-500">
              Time: {invoice.time}
            </p>
          </div>
        </div>

        {/* Customer Information */}
        <div className="my-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl bg-[#fbf8f2] p-4">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Bill To
            </p>

            <p className="font-semibold">
              {invoice.customer}
            </p>

            <p className="text-sm text-gray-500">
              {invoice.phone}
            </p>
          </div>

          <div className="rounded-xl bg-[#fbf8f2] p-4">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Payment Information
            </p>

            <p className="font-semibold">
              Payment Method: {invoice.payment}
            </p>

            <p className="text-sm text-gray-500">
              Payment Status: Paid
            </p>
          </div>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-y bg-[#fbf8f2] text-sm">
                <th className="p-4">#</th>
                <th className="p-4">Product Description</th>
                <th className="p-4">SKU</th>
                <th className="p-4 text-center">Qty</th>
                <th className="p-4 text-right">Price</th>
                <th className="p-4 text-right">Amount</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {index + 1}
                  </td>

                  <td className="p-4 font-medium">
                    {product.name}
                  </td>

                  <td className="p-4 text-sm text-gray-500">
                    {product.sku}
                  </td>

                  <td className="p-4 text-center">
                    {product.qty}
                  </td>

                  <td className="p-4 text-right">
                    {formatPrice(product.price)}
                  </td>

                  <td className="p-4 text-right font-semibold">
                    {formatPrice(product.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="mt-6 flex justify-end">
          <div className="w-full max-w-sm space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Subtotal
              </span>

              <span>
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Discount
              </span>

              <span className="text-green-600">
                - {formatPrice(discount)}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                GST / Tax
              </span>

              <span>
                {formatPrice(tax)}
              </span>
            </div>

            <div className="flex justify-between border-t pt-4 text-xl font-bold">
              <span>
                Grand Total
              </span>

              <span className="text-[#9b6b28]">
                {formatPrice(total)}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t pt-6 text-center">
          <p className="font-semibold">
            Thank you for shopping with Golden Jewels!
          </p>

          <p className="mt-2 text-sm text-gray-500">
            All jewellery is subject to our store return and exchange policy.
          </p>

          <p className="mt-5 text-xs text-gray-400">
            This is a computer-generated invoice and does not require a signature.
          </p>
        </div>
      </div>
    </div>
  );
}