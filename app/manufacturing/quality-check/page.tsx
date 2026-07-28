import Link from "next/link";
import { Plus } from "lucide-react";

import SearchBar from "../components/table/SearchBar";
import FilterBar from "../components/table/filterbar";
import DataTable from "../components/table/DataTable";

export default function QualityCheckPage() {
  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Quality Check
          </h1>

          <p className="text-gray-400 mt-2">
            Inspect completed jewellery before delivery.
          </p>
        </div>

        <Link
          href="/manufacturing/quality-check/create"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold"
        >
          <Plus size={20}/>
          New QC
        </Link>

      </div>

      <SearchBar placeholder="Search QC..." />

      <FilterBar />

      <DataTable />

    </div>
  );
}