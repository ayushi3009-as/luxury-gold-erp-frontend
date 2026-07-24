"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

export default function ProductImageDetailsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold text-yellow-500">
            Product Image Details
          </h1>

          <p className="text-gray-400 mt-2">
            View uploaded product image information
          </p>

        </div>

        <Link
          href="/products/images"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Main Card */}

      <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8 grid lg:grid-cols-2 gap-10">

        {/* Image */}

        <div className="relative">

          <Image
            src="/gold/ring1.jpg"
            alt="Gold Ring"
            width={600}
            height={600}
            className="rounded-xl object-cover w-full h-[500px]"
          />

          <div className="absolute top-4 right-4 bg-yellow-500 text-black rounded-full p-3">

            <Star size={20} fill="black" />

          </div>

        </div>

        {/* Details */}

        <div className="space-y-5">

          <h2 className="text-3xl font-bold text-yellow-500">
            Gold Ring
          </h2>

          <p>
            <span className="text-gray-400">
              Product ID :
            </span>{" "}
            GLD001
          </p>

          <p>
            <span className="text-gray-400">
              Category :
            </span>{" "}
            Gold Jewellery
          </p>

          <p>
            <span className="text-gray-400">
              Total Images :
            </span>{" "}
            5
          </p>

          <p>
            <span className="text-gray-400">
              Primary Image :
            </span>{" "}
            <span className="text-green-400">
              Yes
            </span>
          </p>

          <p>
            <span className="text-gray-400">
              Uploaded By :
            </span>{" "}
            Admin
          </p>

          <p>
            <span className="text-gray-400">
              Upload Date :
            </span>{" "}
            24 July 2026
          </p>

          <div>

            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              Description
            </h3>

            <p className="text-gray-400 leading-8">
              High-quality product image used for product listing,
              billing, inventory, catalogue, website, and customer
              display. This image is marked as the primary image for
              this jewellery product.
            </p>

          </div>

          {/* Gallery */}

          <div>

            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Gallery
            </h3>

            <div className="grid grid-cols-4 gap-4">

              <Image
                src="/gold/ring1.jpg"
                alt=""
                width={100}
                height={100}
                className="rounded-lg object-cover h-24 w-full"
              />

              <Image
                src="/gold/chain1.jpg"
                alt=""
                width={100}
                height={100}
                className="rounded-lg object-cover h-24 w-full"
              />

              <Image
                src="/collections/traditional.jpg"
                alt=""
                width={100}
                height={100}
                className="rounded-lg object-cover h-24 w-full"
              />

              <Image
                src="/gold/bangel1.jpg"
                alt=""
                width={100}
                height={100}
                className="rounded-lg object-cover h-24 w-full"
              />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}