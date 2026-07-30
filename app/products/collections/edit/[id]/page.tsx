"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CollectionForm from "@/components/products/CollectionForm";

export default function EditCollectionPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Edit Collection
          </h1>

          <p className="text-text-secondary mt-2">
            Update collection information
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

      <CollectionForm buttonText="Update Collection" />

    </main>
  );
}