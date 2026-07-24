"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProductPricingDetailsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Product Pricing Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete pricing information
          </p>
        </div>

        <Link
          href="/products/pricing"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 grid lg:grid-cols-2 gap-10">

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

          <h2 className="text-3xl font-bold text-yellow-500">
            Gold Ring
          </h2>

          <p><span className="text-gray-400">SKU :</span> GLD001</p>

          <p><span className="text-gray-400">Cost Price :</span> ₹65,000</p>

          <p><span className="text-gray-400">Selling Price :</span> ₹75,000</p>

          <p><span className="text-gray-400">Profit :</span> ₹10,000</p>

          <p><span className="text-gray-400">GST :</span> 3%</p>

          <p><span className="text-gray-400">Discount :</span> 10%</p>

          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              Notes
            </h3>

            <p className="text-gray-400 leading-8">
              Pricing configured for showroom sales with GST included.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}