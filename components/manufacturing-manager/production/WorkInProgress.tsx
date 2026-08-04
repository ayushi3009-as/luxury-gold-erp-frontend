"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface ProductionOrder {
  id: string;
  productionNumber: string;
  stage: string;
  status: string;
  quantity: number;
  completedQty: number;
  jobCard: {
    productName: string;
  };
}

export default function WorkInProgress() {
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
      const wip = allOrders.filter((o: ProductionOrder) => o.status === "In Progress");
      setOrders(wip);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-text-secondary">Loading Work In Progress...</div>;
  }

  return (
    <div className="rounded-2xl border border-border-theme bg-background-secondary p-6">
      <h2 className="mb-6 text-xl font-semibold text-text-primary">
        Work In Progress
      </h2>
      <div className="space-y-5">
        {orders.length === 0 ? (
          <div className="rounded-xl border border-border-theme bg-background-primary p-5 text-center text-text-secondary">
            No production orders are currently in progress.
          </div>
        ) : (
          orders.map((job) => {
            const progress = job.quantity > 0 
              ? Math.min(100, Math.round((job.completedQty / job.quantity) * 100))
              : 0;
            return (
              <div
                key={job.id}
                className="rounded-xl border border-border-theme bg-background-primary p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {job.jobCard?.productName || "Unknown Product"}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {job.productionNumber}
                    </p>
                  </div>
                  <span className="rounded-lg bg-[#D4AF37]/20 px-3 py-1 text-sm text-[#D4AF37]">
                    {job.stage}
                  </span>
                </div>
                
                <p className="mb-3 text-text-secondary">
                  Qty: {job.completedQty} / {job.quantity}
                </p>
                
                <div className="h-3 w-full rounded-full bg-[#2A2A2A]">
                  <div
                    className="h-3 rounded-full bg-[#D4AF37]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-2 text-right text-sm text-text-secondary">
                  {progress}% Completed
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}