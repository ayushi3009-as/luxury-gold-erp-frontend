"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import SearchBar from "@/components/finance/common/SearchBar";
import ExportButtons from "@/components/finance/common/ExportButtons";

interface TableToolbarProps {
  search: string;
  onSearch: (value: string) => void;

  placeholder?: string;

  addHref?: string;
  addLabel?: string;

  showAdd?: boolean;
  showExport?: boolean;

  onExcel?: () => void;
  onPdf?: () => void;
}

export default function TableToolbar({
  search,
  onSearch,

  placeholder = "Search...",

  addHref = "#",
  addLabel = "Add New",

  showAdd = true,
  showExport = true,

  onExcel,
  onPdf,
}: TableToolbarProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="w-full lg:max-w-md">
        <SearchBar
          placeholder={placeholder}
          value={search}
          onChange={onSearch}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">

        {showExport && (
          <ExportButtons
            onExcel={onExcel}
            onPdf={onPdf}
          />
        )}

        {showAdd && (
          <Link
            href={addHref}
            className="flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            <Plus size={18} />
            {addLabel}
          </Link>
        )}

      </div>
    </div>
  );
}