import Link from "next/link";
import { Plus } from "lucide-react";
import SearchBar from "../components/table/SearchBar";
import FilterBar from "../components/table/filterbar";
import DataTable from "../components/table/DataTable";

export default function JobCardPage() {
  return (
    <div>

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Job Cards
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all manufacturing job cards
          </p>
        </div>

        <Link
          href="/manufacturing/job-card/create"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold"
        >
          <Plus size={20} />
          Create Job Card
        </Link>

      </div>

      <div className="mt-8">
        <SearchBar placeholder="Search Job Card..." />
      </div>

      <div className="mt-5">
        <FilterBar />
      </div>

      <div className="mt-8">
        <DataTable />
      </div>

    </div>
  );
}