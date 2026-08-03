"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Package,
  ShoppingCart,
  Users,
  Wrench,
  ArrowRight,
  Loader2,
  RefreshCw,
  FileText,
  FileSpreadsheet,
  Activity
} from "lucide-react";

export default function ReportsDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchReportsData() {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/reports/dashboard?t=${Date.now()}`);
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchReportsData();
  }, []);

  if (isLoading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-primary">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const reportsData = data || {
    inventory: 0,
    sales: 0,
    customers: 0,
    repairs: 0,
    recentActivity: []
  };

  const formatCurrency = (v: number) => `₹ ${Number(v).toLocaleString("en-IN")}`;

  const reportCards = [
    {
      title: "Inventory Reports",
      value: reportsData.inventory.toLocaleString("en-IN"),
      description: "Products Available",
      icon: Package,
      href: "/reports/inventory",
      color: "text-blue-400"
    },
    {
      title: "Sales Reports",
      value: reportsData.sales.toLocaleString("en-IN"),
      description: "Completed Sales",
      icon: ShoppingCart,
      href: "/reports/sales",
      color: "text-green-500"
    },
    {
      title: "Customer Reports",
      value: reportsData.customers.toLocaleString("en-IN"),
      description: "Registered Customers",
      icon: Users,
      href: "/reports/customers",
      color: "text-purple-400"
    },
    {
      title: "Repair Reports",
      value: reportsData.repairs.toLocaleString("en-IN"),
      description: "Repair Orders",
      icon: Wrench,
      href: "/reports/repair",
      color: "text-orange-400"
    },
  ];

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">
      {/* Header */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-accent-gold flex items-center gap-3">
            <FileText size={32} />
            Reports Dashboard
          </h1>
          <p className="text-text-secondary mt-1">
            Overview of all reports in the Luxury Gold ERP System
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => alert("Export PDF feature coming soon")} className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-secondary px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold transition-colors">
            <FileText size={16} />
            Export PDF
          </button>
          <button onClick={() => alert("Export Excel feature coming soon")} className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-secondary px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold transition-colors">
            <FileSpreadsheet size={16} />
            Export Excel
          </button>
          <button onClick={fetchReportsData} className="flex items-center gap-2 rounded-lg bg-accent-gold text-black font-semibold px-4 py-2 text-sm hover:bg-yellow-500 transition-colors shadow-sm">
            <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
            Refresh Data
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {reportCards.map((report) => {
          const Icon = report.icon;
          return (
            <div key={report.title} className="bg-background-secondary border border-border-theme rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-text-secondary text-sm">{report.title}</h3>
                  <span className={`text-3xl font-bold mt-2 block ${report.color}`}>
                    {report.value}
                  </span>
                  <p className="text-xs text-text-secondary mt-1">{report.description}</p>
                </div>
                <div className="p-3 bg-background-tertiary rounded-xl border border-border-theme">
                  <Icon size={24} className={report.color} />
                </div>
              </div>

              <Link href={report.href} className="mt-6 flex items-center justify-between text-sm text-accent-gold hover:underline group-hover:gap-1 transition-all">
                <span>View Full Report</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Quick Access */}
        <div className="xl:col-span-1 bg-background-secondary border border-border-theme rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-accent-gold mb-6 flex items-center gap-2">
            <ShoppingCart size={20} />
            Quick Links
          </h2>
          <div className="flex flex-col gap-3">
            {reportCards.map((report) => (
              <Link
                key={report.href}
                href={report.href}
                className="flex items-center gap-3 bg-background-tertiary border border-border-theme rounded-xl p-4 hover:border-accent-gold hover:text-accent-gold transition-colors"
              >
                <report.icon size={18} />
                <span className="font-medium">{report.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="xl:col-span-2 bg-background-secondary border border-border-theme rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-accent-gold mb-6 flex items-center gap-2">
            <Activity size={20} />
            Recent Sales Activity
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-theme text-sm text-text-secondary">
                  <th className="pb-3 font-medium">Invoice No</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {reportsData.recentActivity.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-text-secondary">
                      No recent sales found.
                    </td>
                  </tr>
                ) : (
                  reportsData.recentActivity.map((sale: any) => (
                    <tr key={sale.invoiceNo} className="border-b border-border-theme hover:bg-background-tertiary transition-colors">
                      <td className="py-3 font-mono text-sm text-text-secondary">{sale.invoiceNo}</td>
                      <td className="py-3 font-medium">{sale.customer?.name || 'Walk-in Customer'}</td>
                      <td className="py-3 text-green-500 font-medium">{formatCurrency(sale.totalAmount)}</td>
                      <td className="py-3 text-sm text-text-secondary">
                        {new Date(sale.createdAt).toLocaleDateString("en-IN", {
                          day: "2-digit", month: "short", year: "numeric",
                          hour: '2-digit', minute:'2-digit'
                        })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}