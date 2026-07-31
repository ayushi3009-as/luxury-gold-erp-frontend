"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Archive,
  Download,
  Eye,
  Package,
  Search,
  ShoppingCart,
  TrendingDown,
  Loader2
} from "lucide-react";
import { exportToCsv } from "@/lib/exportCsv";

export default function DeadStock() {
  const router = useRouter();
  
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        // To simulate dead stock, we just take items that have some inventory
        // In a real app, this would query sales history.
        const items = data.filter((p: any) => (p.inventory?.quantity || 0) > 0);
        setProducts(items);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(p => 
    p.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.productCode?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.sku?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalValue = products.reduce((acc, curr) => acc + ((curr.inventory?.quantity || 0) * (curr.unitPrice || 0)), 0);

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="min-h-screen p-5">
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">Inventory / Dead Stock</p>
            <h1 className="mt-2 text-3xl font-bold">Dead Stock</h1>
            <p className="mt-1 text-text-secondary">Identify slow-moving and non-moving inventory to improve stock turnover.</p>
          </div>
          <button onClick={() => exportToCsv('dead_stock_report.csv', filteredProducts)} className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
            <Download size={16} /> Export Report
          </button>
        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-red-900 bg-[#17100f] p-5">
            <div className="flex items-center justify-between">
              <Archive size={27} className="text-red-400" />
              <TrendingDown size={18} className="text-red-400" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">TOTAL DEAD STOCK</p>
            <h2 className="mt-2 text-2xl font-bold text-red-400">{products.length} Items</h2>
          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">
            <div className="flex items-center justify-between">
              <Package size={27} className="text-accent-gold" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">TOTAL QUANTITY</p>
            <h2 className="mt-2 text-2xl font-bold text-accent-gold">{products.reduce((a,c) => a + (c.inventory?.quantity || 0), 0)} Units</h2>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <ShoppingCart size={27} className="text-accent-gold" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">DEAD STOCK VALUE</p>
            <h2 className="mt-2 text-2xl font-bold">₹ {totalValue.toLocaleString()}</h2>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <TrendingDown size={27} className="text-accent-gold" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">STOCK TURNOVER LOSS</p>
            <h2 className="mt-2 text-2xl font-bold">--%</h2>
          </div>
        </div>

        {/* FILTERS */}
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
              <option>Stock Age</option>
            </select>
            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">
              <option>All Status</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">
            <div>
              <h2 className="font-semibold text-accent-gold">DEAD STOCK ITEMS</h2>
              <p className="mt-1 text-xs text-text-secondary">Inventory with no or very low sales activity</p>
            </div>
            <span className="text-xs text-red-400">{products.length} Items Need Attention</span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">
            <table className="w-full min-w-[1150px] text-left text-sm">
              <thead className="bg-background-tertiary text-xs text-text-secondary">
                <tr>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">STOCK</th>
                  <th className="px-4 py-4">LAST SOLD</th>
                  <th className="px-4 py-4">STOCK VALUE</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={8} className="text-center py-8"><Loader2 className="animate-spin mx-auto text-accent-gold" /></td></tr>
                ) : filteredProducts.length === 0 ? (
                  <tr><td colSpan={8} className="text-center py-8 text-text-secondary">No items found!</td></tr>
                ) : filteredProducts.map((item) => (
                  <tr key={item.id} className="border-t border-border-theme text-text-secondary">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
                          <Archive size={18} />
                        </div>
                        <span className="font-medium text-text-primary">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-accent-gold">{item.productCode || item.sku}</td>
                    <td className="px-4 py-4 text-text-secondary">{item.category}</td>
                    <td className="px-4 py-4 font-semibold text-red-400">{(item.inventory?.quantity || 0)} Units</td>
                    <td className="px-4 py-4 text-text-secondary">N/A</td>
                    <td className="px-4 py-4 font-semibold text-accent-gold">₹ {((item.inventory?.quantity || 0) * (item.unitPrice || 0)).toLocaleString()}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400">
                        Dead Stock
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button className="text-text-secondary hover:text-accent-gold">
                        <Eye size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ACTION SUMMARY */}
        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <h2 className="font-semibold text-accent-gold">DISCOUNT / CLEARANCE</h2>
            <p className="mt-2 text-sm text-text-secondary">Move old inventory through special offers and clearance sales.</p>
            <button onClick={() => router.push('/sales/sales-entry?clearance=true')} className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold hover:bg-background-tertiary">
              Create Clearance Sale
            </button>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <h2 className="font-semibold text-accent-gold">REWORK / REMODEL</h2>
            <p className="mt-2 text-sm text-text-secondary">Convert old jewellery into new designs and improve stock movement.</p>
            <button onClick={() => router.push('/dashboard/manufacturing')} className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold hover:bg-background-tertiary">
              Start Rework
            </button>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <h2 className="font-semibold text-accent-gold">STOCK TRANSFER</h2>
            <p className="mt-2 text-sm text-text-secondary">Transfer slow-moving stock to another branch or warehouse.</p>
            <button onClick={() => router.push('/inventory/stock-transfer')} className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold hover:bg-background-tertiary">
              Transfer Stock
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}