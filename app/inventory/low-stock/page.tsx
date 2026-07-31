"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Download,
  Package,
  Plus,
  Search,
  ShoppingCart,
  TrendingDown,
  Loader2
} from "lucide-react";
import { exportToCsv } from "@/lib/exportCsv";

export default function LowStock() {
  const router = useRouter();
  
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        // filter low stock
        const low = data.filter((p: any) => {
          const qty = p.inventory?.quantity || 0;
          const minQty = p.inventory?.minimumStock || 5;
          return qty <= minQty;
        });
        setProducts(low);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(p => 
    p.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.productCode?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.sku?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const criticalCount = products.filter(p => (p.inventory?.quantity || 0) <= 2).length;

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="min-h-screen p-5">
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">Inventory / Low Stock</p>
            <h1 className="mt-2 text-3xl font-bold">Low Stock</h1>
            <p className="mt-1 text-text-secondary">Monitor low inventory items and create purchase orders before stock runs out.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => exportToCsv('low_stock_report.csv', filteredProducts)} className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <Download size={16} /> Export Report
            </button>
            <button onClick={() => router.push('/purchase/purchase-order')} className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold/90">
              <Plus size={17} /> Create Purchase Order
            </button>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-red-900 bg-[#17100f] p-5">
            <div className="flex items-center justify-between">
              <AlertTriangle size={27} className="text-red-400" />
              <span className="text-xs text-red-400">Attention</span>
            </div>
            <p className="mt-5 text-xs text-text-secondary">TOTAL LOW STOCK ITEMS</p>
            <h2 className="mt-2 text-2xl font-bold text-red-400">{products.length}</h2>
          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">
            <div className="flex items-center justify-between">
              <TrendingDown size={27} className="text-accent-gold" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">CRITICAL ITEMS</p>
            <h2 className="mt-2 text-2xl font-bold text-accent-gold">{criticalCount}</h2>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <ShoppingCart size={27} className="text-accent-gold" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">PENDING REORDERS</p>
            <h2 className="mt-2 text-2xl font-bold">0</h2>
          </div>

          <div className="rounded-xl border border-green-900 bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <CheckCircle2 size={27} className="text-green-400" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">REORDERED ITEMS</p>
            <h2 className="mt-2 text-2xl font-bold text-green-400">0</h2>
          </div>
        </div>

        {/* SEARCH AND FILTERS */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">
              <Search size={18} className="text-text-secondary" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search product or SKU..."
                className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />
            </div>
            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">
              <option>All Categories</option>
            </select>
            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">
              <option>All Priority</option>
            </select>
            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">
              <option>All Suppliers</option>
            </select>
          </div>
        </div>

        {/* LOW STOCK TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">
            <div>
              <h2 className="font-semibold text-accent-gold">LOW STOCK ITEMS</h2>
              <p className="mt-1 text-xs text-text-secondary">Items that require immediate inventory replenishment</p>
            </div>
            <span className="flex items-center gap-2 text-xs text-red-400">
              <Bell size={15} />
              {products.length} Items Need Attention
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">
            <table className="w-full min-w-[1250px] text-left text-sm">
              <thead className="bg-background-tertiary text-xs text-text-secondary">
                <tr>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">CURRENT STOCK</th>
                  <th className="px-4 py-4">MINIMUM STOCK</th>
                  <th className="px-4 py-4">PRIORITY</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={7} className="text-center py-8"><Loader2 className="animate-spin mx-auto text-accent-gold" /></td></tr>
                ) : filteredProducts.length === 0 ? (
                  <tr><td colSpan={7} className="text-center py-8 text-text-secondary">No low stock items found!</td></tr>
                ) : filteredProducts.map((item) => (
                  <tr key={item.id} className="border-t border-border-theme text-text-secondary">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
                          <Package size={18} />
                        </div>
                        <span className="font-medium text-text-primary">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-accent-gold">{item.productCode || item.sku}</td>
                    <td className="px-4 py-4 text-text-secondary">{item.category}</td>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-red-400">{(item.inventory?.quantity || 0)} Units</span>
                    </td>
                    <td className="px-4 py-4">{(item.inventory?.minimumStock || 5)} Units</td>
                    <td className="px-4 py-4">
                      <span className={(item.inventory?.quantity || 0) <= 2 ? "rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400" : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-accent-gold"}>
                        {(item.inventory?.quantity || 0) <= 2 ? "Critical" : "High"}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button onClick={() => router.push('/purchase/purchase-order')} className="rounded-md border border-[#7b5c17] px-3 py-1 text-xs text-accent-gold hover:bg-background-tertiary">
                        Reorder
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}