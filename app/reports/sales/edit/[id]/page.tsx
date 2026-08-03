"use client";

import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditSalesPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  
  const [formData, setFormData] = useState({
    customerName: "",
    invoiceNumber: "",
    productName: "Gold Ring",
    quantity: "1",
    amount: "",
    paymentStatus: "PAID",
    salesDate: "",
    salesExecutive: "Ramesh",
    remarks: "Customer purchased Gold Ring."
  });

  useEffect(() => {
    async function fetchSale() {
      try {
        const res = await fetch(`/api/reports/sales`);
        if (res.ok) {
          const allSales = await res.json();
          const currentSale = allSales.find((s: any) => s.id === params.id);
          if (currentSale) {
            setFormData(prev => ({
              ...prev,
              customerName: currentSale.customer?.name || "",
              invoiceNumber: currentSale.invoiceNo || "",
              amount: currentSale.totalAmount?.toString() || "",
              paymentStatus: currentSale.status || "PAID",
              salesDate: new Date(currentSale.createdAt).toISOString().split('T')[0]
            }));
          }
        }
      } catch (err) {
        console.error("Failed to fetch sale", err);
      } finally {
        setFetching(false);
      }
    }
    fetchSale();
  }, [params.id]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/reports/sales?id=${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        router.push("/reports/sales");
      } else {
        alert("Failed to update sale");
      }
    } catch (e) {
      console.error(e);
      alert("Error updating sale");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-accent-gold">Edit Sales Report</h1>
          <p className="text-text-secondary mt-2">Update Sales Information</p>
        </div>
        <Link
          href="/reports/sales"
          className="flex items-center gap-2 border border-yellow-500 text-accent-gold hover:bg-accent-gold hover:text-black px-5 py-3 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      <div className="max-w-6xl mx-auto bg-background-secondary border border-border-theme rounded-2xl p-8">
        {fetching ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-accent-gold" size={40} /></div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-accent-gold">Customer Name</label>
                <input
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
                />
              </div>
              <div>
                <label className="block mb-2 text-accent-gold">Invoice Number</label>
                <input
                  name="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={handleChange}
                  type="text"
                  disabled
                  className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 opacity-70"
                />
              </div>
              <div>
                <label className="block mb-2 text-accent-gold">Product Name</label>
                <input
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
                />
              </div>
              <div>
                <label className="block mb-2 text-accent-gold">Quantity</label>
                <input
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  type="number"
                  className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
                />
              </div>
              <div>
                <label className="block mb-2 text-accent-gold">Amount</label>
                <input
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  type="number"
                  className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
                />
              </div>
              <div>
                <label className="block mb-2 text-accent-gold">Payment Status</label>
                <select
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                  className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
                >
                  <option value="PAID">Paid</option>
                  <option value="PENDING">Pending</option>
                  <option value="COMPLETED">Completed</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-accent-gold">Sales Date</label>
                <input
                  name="salesDate"
                  value={formData.salesDate}
                  onChange={handleChange}
                  type="date"
                  className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
                />
              </div>
              <div>
                <label className="block mb-2 text-accent-gold">Sales Executive</label>
                <input
                  name="salesExecutive"
                  value={formData.salesExecutive}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-accent-gold">Remarks</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                rows={5}
                className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3"
              />
            </div>

            <div className="mt-8">
              <button 
                onClick={handleUpdate}
                disabled={loading}
                className="flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-black px-8 py-3 rounded-xl font-semibold transition disabled:opacity-50"
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                {loading ? "Updating..." : "Update Sales Report"}
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}