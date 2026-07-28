"use client";

import {
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";

import FinanceCard from "@/components/finance/layout/FinanceCard";

export default function CashFlowWidget() {
  const income = "₹4.82 Cr";
  const expense = "₹3.15 Cr";
  const netCashFlow = "₹1.67 Cr";

  return (
    <FinanceCard>
      <h2 className="mb-6 text-2xl font-semibold text-yellow-500">
        Cash Flow Summary
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between rounded-xl bg-[#1A1A1A] p-4">
          <div className="flex items-center gap-3">
            <ArrowUpCircle
              size={28}
              className="text-green-400"
            />

            <div>
              <p className="text-sm text-gray-400">
                Total Income
              </p>

              <h3 className="text-xl font-semibold text-white">
                {income}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-[#1A1A1A] p-4">
          <div className="flex items-center gap-3">
            <ArrowDownCircle
              size={28}
              className="text-red-400"
            />

            <div>
              <p className="text-sm text-gray-400">
                Total Expense
              </p>

              <h3 className="text-xl font-semibold text-white">
                {expense}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-yellow-500/20 bg-[#111111] p-5">
          <p className="text-sm text-gray-400">
            Net Cash Flow
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-500">
            {netCashFlow}
          </h2>
        </div>

      </div>
    </FinanceCard>
  );
}