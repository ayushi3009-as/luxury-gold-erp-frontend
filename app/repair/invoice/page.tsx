"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  Download,
  Eye,
  Pencil,
} from "lucide-react";

export default function RepairInvoicePage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Repair Invoice
          </h1>

          <p className="text-text-secondary mt-2">
            Invoice for completed repair
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <Link
            href="/repair"
            className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href="/repair/details/REP001"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-text-primary px-5 py-3 rounded-xl transition"
          >
            <Eye size={18} />
            Details
          </Link>

          <Link
            href="/repair/edit/REP001"
            className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black px-5 py-3 rounded-xl transition"
          >
            <Pencil size={18} />
            Edit
          </Link>

        </div>

      </div>

      {/* Invoice Card */}

      <div className="max-w-6xl mx-auto bg-background-secondary border border-border-theme rounded-2xl p-8">

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h2 className="text-2xl font-bold text-accent-gold mb-6">
              Customer Details
            </h2>

            <div className="space-y-4">

              <p><strong>Name:</strong> Rahul Patel</p>

              <p><strong>Mobile:</strong> 9876543210</p>

              <p><strong>Invoice No:</strong> INV-2026-001</p>

              <p><strong>Repair ID:</strong> REP001</p>

              <p><strong>Date:</strong> 28 Jul 2026</p>

            </div>

          </div>

          <div>

            <h2 className="text-2xl font-bold text-accent-gold mb-6">
              Repair Summary
            </h2>

            <div className="space-y-4">

              <p><strong>Product:</strong> Gold Ring</p>

              <p><strong>Repair Type:</strong> Ring Resize</p>

              <p><strong>Worker:</strong> Ramesh</p>

              <p><strong>Status:</strong> Completed</p>

            </div>

          </div>

        </div>

        {/* Charges */}

        <div className="mt-10">

          <table className="w-full border border-gray-700">

            <thead className="bg-background-tertiary">

              <tr>

                <th className="p-4 text-left text-accent-gold">
                  Description
                </th>

                <th className="p-4 text-right text-accent-gold">
                  Amount
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t border-gray-700">

                <td className="p-4">
                  Repair Charges
                </td>

                <td className="p-4 text-right">
                  ₹1,500
                </td>

              </tr>

              <tr className="border-t border-gray-700">

                <td className="p-4">
                  GST
                </td>

                <td className="p-4 text-right">
                  ₹270
                </td>

              </tr>

              <tr className="border-t border-gray-700 font-bold">

                <td className="p-4 text-accent-gold">
                  Total
                </td>

                <td className="p-4 text-right text-accent-gold">
                  ₹1,770
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mt-10">

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            <Printer size={18} />
            Print Invoice
          </button>

          <button
            onClick={() => alert("Invoice Downloaded")}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            <Download size={18} />
            Download PDF
          </button>

        </div>

      </div>

    </main>
  );
}