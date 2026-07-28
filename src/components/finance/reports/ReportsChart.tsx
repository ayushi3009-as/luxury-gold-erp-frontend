"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  {
    month: "Jan",
    sales: 25000,
    income: 18000,
    expense: 9000,
  },
  {
    month: "Feb",
    sales: 32000,
    income: 25000,
    expense: 12000,
  },
  {
    month: "Mar",
    sales: 28000,
    income: 21000,
    expense: 10000,
  },
  {
    month: "Apr",
    sales: 40000,
    income: 31000,
    expense: 15000,
  },
  {
    month: "May",
    sales: 45000,
    income: 35000,
    expense: 17000,
  },
  {
    month: "Jun",
    sales: 52000,
    income: 42000,
    expense: 19000,
  },
];

export default function ReportsChart() {
  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-[#151515] p-6">
      <h2 className="mb-6 text-2xl font-bold text-yellow-500">
        Financial Overview
      </h2>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#333" strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              stroke="#ccc"
            />

            <YAxis stroke="#ccc" />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="sales"
              fill="#EAB308"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="income"
              fill="#22C55E"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="expense"
              fill="#EF4444"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}