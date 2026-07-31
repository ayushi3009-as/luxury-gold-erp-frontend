"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

export default function AddSalesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    customerName: "",
    invoiceNumber: "",
    productName: "",
    quantity: "1",
    amount: "",
    paymentStatus: "Paid",
    salesDate: new Date().toISOString().split('T')[0],
    salesExecutive: "",
    remarks: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/reports/sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 401) { console.warn("Unauthorized fetch"); }

      if (res.ok) {
        router.push("/reports/sales");
      } else {
        const data = await res.json();
        setError(data.error || "Failed to save sales report");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-accent-gold">Add Sales Report</h1>
          <p className="text-text-secondary mt-2">Create a new sales report</p>
        </div>
        <Link
          href="/reports/sales"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      {/* Form */}
      <div className="max-w-6xl mx-auto bg-background-secondary border border-border-theme rounded-2xl p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-accent-gold mb-2">Customer Name</label>
            <input
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              type="text"
              placeholder="Enter Customer Name"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>
          <div>
            <label className="block text-accent-gold mb-2">Invoice Number</label>
            <input
              name="invoiceNumber"
              value={formData.invoiceNumber}
              onChange={handleChange}
              type="text"
              placeholder="INV001"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>
          <div>
            <label className="block text-accent-gold mb-2">Product Name</label>
            <input
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              type="text"
              placeholder="Gold Ring"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>
          <div>
            <label className="block text-accent-gold mb-2">Quantity</label>
            <input
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              type="number"
              placeholder="1"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>
          <div>
            <label className="block text-accent-gold mb-2">Amount</label>
            <input
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              type="number"
              placeholder="45000"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>
          <div>
            <label className="block text-accent-gold mb-2">Payment Status</label>
            <select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            >
              <option value="PAID">Paid</option>
              <option value="PENDING">Pending</option>
            </select>
          </div>
          <div>
            <label className="block text-accent-gold mb-2">Sales Date</label>
            <input
              name="salesDate"
              value={formData.salesDate}
              onChange={handleChange}
              type="date"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>
          <div>
            <label className="block text-accent-gold mb-2">Sales Executive</label>
            <input
              name="salesExecutive"
              value={formData.salesExecutive}
              onChange={handleChange}
              type="text"
              placeholder="Employee Name"
              className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-accent-gold mb-2">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows={5}
            placeholder="Enter Remarks..."
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
          />
        </div>

        <div className="mt-8">
          <button
            onClick={handleSave}
            disabled={loading}
            className="flex items-center gap-2 bg-accent-gold hover:bg-[#d9a928] text-black font-semibold px-8 py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {loading ? "Saving..." : "Save Sales Report"}
          </button>
        </div>
      </div>
    </main>
  );
}