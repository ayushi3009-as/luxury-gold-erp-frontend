"use client";

export default function ProductForm() {
  return (
    <div className="bg-[#141414] rounded-2xl p-8 border border-yellow-500/20">

      <h2 className="text-3xl font-bold text-yellow-500 mb-8">
        Add New Product
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product Name */}

        <div>
          <label className="block text-gray-300 mb-2">
            Product Name
          </label>

          <input
            type="text"
            placeholder="22K Gold Ring"
            className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white focus:border-yellow-500 outline-none"
          />
        </div>

        {/* SKU */}

        <div>
          <label className="block text-gray-300 mb-2">
            Product Code (SKU)
          </label>

          <input
            type="text"
            placeholder="GLD-001"
            className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white focus:border-yellow-500 outline-none"
          />
        </div>

        {/* Category */}

        <div>
          <label className="block text-gray-300 mb-2">
            Category
          </label>

          <select className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white">
            <option>Ring</option>
            <option>Necklace</option>
            <option>Bracelet</option>
            <option>Chain</option>
            <option>Earrings</option>
          </select>
        </div>

        {/* Gold Purity */}

        <div>
          <label className="block text-gray-300 mb-2">
            Gold Purity
          </label>

          <select className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white">
            <option>18K</option>
            <option>22K</option>
            <option>24K</option>
          </select>
        </div>

        {/* Weight */}

        <div>
          <label className="block text-gray-300 mb-2">
            Weight (gm)
          </label>

          <input
            type="number"
            placeholder="12"
            className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
          />
        </div>

        {/* Price */}

        <div>
          <label className="block text-gray-300 mb-2">
            Selling Price
          </label>

          <input
            type="number"
            placeholder="45000"
            className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
          />
        </div>

        {/* Stock */}

        <div>
          <label className="block text-gray-300 mb-2">
            Stock Quantity
          </label>

          <input
            type="number"
            placeholder="20"
            className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
          />
        </div>

        {/* Image */}

        <div>
          <label className="block text-gray-300 mb-2">
            Product Image
          </label>

          <input
            type="file"
            className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
          />
        </div>

        {/* Description */}

        <div className="md:col-span-2">
          <label className="block text-gray-300 mb-2">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Write product description..."
            className="w-full rounded-xl bg-[#1B1B1B] border border-gray-700 px-4 py-3 text-white"
          />
        </div>

        {/* Buttons */}

        <div className="md:col-span-2 flex gap-4">

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold transition"
          >
            Save Product
          </button>

          <button
            type="button"
            className="border border-gray-700 px-8 py-3 rounded-xl text-white hover:bg-[#222]"
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}