"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GoldForm from "@/components/products/GoldForm";

export default function AddGoldPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Add Gold Product
          </h1>

          <p className="text-gray-400 mt-2">
            Create a new gold product
          </p>
        </div>

        <Link
          href="/products/gold"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <GoldForm buttonText="Save Product" />

    </main>
  );
}