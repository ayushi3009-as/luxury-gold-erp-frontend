import Link from "next/link";
import { Plus } from "lucide-react";

import SearchBar from "../components/table/SearchBar";
import FilterBar from "../components/table/filterbar";
import DataTable from "../components/table/DataTable";

export default function WorkerAssignmentPage() {
  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Worker Assignment
          </h1>

          <p className="text-gray-400 mt-2">
            Assign manufacturing jobs to workers.
          </p>
        </div>

        <Link
          href="/manufacturing/worker-assignment/create"
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl flex items-center gap-2 font-semibold"
        >
          <Plus size={20}/>
          New Assignment
        </Link>

      </div>

      <SearchBar placeholder="Search Assignment..." />

      <FilterBar />

      <DataTable />

    </div>
  );
}