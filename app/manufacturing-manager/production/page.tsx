"use client";

import { useSearchParams } from "next/navigation";

import ProductionHeader from "@/components/manufacturing-manager/production/ProductionHeader";
import ProductionTabs from "@/components/manufacturing-manager/production/ProductionTabs";
import ProductionOrders from "@/components/manufacturing-manager/production/ProductionOrders";
import WorkInProgress from "@/components/manufacturing-manager/production/WorkInProgress";
import CompletedProduction from "@/components/manufacturing-manager/production/CompletedProduction";
import ProductionSummary from "@/components/manufacturing-manager/production/ProductionSummary";
import ProductionForm from "@/components/manufacturing-manager/production/ProductionForm";
import ProductionDetails from "@/components/manufacturing-manager/production/ProductionDetails";

export default function ProductionPage() {
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "orders";
  const id = searchParams.get("id") || "";

  return (
    <div className="space-y-6">
      <ProductionHeader />

      <ProductionTabs />

      {tab === "orders" && <ProductionOrders />}

      {tab === "wip" && <WorkInProgress />}

      {tab === "completed" && <CompletedProduction />}

      {tab === "summary" && <ProductionSummary />}

      {tab === "add" && <ProductionForm />}

      {tab === "details" && <ProductionDetails />}

      {tab === "edit" && <ProductionForm id={id} />}
    </div>
  );
}