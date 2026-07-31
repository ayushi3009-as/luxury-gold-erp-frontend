"use client";

import { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Clock,
  BarChart2,
  Loader2,
} from "lucide-react";
import Link from "next/link";

export default function RateComparisonPage() {
  const [history, setHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  async function fetchRates() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/gold-rate/history');
      if (res.ok) {
        const data = await res.json();
        setHistory(data);
        setLastUpdated(new Date().toLocaleTimeString());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRates();
  }, []);

  if (isLoading && history.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-primary">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const currentRate = history[0] || { gold24k: 74250, gold22k: 68100, silver: 92500, platinum: 45000, createdAt: new Date() };

  // Generate comparison data
  const comparisonData = [
    { name: "24K Gold", price: currentRate.gold24k, unit: "10 Grams" },
    { name: "22K Gold", price: currentRate.gold22k, unit: "10 Grams" },
    { name: "18K Gold", price: currentRate.gold18k, unit: "10 Grams" },
    { name: "Silver", price: currentRate.silver / 100, unit: "10 Grams" },
    { name: "Platinum", price: currentRate.platinum, unit: "10 Grams" },
  ];

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="p-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-text-secondary">Gold Rate / Rate Comparison</p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Rate Comparison</h1>
              <p className="mt-2 text-text-secondary">Compare current market rates across all precious metals.</p>
            </div>
            <button onClick={fetchRates} className="flex items-center gap-2 rounded-lg border border-[#6d5318] bg-[#17150d] px-4 py-2 text-sm text-accent-gold hover:bg-[#2a2414] transition-colors">
              <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
              Update Rates
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-hidden rounded-xl border border-border-theme bg-background-secondary">
          <div className="p-6 border-b border-border-theme flex items-center justify-between">
            <h2 className="text-lg font-semibold text-accent-gold flex items-center gap-2">
              <BarChart2 size={20} /> Today's Live Comparison
            </h2>
            <span className="text-xs text-text-secondary">Last Updated: {lastUpdated}</span>
          </div>
          <table className="w-full text-left">
            <thead className="bg-[#151611]">
              <tr>
                <th className="px-6 py-4 text-sm text-text-secondary">METAL</th>
                <th className="px-6 py-4 text-sm text-text-secondary">PURITY</th>
                <th className="px-6 py-4 text-sm text-text-secondary">UNIT</th>
                <th className="px-6 py-4 text-sm text-text-secondary">CURRENT RATE</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, idx) => (
                <tr key={idx} className="border-t border-[#292519] hover:bg-background-tertiary">
                  <td className="px-6 py-5 font-bold text-white">{item.name}</td>
                  <td className="px-6 py-5 text-text-secondary">{item.name.includes("Gold") ? item.name.split(" ")[0] : "999"}</td>
                  <td className="px-6 py-5 text-sm text-text-secondary">{item.unit}</td>
                  <td className="px-6 py-5 font-bold text-accent-gold">₹ {item.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Market Summary */}
        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-6">
            <h2 className="text-lg font-semibold text-accent-gold">QUICK ACTIONS</h2>
            <div className="mt-5 grid gap-3">
              <Link href="/gold-rate" className="rounded-lg border border-[#4a3a18] bg-[#151611] p-3 text-left text-sm hover:bg-[#211c0e] transition-colors block text-white text-decoration-none">
                Update Live Rates
              </Link>
              <Link href="/gold-rate/gold-rate-history" className="rounded-lg border border-[#4a3a18] bg-[#151611] p-3 text-left text-sm hover:bg-[#211c0e] transition-colors block text-white text-decoration-none">
                View Detailed History
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}