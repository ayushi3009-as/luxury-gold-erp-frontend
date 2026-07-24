"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ProductDetailsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Product Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete product information
          </p>

        </div>

        <Link
          href="/products"
          className="flex items-center gap-2 border border-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 grid lg:grid-cols-2 gap-10">

        <div>

          <Image
            src="/products/ring.jpg"
            alt="Product"
            width={500}
            height={500}
            className="rounded-xl object-cover w-full"
          />

        </div>

        <div className="space-y-5">

          <h2 className="text-3xl font-bold text-yellow-500">
            Diamond Ring
          </h2>

          <p><span className="text-gray-400">SKU :</span> PRD001</p>

          <p><span className="text-gray-400">Category :</span> Diamond</p>

          <p><span className="text-gray-400">Brand :</span> Luxury Gold</p>

          <p><span className="text-gray-400">Collection :</span> Wedding</p>

          <p><span className="text-gray-400">Gold Purity :</span> 22K</p>

          <p><span className="text-gray-400">Weight :</span> 12 gm</p>

          <p><span className="text-gray-400">Price :</span> ₹85,000</p>

          <p><span className="text-gray-400">Stock :</span> 12</p>

          <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400">
            Available
          </span>

          <div>

            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              Description
            </h3>

            <p className="text-gray-400 leading-8">
              Premium handcrafted diamond jewellery made with
              22K gold and certified VVS quality diamonds.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}