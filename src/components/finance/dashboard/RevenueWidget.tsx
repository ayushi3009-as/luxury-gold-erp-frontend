"use client";

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
} from "lucide-react";

import FinanceCard from "@/components/finance/layout/FinanceCard";

export default function RevenueWidget() {
  const monthlyRevenue = "₹72,50,000";
  const monthlyExpense = "₹48,20,000";
  const growth = "+15.8%";

  return (
    <FinanceCard>
      <h2 className="mb-6 text-2xl font-semibold text-yellow-500">
        Monthly Revenue
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between rounded-xl bg-[#1A1A1A] p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-green-500/20 p-3">
              <DollarSign
                size={24}
                className="text-green-400"
              />
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Revenue
              </p>

              <h3 className="text-2xl font-bold text-white">
                {monthlyRevenue}
              </h3>
            </div>

          </div>

          <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
            {growth}
          </div>

        </div>

        <div className="flex items-center justify-between rounded-xl bg-[#1A1A1A] p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-red-500/20 p-3">
              <TrendingDown
                size={24}
                className="text-red-400"
              />
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Expense
              </p>

              <h3 className="text-2xl font-bold text-white">
                {monthlyExpense}
              </h3>
            </div>

          </div>

        </div>

        <div className="rounded-xl border border-yellow-500/20 bg-[#111111] p-5">

          <div className="flex items-center gap-2">

            <TrendingUp
              size={20}
              className="text-green-400"
            />

            <span className="text-green-400 font-semibold">
              Revenue Growth
            </span>

          </div>

          <h2 className="mt-3 text-3xl font-bold text-yellow-500">
            {growth}
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Compared to last month.
          </p>

        </div>

      </div>
    </FinanceCard>
  );
}