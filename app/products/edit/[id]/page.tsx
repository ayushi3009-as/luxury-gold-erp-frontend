"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function EditProductPage() {
  const [product, setProduct] = useState({
    name: "22K Gold Ring",
    sku: "GLD-001",
    category: "Ring",
    purity: "22K",
    weight: "15",
    price: "65000",
    stock: "20",
    description:
      "Premium 22K handcrafted gold ring with elegant finish.",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] p-8 text-white">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Edit Product
          </h1>

          <p className="text-gray-400 mt-2">
            Update jewellery product details
          </p>
        </div>

        <Link
          href="/products"
          className="flex items-center gap-2 border border-yellow-500 px-5 py-3 rounded-xl text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <div className="bg-[#141414] rounded-2xl p-8 border border-yellow-500/20">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-gray-300">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Product Code
            </label>

            <input
              type="text"
              name="sku"
              value={product.sku}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Category
            </label>

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
            >
              <option>Ring</option>
              <option>Necklace</option>
              <option>Bracelet</option>
              <option>Chain</option>
              <option>Earrings</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Gold Purity
            </label>

            <select
              name="purity"
              value={product.purity}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
            >
              <option>18K</option>
              <option>22K</option>
              <option>24K</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Weight (gm)
            </label>

            <input
              type="number"
              name="weight"
              value={product.weight}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Selling Price
            </label>

            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Stock Quantity
            </label>

            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Product Image
            </label>

            <input
              type="file"
              className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-300">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
            />
          </div>

          <div className="md:col-span-2 flex gap-4">

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold"
            >
              Update Product
            </button>

            <Link
              href="/products"
              className="border border-gray-700 px-8 py-3 rounded-xl hover:bg-[#222]"
            >
              Cancel
            </Link>

          </div>

        </form>

      </div>

    </main>
  );
}