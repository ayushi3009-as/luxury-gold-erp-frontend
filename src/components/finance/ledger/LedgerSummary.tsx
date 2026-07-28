"use client";

import {
  BookOpen,
  CheckCircle2,
  Landmark,
  Scale,
} from "lucide-react";

import FinanceGrid from "@/components/finance/layout/FinanceGrid";
import SummaryCard from "@/components/finance/common/SummaryCard";

export default function LedgerSummary() {
  return (
    <FinanceGrid cols={4}>
      <SummaryCard
        title="Total Ledgers"
        value="128"
        icon={<BookOpen size={30} className="text-blue-400" />}
        valueColor="text-blue-400"
        borderColor="border-blue-500/20"
      />

      <SummaryCard
        title="Active Ledgers"
        value="118"
        icon={<CheckCircle2 size={30} className="text-green-400" />}
        valueColor="text-green-400"
        borderColor="border-green-500/20"
      />

      <SummaryCard
        title="Total Assets"
        value="₹12.45 Cr"
        icon={<Landmark size={30} className="text-yellow-500" />}
        valueColor="text-yellow-500"
        borderColor="border-yellow-500/20"
      />

      <SummaryCard
        title="Total Liabilities"
        value="₹3.82 Cr"
        icon={<Scale size={30} className="text-red-400" />}
        valueColor="text-red-400"
        borderColor="border-red-500/20"
      />
    </FinanceGrid>
  );
}