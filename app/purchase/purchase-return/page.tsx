"use client";

import { useState, useEffect } from "react";
import { Loader2, Plus, FileText, CheckCircle, Clock, AlertTriangle } from "lucide-react";

export default function PurchaseReturnPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Return State
  const [supplierId, setSupplierId] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [returnNo, setReturnNo] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Pending");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchReturns();
  }, []);

  async function fetchReturns() {
    try {
      const res = await fetch('/api/purchase/returns?t=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error("Failed to fetch purchase returns", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreateReturn(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const isEditing = !!editingId;
      const url = isEditing ? `/api/purchase/returns/${editingId}` : '/api/purchase/returns';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          supplierId,
          invoiceId,
          returnNo,
          date: returnDate,
          amount: Number(amount),
          status
        })
      });

      if (res.ok) {
        setIsModalOpen(false);
        setSupplierId("");
        setInvoiceId("");
        setReturnNo("");
        setReturnDate("");
        setAmount("");
        setStatus("Pending");
        setEditingId(null);
        fetchReturns(); // Refresh data
      }
    } catch (error) {
      console.error("Error saving Return:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this purchase return?")) return;
    try {
      const res = await fetch(`/api/purchase/returns/${id}`, { method: 'DELETE' });
      if (res.ok) fetchReturns();
    } catch (error) {
      console.error("Error deleting Return:", error);
    }
  }

  function handleEditClick(ret: any) {
    setEditingId(ret.id);
    setReturnNo(ret.id);
    try {
      setReturnDate(new Date(ret.date).toISOString().split('T')[0]);
    } catch {
      setReturnDate("");
    }
    const supplier = data?.suppliers?.find((s: any) => s.supplierName === ret.supplierName);
    setSupplierId(supplier?.id || "");
    const inv = data?.invoices?.find((i: any) => i.invoiceNumber === ret.invoiceNo);
    setInvoiceId(inv?.id || "");
    setAmount(ret.amount.replace(/[^0-9.]/g, ''));
    setStatus(ret.status);
    setIsModalOpen(true);
  }

  function openCreateModal() {
    setEditingId(null);
    setSupplierId("");
    setInvoiceId("");
    setReturnNo("");
    setReturnDate(new Date().toISOString().split('T')[0]);
    setAmount("");
    setStatus("Pending");
    setIsModalOpen(true);
  }

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const m = data?.metrics || { totalReturns: 0, approvedReturns: 0, pendingReturns: 0, rejectedReturns: 0, totalAmount: 0 };
  const returns = data?.returns || [];
  const suppliers = data?.suppliers || [];
  const invoices = data?.invoices || [];

  return (
    <div className="relative min-h-[80vh] p-6 text-text-primary">
      {/* Decorative Blur */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-accent-gold">Purchase Returns</h1>
            <p className="mt-1 text-sm text-text-secondary">Manage supplier jewellery returns.</p>
          </div>

          <button 
            onClick={openCreateModal}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
          >
            <Plus size={18} />
            Create Return
          </button>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-5 mb-8">
          <StatBox label="Total Returns" value={m.totalReturns} icon={<FileText size={20} className="text-text-primary/60" />} />
          <StatBox label="Approved" value={m.approvedReturns} icon={<CheckCircle size={20} className="text-green-400" />} color="text-green-400" />
          <StatBox label="Pending" value={m.pendingReturns} icon={<Clock size={20} className="text-yellow-400" />} color="text-yellow-400" />
          <StatBox label="Rejected" value={m.rejectedReturns} icon={<AlertTriangle size={20} className="text-red-400" />} color="text-red-400" />
          <StatBox label="Return Amount" value={`₹ ${(m.totalAmount/1000).toFixed(0)}k`} icon={<FileText size={20} className="text-accent-gold" />} color="text-accent-gold" />
        </div>

        {/* RETURNS TABLE */}
        <div className="rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-lg">
          <h2 className="text-lg font-bold tracking-wide text-text-primary mb-6">RETURN LIST</h2>
          
          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-secondary">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-theme bg-transparent text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-6 py-4">RETURN NO</th>
                  <th className="px-6 py-4">INVOICE</th>
                  <th className="px-6 py-4">SUPPLIER</th>
                  <th className="px-6 py-4">DATE</th>
                  <th className="px-6 py-4">AMOUNT</th>
                  <th className="px-6 py-4">STATUS</th>
                  <th className="px-6 py-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {returns.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-text-secondary">No purchase returns found.</td>
                  </tr>
                ) : (
                  returns.map((ret: any, idx: number) => (
                    <tr key={idx} className="transition-colors hover:bg-transparent">
                      <td className="px-6 py-4 font-mono font-medium text-text-primary/80">{ret.id}</td>
                      <td className="px-6 py-4 text-text-secondary">{ret.invoiceNo}</td>
                      <td className="px-6 py-4 font-semibold text-text-primary">{ret.supplierName}</td>
                      <td className="px-6 py-4 text-text-secondary">{new Date(ret.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4 font-bold text-accent-gold">{ret.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                          ret.status === 'Approved' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                          ret.status === 'Pending' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                          ret.status === 'Rejected' ? 'bg-red-400/10 text-red-400 border-red-400/20' :
                          'bg-text-primary/10 text-text-primary/70 border-border-theme'
                        }`}>
                          {ret.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right flex justify-end gap-3">
                        <button onClick={() => handleDelete(ret.id)} className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors">Delete</button>
                        <button onClick={() => handleEditClick(ret)} className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors">Edit</button>
                        <button onClick={() => window.print()} className="text-xs font-semibold text-text-secondary hover:text-accent-gold transition-colors">Print</button>
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
            
            <h2 className="text-2xl font-serif text-text-primary mb-6">{editingId ? 'Update Return' : 'Create Return'}</h2>
            
            <form onSubmit={handleCreateReturn} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Return No</label>
                  <input 
                    type="text" 
                    placeholder="Auto-generated if empty"
                    value={returnNo}
                    onChange={(e) => setReturnNo(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary placeholder-text-secondary/30 focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Return Date</label>
                  <input 
                    type="date" 
                    required
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Select Supplier</label>
                  <select 
                    required
                    value={supplierId}
                    onChange={(e) => setSupplierId(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-background-secondary px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  >
                    <option value="">-- Choose Supplier --</option>
                    {suppliers.map((s: any) => (
                      <option key={s.id} value={s.id}>{s.supplierName}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Select Invoice</label>
                  <select 
                    required
                    value={invoiceId}
                    onChange={(e) => setInvoiceId(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-background-secondary px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  >
                    <option value="">-- Choose Invoice --</option>
                    {invoices.map((i: any) => (
                      <option key={i.id} value={i.id}>{i.invoiceNumber}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Total Amount (₹)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    required
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary placeholder-text-secondary/30 focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Status</label>
                  <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-background-secondary px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
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
                  {isSubmitting ? 'Saving...' : (editingId ? 'Update Return' : 'Save Return')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value, icon, color = "text-text-primary" }: { label: string; value: number | string; icon: React.ReactNode; color?: string; }) {
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
