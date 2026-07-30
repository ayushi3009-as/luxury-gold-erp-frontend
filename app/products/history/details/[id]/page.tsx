"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProductHistoryDetailsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold text-accent-gold">
            Product History Details
          </h1>

          <p className="text-text-secondary mt-2">
            View complete product history
          </p>

        </div>

        <Link
          href="/products/history"
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

          <p>
            <span className="text-text-secondary">
              SKU :
            </span>{" "}
            GLD001
          </p>

          <p>
            <span className="text-text-secondary">
              Action :
            </span>{" "}
            Created
          </p>

          <p>
            <span className="text-text-secondary">
              User :
            </span>{" "}
            Admin
          </p>

          <p>
            <span className="text-text-secondary">
              Date :
            </span>{" "}
            24 July 2026
          </p>

          <div>

            <h3 className="text-xl font-semibold text-accent-gold mb-3">
              Description
            </h3>

            <p className="text-text-secondary leading-8">
              This product was created in the Luxury Gold ERP system.
              All modifications, pricing updates, inventory changes,
              and user activities are recorded here for tracking.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}