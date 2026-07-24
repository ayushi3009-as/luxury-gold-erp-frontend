"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CollectionDetailsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Collection Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete collection information
          </p>

        </div>

        <Link
          href="/products/collections"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 grid lg:grid-cols-2 gap-10">

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

          <h2 className="text-3xl font-bold text-yellow-500">
            Bridal Collection
          </h2>

          <p>
            <span className="text-gray-400">Category :</span> Gold Jewellery
          </p>

          <p>
            <span className="text-gray-400">Products :</span> 120
          </p>

          <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400">
            Active
          </span>

          <div>

            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              Description
            </h3>

            <p className="text-gray-400 leading-8">
              Exclusive bridal jewellery collection featuring handcrafted
              gold, diamond, and premium wedding ornaments.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}