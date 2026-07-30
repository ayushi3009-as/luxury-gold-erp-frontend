"use client";

import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Download,
  Printer,
} from "lucide-react";

export default function RepairReportsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Repair Reports
          </h1>

          <p className="text-text-secondary mt-2">
            View repair statistics and reports
          </p>
        </div>

        <Link
          href="/repair"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">
          <h3 className="text-text-secondary">Total Repairs</h3>
          <p className="text-3xl font-bold mt-3">320</p>
        </div>

        <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">
          <h3 className="text-text-secondary">Completed</h3>
          <p className="text-3xl font-bold text-green-400 mt-3">275</p>
        </div>

        <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">
          <h3 className="text-text-secondary">Pending</h3>
          <p className="text-3xl font-bold text-accent-gold mt-3">45</p>
        </div>

        <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">
          <h3 className="text-text-secondary">Revenue</h3>
          <p className="text-3xl font-bold text-accent-gold mt-3">
            ₹5,85,000
          </p>
        </div>

      </div>

      {/* Filters */}

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 mb-8">

        <div className="grid md:grid-cols-3 gap-5">

          <input
            type="date"
            className="bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
          />

          <input
            type="date"
            className="bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
          />

          <select className="bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3">
            <option>All Workers</option>
            <option>Ramesh</option>
            <option>Suresh</option>
            <option>Mahesh</option>
          </select>

        </div>

      </div>

      {/* Report Table */}

      <div className="bg-background-secondary border border-border-theme rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-background-tertiary">

            <tr>

              <th className="px-6 py-4 text-left text-accent-gold">
                Repair ID
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Worker
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Amount
              </th>

              <th className="px-6 py-4 text-left text-accent-gold">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t border-border-theme">

              <td className="px-6 py-4">REP001</td>
              <td className="px-6 py-4">Rahul Patel</td>
              <td className="px-6 py-4">Ramesh</td>
              <td className="px-6 py-4">₹1,500</td>

              <td className="px-6 py-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                  Completed
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 mt-8">

        <button
          className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black px-6 py-3 rounded-xl font-semibold transition"
        >
          <Printer size={18} />
          Print Report
        </button>

        <button
          className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-xl font-semibold transition"
        >
          <Download size={18} />
          Export Excel
        </button>

        <button
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-text-primary px-6 py-3 rounded-xl font-semibold transition"
        >
          <FileText size={18} />
          Export PDF
        </button>

      </div>

    </main>
  );
}