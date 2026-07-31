"use client";

import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowUp,
  CalendarDays,
  Download,
  Eye,
  FileText,
  History,
  Package,
  Search,
  ShoppingCart,
  Loader2
} from "lucide-react";
import { exportToCsv } from "@/lib/exportCsv";
import { useRouter } from "next/navigation";

export default function InventoryHistory() {
  const router = useRouter();
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All Transaction Types");

  useEffect(() => {
    fetch('/api/inventory/inventory-history')
      .then(res => res.json())
      .then(data => setHistoryData(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filteredHistory = historyData.filter(item => {
    const matchesSearch = item.description?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.id?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "All Transaction Types" || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const stockInCount = historyData.filter(i => i.type === "Stock In").length;
  const stockOutCount = historyData.filter(i => i.type === "Stock Out").length;
  const transferCount = historyData.filter(i => i.type === "Transfer" || i.type === "Adjustment").length;

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <main className="min-h-screen p-5">
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">Inventory / Inventory History</p>
            <h1 className="mt-2 text-3xl font-bold">Inventory History</h1>
            <p className="mt-1 text-text-secondary">Track complete inventory movement and transaction history.</p>
          </div>
          <button onClick={() => exportToCsv('inventory_history.csv', filteredHistory)} className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
            <Download size={16} /> Export History
          </button>
        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <History size={27} className="text-accent-gold" />
              <span className="text-xs text-text-secondary">This Month</span>
            </div>
            <p className="mt-5 text-xs text-text-secondary">TOTAL TRANSACTIONS</p>
            <h2 className="mt-2 text-2xl font-bold">{historyData.length}</h2>
          </div>

          <div className="rounded-xl border border-green-900 bg-background-secondary p-5">
            <div className="flex items-center justify-between">
              <ArrowUp size={27} className="text-green-400" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">STOCK IN</p>
            <h2 className="mt-2 text-2xl font-bold text-green-400">{stockInCount}</h2>
          </div>

          <div className="rounded-xl border border-red-900 bg-[#17100f] p-5">
            <div className="flex items-center justify-between">
              <ArrowDown size={27} className="text-red-400" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">STOCK OUT</p>
            <h2 className="mt-2 text-2xl font-bold text-red-400">{stockOutCount}</h2>
          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">
            <div className="flex items-center justify-between">
              <Package size={27} className="text-accent-gold" />
            </div>
            <p className="mt-5 text-xs text-text-secondary">TRANSFERS & ADJUSTMENTS</p>
            <h2 className="mt-2 text-2xl font-bold text-accent-gold">{transferCount}</h2>
          </div>
        </div>

        {/* FILTERS */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <div className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">
              <Search size={18} className="text-text-secondary" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search transaction..."
                className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />
            </div>
            <select value={filterType} onChange={e => setFilterType(e.target.value)} className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">
              <option>All Transaction Types</option>
              <option>Stock In</option>
              <option>Stock Out</option>
              <option>Transfer</option>
              <option>Adjustment</option>
            </select>
            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">
              <option>All Users</option>
            </select>
            <div className="relative">
              <CalendarDays size={17} className="absolute left-3 top-3.5 text-accent-gold" />
              <input type="date" className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none" />
            </div>
            <button className="rounded-lg border border-[#7b5c17] px-4 py-3 text-sm text-accent-gold hover:bg-background-tertiary transition-all hover:bg-accent-gold/10">
              Apply Filters
            </button>
          </div>
        </div>

        {/* HISTORY TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">
            <div>
              <h2 className="font-semibold text-accent-gold">INVENTORY TRANSACTION HISTORY</h2>
              <p className="mt-1 text-xs text-text-secondary">Complete record of all inventory movements</p>
            </div>
            <span className="flex items-center gap-2 text-xs text-text-secondary">
              <FileText size={15} />
              {filteredHistory.length} Records
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">
            <table className="w-full min-w-[1250px] text-left text-sm">
              <thead className="bg-background-tertiary text-xs text-text-secondary">
                <tr>
                  <th className="px-4 py-4">TRANSACTION ID</th>
                  <th className="px-4 py-4">DATE</th>
                  <th className="px-4 py-4">TYPE</th>
                  <th className="px-4 py-4">DETAILS</th>
                  <th className="px-4 py-4">USER</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={7} className="text-center py-8"><Loader2 className="animate-spin mx-auto text-accent-gold" /></td></tr>
                ) : filteredHistory.length === 0 ? (
                  <tr><td colSpan={7} className="text-center py-8 text-text-secondary">No history found!</td></tr>
                ) : filteredHistory.map((item) => (
                  <tr key={item.id} className="border-t border-border-theme text-text-secondary hover:bg-background-tertiary transition-colors">
                    <td className="px-4 py-4 text-accent-gold uppercase">{item.id}</td>
                    <td className="px-4 py-4">{new Date(item.date).toLocaleDateString()}</td>
                    <td className="px-4 py-4">
                      <span className={
                          item.type === "Stock In"
                            ? "rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400"
                            : item.type === "Stock Out"
                              ? "rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400"
                              : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-accent-gold"
                        }
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 max-w-md truncate" title={item.description}>{item.description}</td>
                    <td className="px-4 py-4">{item.user?.substring(0, 8) || "Admin"}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400">{item.status}</span>
                    </td>
                    <td className="px-4 py-4">
                      <button onClick={() => alert(item.description)} className="text-text-secondary hover:text-accent-gold">
                        <Eye size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center gap-3">
              <Truck size={22} className="text-accent-gold" />
              <h2 className="font-semibold text-accent-gold">RECENT STOCK IN</h2>
            </div>
            <p className="mt-3 text-sm text-text-secondary">Inventory items were received this month.</p>
            <p className="mt-4 text-2xl font-bold text-green-400">+{stockInCount}</p>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center gap-3">
              <ShoppingCart size={22} className="text-accent-gold" />
              <h2 className="font-semibold text-accent-gold">RECENT STOCK OUT</h2>
            </div>
            <p className="mt-3 text-sm text-text-secondary">Inventory items were issued or sold this month.</p>
            <p className="mt-4 text-2xl font-bold text-red-400">-{stockOutCount}</p>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <div className="flex items-center gap-3">
              <History size={22} className="text-accent-gold" />
              <h2 className="font-semibold text-accent-gold">AUDIT TRAIL</h2>
            </div>
            <p className="mt-3 text-sm text-text-secondary">Every inventory movement is recorded for audit and tracking.</p>
            <button onClick={() => router.push('/audit-logs')} className="mt-4 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold hover:bg-background-tertiary transition-all hover:bg-accent-gold/10">
              View Audit Trail
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}