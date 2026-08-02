"use client";

import { useState, useEffect } from "react";
import { Loader2, Plus, FileText, CheckCircle, XCircle, Clock } from "lucide-react";

export default function PurchaseOrderPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New PO State
  const [supplierId, setSupplierId] = useState("");
  const [itemName, setItemName] = useState("");
  const [weight, setWeight] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const res = await fetch('/api/purchase/orders');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error("Failed to fetch purchase orders", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreatePO(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/purchase/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          supplierId,
          items: [{
            itemName,
            weight: Number(weight),
            goldRate: 7620, // Dummy rate
            makingCharge: 500, // Dummy charge
          }]
        })
      });

      if (res.ok) {
        setIsModalOpen(false);
        setSupplierId("");
        setItemName("");
        setWeight("");
        fetchOrders(); // Refresh data
      }
    } catch (error) {
      console.error("Error creating PO:", error);
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

  const m = data?.metrics || { totalPO: 0, pendingApproval: 0, approvedPO: 0, completedPO: 0, cancelledPO: 0 };
  const orders = data?.orders || [];
  const suppliers = data?.suppliers || [];

  return (
    <div className="relative min-h-[80vh] p-6 text-text-primary">
      {/* Decorative Blur */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent">Purchase Orders</h1>
            <p className="mt-1 text-sm text-text-secondary">Manage supplier purchase orders and approvals.</p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
          >
            <Plus size={18} />
            Create Purchase Order
          </button>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-5 mb-8">
          <StatBox label="Total PO" value={m.totalPO} icon={<FileText size={20} className="text-text-primary/60" />} />
          <StatBox label="Pending" value={m.pendingApproval} icon={<Clock size={20} className="text-yellow-400" />} color="text-yellow-400" />
          <StatBox label="Approved" value={m.approvedPO} icon={<CheckCircle size={20} className="text-blue-400" />} color="text-blue-400" />
          <StatBox label="Completed" value={m.completedPO} icon={<CheckCircle size={20} className="text-green-400" />} color="text-green-400" />
          <StatBox label="Cancelled" value={m.cancelledPO} icon={<XCircle size={20} className="text-red-400" />} color="text-red-400" />
        </div>

        {/* ORDERS TABLE */}
        <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl">
          <h2 className="text-lg font-bold tracking-wide text-text-primary mb-6">PURCHASE ORDER LIST</h2>
          
          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-6 py-4">PO NO</th>
                  <th className="px-6 py-4">SUPPLIER</th>
                  <th className="px-6 py-4">DATE</th>
                  <th className="px-6 py-4">AMOUNT</th>
                  <th className="px-6 py-4">STATUS</th>
                  <th className="px-6 py-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-text-secondary">No purchase orders found.</td>
                  </tr>
                ) : (
                  orders.map((order: any, idx: number) => (
                    <tr key={idx} className="transition-colors hover:bg-text-primary/5">
                      <td className="px-6 py-4 font-mono font-medium text-text-primary/80">{order.id}</td>
                      <td className="px-6 py-4 font-semibold text-text-primary">{order.supplierName}</td>
                      <td className="px-6 py-4 text-text-secondary">{new Date(order.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4 font-bold text-accent-gold">{order.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                          order.status === 'APPROVED' ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' :
                          order.status === 'COMPLETED' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                          order.status === 'PENDING' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                          order.status === 'CANCELLED' ? 'bg-red-400/10 text-red-400 border-red-400/20' :
                          'bg-text-primary/10 text-text-primary/70 border-border-theme'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-xs font-semibold text-text-secondary hover:text-accent-gold transition-colors mr-3">View</button>
                        <button className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors">Edit</button>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-border-theme bg-[#111] p-6 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/50 via-yellow-300 to-accent-gold/50"></div>
            
            <h2 className="text-xl font-bold text-text-primary mb-6">Create Purchase Order</h2>
            
            <form onSubmit={handleCreatePO} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Select Supplier</label>
                <select 
                  required
                  value={supplierId}
                  onChange={(e) => setSupplierId(e.target.value)}
                  className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                >
                  <option value="">-- Choose Supplier --</option>
                  {suppliers.map((s: any) => (
                    <option key={s.id} value={s.id}>{s.supplierName}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Item Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Gold Bangles 22k"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Est. Weight (g)</label>
                <input 
                  type="number" 
                  step="0.01"
                  required
                  placeholder="0.00"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                />
              </div>

              <div className="mt-8 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-xl border border-border-theme bg-text-primary/5 py-3 text-sm font-semibold text-text-primary hover:bg-text-primary/10 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 rounded-xl bg-accent-gold py-3 text-sm font-bold text-black hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Creating...' : 'Create PO'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value, icon, color = "text-text-primary" }: { label: string; value: number; icon: React.ReactNode; color?: string; }) {
  return (
    <div className="rounded-xl border border-border-theme bg-background-secondary/30 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold tracking-wider text-text-secondary">{label}</span>
        {icon}
      </div>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}