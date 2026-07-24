"use client";

interface ProductFilterProps {
  category: string;
  status: string;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export default function ProductFilter({
  category,
  status,
  onCategoryChange,
  onStatusChange,
}: ProductFilterProps) {
  return (
    <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Category */}

        <div>

          <label className="block text-gray-300 mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full rounded-xl bg-[#0B0B0B] border border-gray-700 px-4 py-3 text-white focus:border-yellow-500 outline-none"
          >
            <option value="">All Categories</option>
            <option value="Gold">Gold Jewellery</option>
            <option value="Diamond">Diamond Jewellery</option>
            <option value="Silver">Silver Jewellery</option>
            <option value="Platinum">Platinum Jewellery</option>
          </select>

        </div>

        {/* Status */}

        <div>

          <label className="block text-gray-300 mb-2">
            Status
          </label>

          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full rounded-xl bg-[#0B0B0B] border border-gray-700 px-4 py-3 text-white focus:border-yellow-500 outline-none"
          >
            <option value="">All Status</option>
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>

      </div>

    </div>
  );
}