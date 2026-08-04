import DashboardHeader from "@/components/manufacturing-manager/dashboard/DashboardHeader";
import DashboardCards from "@/components/manufacturing-manager/dashboard/DashboardCards";
import ProductionOverview from "@/components/manufacturing-manager/dashboard/ProductionOverview";
import WorkerSummary from "@/components/manufacturing-manager/dashboard/WorkerSummary";
import QualitySummary from "@/components/manufacturing-manager/dashboard/QualitySummary";
import RecentJobCards from "@/components/manufacturing-manager/dashboard/RecentJobCards";

export default function ManufacturingDashboardPage() {
  return (
    <div className="space-y-6">

      <DashboardHeader />

      <DashboardCards />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <ProductionOverview />

        <WorkerSummary />

      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <QualitySummary />

        <RecentJobCards />

      </div>

    </div>
  );
}