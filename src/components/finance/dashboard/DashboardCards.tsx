"use client";

import {
  Wallet,
  Landmark,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import FinanceGrid from "@/components/finance/layout/FinanceGrid";
import StatCard from "@/components/finance/common/StatCard";

export default function DashboardCards() {
  return (
    <FinanceGrid cols={4}>
      <StatCard
        title="Total Revenue"
        value="₹8.54 Cr"
        subtitle="Current Financial Year"
        icon={<TrendingUp size={28} className="text-green-400" />}
        change="+12.4%"
        trend="up"
      />

      <StatCard
        title="Total Expense"
        value="₹5.28 Cr"
        subtitle="Current Financial Year"
        icon={<TrendingDown size={28} className="text-red-400" />}
        change="-3.2%"
        trend="down"
      />

      <StatCard
        title="Bank Balance"
        value="₹2.91 Cr"
        subtitle="All Accounts"
        icon={<Landmark size={28} className="text-blue-400" />}
      />

      <StatCard
        title="Cash In Hand"
        value="₹48.5 L"
        subtitle="Available Balance"
        icon={<Wallet size={28} className="text-yellow-500" />}
      />
    </FinanceGrid>
  );
}