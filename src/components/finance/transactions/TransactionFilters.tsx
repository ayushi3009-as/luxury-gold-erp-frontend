"use client";

interface TransactionFiltersProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function TransactionFilters({
  search,
  setSearch,
}: TransactionFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row">

      <input
        type="text"
        placeholder="Search transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none transition focus:border-yellow-500"
      />

      <select
        className="rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none focus:border-yellow-500"
      >
        <option>All Types</option>
        <option>Credit</option>
        <option>Debit</option>
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

      <select
        className="rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none focus:border-yellow-500"
      >
        <option>All Status</option>
        <option>Completed</option>
        <option>Pending</option>
        <option>Cancelled</option>
      </select>

    </div>
  );
}