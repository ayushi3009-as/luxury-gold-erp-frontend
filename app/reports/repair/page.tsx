"use client";

import { useState, useEffect } from "react";
import { Loader2, Download, Search, Wrench, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RepairReportPage() {
  const [repairs, setRepairs] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/reports/repair?t=${Date.now()}`);
        if (res.ok) {
          const data = await res.json();
          setRepairs(data);
          setFilteredData(data);
        }
      } catch (error) {
        console.error("Failed to fetch repairs report", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const q = searchQuery.toLowerCase();
    const filtered = repairs.filter(
      (item) =>
        item.orderNumber?.toLowerCase().includes(q) ||
        item.customer?.name?.toLowerCase().includes(q) ||
        item.itemName?.toLowerCase().includes(q)
    );
    setFilteredData(filtered);
  }, [searchQuery, repairs]);

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/reports" className="text-text-secondary hover:text-accent-gold transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-accent-gold flex items-center gap-3">
            <Wrench size={28} />
            Repair Report
          </h1>
          <p className="text-text-secondary mt-1">Detailed view of all jewelry repair orders.</p>
        </div>
      </div>

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex gap-4">
            <div className="bg-background-tertiary px-6 py-3 rounded-xl border border-border-theme">
              <p className="text-sm text-text-secondary">Total Repair Orders</p>
              <p className="text-2xl font-bold text-accent-gold">{filteredData.length}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input
                type="text"
                placeholder="Search Order No or Customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background-tertiary border border-border-theme rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:border-accent-gold transition-colors"
              />
            </div>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-background-tertiary border border-border-theme px-4 py-2 rounded-xl hover:border-accent-gold transition-colors"
            >
              <Download size={18} />
              Export
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-accent-gold" size={40} />
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border-theme">
            <table className="w-full text-left border-collapse">
              <thead className="bg-background-tertiary">
                <tr className="text-sm text-text-secondary">
                  <th className="p-4 font-medium border-b border-border-theme">Order No</th>
                  <th className="p-4 font-medium border-b border-border-theme">Customer</th>
                  <th className="p-4 font-medium border-b border-border-theme">Item Name</th>
                  <th className="p-4 font-medium border-b border-border-theme">Estimated Cost</th>
                  <th className="p-4 font-medium border-b border-border-theme">Status</th>
                  <th className="p-4 font-medium border-b border-border-theme">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-text-secondary">
                      No repair orders found.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item) => (
                    <tr key={item.id} className="border-b border-border-theme hover:bg-background-tertiary/50 transition-colors">
                      <td className="p-4 font-mono text-sm text-accent-gold">{item.orderNumber}</td>
                      <td className="p-4 font-medium">{item.customer?.name || '-'}</td>
                      <td className="p-4 text-sm">{item.itemName || '-'}</td>
                      <td className="p-4 text-sm text-green-500 font-medium">₹ {(item.estimatedCost || 0).toLocaleString("en-IN")}</td>
                      <td className="p-4 text-sm">
                        <span className={`px-2 py-1 rounded-md text-xs border ${
                          item.status === 'COMPLETED' ? 'border-green-500/50 text-green-500 bg-green-500/10' :
                          item.status === 'IN_PROGRESS' ? 'border-blue-500/50 text-blue-500 bg-blue-500/10' :
                          'border-yellow-500/50 text-yellow-500 bg-yellow-500/10'
                        }`}>
                          {item.status || 'PENDING'}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-text-secondary">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}