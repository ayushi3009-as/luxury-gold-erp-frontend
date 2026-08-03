"use client";

import { useState, useEffect } from "react";
import { Plus, CheckCircle, Clock, FileText, AlertTriangle, Loader2 } from "lucide-react";

// Simple StatBox component reused here to avoid dependency on an external component that might have dark theme classes
function StatBox({ label, value, icon, color = "text-text-primary" }: { label: string, value: string | number, icon: any, color?: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border-theme bg-background-secondary p-5 shadow-sm transition-all hover:border-accent-gold/50">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wider text-text-secondary uppercase">{label}</span>
        <div className={`rounded-full bg-background-tertiary p-2 ${color}`}>
          {icon}
        </div>
      </div>
      <div className={`text-2xl font-black ${color}`}>
        {value}
      </div>
    </div>
  );
}

export default function SupplierPaymentPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [referenceNumber, setReferenceNumber] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("BANK");
  const [status, setStatus] = useState("COMPLETED");

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      setIsLoading(true);
      // Added cache busting and no-store to ensure real-time updates
      const res = await fetch('/api/purchase/payments?t=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        alert("Failed to load supplier payments");
      }
    } catch (error) {
      alert("Error connecting to server");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreatePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        referenceNumber,
        paymentDate,
        supplierId,
        invoiceId,
        amount,
        paymentMode,
        status
      };

      const url = editingId ? `/api/purchase/payments/${editingId}` : '/api/purchase/payments';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setIsModalOpen(false);
        // Automatically fetch new data so UI updates in real-time
        await fetchPayments();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to save payment");
      }
    } catch (error) {
      alert("Error connecting to server");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this payment?")) return;
    
    try {
      const res = await fetch(`/api/purchase/payments/${id}`, { method: 'DELETE' });
      if (res.ok) {
        // Automatically fetch new data so UI updates in real-time
        await fetchPayments();
      } else {
        alert("Failed to delete payment");
      }
    } catch (error) {
      alert("Error connecting to server");
    }
  };

  const handleEditClick = (payment: any) => {
    setEditingId(payment.id);
    setReferenceNumber(payment.paymentNo);
    setPaymentDate(new Date(payment.date).toISOString().split('T')[0]);
    // Match supplier name to ID since GET returns name for display
    const sup = data?.suppliers.find((s: any) => s.supplierName === payment.supplierName);
    setSupplierId(sup ? sup.id : "");
    // Match invoice
    const inv = data?.invoices.find((i: any) => i.invoiceNumber === payment.invoiceNo);
    setInvoiceId(inv ? inv.id : "");
    setAmount(payment.amount.replace(/[^0-9.]/g, ''));
    setPaymentMode(payment.mode);
    setStatus(payment.status);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setEditingId(null);
    setReferenceNumber("");
    setPaymentDate(new Date().toISOString().split('T')[0]);
    setSupplierId("");
    setInvoiceId("");
    setAmount("");
    setPaymentMode("BANK");
    setStatus("COMPLETED");
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const m = data?.metrics || { totalPayable: 0, paidAmount: 0, pendingAmount: 0, overduePayment: 0, totalSuppliers: 0 };
  const payments = data?.payments || [];
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
            <h1 className="text-3xl font-bold text-accent-gold">Supplier Payment</h1>
            <p className="mt-1 text-sm text-text-secondary">Manage supplier outstanding and payments.</p>
          </div>

          <button 
            onClick={openCreateModal}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
          >
            <Plus size={18} />
            Make Payment
          </button>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-5 mb-8">
          <StatBox label="Total Payable" value={`₹ ${(m.totalPayable/1000).toFixed(0)}k`} icon={<FileText size={20} className="text-text-primary/60" />} />
          <StatBox label="Paid Amount" value={`₹ ${(m.paidAmount/1000).toFixed(0)}k`} icon={<CheckCircle size={20} className="text-green-400" />} color="text-green-400" />
          <StatBox label="Pending Amount" value={`₹ ${(m.pendingAmount/1000).toFixed(0)}k`} icon={<Clock size={20} className="text-yellow-400" />} color="text-yellow-400" />
          <StatBox label="Overdue Payment" value={`₹ ${(m.overduePayment/1000).toFixed(0)}k`} icon={<AlertTriangle size={20} className="text-red-400" />} color="text-red-400" />
          <StatBox label="Suppliers" value={m.totalSuppliers} icon={<FileText size={20} className="text-accent-gold" />} color="text-accent-gold" />
        </div>

        {/* PAYMENTS TABLE */}
        <div className="rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-lg">
          <h2 className="text-lg font-bold tracking-wide text-text-primary mb-6">PAYMENT HISTORY</h2>
          
          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-secondary">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-theme bg-transparent text-xs font-semibold tracking-wider text-text-secondary">
                <tr>
                  <th className="px-6 py-4">PAYMENT NO</th>
                  <th className="px-6 py-4">SUPPLIER</th>
                  <th className="px-6 py-4">INVOICE</th>
                  <th className="px-6 py-4">DATE</th>
                  <th className="px-6 py-4">AMOUNT</th>
                  <th className="px-6 py-4">MODE</th>
                  <th className="px-6 py-4">STATUS</th>
                  <th className="px-6 py-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {payments.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-8 text-center text-text-secondary">No payments found.</td>
                  </tr>
                ) : (
                  payments.map((payment: any, idx: number) => (
                    <tr key={idx} className="transition-colors hover:bg-transparent">
                      <td className="px-6 py-4 font-mono font-medium text-text-primary/80">{payment.paymentNo}</td>
                      <td className="px-6 py-4 font-semibold text-text-primary">{payment.supplierName}</td>
                      <td className="px-6 py-4 text-text-secondary">{payment.invoiceNo}</td>
                      <td className="px-6 py-4 text-text-secondary">{new Date(payment.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4 font-bold text-accent-gold">{payment.amount}</td>
                      <td className="px-6 py-4 text-text-secondary">{payment.mode}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                          payment.status === 'COMPLETED' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                          payment.status === 'PENDING' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                          payment.status === 'FAILED' ? 'bg-red-400/10 text-red-400 border-red-400/20' :
                          'bg-text-primary/10 text-text-primary/70 border-border-theme'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right flex justify-end gap-3">
                        <button onClick={() => handleDelete(payment.id)} className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors">Delete</button>
                        <button onClick={() => handleEditClick(payment)} className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors">Edit</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CREATE/EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background-primary/80 backdrop-blur-md p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border-theme bg-background-secondary/90 p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/50 via-yellow-300 to-accent-gold/50"></div>
            
            <h2 className="text-2xl font-serif text-text-primary mb-6">{editingId ? 'Update Payment' : 'Make Payment'}</h2>
            
            <form onSubmit={handleCreatePayment} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Payment No</label>
                  <input 
                    type="text" 
                    placeholder="Auto-generated if empty"
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary placeholder-text-secondary/30 focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Payment Date</label>
                  <input 
                    type="date" 
                    required
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Select Supplier</label>
                  <select 
                    required
                    value={supplierId}
                    onChange={(e) => setSupplierId(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-background-secondary">Choose a supplier</option>
                    {suppliers.map((sup: any) => (
                      <option key={sup.id} value={sup.id} className="bg-background-secondary">
                        {sup.supplierName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Link Invoice (Optional)</label>
                  <select 
                    value={invoiceId}
                    onChange={(e) => setInvoiceId(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-background-secondary">None</option>
                    {invoices.map((inv: any) => (
                      <option key={inv.id} value={inv.id} className="bg-background-secondary">
                        {inv.invoiceNumber} - ₹{inv.totalAmount.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Amount (₹)</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Payment Mode</label>
                  <select 
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  >
                    <option value="BANK" className="bg-background-secondary">Bank Transfer</option>
                    <option value="UPI" className="bg-background-secondary">UPI</option>
                    <option value="CASH" className="bg-background-secondary">Cash</option>
                    <option value="CHEQUE" className="bg-background-secondary">Cheque</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Status</label>
                  <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-none border-b border-border-theme bg-transparent px-2 py-2 text-sm text-text-primary focus:border-accent-gold focus:outline-none transition-colors"
                  >
                    <option value="COMPLETED" className="bg-background-secondary">Completed</option>
                    <option value="PENDING" className="bg-background-secondary">Pending</option>
                    <option value="FAILED" className="bg-background-secondary">Failed</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-border-theme">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-2 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-lg hover:shadow-accent-gold/20 disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle size={16} />}
                  {editingId ? 'Update Payment' : 'Confirm Payment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
