"use client";

import { useEffect, useState } from "react";


const initialRates = [
  {
    metal: "24K Gold",
    price: 7425,
    unit: "10 Gram",
    change: "+1.24%",
  },
  {
    metal: "22K Gold",
    price: 6810,
    unit: "10 Gram",
    change: "+0.98%",
  },
  {
    metal: "18K Gold",
    price: 5568,
    unit: "10 Gram",
    change: "+0.62%",
  },
  {
    metal: "Silver",
    price: 92500,
    unit: "1 Kg",
    change: "+0.45%",
  },
];

export default function GoldRatePage() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());

    const interval = setInterval(() => {
      setLastUpdated(new Date().toLocaleTimeString());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">
              Gold Rate Management / Live Rate
            </p>

            <h1 className="mt-2 text-3xl font-bold text-accent-gold">
              Live Gold Rate
            </h1>

            <p className="mt-2 text-text-secondary">
              Monitor live gold rates and precious metal prices.
            </p>
          </div>

          <div className="rounded-lg border border-border-theme bg-background-secondary px-4 py-3">
            <p className="text-xs text-text-secondary">LAST UPDATED</p>
            <p className="mt-1 text-sm text-accent-gold">
              {lastUpdated || "Updating..."}
            </p>
          </div>
        </div>

        {/* Rate Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {initialRates.map((rate) => (
            <div
              key={rate.metal}
              className="rounded-xl border border-border-theme bg-[#11130f] p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-secondary">{rate.metal}</p>

                <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400">
                  {rate.change}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-accent-gold">
                ₹{rate.price.toLocaleString("en-IN")}
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Per {rate.unit}
              </p>
            </div>
          ))}
        </div>

        {/* Market Overview */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="rounded-xl border border-border-theme bg-[#11130f] p-6">
            <h2 className="text-lg font-semibold text-accent-gold">
              Market Overview
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between border-b border-[#28261b] pb-3">
                <span className="text-text-secondary">Market Status</span>
                <span className="text-green-400">● Market Open</span>
              </div>

              <div className="flex justify-between border-b border-[#28261b] pb-3">
                <span className="text-text-secondary">Today's Trend</span>
                <span className="text-green-400">Bullish ↑</span>
              </div>

              <div className="flex justify-between border-b border-[#28261b] pb-3">
                <span className="text-text-secondary">Currency</span>
                <span className="text-text-primary">INR (₹)</span>
              </div>

              <div className="flex justify-between">
                <span className="text-text-secondary">Data Refresh</span>
                <span className="text-accent-gold">Every 30 Seconds</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border-theme bg-[#11130f] p-6">
            <h2 className="text-lg font-semibold text-accent-gold">
              Today's Summary
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#19180f] p-4">
                <p className="text-xs text-text-secondary">Highest Rate</p>
                <p className="mt-2 text-xl font-bold text-text-primary">
                  ₹7,425
                </p>
              </div>

              <div className="rounded-lg bg-[#19180f] p-4">
                <p className="text-xs text-text-secondary">Average Rate</p>
                <p className="mt-2 text-xl font-bold text-text-primary">
                  ₹7,245
                </p>
              </div>

              <div className="rounded-lg bg-[#19180f] p-4">
                <p className="text-xs text-text-secondary">Today's Change</p>
                <p className="mt-2 text-xl font-bold text-green-400">
                  +1.24%
                </p>
              </div>

              <div className="rounded-lg bg-[#19180f] p-4">
                <p className="text-xs text-text-secondary">Data Source</p>
                <p className="mt-2 text-xl font-bold text-accent-gold">
                  Live
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}