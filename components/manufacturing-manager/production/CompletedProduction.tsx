"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Eye, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import api from "@/lib/api";

interface ProductionOrder {
  id: string;
  productionNumber: string;
  stage: string;
  status: string;
  quantity: number;
  completedQty: number;
  endDate: string | null;
  jobCard: {
    productName: string;
  };
}

export default function CompletedProduction() {
  const [orders, setOrders] = useState<ProductionOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await api.get("/production-orders");
      const allOrders = response.data.data || [];
      const completed = allOrders.filter((o: ProductionOrder) => o.status === "Completed");
      setOrders(completed);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-text-secondary">Loading Completed Production...</div>;
  }

  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">
      <h2 className="mb-6 text-xl font-semibold text-text-primary">
        Completed Production
      </h2>
      <div className="space-y-4">
        {orders.length === 0 ? (
          <div className="rounded-xl border border-border-theme bg-background-primary p-5 text-center text-text-secondary">
            No completed production orders yet.
          </div>
        ) : (
          orders.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between rounded-xl border border-border-theme bg-background-primary p-5"
            >
              <div>
                <h3 className="font-semibold text-text-primary">
                  {job.jobCard?.productName || "Unknown Product"}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {job.productionNumber}
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-text-secondary">
                  Quantity
                </p>
                <p className="font-semibold text-text-primary">
                  {job.completedQty} / {job.quantity}
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-text-secondary">
                  Completed On
                </p>
                <p className="font-semibold text-text-primary">
                  {job.endDate ? new Date(job.endDate).toLocaleDateString() : "-"}
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-green-500/20 px-4 py-2 text-green-400">
                <CheckCircle size={18} />
                Completed
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}