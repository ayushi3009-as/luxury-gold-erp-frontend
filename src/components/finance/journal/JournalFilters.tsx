"use client";

import SearchBar from "@/components/finance/common/SearchBar";
import DateInput from "@/components/finance/forms/DateInput";
import FormSelect from "@/components/finance/forms/FormSelect";

interface JournalFiltersProps {
  search: string;
  onSearch: (value: string) => void;

  date: string;
  onDateChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  onReset: () => void;
}

export default function JournalFilters({
  search,
  onSearch,
  date,
  onDateChange,
  status,
  onStatusChange,
  onReset,
}: JournalFiltersProps) {
  return (
    <div className="mb-6 rounded-2xl border border-yellow-500/20 bg-[#141414] p-6">
      <div className="grid gap-4 lg:grid-cols-4">

        <SearchBar
          placeholder="Search Voucher No..."
          value={search}
          onChange={onSearch}
        />

        <DateInput
          label="Entry Date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />

        <FormSelect
          label="Status"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          options={[
            {
              label: "All Status",
              value: "",
            },
            {
              label: "Draft",
              value: "draft",
            },
            {
              label: "Pending",
              value: "pending",
            },
            {
              label: "Posted",
              value: "posted",
            },
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