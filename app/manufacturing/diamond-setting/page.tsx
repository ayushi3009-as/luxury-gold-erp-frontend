import Link from "next/link";
import { Plus } from "lucide-react";

import SearchBar from "../components/table/SearchBar";
import FilterBar from "../components/table/filterbar";
import DataTable from "../components/table/DataTable";

export default function DiamondSettingPage() {
  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Diamond Setting
          </h1>

          <p className="text-gray-400 mt-2">
            Manage diamond setting process.
          </p>
        </div>

        <Link
          href="/manufacturing/diamond-setting/create"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold"
        >
          <Plus size={20}/>
          New Setting
        </Link>

      </div>

      <SearchBar placeholder="Search Diamond Setting..." />

      <FilterBar />

      <DataTable />

    </div>
  );
}