"use client";

import { useEffect, useState } from "react";
import { Loader2, TrendingUp, RefreshCw, Edit3 } from "lucide-react";

export default function GoldRatePage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  async function fetchRates() {
    try {
      const res = await fetch('/api/gold-rate');
      if (res.status === 401) { console.warn("Unauthorized fetch"); }
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setLastUpdated(new Date().toLocaleTimeString());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpdateRate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const newRates = {
      gold24k: formData.get("gold24k"),
      gold22k: formData.get("gold22k"),
      gold18k: formData.get("gold18k"),
      silver: formData.get("silver"),
    };

    try {
      const res = await fetch('/api/gold-rate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRates)
      });
      if (res.status === 401) { console.warn("Unauthorized fetch"); }
      if (res.ok) {
        setIsModalOpen(false);
        fetchRates();
        // Dispath custom event to update TopBar instantly across the app
        window.dispatchEvent(new Event('goldRateUpdated'));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  // Fallback to dummy data if not found
  const rates = [
    { metal: "24K Gold", price: data?.gold24k || 74250, unit: "10 Gram", change: "+1.24%" },
    { metal: "22K Gold", price: data?.gold22k || 68100, unit: "10 Gram", change: "+0.98%" },
    { metal: "18K Gold", price: data?.gold18k || 55680, unit: "10 Gram", change: "+0.62%" },
    { metal: "Silver", price: data?.silver || 92500, unit: "1 Kg", change: "+0.45%" },
  ];

  return (
    <div className="min-h-[80vh] bg-background-primary text-text-primary p-8 relative">
      <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>
      
      <main className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <p className="text-sm text-text-secondary uppercase tracking-widest font-semibold mb-2">
              Management
            </p>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold bg-clip-text text-transparent flex items-center gap-3">
              <TrendingUp size={36} className="text-accent-gold" />
              Live Gold Rate
            </h1>
            <p className="mt-2 text-text-secondary">
              Monitor and update live gold rates globally across the ERP.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl border border-border-theme bg-[#111111]/80 px-4 py-2 shadow-lg">
              <p className="text-[10px] text-text-secondary tracking-wider uppercase">Last Updated</p>
              <p className="text-sm font-bold text-accent-gold flex items-center gap-2">
                <RefreshCw size={12} className="animate-spin-slow" />
                {lastUpdated || "Updating..."}
              </p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
            >
              <Edit3 size={18} />
              Update Rates
            </button>
          </div>
        </div>

        {/* Rate Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rates.map((rate) => (
            <div
              key={rate.metal}
              className="rounded-2xl border border-border-theme bg-[#111111]/80 backdrop-blur-xl p-6 shadow-xl relative overflow-hidden group hover:border-accent-gold/30 transition-all"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">{rate.metal}</p>
                <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-bold text-green-400">
                  {rate.change}
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-bold text-text-primary group-hover:text-accent-gold transition-colors">
                ₹{rate.price.toLocaleString("en-IN")}
              </h2>
              <p className="mt-1 text-xs text-text-secondary font-medium">
                Per {rate.unit}
              </p>
            </div>
          ))}
        </div>

        {/* Market Overview */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-border-theme bg-[#111111]/60 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-lg font-bold text-accent-gold mb-6 uppercase tracking-wider">
              Market Overview
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-border-theme pb-4">
                <span className="text-text-secondary font-medium">Global Market Status</span>
                <span className="text-green-400 font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Market Open</span>
              </div>
              <div className="flex justify-between border-b border-border-theme pb-4">
                <span className="text-text-secondary font-medium">Today's Trend</span>
                <span className="text-green-400 font-bold">Bullish ↑</span>
              </div>
              <div className="flex justify-between border-b border-border-theme pb-4">
                <span className="text-text-secondary font-medium">Base Currency</span>
                <span className="text-text-primary font-bold">INR (₹)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary font-medium">Auto-Sync</span>
                <span className="text-accent-gold font-bold">Enabled</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* UPDATE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background-primary backdrop-blur-sm">
          <div className="bg-[#111111] border border-border-theme rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Update Market Rates</h2>
            <form onSubmit={handleUpdateRate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase mb-2">24K Gold (Per 10g)</label>
                <input required defaultValue={data?.gold24k || 74250} name="gold24k" type="number" className="w-full bg-background-primary border border-border-theme rounded-xl p-3 text-text-primary focus:border-accent-gold/50 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase mb-2">22K Gold (Per 10g)</label>
                <input required defaultValue={data?.gold22k || 68100} name="gold22k" type="number" className="w-full bg-background-primary border border-border-theme rounded-xl p-3 text-text-primary focus:border-accent-gold/50 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase mb-2">18K Gold (Per 10g)</label>
                <input required defaultValue={data?.gold18k || 55680} name="gold18k" type="number" className="w-full bg-background-primary border border-border-theme rounded-xl p-3 text-text-primary focus:border-accent-gold/50 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase mb-2">Silver (Per 1kg)</label>
                <input required defaultValue={data?.silver || 92500} name="silver" type="number" className="w-full bg-background-primary border border-border-theme rounded-xl p-3 text-text-primary focus:border-accent-gold/50 focus:outline-none" />
              </div>
              
              <div className="flex gap-4 pt-4 mt-6 border-t border-border-theme">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 rounded-xl border border-border-theme text-text-primary font-bold hover:bg-text-primary/5 transition-all">Cancel</button>
                <button disabled={isSubmitting} type="submit" className="flex-1 py-3 rounded-xl bg-accent-gold text-black font-bold hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all flex justify-center items-center">
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : "Save Rates"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
