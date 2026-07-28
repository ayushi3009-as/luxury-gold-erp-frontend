"use client";

import {
  FileText,
  CheckCircle2,
  Clock3,
  Wallet,
} from "lucide-react";

import FinanceGrid from "@/components/finance/layout/FinanceGrid";
import SummaryCard from "@/components/finance/common/SummaryCard";

export default function JournalSummary() {
  return (
    <FinanceGrid cols={4}>
      <SummaryCard
        title="Total Entries"
        value="245"
        icon={<FileText size={30} className="text-blue-400" />}
        valueColor="text-blue-400"
        borderColor="border-blue-500/20"
      />

      <SummaryCard
        title="Posted Entries"
        value="220"
        icon={<CheckCircle2 size={30} className="text-green-400" />}
        valueColor="text-green-400"
        borderColor="border-green-500/20"
      />

      <SummaryCard
        title="Pending Entries"
        value="25"
        icon={<Clock3 size={30} className="text-yellow-500" />}
        valueColor="text-yellow-500"
        borderColor="border-yellow-500/20"
      />

      <SummaryCard
        title="Total Amount"
        value="₹8.45 Cr"
        icon={<Wallet size={30} className="text-purple-400" />}
        valueColor="text-purple-400"
        borderColor="border-purple-500/20"
      />
    </FinanceGrid>
  );
}