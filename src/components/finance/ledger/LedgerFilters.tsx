"use client";

import FormSelect from "@/components/finance/forms/FormSelect";
import SearchBar from "@/components/finance/common/SearchBar";

interface LedgerFiltersProps {
  search: string;
  onSearch: (value: string) => void;

  type: string;
  onTypeChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  onReset: () => void;
}

export default function LedgerFilters({
  search,
  onSearch,
  type,
  onTypeChange,
  status,
  onStatusChange,
  onReset,
}: LedgerFiltersProps) {
  return (
    <div className="mb-6 rounded-2xl border border-yellow-500/20 bg-[#141414] p-6">

      <div className="grid gap-4 lg:grid-cols-4">

        <SearchBar
          placeholder="Search Ledger..."
          value={search}
          onChange={onSearch}
        />

        <FormSelect
          label="Ledger Type"
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          options={[
            { label: "All Types", value: "" },
            { label: "Asset", value: "asset" },
            { label: "Liability", value: "liability" },
            { label: "Income", value: "income" },
            { label: "Expense", value: "expense" },
            { label: "Equity", value: "equity" },
          ]}
        />

        <FormSelect
          label="Status"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          options={[
            { label: "All Status", value: "" },
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />

        <div className="flex items-end">
          <button
            type="button"
            onClick={onReset}
            className="w-full rounded-xl border border-gray-600 bg-[#1A1A1A] px-5 py-3 font-medium text-white transition hover:border-yellow-500"
          >
            Reset Filters
          </button>
        </div>

      </div>

    </div>
  );
}