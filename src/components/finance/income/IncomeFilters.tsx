"use client";

interface IncomeFiltersProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function IncomeFilters({
  search,
  setSearch,
}: IncomeFiltersProps) {
  return (
    <div className="mb-6 flex items-center gap-4">

      <input
        type="text"
        placeholder="Search income..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none focus:border-yellow-500"
      />

    </div>
  );
}