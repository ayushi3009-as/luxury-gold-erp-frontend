"use client";

import { useState, useEffect } from "react";
import { Loader2, Plus, FileText, CheckCircle, XCircle, Clock } from "lucide-react";

export default function PurchaseOrderPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New PO State
  const [supplierName, setSupplierName] = useState("");
  const [itemName, setItemName] = useState("");
  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const res = await fetch('/api/purchase/orders?t=' + Date.now(), { cache: 'no-store' });
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
      const isEditing = !!editingId;
      const url = isEditing ? `/api/purchase/orders/${editingId}` : '/api/purchase/orders';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          supplierName,
          status,
          amount,
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
        setSupplierName("");
        setItemName("");
        setWeight("");
        setAmount("");
        setStatus("PENDING");
        setEditingId(null);
        fetchOrders(); // Refresh data
      }
    } catch (error) {
      console.error("Error saving PO:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this purchase order?")) return;
    try {
      const res = await fetch(`/api/purchase/orders/${id}`, { method: 'DELETE' });
      if (res.ok) fetchOrders();
    } catch (error) {
      console.error("Error deleting PO:", error);
    }
  }

  function handleEditClick(order: any) {
    setEditingId(order.id);
    setSupplierName(order.supplierName);
    // Since our table only shows total amount, we can extract the number roughly for the state
    setAmount(order.amount.replace(/[^0-9.]/g, ''));
    setStatus(order.status);
    setItemName("Updated Item"); // Dummy default or you could fetch full item details
    setWeight("10"); // Dummy default
    setIsModalOpen(true);
  }

  function openCreateModal() {
    setEditingId(null);
    setSupplierName("");
    setItemName("");
    setWeight("");
    setAmount("");
    setStatus("PENDING");
    setIsModalOpen(true);
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
            <h1 className="text-3xl font-bold text-accent-gold">Purchase Orders</h1>
            <p className="mt-1 text-sm text-text-secondary">Manage supplier purchase orders and approvals.</p>
          </div>

          <button 
            onClick={openCreateModal}
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
        <div className="rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-lg">
          <h2 className="text-lg font-bold tracking-wide text-text-primary mb-6">PURCHASE ORDER LIST</h2>
          
          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-secondary">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-theme bg-transparent text-xs font-semibold tracking-wider text-text-secondary">
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
                    <tr key={idx} className="transition-colors hover:bg-transparent">
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
                        <button onClick={() => handleDelete(order.id)} className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors mr-3">Delete</button>
                        <button onClick={() => handleEditClick(order)} className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors">Edit</button>
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
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background-primary/80 backdrop-blur-md p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border-theme bg-background-secondary/90 p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/50 via-yellow-300 to-accent-gold/50"></div>
            
            <h2 className="text-2xl font-serif text-text-primary mb-6">{editingId ? 'Update Purchase Order' : 'Create Purchase Order'}</h2>
            
            <form onSubmit={handleCreatePO} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Supplier Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Gold Merchants Ltd"
                    value={supplierName}
                    onChange={(e) => setSupplierName(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary placeholder-text-secondary/30 focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Item Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Gold Bangles 22k"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary placeholder-text-secondary/30 focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Est. Weight (g)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    required
                    placeholder="0.00"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary placeholder-text-secondary/30 focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Amount (₹)</label>
                  <input 
                    type="number" 
                    required
                    placeholder="Total amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary placeholder-text-secondary/30 focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Status</label>
                  <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-background-secondary px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  >
                    <option value="PENDING">Pending</option>
                    <option value="APPROVED">Approved</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="CANCELLED">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="mt-10 flex gap-4 pt-4 border-t border-border-theme/50">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 border border-border-theme bg-transparent py-3 text-xs uppercase tracking-widest font-semibold text-text-primary hover:bg-transparent transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-accent-gold py-3 text-xs uppercase tracking-widest font-bold text-black hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : (editingId ? 'Update PO' : 'Create PO')}
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
