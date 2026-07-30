"use client";

import { useState, useEffect } from "react";
import { Activity, Loader2, RefreshCw } from "lucide-react";

export default function RepairStatus() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/repair');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const orders = data?.orders || [];
  const activeOrders = orders.filter((o: any) => o.status !== 'DELIVERED');

  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-200 to-blue-400 bg-clip-text text-transparent flex items-center gap-3">
              <Activity size={36} className="text-blue-400" />
              Repair Status & Tracking
            </h1>
            <p className="mt-2 text-text-secondary">Track and update the status of ongoing repair jobs.</p>
          </div>
          <button 
            onClick={fetchData}
            className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-all"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {activeOrders.length === 0 ? (
            <div className="p-12 text-center text-text-secondary bg-[#111111]/60 rounded-2xl border border-white/5">
              No active repairs found.
            </div>
          ) : (
            activeOrders.map((order: any) => (
              <div key={order.id} className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-blue-500/30 transition-all">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm font-bold text-accent-gold bg-accent-gold/10 px-2 py-0.5 rounded">{order.repairNumber}</span>
                    <h3 className="font-bold text-white text-lg">{order.itemName}</h3>
                  </div>
                  <p className="text-sm text-text-secondary">
                    <span className="text-white/70">Customer:</span> {order.customerName} ({order.customerPhone}) 
                  </p>
                  {order.description && (
                    <p className="text-xs text-text-secondary mt-2 p-2 bg-black/40 rounded border border-white/5">
                      {order.description}
                    </p>
                  )}
                </div>
                
                <div className="w-full md:w-auto flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Current Status</label>
                  <select 
                    defaultValue={order.status}
                    className={`rounded-xl border border-white/20 px-4 py-2 text-sm font-bold focus:outline-none appearance-none cursor-pointer ${
                      order.status === 'PENDING' ? 'bg-red-500/10 text-red-400' :
                      order.status === 'IN_PROGRESS' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-green-500/10 text-green-400'
                    }`}
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="COMPLETED">COMPLETED</option>
                  </select>
                  <p className="text-[10px] text-text-secondary text-right">Auto-saves on change</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}