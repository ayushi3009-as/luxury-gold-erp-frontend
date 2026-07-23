"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";

export default function ProductDetailsPage() {
  const product = {
    image: "/images/login-bg.jpg",
    name: "22K Gold Necklace",
    sku: "GLD-001",
    category: "Necklace",
    purity: "22K",
    weight: "18 gm",
    price: "₹85,000",
    stock: "12",
    status: "In Stock",
    description:
      "Beautiful handcrafted 22K gold necklace with premium finish, suitable for weddings and special occasions.",
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] p-8 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
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
          className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left */}
        <div className="bg-[#141414] rounded-2xl p-6 border border-yellow-500/20">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-xl w-full h-[450px] object-cover"
          />
        </div>

        {/* Right */}
        <div className="bg-[#141414] rounded-2xl p-8 border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">
            {product.name}
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">SKU</span>
              <span>{product.sku}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Category</span>
              <span>{product.category}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Gold Purity</span>
              <span>{product.purity}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Weight</span>
              <span>{product.weight}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Selling Price</span>
              <span className="text-yellow-500 font-bold">
                {product.price}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Stock</span>
              <span>{product.stock}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Status</span>
              <span className="text-green-400">{product.status}</span>
            </div>

            <div>
              <h3 className="text-gray-400 mb-2">Description</h3>
              <p className="text-gray-300 leading-7">
                {product.description}
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href="/products/edit/1"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition"
            >
              <Pencil size={18} />
              Edit Product
            </Link>

            <button className="flex items-center gap-2 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-6 py-3 rounded-xl transition">
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}