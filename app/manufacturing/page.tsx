import StatCard from "./components/dashboard/StatsCards";
import SearchBar from "./components/table/SearchBar";
import FilterBar from "./components/table/filterbar";
import DataTable from "./components/table/DataTable";
import ProductionChart from "./components/dashboard/ProductionChart";
import RecentJobs from "./components/dashboard/RecentJobs";
import WorkerPerformance from "./components/dashboard/WorkerPerformance";
import MaterialAlerts from "./components/dashboard/MaterialAlerts";

import {
  ClipboardList,
  Users,
  Factory,
  Gem,
} from "lucide-react";

export default function ManufacturingPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-white">
        Manufacturing Dashboard
      </h1>

      <p className="text-gray-400 mt-2">
        Welcome to Jewellery Manufacturing ERP
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <StatCard
          title="Job Cards"
          value="125"
          icon={ClipboardList}
          color="bg-blue-600"
        />

        <StatCard
          title="Workers"
          value="42"
          icon={Users}
          color="bg-green-600"
        />

        <StatCard
          title="Production"
          value="84%"
          icon={Factory}
          color="bg-orange-500"
        />

        <StatCard
          title="Finished Goods"
          value="890"
          icon={Gem}
          color="bg-yellow-500"
        />

      </div>
      <div className="mt-10 space-y-5">

  <SearchBar placeholder="Search Job Card..." />

  <FilterBar />
  <div className="mt-10">
  <h2 className="text-2xl font-semibold text-white mb-4">
    Recent Job Cards
  </h2>

  <DataTable />
  <div className="mt-10">
  <ProductionChart />
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

  <div className="xl:col-span-2">
    <ProductionChart />
  </div>

  <div>
    <RecentJobs />
    <div className="mt-6">
  <WorkerPerformance />
  <div className="mt-6">
  <MaterialAlerts />
</div>
</div>
  </div>

</div>
</div>
</div>

</div>

    </div>
  );
}