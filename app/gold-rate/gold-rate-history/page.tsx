"use client";

import { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  CalendarDays,
  Search,
  Loader2,
} from "lucide-react";

export default function GoldRateHistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await fetch('/api/gold-rate/history');
        if (res.ok) {
          const data = await res.json();
          setHistory(data);
        }
      } catch (error) {
        console.error("Failed to fetch history:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchHistory();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-primary">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  // Calculate trends for the table
  const formattedHistory = history.map((rate, index) => {
    const prevRate = history[index + 1]; // Because it's ordered by desc
    let change = "0.0%";
    let trend = "flat";
    let changeAmt = 0;

    if (prevRate) {
      changeAmt = rate.gold24k - prevRate.gold24k;
      const percentChange = (changeAmt / prevRate.gold24k) * 100;
      change = `${percentChange > 0 ? '+' : ''}${percentChange.toFixed(2)}%`;
      trend = changeAmt > 0 ? "up" : changeAmt < 0 ? "down" : "flat";
    }

    return {
      date: new Date(rate.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      gold24k: `₹ ${rate.gold24k.toLocaleString("en-IN")}`,
      gold22k: `₹ ${rate.gold22k.toLocaleString("en-IN")}`,
      change,
      trend,
      changeAmt
    };
  });

  const currentRate = formattedHistory[0];
  let highestRate = history.length > 0 ? history[0] : null;
  history.forEach(r => {
    if (highestRate && r.gold24k > highestRate.gold24k) {
      highestRate = r;
    }
  });

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-text-secondary">Gold Rate / History</p>
            <h1 className="mt-2 text-3xl font-bold">Gold Rate History</h1>
            <p className="mt-2 text-text-secondary">View historical gold rate changes and market trends.</p>
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-[#6d5318] bg-[#17150d] px-4 py-2 text-sm text-accent-gold hover:bg-[#2a2414] transition-colors">
            <CalendarDays size={16} />
            Select Date
          </button>
        </div>

        {/* Summary Cards */}
        {currentRate && (
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
              <p className="text-sm text-text-secondary">CURRENT 24K RATE</p>
              <h2 className="mt-3 text-2xl font-bold">{currentRate.gold24k}</h2>
              <p className={`mt-2 flex items-center gap-1 text-sm ${currentRate.trend === 'up' ? 'text-green-400' : currentRate.trend === 'down' ? 'text-red-400' : 'text-text-secondary'}`}>
                {currentRate.trend === 'up' ? <TrendingUp size={15} /> : currentRate.trend === 'down' ? <TrendingDown size={15} /> : null}
                {currentRate.change} today
              </p>
            </div>

            <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
              <p className="text-sm text-text-secondary">HIGHEST RATE (LAST 30 DAYS)</p>
              <h2 className="mt-3 text-2xl font-bold text-accent-gold">
                ₹ {highestRate?.gold24k.toLocaleString("en-IN")}
              </h2>
              <p className="mt-2 text-sm text-text-secondary">
                {highestRate ? new Date(highestRate.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A'}
              </p>
            </div>

            <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
              <p className="text-sm text-text-secondary">RATE CHANGE (TODAY)</p>
              <h2 className={`mt-3 text-2xl font-bold ${currentRate.trend === 'up' ? 'text-green-400' : currentRate.trend === 'down' ? 'text-red-400' : 'text-text-secondary'}`}>
                {currentRate.changeAmt > 0 ? '+' : ''}₹ {currentRate.changeAmt.toLocaleString("en-IN")}
              </h2>
              <p className="mt-2 text-sm text-text-secondary">Compared to previous day</p>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-accent-gold">RATE HISTORY</h2>
          <div className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-secondary px-4 py-2">
            <Search size={16} className="text-text-secondary" />
            <input
              type="text"
              placeholder="Search date..."
              className="bg-transparent text-sm text-text-primary outline-none placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-hidden rounded-xl border border-border-theme bg-background-secondary">
          <table className="w-full text-left">
            <thead className="border-b border-border-theme bg-[#151611]">
              <tr>
                <th className="px-6 py-4 text-sm text-text-secondary">DATE</th>
                <th className="px-6 py-4 text-sm text-text-secondary">24K GOLD</th>
                <th className="px-6 py-4 text-sm text-text-secondary">22K GOLD</th>
                <th className="px-6 py-4 text-sm text-text-secondary">CHANGE</th>
                <th className="px-6 py-4 text-sm text-text-secondary">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {formattedHistory.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-text-secondary">
                    No history found. Try updating the live gold rate.
                  </td>
                </tr>
              ) : (
                formattedHistory.map((rate, idx) => (
                  <tr key={idx} className="border-b border-[#292519] hover:bg-background-tertiary">
                    <td className="px-6 py-5 text-sm">{rate.date}</td>
                    <td className="px-6 py-5 font-semibold">{rate.gold24k}</td>
                    <td className="px-6 py-5 font-semibold">{rate.gold22k}</td>
                    <td className={`px-6 py-5 ${rate.trend === "up" ? "text-green-400" : rate.trend === "down" ? "text-red-400" : "text-text-secondary"}`}>
                      <span className="flex items-center gap-2">
                        {rate.trend === "up" ? <TrendingUp size={16} /> : rate.trend === "down" ? <TrendingDown size={16} /> : null}
                        {rate.change}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="rounded-full border border-[#574719] bg-[#211c0d] px-3 py-1 text-xs text-accent-gold">
                        Recorded
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}