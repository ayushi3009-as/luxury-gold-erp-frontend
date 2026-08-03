"use client";

import { useSearchParams } from "next/navigation";

import QualityCheckHeader from "@/components/manufacturing-manager/quality-check/QualityCheckHeader";
import QualityCheckTabs from "@/components/manufacturing-manager/quality-check/QualityCheckTabs";
import PendingQC from "@/components/manufacturing-manager/quality-check/PendingQC";
import PassedQC from "@/components/manufacturing-manager/quality-check/PassedQC";
import FailedQC from "@/components/manufacturing-manager/quality-check/FailedQC";
import ReworkQC from "@/components/manufacturing-manager/quality-check/ReworkQC";
import QCForm from "@/components/manufacturing-manager/quality-check/QCForm";
import QCDetails from "@/components/manufacturing-manager/quality-check/QCDetails";

export default function QualityCheckPage() {
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "pending";
  const id = searchParams.get("id") || undefined;

  return (
    <div className="space-y-6">

      <QualityCheckHeader />

      <QualityCheckTabs />

      {tab === "pending" && <PendingQC />}

      {tab === "passed" && <PassedQC />}

      {tab === "failed" && <FailedQC />}

      {tab === "rework" && <ReworkQC />}

      {tab === "add" && <QCForm />}

      {tab === "edit" && <QCForm id={id} />}

      {tab === "details" && <QCDetails id={id} />}

    </div>
  );
}