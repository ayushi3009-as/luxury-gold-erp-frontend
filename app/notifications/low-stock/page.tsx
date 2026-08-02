"use client";


import Link from "next/link";
import {
  Package,
  AlertTriangle,
  TrendingDown,
  Warehouse,
  ArrowDownRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import Link from "next/link";

type LowStockProduct = {
  name: string;
  sku: string;
  category: string;
  currentStock: number;
  minimumStock: number;
  status: string;
};

export default function LowStockPage() {
  const [lowStockProducts, setLowStockProducts] = useState<LowStockProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLowStock();
  }, []);

  const fetchLowStock = async () => {
    try {
      const res = await fetch("/api/notifications/low-stock");
      if (res.ok) {
        const data = await res.json();
        setLowStockProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch low stock", error);
    } finally {
      setLoading(false);
    }
  };

  const totalLowStock = lowStockProducts.length;
  const criticalStock = lowStockProducts.filter(p => p.status === "Critical").length;

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className=" min-h-screen p-8">
        {/* HEADER */}
        <div>

          <p className="text-xs text-text-secondary">
            Notifications / Low Stock
          </p>

          <div className="mt-2 flex items-center gap-3">

            <div className="rounded-xl bg-[#211c0d] p-3">
              <Package
                size={25}
                className="text-accent-gold"
              />
            </div>

            <h1 className="text-3xl font-bold text-accent-gold">
              Low Stock
            </h1>

          </div>

          <p className="mt-3 text-sm text-text-secondary">
            Monitor products that are running below their minimum stock level.
          </p>

        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-8 grid grid-cols-4 gap-5">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">Low Stock Items</p>
              <Package size={19} className="text-accent-gold" />
            </div>
            <h2 className="mt-3 text-3xl font-bold">{loading ? "-" : totalLowStock}</h2>
            <p className="mt-2 text-xs text-accent-gold">Requires attention</p>
          </div>

          <div className="rounded-xl border border-red-900/40 bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">Critical Stock</p>
              <AlertTriangle size={19} className="text-red-400" />
            </div>
            <h2 className="mt-3 text-3xl font-bold text-red-400">{loading ? "-" : criticalStock}</h2>
            <p className="mt-2 text-xs text-red-400">Immediate restocking required</p>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">Stock Value at Risk</p>
              <TrendingDown size={19} className="text-accent-gold" />
            </div>
            <h2 className="mt-3 text-3xl font-bold">$84.6K</h2>
            <p className="mt-2 text-xs text-text-secondary">Estimated inventory value</p>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-secondary">Warehouses Affected</p>
              <Warehouse size={19} className="text-accent-gold" />
            </div>
            <h2 className="mt-3 text-3xl font-bold">6</h2>
            <p className="mt-2 text-xs text-text-secondary">Across all locations</p>
          </div>
        </div>

        {/* LOW STOCK TABLE */}
        <div className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-accent-gold">
                Products Requiring Restock
              </h2>
              <p className="mt-1 text-xs text-text-secondary">
                Products currently below the defined minimum stock level
              </p>
            </div>
            <Link href="/purchase/purchase-order" className="rounded-lg border border-border-theme px-4 py-2 text-xs text-text-secondary transition hover:border-[#e4b52d] hover:text-accent-gold">
              Create Purchase Order
            </Link>
          </div>
          <div className="mt-6 overflow-hidden rounded-lg border border-border-theme">

            {/* TABLE HEADER */}
            <div className="grid grid-cols-6 border-b border-border-theme bg-background-tertiary px-5 py-4 text-xs text-text-secondary">
              <span>Product</span>
              <span>SKU</span>
              <span>Category</span>
              <span>Current Stock</span>
              <span>Minimum Stock</span>
              <span>Status</span>
            </div>

            {/* TABLE ROWS */}
            {loading ? (
              <div className="p-5 text-center text-sm text-text-secondary">Loading low stock products...</div>
            ) : lowStockProducts.length === 0 ? (
              <div className="p-5 text-center text-sm text-text-secondary">No low stock products found! All good.</div>
            ) : (
              lowStockProducts.map((product) => (
                <div
                  key={product.sku}
                  className="grid grid-cols-6 items-center border-b border-border-theme px-5 py-5 last:border-b-0"
                >
                  <span className="text-sm font-medium">{product.name}</span>
                  <span className="text-xs text-text-secondary">{product.sku}</span>
                  <span className="text-xs text-text-secondary">{product.category}</span>
                  <span
                    className={`text-sm font-semibold ${
                      product.status === "Critical" ? "text-red-400" : "text-accent-gold"
                    }`}
                  >
                    {product.currentStock} units
                  </span>
                  <span className="text-sm text-text-secondary">{product.minimumStock} units</span>
                  <span
                    className={`flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[10px] ${
                      product.status === "Critical"
                        ? "bg-red-500/10 text-red-400"
                        : "bg-accent-gold/10 text-accent-gold"
                    }`}
                  >
                    <ArrowDownRight size={12} />
                    {product.status}
                  </span>
                </div>
              ))
            )}
          </div>

        </div>

        {/* AUTOMATIC ALERT INFO */}
        <div className="mt-6 rounded-xl border border-border-theme bg-background-secondary p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-accent-gold/20 p-3">
              <AlertTriangle size={22} className="text-accent-gold" />
            </div>
            <div>
              <h2 className="font-semibold text-accent-gold">
                Automatic Low Stock Monitoring
              </h2>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                The system automatically monitors inventory levels and creates
                alerts whenever a product falls below its minimum stock level.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-500">
                <Package size={16} />
                Automatic stock monitoring is enabled.
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}