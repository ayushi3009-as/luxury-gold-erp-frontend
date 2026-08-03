"use client";

import { useState, useEffect } from "react";
import { Loader2, Download, Search, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CustomersReportPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/reports/customers?t=${Date.now()}`);
        if (res.ok) {
          const data = await res.json();
          setCustomers(data);
          setFilteredData(data);
        }
      } catch (error) {
        console.error("Failed to fetch customers report", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const q = searchQuery.toLowerCase();
    const filtered = customers.filter(
      (item) =>
        item.name?.toLowerCase().includes(q) ||
        item.mobile?.toLowerCase().includes(q) ||
        item.email?.toLowerCase().includes(q)
    );
    setFilteredData(filtered);
  }, [searchQuery, customers]);

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/reports" className="text-text-secondary hover:text-accent-gold transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-accent-gold flex items-center gap-3">
            <Users size={28} />
            Customer Report
          </h1>
          <p className="text-text-secondary mt-1">Detailed view of registered customers and their history.</p>
        </div>
      </div>

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex gap-4">
            <div className="bg-background-tertiary px-6 py-3 rounded-xl border border-border-theme">
              <p className="text-sm text-text-secondary">Total Customers</p>
              <p className="text-2xl font-bold text-accent-gold">{filteredData.length}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input
                type="text"
                placeholder="Search Name or Phone..."
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
                  <th className="p-4 font-medium border-b border-border-theme">Name</th>
                  <th className="p-4 font-medium border-b border-border-theme">Mobile</th>
                  <th className="p-4 font-medium border-b border-border-theme">Email</th>
                  <th className="p-4 font-medium border-b border-border-theme">Registered Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-text-secondary">
                      No customer records found.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item) => (
                    <tr key={item.id} className="border-b border-border-theme hover:bg-background-tertiary/50 transition-colors">
                      <td className="p-4 font-medium text-accent-gold">{item.name}</td>
                      <td className="p-4 text-sm font-mono text-text-secondary">{item.mobile || '-'}</td>
                      <td className="p-4 text-sm text-text-secondary">{item.email || '-'}</td>
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