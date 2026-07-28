"use client";

interface AccountFiltersProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function AccountFilters({
  search,
  setSearch,
}: AccountFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row">

      <input
        type="text"
        placeholder="Search account..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none transition focus:border-yellow-500"
      />

      <select
        className="rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none focus:border-yellow-500"
      >
        <option>All Types</option>
        <option>Bank</option>
        <option>Cash</option>
        <option>Wallet</option>
        <option>Credit Card</option>
      </select>

      <select
        className="rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none focus:border-yellow-500"
      >
        <option>All Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

    </div>
  );
}