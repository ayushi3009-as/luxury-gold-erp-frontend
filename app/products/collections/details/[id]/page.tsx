"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CollectionDetailsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Collection Details
          </h1>

          <p className="text-text-secondary mt-2">
            View complete collection information
          </p>

        </div>

        <Link
          href="/products/collections"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-8 grid lg:grid-cols-2 gap-10">

        <div>

          <Image
            src="/collections/bridal.jpg"
            alt="Collection"
            width={600}
            height={500}
            className="rounded-xl object-cover w-full"
          />

        </div>

        <div className="space-y-5">

          <h2 className="text-3xl font-bold text-accent-gold">
            Bridal Collection
          </h2>

          <p>
            <span className="text-text-secondary">Category :</span> Gold Jewellery
          </p>

          <p>
            <span className="text-text-secondary">Products :</span> 120
          </p>

          <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400">
            Active
          </span>

          <div>

            <h3 className="text-xl font-semibold text-accent-gold mb-3">
              Description
            </h3>

            <p className="text-text-secondary leading-8">
              Exclusive bridal jewellery collection featuring handcrafted
              gold, diamond, and premium wedding ornaments.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}