"use client";

import { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Clock,
  Diamond,
  Loader2,
} from "lucide-react";
import Link from "next/link";

export default function PlatinumRatePage() {
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

  const currentRate = history[0] || { platinum: 45000, createdAt: new Date() };
  const prevRate = history[1];

  const pricePer10g = currentRate.platinum;
  const pricePerGram = pricePer10g / 10;

  let changePercent = "0.0%";
  let trend = "flat";
  let changeAmt = 0;
  let prevPricePerGram = pricePerGram;

  if (prevRate) {
    const prev10g = prevRate.platinum;
    prevPricePerGram = prev10g / 10;
    changeAmt = pricePerGram - prevPricePerGram;
    const percent = (changeAmt / prevPricePerGram) * 100;
    changePercent = `${percent > 0 ? '+' : ''}${percent.toFixed(2)}%`;
    trend = changeAmt > 0 ? "up" : changeAmt < 0 ? "down" : "flat";
  }

  const highest = Math.max(pricePerGram, prevPricePerGram);
  const lowest = Math.min(pricePerGram, prevPricePerGram);

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="p-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-text-secondary">Gold Rate / Platinum Rate</p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Platinum Rate</h1>
              <p className="mt-2 text-text-secondary">Monitor current platinum market rates and price movement.</p>
            </div>
            <button onClick={fetchRates} className="flex items-center gap-2 rounded-lg border border-[#6d5318] bg-[#17150d] px-4 py-2 text-sm text-accent-gold hover:bg-[#2a2414] transition-colors">
              <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
              Update Rate
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {/* Per Gram */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <Diamond size={26} className="text-accent-gold" />
              <span className={`flex items-center gap-1 text-sm ${trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-text-secondary'}`}>
                {trend === 'up' ? <TrendingUp size={15} /> : trend === 'down' ? <TrendingDown size={15} /> : null}
                {changePercent}
              </span>
            </div>
            <p className="mt-5 text-sm text-text-secondary">PLATINUM RATE / GRAM</p>
            <h2 className="mt-2 text-2xl font-bold">₹ {pricePerGram.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</h2>
          </div>

          {/* 10 Gram */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-sm text-text-secondary">PLATINUM RATE / 10 GRAM</p>
            <h2 className="mt-5 text-2xl font-bold">₹ {pricePer10g.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</h2>
            <p className="mt-2 text-xs text-text-secondary">Current market rate</p>
          </div>

          {/* 1 KG */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-sm text-text-secondary">PLATINUM RATE / KG</p>
            <h2 className="mt-5 text-2xl font-bold">₹ {(pricePer10g * 100).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</h2>
            <p className="mt-2 text-xs text-text-secondary">Based on current market price</p>
          </div>

          {/* Last Updated */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <Clock size={26} className="text-accent-gold" />
            <p className="mt-5 text-sm text-text-secondary">LAST UPDATED</p>
            <h2 className="mt-2 text-2xl font-bold">{lastUpdated || "N/A"}</h2>
            <p className="mt-2 text-xs text-green-400">Live ERP data</p>
          </div>
        </div>

        {/* Rate Details */}
        <div className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-accent-gold">PLATINUM RATE DETAILS</h2>
            <span className="rounded-full border border-green-900 bg-green-950 px-3 py-1 text-xs text-green-400">Market Open</span>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-[#302a1b] bg-[#151611] p-4">
              <p className="text-xs text-text-secondary">PURITY</p>
              <p className="mt-2 text-lg font-semibold">950 Platinum</p>
            </div>
            <div className="rounded-lg border border-[#302a1b] bg-[#151611] p-4">
              <p className="text-xs text-text-secondary">TODAY'S CHANGE</p>
              <p className={`mt-2 flex items-center gap-2 text-lg font-semibold ${trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-text-secondary'}`}>
                {trend === 'up' ? <TrendingUp size={18} /> : trend === 'down' ? <TrendingDown size={18} /> : null}
                {changeAmt > 0 ? '+' : ''}₹ {changeAmt.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="rounded-lg border border-[#302a1b] bg-[#151611] p-4">
              <p className="text-xs text-text-secondary">PREVIOUS RATE</p>
              <p className="mt-2 text-lg font-semibold">₹ {prevPricePerGram.toLocaleString("en-IN", { minimumFractionDigits: 2 })} / gram</p>
            </div>
          </div>
        </div>

        {/* Market Summary */}
        <div className="mt-6 grid gap-5 xl:grid-cols-2">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-6">
            <h2 className="text-lg font-semibold text-accent-gold">MARKET SUMMARY</h2>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#292519] pb-3">
                <span className="text-text-secondary">Opening Rate</span>
                <span>₹ {prevPricePerGram.toLocaleString("en-IN", { minimumFractionDigits: 2 })} / gram</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#292519] pb-3">
                <span className="text-text-secondary">Highest Today</span>
                <span className="text-green-400">₹ {highest.toLocaleString("en-IN", { minimumFractionDigits: 2 })} / gram</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Lowest Today</span>
                <span className="text-red-400">₹ {lowest.toLocaleString("en-IN", { minimumFractionDigits: 2 })} / gram</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-6">
            <h2 className="text-lg font-semibold text-accent-gold">QUICK ACTIONS</h2>
            <div className="mt-5 grid gap-3">
              <Link href="/gold-rate" className="rounded-lg border border-[#4a3a18] bg-[#151611] p-3 text-left text-sm hover:bg-[#211c0e] transition-colors block text-white text-decoration-none">
                Update Platinum Rate
              </Link>
              <Link href="/gold-rate/gold-rate-history" className="rounded-lg border border-[#4a3a18] bg-[#151611] p-3 text-left text-sm hover:bg-[#211c0e] transition-colors block text-white text-decoration-none">
                View Rate History
              </Link>
              <Link href="/gold-rate/rate-comparison" className="rounded-lg border border-[#4a3a18] bg-[#151611] p-3 text-left text-sm hover:bg-[#211c0e] transition-colors block text-white text-decoration-none">
                Compare With Gold
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}