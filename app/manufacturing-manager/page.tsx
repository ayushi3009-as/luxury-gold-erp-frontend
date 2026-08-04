"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/manufacturing-manager/dashboard/DashboardHeader";
import DashboardCards from "@/components/manufacturing-manager/dashboard/DashboardCards";
import ProductionOverview from "@/components/manufacturing-manager/dashboard/ProductionOverview";
import WorkerSummary from "@/components/manufacturing-manager/dashboard/WorkerSummary";
import QualitySummary from "@/components/manufacturing-manager/dashboard/QualitySummary";
import RecentJobCards from "@/components/manufacturing-manager/dashboard/RecentJobCards";

export default function ManufacturingDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/manufacturing/dashboard");
        const json = await res.json();
        if (json.success) {
          setData(json.data);
        }
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6 text-text-secondary">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardCards cardsData={data?.cards} />
      
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ProductionOverview stagesData={data?.productionStages} />
        <WorkerSummary workersData={data?.topWorkers} />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <QualitySummary qualityStats={data?.qualityStats} />
        <RecentJobCards recentJobs={data?.recentJobCards} />
      </div>
    </div>
  );
}