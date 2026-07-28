"use client";

import {
  DollarSign,
  Wallet,
  CreditCard,
  FileBarChart2,
  ArrowLeftRight,
} from "lucide-react";

import FinanceModuleCard from "@/components/finance/dashboard/FinanceModuleCard";

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] p-8 text-white">
      <h1 className="mb-2 text-4xl font-bold text-yellow-500">
        Finance Module
      </h1>

      <p className="mb-10 text-gray-400">
        Manage your jewellery business finances from one place.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

        <FinanceModuleCard
          title="Income"
          description="Manage all income entries and customer payments."
          href="/finance/income"
          icon={DollarSign}
        />

        <FinanceModuleCard
          title="Expenses"
          description="Track business expenses and payments."
          href="/finance/expenses"
          icon={Wallet}
        />

        <FinanceModuleCard
          title="Transactions"
          description="View all financial transactions."
          href="/finance/transactions"
          icon={ArrowLeftRight}
        />

        <FinanceModuleCard
          title="Accounts"
          description="Manage bank accounts and cash accounts."
          href="/finance/accounts"
          icon={CreditCard}
        />

        <FinanceModuleCard
          title="Reports"
          description="Sales, Profit & Loss, Expense Reports."
          href="/finance/reports"
          icon={FileBarChart2}
        />

      </div>
    </div>
  );
}