"use client";

interface InventoryFormProps {
  isEdit?: boolean;
}

export default function InventoryForm({
  isEdit = false,
}: InventoryFormProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product */}

        <div>

          <label className="block text-yellow-500 mb-2">
            Product Name
          </label>

          <input
            type="text"
            defaultValue={isEdit ? "22K Gold Ring" : ""}
            placeholder="Enter Product Name"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />

        </div>

        {/* Category */}

        <div>

          <label className="block text-yellow-500 mb-2">
            Category
          </label>

          <select
            defaultValue={isEdit ? "Ring" : ""}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          >
            <option value="">Select Category</option>
            <option>Ring</option>
            <option>Chain</option>
            <option>Necklace</option>
            <option>Bracelet</option>
            <option>Bangle</option>
          </select>

        </div>

        {/* SKU */}

        <div>

          <label className="block text-yellow-500 mb-2">
            SKU Code
          </label>

          <input
            type="text"
            defaultValue={isEdit ? "SKU1001" : ""}
            placeholder="SKU Code"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />

        </div>

        {/* Quantity */}

        <div>

          <label className="block text-yellow-500 mb-2">
            Quantity
          </label>

          <input
            type="number"
            defaultValue={isEdit ? "25" : ""}
            placeholder="Quantity"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />

        </div>

        {/* Purchase Price */}

        <div>

          <label className="block text-yellow-500 mb-2">
            Purchase Price
          </label>

          <input
            type="number"
            defaultValue={isEdit ? "25000" : ""}
            placeholder="Purchase Price"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />

        </div>

        {/* Selling Price */}

        <div>

          <label className="block text-yellow-500 mb-2">
            Selling Price
          </label>

          <input
            type="number"
            defaultValue={isEdit ? "30000" : ""}
            placeholder="Selling Price"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />

        </div>

        {/* Weight */}

        <div>

          <label className="block text-yellow-500 mb-2">
            Weight (gm)
          </label>

          <input
            type="number"
            defaultValue={isEdit ? "15.5" : ""}
            placeholder="Weight"
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          />

        </div>

        {/* Status */}

        <div>

          <label className="block text-yellow-500 mb-2">
            Stock Status
          </label>

          <select
            defaultValue={isEdit ? "In Stock" : ""}
            className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
          >
            <option value="">Select Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>

        </div>

      </div>

      {/* Description */}

      <div className="mt-6">

        <label className="block text-yellow-500 mb-2">
          Description
        </label>

        <textarea
          rows={5}
          defaultValue={
            isEdit
              ? "22K Gold Ring available in stock."
              : ""
          }
          placeholder="Description"
          className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3 text-white"
        />

      </div>

      {/* Button */}

      <div className="mt-8">

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition">

          {isEdit ? "Update Inventory" : "Save Inventory"}

        </button>

      </div>

    </div>
  );
}