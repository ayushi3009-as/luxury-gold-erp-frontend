"use client";

import { useState, useEffect } from "react";
import { Loader2, Plus, Box, CheckCircle, Clock } from "lucide-react";

export default function PurchaseEntryPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Entry State
  const [supplierId, setSupplierId] = useState("");
  const [purchaseOrderId, setPurchaseOrderId] = useState("");
  const [weight, setWeight] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  async function fetchEntries() {
    try {
      const res = await fetch('/api/purchase/entry');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error("Failed to fetch purchase entries", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreateEntry(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/purchase/entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          supplierId,
          purchaseOrderId,
          weight: Number(weight)
        })
      });

      if (res.ok) {
        setIsModalOpen(false);
        setSupplierId("");
        setPurchaseOrderId("");
        setWeight("");
        fetchEntries(); // Refresh data
      }
    } catch (error) {
      console.error("Error creating Entry:", error);
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

  const entries = data?.entries || [];
  const suppliers = data?.suppliers || [];
  const orders = data?.orders || [];

  return (
    <div className="relative min-h-[80vh] p-6 text-text-primary">
      {/* Decorative Blur */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent">Purchase Entry (GRN)</h1>
            <p className="mt-1 text-sm text-text-secondary">Record physical receipt of goods from suppliers.</p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
          >
            <Plus size={18} />
            Receive Goods
          </button>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <StatBox label="Total Receipts" value={entries.length} icon={<Box size={20} className="text-white/60" />} />
          <StatBox label="Received Today" value={entries.filter((e:any) => new Date(e.date).toDateString() === new Date().toDateString()).length} icon={<CheckCircle size={20} className="text-green-400" />} color="text-green-400" />
          <StatBox label="Pending Quality Check" value={0} icon={<Clock size={20} className="text-yellow-400" />} color="text-yellow-400" />
        </div>

        {/* ENTRIES TABLE */}
        <div className="rounded-2xl border border-white/5 bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl">
          <h2 className="text-lg font-bold tracking-wide text-white mb-6">GOODS RECEIPT LIST</h2>
          
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-6 py-4">GRN NO</th>
                  <th className="px-6 py-4">PO NO</th>
                  <th className="px-6 py-4">SUPPLIER</th>
                  <th className="px-6 py-4">DATE</th>
                  <th className="px-6 py-4">WEIGHT</th>
                  <th className="px-6 py-4">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {entries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-text-secondary">No goods received yet.</td>
                  </tr>
                ) : (
                  entries.map((entry: any, idx: number) => (
                    <tr key={idx} className="transition-colors hover:bg-white/5">
                      <td className="px-6 py-4 font-mono font-medium text-white/80">{entry.id}</td>
                      <td className="px-6 py-4 font-mono font-medium text-white/60">{entry.poNumber}</td>
                      <td className="px-6 py-4 font-semibold text-white">{entry.supplierName}</td>
                      <td className="px-6 py-4 text-text-secondary">{new Date(entry.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4 font-bold text-accent-gold">{entry.weight}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                          entry.status === 'RECEIVED' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                          'bg-yellow-400/10 text-yellow-400 border-yellow-400/20'
                        }`}>
                          {entry.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CREATE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111] p-6 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/50 via-yellow-300 to-accent-gold/50"></div>
            
            <h2 className="text-xl font-bold text-white mb-6">Receive Goods (GRN)</h2>
            
            <form onSubmit={handleCreateEntry} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Select Supplier</label>
                <select 
                  required
                  value={supplierId}
                  onChange={(e) => setSupplierId(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                >
                  <option value="">-- Choose Supplier --</option>
                  {suppliers.map((s: any) => (
                    <option key={s.id} value={s.id}>{s.supplierName}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Select Purchase Order</label>
                <select 
                  required
                  value={purchaseOrderId}
                  onChange={(e) => setPurchaseOrderId(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                >
                  <option value="">-- Choose PO --</option>
                  {orders.map((o: any) => (
                    <option key={o.id} value={o.id}>{o.poNumber}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Total Weight Received (g)</label>
                <input 
                  type="number" 
                  step="0.01"
                  required
                  placeholder="0.00"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                />
              </div>

              <div className="mt-8 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 rounded-xl bg-accent-gold py-3 text-sm font-bold text-black hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : 'Confirm Receipt'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value, icon, color = "text-white" }: { label: string; value: number | string; icon: React.ReactNode; color?: string; }) {
  return (
    <div className="rounded-xl border border-white/5 bg-background-secondary/30 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold tracking-wider text-text-secondary">{label}</span>
        {icon}
      </div>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}