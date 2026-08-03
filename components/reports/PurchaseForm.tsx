"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface PurchaseFormProps {
  isEdit?: boolean;
  purchaseId?: string;
}

export default function PurchaseForm({
  isEdit = false,
  purchaseId
}: PurchaseFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);

  const [formData, setFormData] = useState({
    supplierName: "",
    invoiceNumber: "",
    productName: "",
    category: "",
    quantity: "1",
    amount: "",
    gst: "3",
    purchaseDate: new Date().toISOString().split('T')[0],
    paymentStatus: "Paid",
    remarks: ""
  });

  useEffect(() => {
    if (isEdit && purchaseId) {
      async function fetchPurchase() {
        try {
          const res = await fetch(`/api/reports/purchase`);
          if (res.ok) {
            const data = await res.json();
            const currentPurchase = data.find((p: any) => p.id === purchaseId);
            if (currentPurchase) {
              setFormData(prev => ({
                ...prev,
                supplierName: currentPurchase.supplier?.name || currentPurchase.supplier?.supplierName || "",
                invoiceNumber: currentPurchase.invoiceNumber || "",
                amount: currentPurchase.totalAmount?.toString() || "",
                paymentStatus: currentPurchase.paymentStatus || "PAID",
                purchaseDate: new Date(currentPurchase.createdAt).toISOString().split('T')[0]
              }));
            }
          }
        } catch (error) {
          console.error("Failed to fetch purchase", error);
        } finally {
          setFetching(false);
        }
      }
      fetchPurchase();
    }
  }, [isEdit, purchaseId]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const url = isEdit && purchaseId ? `/api/reports/purchase?id=${purchaseId}` : `/api/reports/purchase`;
      const method = isEdit ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/reports/purchase");
      } else {
        alert("Failed to save purchase");
      }
    } catch (e) {
      console.error(e);
      alert("Error saving purchase");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-accent-gold" size={40} /></div>;
  }

  return (
    <div className="bg-background-secondary border border-border-theme rounded-2xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-accent-gold mb-2">Supplier Name</label>
          <input
            name="supplierName"
            value={formData.supplierName}
            onChange={handleChange}
            type="text"
            placeholder="Supplier Name"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />
        </div>

        <div>
          <label className="block text-accent-gold mb-2">Invoice Number</label>
          <input
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleChange}
            type="text"
            placeholder="Invoice Number"
            disabled={isEdit}
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-accent-gold mb-2">Product Name</label>
          <input
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            type="text"
            placeholder="Product Name"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />
        </div>

        <div>
          <label className="block text-accent-gold mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          >
            <option value="">Select Category</option>
            <option>Ring</option>
            <option>Chain</option>
            <option>Necklace</option>
            <option>Bangle</option>
            <option>Bracelet</option>
          </select>
        </div>

        <div>
          <label className="block text-accent-gold mb-2">Quantity</label>
          <input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            type="number"
            placeholder="Quantity"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />
        </div>

        <div>
          <label className="block text-accent-gold mb-2">Purchase Price</label>
          <input
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            type="number"
            placeholder="Purchase Price"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />
        </div>

        <div>
          <label className="block text-accent-gold mb-2">GST %</label>
          <input
            name="gst"
            value={formData.gst}
            onChange={handleChange}
            type="number"
            placeholder="GST"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />
        </div>

        <div>
          <label className="block text-accent-gold mb-2">Purchase Date</label>
          <input
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleChange}
            type="date"
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          />
        </div>

        <div>
          <label className="block text-accent-gold mb-2">Payment Status</label>
          <select
            name="paymentStatus"
            value={formData.paymentStatus}
            onChange={handleChange}
            className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
          >
            <option value="">Select Status</option>
            <option value="PAID">Paid</option>
            <option value="PENDING">Pending</option>
            <option value="PARTIAL">Partial</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-accent-gold mb-2">Remarks</label>
        <textarea
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          rows={5}
          placeholder="Remarks..."
          className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary"
        />
      </div>

      <div className="mt-8">
        <button 
          onClick={handleSave}
          disabled={loading}
          className="bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-8 py-3 rounded-xl transition flex items-center gap-2 disabled:opacity-50"
        >
          {loading && <Loader2 size={18} className="animate-spin" />}
          {loading ? "Saving..." : isEdit ? "Update Purchase" : "Save Purchase"}
        </button>
      </div>
    </div>
  );
}