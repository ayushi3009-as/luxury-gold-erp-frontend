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
    <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Category */}

        <div>

          <label className="block text-text-secondary mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
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

          <label className="block text-text-secondary mb-2">
            Status
          </label>

          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full rounded-xl bg-background-primary border border-gray-700 px-4 py-3 text-text-primary focus:border-yellow-500 outline-none"
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