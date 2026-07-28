import Link from "next/link";
import { Plus } from "lucide-react";

import SearchBar from "../components/table/SearchBar";
import FilterBar from "../components/table/filterbar";
import DataTable from "../components/table/DataTable";

export default function ProductionTrackingPage() {
  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Production Tracking
          </h1>

          <p className="text-gray-400 mt-2">
            Track production progress of assigned job cards.
          </p>
        </div>

        <Link
          href="/manufacturing/production-tracking/create"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold"
        >
          <Plus size={20} />
          New Tracking
        </Link>

      </div>

      <SearchBar placeholder="Search Production..." />

      <FilterBar />

      <DataTable />

    </div>
  );
}