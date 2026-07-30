"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BrandForm from "@/components/products/BrandForm";

export default function EditBrandPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Edit Brand
          </h1>

          <p className="text-text-secondary mt-2">
            Update brand information
          </p>
        </div>

        <Link
          href="/products/brands"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <BrandForm buttonText="Update Brand" />

    </main>
  );
}