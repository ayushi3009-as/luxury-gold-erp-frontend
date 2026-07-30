"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GoldDetailsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Gold Product Details
          </h1>

          <p className="text-text-secondary mt-2">
            View complete product information
          </p>

        </div>

        <Link
          href="/products/gold"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-8 grid lg:grid-cols-2 gap-10">

        <div>

          <Image
            src="/gold/ring.jpg"
            alt="Gold Product"
            width={600}
            height={600}
            className="rounded-xl object-cover w-full"
          />

        </div>

        <div className="space-y-5">

          <h2 className="text-3xl font-bold text-accent-gold">
            Gold Ring
          </h2>

          <p><span className="text-text-secondary">SKU :</span> GLD001</p>

          <p><span className="text-text-secondary">Purity :</span> 22K</p>

          <p><span className="text-text-secondary">Weight :</span> 8 gm</p>

          <p><span className="text-text-secondary">Making Charges :</span> ₹5,000</p>

          <p><span className="text-text-secondary">Selling Price :</span> ₹65,000</p>

          <p><span className="text-text-secondary">Stock :</span> 12</p>

          <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400">
            Active
          </span>

          <div>

            <h3 className="text-xl font-semibold text-accent-gold mb-3">
              Description
            </h3>

            <p className="text-text-secondary leading-8">
              Premium handcrafted 22K gold ring with an elegant finish,
              designed for daily wear and special occasions.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}