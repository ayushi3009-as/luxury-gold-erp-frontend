"use client";

import { useSearchParams } from "next/navigation";

import WorkersHeader from "@/components/manufacturing-manager/workers/WorkersHeader";
import WorkersTabs from "@/components/manufacturing-manager/workers/WorkersTabs";
import WorkerList from "@/components/manufacturing-manager/workers/WorkerList";
import AssignWorkers from "@/components/manufacturing-manager/workers/AssignWorkers";
import WorkerPerformance from "@/components/manufacturing-manager/workers/WorkerPerformance";
import WorkerGoldSummary from "@/components/manufacturing-manager/workers/WorkerGoldSummary";
import WorkerForm from "@/components/manufacturing-manager/workers/WorkerForm";
import WorkerDetails from "@/components/manufacturing-manager/workers/WorkerDetails";

export default function WorkersPage() {
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "list";

  const id = searchParams.get("id") || "";

  return (
    <div className="space-y-6">
      <WorkersHeader />

      <WorkersTabs />

      {tab === "list" && <WorkerList />}

      {tab === "assign" && <AssignWorkers />}

      {tab === "performance" && <WorkerPerformance />}

      {tab === "gold-summary" && <WorkerGoldSummary />}

      {tab === "add" && <WorkerForm />}

      {tab === "details" && <WorkerDetails id={id} />}

      {tab === "edit" && <WorkerForm id={id} />}
    </div>
  );
}