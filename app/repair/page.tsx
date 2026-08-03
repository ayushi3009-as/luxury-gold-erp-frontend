"use client";

import { useState, useEffect } from "react";
import { Wrench, Loader2, Calendar, ClipboardList, Clock, CheckCircle, PackageCheck, X } from "lucide-react";

export default function RepairDashboard() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [editStatus, setEditStatus] = useState("PENDING");
  const [isSaving, setIsSaving] = useState(false);

  // New repair form state
  const [newRepair, setNewRepair] = useState({
    customerName: "",
    customerPhone: "",
    itemName: "",
    description: "",
    estimatedCost: "",
    advancePaid: "",
    expectedDate: "",
  });

  const fetchData = () => {
    setIsLoading(true);
    fetch('/api/repair')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const res = await fetch('/api/repair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRepair),
      });
      if (res.ok) {
        setIsAddModalOpen(false);
        setNewRepair({
          customerName: "",
          customerPhone: "",
          itemName: "",
          description: "",
          estimatedCost: "",
          advancePaid: "",
          expectedDate: "",
        });
        fetchData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleManageClick = (order: any) => {
    setSelectedOrder(order);
    setEditStatus(order.status);
    setIsManageModalOpen(true);
  };

  const handleUpdateStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;
    setIsSaving(true);
    
    try {
      const res = await fetch(`/api/repair/${selectedOrder.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: editStatus }),
      });
      if (res.ok) {
        setIsManageModalOpen(false);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const metrics = data?.metrics || { totalRepairs: 0, pending: 0, inProgress: 0, completed: 0, delivered: 0 };
  const orders = data?.orders || [];

  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold bg-clip-text text-transparent flex items-center gap-3">
              <Wrench size={36} className="text-accent-gold" />
              Repair Dashboard
            </h1>
            <p className="mt-2 text-text-secondary">Monitor repair operations, statuses, and customer deliveries.</p>
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
          >
            <PlusIcon />
            New Repair Entry
          </button>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-5 mb-10">
          <MetricCard icon={<ClipboardList />} title="Total Repairs" value={metrics.totalRepairs} color="text-text-primary" />
          <MetricCard icon={<Clock />} title="Pending" value={metrics.pending} color="text-red-400" bg="bg-red-500/10" iconColor="text-red-500" />
          <MetricCard icon={<Wrench />} title="In Progress" value={metrics.inProgress} color="text-yellow-400" bg="bg-yellow-500/10" iconColor="text-yellow-500" />
          <MetricCard icon={<CheckCircle />} title="Completed" value={metrics.completed} color="text-green-400" bg="bg-green-500/10" iconColor="text-green-500" />
          <MetricCard icon={<PackageCheck />} title="Delivered" value={metrics.delivered} color="text-blue-400" bg="bg-blue-500/10" iconColor="text-blue-500" />
        </div>

        {/* TABLE */}
        <div className="rounded-2xl border border-border-theme bg-background-secondary/60 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/40 via-transparent to-transparent"></div>
          
          <h2 className="text-lg font-bold text-accent-gold mb-6 tracking-wider uppercase flex items-center gap-2">
            <Calendar size={18} /> Recent Repair Orders
          </h2>

          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary uppercase">
                <tr>
                  <th className="px-6 py-4">Repair No.</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Item</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-text-secondary">
                      No repairs found. Click "New Repair Entry" to start.
                    </td>
                  </tr>
                ) : (
                  orders.map((order: any) => (
                    <tr key={order.id} className="transition-colors hover:bg-text-primary/5 group">
                      <td className="px-6 py-4 font-mono font-medium text-text-primary/70 group-hover:text-accent-gold">{order.repairNumber}</td>
                      <td className="px-6 py-4 font-bold text-text-primary">{order.customerName}</td>
                      <td className="px-6 py-4 text-text-secondary">{order.itemName}</td>
                      <td className="px-6 py-4 text-text-secondary">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleManageClick(order)}
                          className="px-3 py-1.5 text-xs font-bold rounded-lg border border-border-theme text-text-secondary hover:text-accent-gold hover:border-accent-gold transition-colors"
                        >
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* NEW REPAIR MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-background-secondary border border-border-theme rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-border-theme">
              <h2 className="text-xl font-bold text-accent-gold flex items-center gap-2">
                <Wrench size={20} />
                New Repair Entry
              </h2>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-text-secondary hover:text-red-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleAddSubmit} className="p-4">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">Customer Name</label>
                    <input 
                      type="text" 
                      required
                      value={newRepair.customerName}
                      onChange={e => setNewRepair({...newRepair, customerName: e.target.value})}
                      className="w-full bg-background-tertiary border border-border-theme rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">Phone</label>
                    <input 
                      type="text" 
                      required
                      value={newRepair.customerPhone}
                      onChange={e => setNewRepair({...newRepair, customerPhone: e.target.value})}
                      className="w-full bg-background-tertiary border border-border-theme rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="1234567890"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">Item Name</label>
                    <input 
                      type="text" 
                      required
                      value={newRepair.itemName}
                      onChange={e => setNewRepair({...newRepair, itemName: e.target.value})}
                      className="w-full bg-background-tertiary border border-border-theme rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="E.g. Gold Necklace 22k"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">Expected Date</label>
                    <input 
                      type="date" 
                      value={newRepair.expectedDate}
                      onChange={e => setNewRepair({...newRepair, expectedDate: e.target.value})}
                      className="w-full bg-background-tertiary border border-border-theme rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">Description</label>
                  <textarea 
                    value={newRepair.description}
                    onChange={e => setNewRepair({...newRepair, description: e.target.value})}
                    className="w-full bg-background-tertiary border border-border-theme rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="Describe the repair needed..."
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">Estimated Cost</label>
                    <input 
                      type="number" 
                      value={newRepair.estimatedCost}
                      onChange={e => setNewRepair({...newRepair, estimatedCost: e.target.value})}
                      className="w-full bg-background-tertiary border border-border-theme rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">Advance Paid</label>
                    <input 
                      type="number" 
                      value={newRepair.advancePaid}
                      onChange={e => setNewRepair({...newRepair, advancePaid: e.target.value})}
                      className="w-full bg-background-tertiary border border-border-theme rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="0.00"
                    />
                  </div>
                </div>

              </div>
              
              <div className="mt-4 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl font-bold text-text-secondary hover:bg-text-primary/5 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 rounded-xl font-bold bg-accent-gold text-black hover:bg-yellow-400 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {isSaving && <Loader2 size={16} className="animate-spin" />}
                  Create Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MANAGE REPAIR MODAL */}
      {isManageModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-background-secondary border border-border-theme rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-border-theme">
              <h2 className="text-xl font-bold text-accent-gold flex items-center gap-2">
                <Wrench size={20} />
                Manage Repair {selectedOrder.repairNumber}
              </h2>
              <button 
                onClick={() => setIsManageModalOpen(false)}
                className="text-text-secondary hover:text-red-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleUpdateStatus} className="p-6">
              <div className="space-y-6">
                
                <div className="bg-text-primary/5 rounded-xl p-4 border border-border-theme space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Customer</span>
                    <span className="text-sm font-bold text-text-primary">{selectedOrder.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Item</span>
                    <span className="text-sm font-bold text-text-primary">{selectedOrder.itemName}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Update Status</label>
                  <div className="space-y-2">
                    {['PENDING', 'IN_PROGRESS', 'COMPLETED', 'DELIVERED'].map((status) => (
                      <label 
                        key={status}
                        onClick={() => setEditStatus(status)}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-colors ${
                          editStatus === status 
                            ? 'border-accent-gold bg-accent-gold/5' 
                            : 'border-border-theme bg-background-tertiary hover:border-text-primary/20'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          editStatus === status ? 'border-accent-gold' : 'border-text-secondary/50'
                        }`}>
                          {editStatus === status && <div className="w-2 h-2 rounded-full bg-accent-gold" />}
                        </div>
                        <span className={`text-sm font-bold ${
                          editStatus === status ? 'text-accent-gold' : 'text-text-secondary'
                        }`}>
                          {status.replace('_', ' ')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setIsManageModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl font-bold text-text-secondary hover:bg-text-primary/5 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSaving || editStatus === selectedOrder.status}
                  className="px-6 py-2.5 rounded-xl font-bold bg-accent-gold text-black hover:bg-yellow-400 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {isSaving && <Loader2 size={16} className="animate-spin" />}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  );
}

function MetricCard({ icon, title, value, color, bg = "bg-accent-gold/10", iconColor = "text-accent-gold" }: any) {
  return (
    <div className="bg-background-secondary/80 backdrop-blur-xl rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:border-border-theme transition-all shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${bg} ${iconColor}`}>
          {icon}
        </div>
        <h3 className="text-[10px] tracking-widest uppercase font-semibold text-text-secondary">{title}</h3>
      </div>
      <p className={`text-4xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  let colors = "bg-text-primary/10 text-text-primary border-border-theme";
  if (status === 'PENDING') colors = "bg-red-500/10 text-red-500 border-red-500/20";
  if (status === 'IN_PROGRESS') colors = "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
  if (status === 'COMPLETED') colors = "bg-green-500/10 text-green-500 border-green-500/20";
  if (status === 'DELIVERED') colors = "bg-blue-500/10 text-blue-500 border-blue-500/20";

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${colors}`}>
      {status.replace('_', ' ')}
    </span>
  );
}