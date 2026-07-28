"use client";

interface ExpenseFiltersProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function ExpenseFilters({
  search,
  setSearch,
}: ExpenseFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row">

      <input
        type="text"
        placeholder="Search expense..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none transition focus:border-yellow-500"
      />

      <select
        className="rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none focus:border-yellow-500"
      >
        <option>All Categories</option>
        <option>Purchase</option>
        <option>Salary</option>
        <option>Rent</option>
        <option>Maintenance</option>
        <option>Utilities</option>
      </select>

      <select
        className="rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none focus:border-yellow-500"
      >
        <option>All Payment Methods</option>
        <option>Cash</option>
        <option>UPI</option>
        <option>Bank</option>
        <option>Card</option>
      </select>

    </div>
  );
}