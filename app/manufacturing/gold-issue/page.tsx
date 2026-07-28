import Link from "next/link";
import { Plus } from "lucide-react";

import SearchBar from "../components/table/SearchBar";
import FilterBar from "../components/table/filterbar";
import DataTable from "../components/table/DataTable";

export default function GoldIssuePage() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Gold Issue
          </h1>

          <p className="text-gray-400 mt-2">
            Issue gold to workers for manufacturing.
          </p>
        </div>

        <Link
          href="/manufacturing/gold-issue/create"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold"
        >
          <Plus size={20} />
          New Gold Issue
        </Link>

      </div>

      {/* Search */}

      <SearchBar placeholder="Search Gold Issue..." />

      {/* Filters */}

      <FilterBar />

      {/* Table */}

      <DataTable />

    </div>
  );
}