import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ProductForm from "@/components/products/ProductForm";

export default function AddProductPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] p-8 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Add New Product
          </h1>

          <p className="text-gray-400 mt-2">
            Create a new jewellery product
          </p>
        </div>

        <Link
          href="/products"
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      {/* Form */}
      <ProductForm />
    </main>
  );
}