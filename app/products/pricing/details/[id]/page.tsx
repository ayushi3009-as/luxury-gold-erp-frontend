"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProductPricingDetailsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Product Pricing Details
          </h1>

          <p className="text-text-secondary mt-2">
            View complete pricing information
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

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-8 grid lg:grid-cols-2 gap-10">

        <div className="flex justify-center">
          <Image
            src="/gold/ring1.jpg"
            alt="Gold Ring"
            width={350}
            height={350}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="space-y-5">

          <h2 className="text-3xl font-bold text-accent-gold">
            Gold Ring
          </h2>

          <p><span className="text-text-secondary">SKU :</span> GLD001</p>

          <p><span className="text-text-secondary">Cost Price :</span> ₹65,000</p>

          <p><span className="text-text-secondary">Selling Price :</span> ₹75,000</p>

          <p><span className="text-text-secondary">Profit :</span> ₹10,000</p>

          <p><span className="text-text-secondary">GST :</span> 3%</p>

          <p><span className="text-text-secondary">Discount :</span> 10%</p>

          <div>
            <h3 className="text-xl font-semibold text-accent-gold mb-3">
              Notes
            </h3>

            <p className="text-text-secondary leading-8">
              Pricing configured for showroom sales with GST included.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}