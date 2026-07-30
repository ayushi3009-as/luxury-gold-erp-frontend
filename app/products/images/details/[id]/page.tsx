"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

export default function ProductImageDetailsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Product Image Details
          </h1>

          <p className="text-text-secondary mt-2">
            View uploaded product image information
          </p>

        </div>

        <Link
          href="/products/images"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold px-5 py-3 rounded-xl hover:bg-accent-gold hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Main Card */}

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-8 grid lg:grid-cols-2 gap-10">

        {/* Image */}

        <div className="relative">

          <Image
            src="/gold/ring1.jpg"
            alt="Gold Ring"
            width={600}
            height={600}
            className="rounded-xl object-cover w-full h-[500px]"
          />

          <div className="absolute top-4 right-4 bg-accent-gold text-black rounded-full p-3">

            <Star size={20} fill="black" />

          </div>

        </div>

        {/* Details */}

        <div className="space-y-5">

          <h2 className="text-3xl font-bold text-accent-gold">
            Gold Ring
          </h2>

          <p>
            <span className="text-text-secondary">
              Product ID :
            </span>{" "}
            GLD001
          </p>

          <p>
            <span className="text-text-secondary">
              Category :
            </span>{" "}
            Gold Jewellery
          </p>

          <p>
            <span className="text-text-secondary">
              Total Images :
            </span>{" "}
            5
          </p>

          <p>
            <span className="text-text-secondary">
              Primary Image :
            </span>{" "}
            <span className="text-green-400">
              Yes
            </span>
          </p>

          <p>
            <span className="text-text-secondary">
              Uploaded By :
            </span>{" "}
            Admin
          </p>

          <p>
            <span className="text-text-secondary">
              Upload Date :
            </span>{" "}
            24 July 2026
          </p>

          <div>

            <h3 className="text-xl font-semibold text-accent-gold mb-3">
              Description
            </h3>

            <p className="text-text-secondary leading-8">
              High-quality product image used for product listing,
              billing, inventory, catalogue, website, and customer
              display. This image is marked as the primary image for
              this jewellery product.
            </p>

          </div>

          {/* Gallery */}

          <div>

            <h3 className="text-xl font-semibold text-accent-gold mb-4">
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