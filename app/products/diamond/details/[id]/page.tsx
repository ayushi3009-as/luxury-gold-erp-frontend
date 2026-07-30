"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DiamondDetailsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Diamond Details
          </h1>

          <p className="text-text-secondary mt-2">
            View diamond information
          </p>

        </div>

        <Link
          href="/products/diamond"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Details Card */}

      <div className="max-w-6xl mx-auto bg-background-secondary border border-border-theme rounded-2xl overflow-hidden">

        <div className="grid md:grid-cols-2 gap-8 p-8">

          {/* Image */}

          <div>

            <img
              src="/diamond/diamond1.jpg"
              alt="Diamond"
              className="w-full h-[420px] object-cover rounded-xl border border-gray-700"
            />

          </div>

          {/* Information */}

          <div>

            <h2 className="text-3xl font-bold text-accent-gold mb-6">
              Round Brilliant Diamond
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-text-secondary">SKU</span>
                <span>DMD001</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-text-secondary">Carat</span>
                <span>1.20 ct</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-text-secondary">Color</span>
                <span>D</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-text-secondary">Clarity</span>
                <span>VVS1</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-text-secondary">Price</span>
                <span className="text-accent-gold font-bold">
                  ₹2,45,000
                </span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-text-secondary">Stock</span>
                <span>5</span>
              </div>

              <div className="flex justify-between pb-3">
                <span className="text-text-secondary">Status</span>

                <span className="px-4 py-1 rounded-full bg-green-500/20 text-green-400">
                  Available
                </span>

              </div>

            </div>

            <div className="mt-8">

              <h3 className="text-accent-gold mb-3 text-xl">
                Description
              </h3>

              <p className="text-text-secondary leading-8">
                Premium Round Brilliant Diamond with exceptional sparkle,
                VVS1 clarity and D color grade. Suitable for luxury rings,
                pendants and high-end jewellery collections.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}