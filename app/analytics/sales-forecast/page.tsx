"use client";

import {
  Brain,
  TrendingUp,
  CalendarDays,
  Target,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import AnalyticsSidebar from "../AnalyticsSidebar";

const forecastData = [
  { month: "Aug", actual: 108, forecast: 108 },
  { month: "Sep", actual: 0, forecast: 118 },
  { month: "Oct", actual: 0, forecast: 126 },
  { month: "Nov", actual: 0, forecast: 138 },
  { month: "Dec", actual: 0, forecast: 151 },
  { month: "Jan", actual: 0, forecast: 164 },
];

export default function SalesForecastPage() {
  const maxValue = 180;

  return (
    <div className="min-h-screen bg-[#090a09] text-white">
      <AnalyticsSidebar />

      <main className="ml-64 min-h-screen p-8">

        {/* HEADER */}
        <div className="flex items-end justify-between">

          <div>
            <p className="text-xs text-gray-500">
              Analytics / Sales Forecast
            </p>

            <div className="mt-2 flex items-center gap-3">
              <div className="rounded-xl bg-[#211c0d] p-3">
                <Brain
                  size={25}
                  className="text-[#e4b52d]"
                />
              </div>

              <h1 className="text-3xl font-bold text-[#f0c43c]">
                Sales Forecast
              </h1>
            </div>

            <p className="mt-3 text-sm text-gray-400">
              Predict future sales performance using historical business data.
            </p>
          </div>

          <select className="rounded-lg border border-[#40351b] bg-[#11130f] px-4 py-2 text-xs text-gray-300 outline-none">
            <option>Next 6 Months</option>
            <option>Next 12 Months</option>
          </select>

        </div>

        {/* FORECAST SUMMARY */}
        <div className="mt-8 grid grid-cols-3 gap-5">

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Forecasted Revenue
              </p>

              <TrendingUp
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              $697K
            </h2>

            <p className="mt-2 flex items-center gap-1 text-xs text-green-400">
              <ArrowUpRight size={14} />
              +21.4% expected growth
            </p>

          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Forecast Accuracy
              </p>

              <Target
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              91.8%
            </h2>

            <p className="mt-2 text-xs text-gray-500">
              Based on historical sales data
            </p>

          </div>

          <div className="rounded-xl border border-[#40351b] bg-[#11130f] p-5">

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Highest Forecast Month
              </p>

              <CalendarDays
                size={19}
                className="text-[#e4b52d]"
              />
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              January
            </h2>

            <p className="mt-2 text-xs text-green-400">
              Expected revenue: $164K
            </p>

          </div>

        </div>

        {/* FORECAST CHART */}
        <div className="mt-6 rounded-xl border border-[#40351b] bg-[#11130f] p-6">

          <div className="flex items-start justify-between">

            <div>
              <h2 className="text-lg font-semibold text-[#f0c43c]">
                Sales Forecast
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Historical performance and predicted future sales
              </p>
            </div>

            <div className="flex gap-5 text-xs text-gray-400">

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#e4b52d]" />
                Actual
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#4d4427]" />
                Forecast
              </span>

            </div>

          </div>

          <div className="mt-8 flex h-72 items-end gap-5">

            {forecastData.map((item) => {

              const actualHeight =
                item.actual > 0
                  ? (item.actual / maxValue) * 100
                  : 0;

              const forecastHeight =
                (item.forecast / maxValue) * 100;

              return (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >

                  <div className="mb-3 text-[10px] text-gray-500">
                    ${item.forecast}K
                  </div>

                  <div className="flex h-full w-full items-end gap-1">

                    {item.actual > 0 && (
                      <div
                        className="flex-1 rounded-t-lg bg-[#e4b52d]"
                        style={{
                          height: `${actualHeight}%`,
                        }}
                      />
                    )}

                    <div
                      className="flex-1 rounded-t-lg bg-[#4d4427]"
                      style={{
                        height: `${forecastHeight}%`,
                      }}
                    />

                  </div>

                  <span className="mt-3 text-xs text-gray-500">
                    {item.month}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

        {/* AI FORECAST INSIGHT */}
        <div className="mt-6 rounded-xl border border-[#6c5420] bg-[#18150c] p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-[#b98c20] p-3">
              <Sparkles
                size={22}
                className="text-black"
              />
            </div>

            <div>

              <h2 className="font-semibold text-[#f0c43c]">
                AI Forecast Insight
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                Based on current sales trends, seasonal demand and historical
                performance, your business is expected to maintain positive
                growth over the next six months.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
                <TrendingUp size={16} />
                Sales momentum is expected to remain strong.
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}