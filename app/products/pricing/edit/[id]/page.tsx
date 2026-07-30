"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import ProductPricingForm from "@/components/products/ProductPricingForm";

export default function EditProductPricingPage() {
  const params = useParams();

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Edit Product Pricing
          </h1>

          <p className="text-text-secondary mt-2">
            Editing Product ID: {params.id}
          </p>
        </div>

        <Link
          href="/products/pricing"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <ProductPricingForm buttonText="Update Pricing" />

    </main>
  );
}