"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", production: 120 },
  { day: "Tue", production: 180 },
  { day: "Wed", production: 160 },
  { day: "Thu", production: 240 },
  { day: "Fri", production: 220 },
  { day: "Sat", production: 280 },
];

export default function ProductionChart() {
  return (
    <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Weekly Production
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#333" />

            <XAxis dataKey="day" stroke="#888" />

            <YAxis stroke="#888" />

            <Tooltip />

            <Bar
              dataKey="production"
              fill="#EAB308"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}