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
    <div className="flex flex-col md:flex-row gap-4">

      {/* Category */}

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="
          rounded-xl
          border
          border-yellow-500/30
          bg-[#141414]
          px-4
          py-3
          text-white
          outline-none
          focus:border-yellow-500
          focus:ring-2
          focus:ring-yellow-500/20
        "
      >
        <option value="">All Categories</option>
        <option value="Ring">Ring</option>
        <option value="Necklace">Necklace</option>
        <option value="Bracelet">Bracelet</option>
        <option value="Chain">Chain</option>
        <option value="Earrings">Earrings</option>
      </select>

      {/* Status */}

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="
          rounded-xl
          border
          border-yellow-500/30
          bg-[#141414]
          px-4
          py-3
          text-white
          outline-none
          focus:border-yellow-500
          focus:ring-2
          focus:ring-yellow-500/20
        "
      >
        <option value="">All Status</option>
        <option value="In Stock">In Stock</option>
        <option value="Low Stock">Low Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>

    </div>
  );
}