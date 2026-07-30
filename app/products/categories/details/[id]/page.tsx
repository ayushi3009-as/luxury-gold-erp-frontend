"use client";

import Link from "next/link";
import { ArrowLeft, FolderOpen } from "lucide-react";

export default function CategoryDetailsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Category Details
          </h1>

          <p className="text-text-secondary mt-2">
            View category information
          </p>
        </div>

        <Link
          href="/products/categories"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Card */}

      <div className="max-w-4xl mx-auto bg-background-secondary border border-border-theme rounded-2xl p-10">

        <div className="flex items-center gap-4 mb-8">

          <div className="w-20 h-20 rounded-full bg-accent-gold/10 flex items-center justify-center">
            <FolderOpen size={40} className="text-accent-gold" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Gold Jewellery
            </h2>

            <p className="text-text-secondary">
              Category Information
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h3 className="text-accent-gold mb-2">
              Category Name
            </h3>

            <p className="text-lg">
              Gold Jewellery
            </p>

          </div>

          <div>

            <h3 className="text-accent-gold mb-2">
              Category Code
            </h3>

            <p className="text-lg">
              CAT001
            </p>

          </div>

          <div>

            <h3 className="text-accent-gold mb-2">
              Total Products
            </h3>

            <p className="text-lg">
              120
            </p>

          </div>

          <div>

            <h3 className="text-accent-gold mb-2">
              Status
            </h3>

            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">
              Active
            </span>

          </div>

        </div>

        <div className="mt-10">

          <h3 className="text-accent-gold mb-3">
            Description
          </h3>

          <p className="text-text-secondary leading-8">
            This category contains all premium gold jewellery products,
            including rings, necklaces, bangles, bracelets, earrings,
            pendants, and other ornaments available in the Luxury Gold ERP
            system.
          </p>

        </div>

      </div>

    </main>
  );
}