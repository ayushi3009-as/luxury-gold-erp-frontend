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
  FileSpreadsheet
} from "lucide-react";

export default function ReportsDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchReportsData() {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/reports/dashboard?t=${Date.now()}`);
      if (res.status === 401) {
        console.warn('Unauthorized fetch to reports dashboard');
      }
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
    repairs: 0
  };

  const reportCards = [
    {
      title: "Inventory Reports",
      value: reportsData.inventory.toLocaleString("en-IN"),
      description: "Products Available",
      icon: Package,
      href: "/reports/inventory",
    },
    {
      title: "Sales Reports",
      value: reportsData.sales.toLocaleString("en-IN"),
      description: "Completed Sales",
      icon: ShoppingCart,
      href: "/reports/sales",
    },
    {
      title: "Customer Reports",
      value: reportsData.customers.toLocaleString("en-IN"),
      description: "Registered Customers",
      icon: Users,
      href: "/reports/customers",
    },
    {
      title: "Repair Reports",
      value: reportsData.repairs.toLocaleString("en-IN"),
      description: "Repair Orders",
      icon: Wrench,
      href: "/reports/repair",
    },
  ];

  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">
      {/* Header */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-accent-gold">
            Reports Dashboard
          </h1>
          <p className="text-text-secondary mt-2">
            Overview of all reports in the Luxury Gold ERP System
          </p>
        <div className="flex items-center gap-3">
          <button onClick={() => alert("Export PDF feature coming soon")} className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-secondary px-4 py-2 text-sm text-text-secondary hover:border-red-500 hover:text-red-500 transition-colors">
            <FileText size={16} />
            Export PDF
          </button>
          <button onClick={() => alert("Export Excel feature coming soon")} className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-secondary px-4 py-2 text-sm text-text-secondary hover:border-green-500 hover:text-green-500 transition-colors">
            <FileSpreadsheet size={16} />
            Export Excel
          </button>
          <button onClick={fetchReportsData} className="flex items-center gap-2 rounded-lg border border-[#6d5318] bg-[#17150d] px-4 py-2 text-sm text-accent-gold hover:bg-[#2a2414] transition-colors">
            <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {reportCards.map((report) => {
          const Icon = report.icon;

          return (
            <div
              key={report.title}
              className="
                bg-background-secondary
                border
                border-border-theme
                rounded-2xl
                p-6
                hover:border-yellow-500
                transition
              "
            >
              <div className="flex justify-between items-center">
                <Icon size={34} className="text-accent-gold" />
                <span className="text-3xl font-bold text-text-primary">
                  {report.value}
                </span>
              </div>

              <h2 className="text-xl font-semibold mt-6 text-accent-gold">
                {report.title}
              </h2>
              <p className="text-text-secondary mt-2">
                {report.description}
              </p>

              <Link
                href={report.href}
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  border
                  border-yellow-500
                  text-accent-gold
                  rounded-xl
                  px-4
                  py-3
                  hover:bg-accent-gold
                  hover:text-black
                  transition
                "
              >
                <span>Open Report</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Quick Access */}
      <div
        className="
          bg-background-secondary
          border
          border-border-theme
          rounded-2xl
          p-8
        "
      >
        <h2 className="text-2xl font-bold text-accent-gold mb-6">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/reports/inventory"
            className="border border-gray-700 rounded-xl p-4 hover:border-yellow-500 transition"
          >
            📦 Inventory Report
          </Link>
          <Link
            href="/reports/sales"
            className="border border-gray-700 rounded-xl p-4 hover:border-yellow-500 transition"
          >
            💰 Sales Report
          </Link>
          <Link
            href="/reports/customers"
            className="border border-gray-700 rounded-xl p-4 hover:border-yellow-500 transition"
          >
            👥 Customer Report
          </Link>
          <Link
            href="/reports/repair"
            className="border border-gray-700 rounded-xl p-4 hover:border-yellow-500 transition"
          >
            🔧 Repair Report
          </Link>
        </div>
      </div>
    </main>
  );
}