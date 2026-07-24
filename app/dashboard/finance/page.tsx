"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  CreditCard,
  IndianRupee,
  PieChart,
  TrendingUp,
  Wallet,
} from "lucide-react";

const monthlyData = [
  { month: "Jan", value: 45 },
  { month: "Feb", value: 60 },
  { month: "Mar", value: 52 },
  { month: "Apr", value: 72 },
  { month: "May", value: 65 },
  { month: "Jun", value: 88 },
  { month: "Jul", value: 76 },
  { month: "Aug", value: 94 },
];

export default function FinanceDashboard() {
  return (
    <div className="min-h-screen bg-[#090a09] p-5 text-white">

      {/* HEADER */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Dashboard / Finance
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Finance Dashboard
        </h1>

        <p className="mt-1 text-gray-400">
          Monitor revenue, expenses, profit and financial performance.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <FinanceCard
          title="TOTAL REVENUE"
          value="₹ 12,85,250"
          change="18.2%"
          positive
          icon={<IndianRupee size={22} />}
        />

        <FinanceCard
          title="TOTAL EXPENSES"
          value="₹ 4,25,680"
          change="6.4%"
          positive={false}
          icon={<CreditCard size={22} />}
        />

        <FinanceCard
          title="NET PROFIT"
          value="₹ 8,59,570"
          change="22.8%"
          positive
          icon={<TrendingUp size={22} />}
        />

        <FinanceCard
          title="CASH BALANCE"
          value="₹ 18,45,200"
          change="12.5%"
          positive
          icon={<Wallet size={22} />}
        />

      </div>

      {/* REVENUE + PROFIT */}
      <div className="mt-5 grid gap-5 xl:grid-cols-3">

        {/* REVENUE CHART */}
        <div className="rounded-xl border border-[#40351a] bg-[#101210] p-5 xl:col-span-2">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-[#e5b72e]">
                REVENUE & PROFIT OVERVIEW
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Monthly financial performance
              </p>
            </div>

            <span className="flex items-center gap-1 text-xs text-green-400">
              <TrendingUp size={14} />
              22.8% Growth
            </span>
          </div>

          <div className="mt-8 flex h-64 items-end gap-4 border-b border-l border-[#302b1d] px-5">

            {monthlyData.map((item) => (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div
                  className="w-full max-w-[42px] rounded-t-md bg-[#d9a928]"
                  style={{ height: `${item.value}%` }}
                />

                <span className="text-xs text-gray-500">
                  {item.month}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* PROFIT MARGIN */}
        <div className="rounded-xl border border-[#40351a] bg-[#101210] p-5">

          <h2 className="font-semibold text-[#e5b72e]">
            PROFIT MARGIN
          </h2>

          <div className="mt-8 flex justify-center">
            <div className="flex h-44 w-44 items-center justify-center rounded-full border-[22px] border-[#d9a928]">

              <div className="text-center">
                <p className="text-3xl font-bold">
                  66.9%
                </p>

                <p className="text-xs text-gray-500">
                  Net Profit
                </p>
              </div>

            </div>
          </div>

          <div className="mt-6 flex justify-between text-sm">

            <div>
              <p className="text-gray-500">
                Revenue
              </p>

              <p className="mt-1 font-semibold">
                ₹ 12.85L
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-500">
                Profit
              </p>

              <p className="mt-1 font-semibold text-[#e5b72e]">
                ₹ 8.59L
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* EXPENSES + ACCOUNTS */}
      <div className="mt-5 grid gap-5 xl:grid-cols-2">

        {/* EXPENSE BREAKDOWN */}
        <div className="rounded-xl border border-[#40351a] bg-[#101210] p-5">

          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-[#e5b72e]">
              EXPENSE BREAKDOWN
            </h2>

            <PieChart
              size={20}
              className="text-[#d9a928]"
            />
          </div>

          <div className="mt-6 space-y-5">

            <ExpenseRow
              label="Purchase & Inventory"
              value="₹ 2,10,000"
              percentage="49%"
            />

            <ExpenseRow
              label="Employee Salary"
              value="₹ 85,000"
              percentage="20%"
            />

            <ExpenseRow
              label="Operations"
              value="₹ 64,000"
              percentage="15%"
            />

            <ExpenseRow
              label="Other Expenses"
              value="₹ 66,680"
              percentage="16%"
            />

          </div>

        </div>

        {/* FINANCIAL ACCOUNTS */}
        <div className="rounded-xl border border-[#40351a] bg-[#101210] p-5">

          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-[#e5b72e]">
              FINANCIAL ACCOUNTS
            </h2>

            <Banknote
              size={20}
              className="text-[#d9a928]"
            />
          </div>

          <div className="mt-5 space-y-4">

            {[
              ["Cash Account", "₹ 5,85,200"],
              ["HDFC Bank", "₹ 8,20,000"],
              ["ICICI Bank", "₹ 4,40,000"],
              ["Petty Cash", "₹ 25,000"],
            ].map(([name, value]) => (
              <div
                key={name}
                className="flex items-center justify-between border-b border-[#29261c] pb-3"
              >
                <span className="text-sm text-gray-300">
                  {name}
                </span>

                <span className="font-semibold text-[#e5b72e]">
                  {value}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* RECENT FINANCIAL TRANSACTIONS */}
      <div className="mt-5 rounded-xl border border-[#40351a] bg-[#101210] p-5">

        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-[#e5b72e]">
            RECENT FINANCIAL TRANSACTIONS
          </h2>

          <span className="text-xs text-[#d9a928]">
            View All →
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-4">

          {[
            ["TXN-1001", "Sales Revenue", "₹ 85,000", true],
            ["TXN-1002", "Purchase Payment", "₹ 42,000", false],
            ["TXN-1003", "Customer Payment", "₹ 1,20,000", true],
            ["TXN-1004", "Employee Salary", "₹ 85,000", false],
          ].map((transaction) => (

            <div
              key={String(transaction[0])}
              className="rounded-lg border border-[#302b1d] bg-[#151610] p-4"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs text-gray-500">
                  {transaction[0]}
                </span>

                {transaction[3] ? (
                  <ArrowUpRight
                    size={16}
                    className="text-green-400"
                  />
                ) : (
                  <ArrowDownRight
                    size={16}
                    className="text-red-400"
                  />
                )}

              </div>

              <p className="mt-3 text-sm">
                {transaction[1]}
              </p>

              <p
                className={`mt-2 font-semibold ${
                  transaction[3]
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {transaction[3] ? "+" : "-"}
                {transaction[2]}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

function FinanceCard({
  title,
  value,
  change,
  positive,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#40351a] bg-[#101210] p-5">

      <div className="flex items-center justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#66521d] bg-[#211c0f] text-[#e6b92e]">
          {icon}
        </div>

        <span
          className={`flex items-center gap-1 text-xs ${
            positive
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {positive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}

          {change}
        </span>

      </div>

      <p className="mt-5 text-xs text-gray-500">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-semibold">
        {value}
      </h3>

      <p className="mt-2 text-xs text-gray-500">
        Compared to last month
      </p>

    </div>
  );
}

function ExpenseRow({
  label,
  value,
  percentage,
}: {
  label: string;
  value: string;
  percentage: string;
}) {
  return (
    <div>

      <div className="flex justify-between text-sm">

        <span className="text-gray-300">
          {label}
        </span>

        <span className="text-[#e5b72e]">
          {percentage}
        </span>

      </div>

      <div className="mt-2 h-2 rounded-full bg-[#29271d]">

        <div
          className="h-2 rounded-full bg-[#d9a928]"
          style={{
            width: percentage,
          }}
        />

      </div>

      <p className="mt-1 text-xs text-gray-500">
        {value}
      </p>

    </div>
  );
}