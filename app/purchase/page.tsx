"use client";

import { ShoppingCart, PackageCheck, FileText, Download, Filter, Plus, Truck, RotateCcw } from "lucide-react";

export default function PurchaseDashboard() {
  return (
    <main className="p-8 text-text-primary min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-accent-gold flex items-center gap-3">
            <ShoppingCart size={32} />
            Purchase Management
          </h1>
          <p className="text-text-secondary mt-1">Manage purchase orders, suppliers, and received stock.</p>
        </div>
        <button className="flex items-center gap-2 bg-accent-gold text-black px-4 py-2 rounded-md font-medium hover:bg-accent-gold">
          <Plus size={18} />
          Create Purchase Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Purchases", value: "₹ 45.2L", icon: ShoppingCart, color: "text-blue-400" },
          { title: "Pending Orders", value: "12", icon: FileText, color: "text-accent-gold" },
          { title: "Stock Received", value: "320", icon: PackageCheck, color: "text-green-400" },
          { title: "Active Suppliers", value: "48", icon: Truck, color: "text-purple-400" },
        ].map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-background-secondary border border-border-theme rounded-xl p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-text-primary">{kpi.value}</h3>
              </div>
              <div className={`p-3 rounded-lg bg-background-tertiary ${kpi.color}`}>
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-background-secondary border border-border-theme rounded-xl">
        <div className="p-6 border-b border-border-theme flex justify-between items-center">
          <h2 className="text-xl font-semibold text-accent-gold">Recent Purchase Orders</h2>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 bg-background-tertiary text-text-secondary border border-border-theme px-4 py-2 rounded-md text-sm hover:text-accent-gold">
               <Filter size={16} />
               Filter
             </button>
             <button className="flex items-center gap-2 bg-background-tertiary text-text-secondary border border-border-theme px-4 py-2 rounded-md text-sm hover:text-accent-gold">
               <Download size={16} />
               Export
             </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-background-secondary text-text-secondary text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">PO Number</th>
                <th className="px-6 py-4">Supplier</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2b2617] text-sm">
              {[
                { po: "PO-2026-001", supplier: "Global Gold Traders", amount: "₹ 12,50,000", date: "29-07-2026", status: "Completed", color: "text-green-400 bg-green-500/20" },
                { po: "PO-2026-002", supplier: "Surat Diamond Co", amount: "₹ 8,75,000", date: "28-07-2026", status: "Pending", color: "text-accent-gold bg-accent-gold/20" },
                { po: "PO-2026-003", supplier: "Mumbai Gems & Jewels", amount: "₹ 4,20,000", date: "25-07-2026", status: "In Transit", color: "text-blue-400 bg-blue-500/20" },
              ].map((order, idx) => (
                <tr key={idx} className="hover:bg-background-secondary transition-colors">
                  <td className="px-6 py-4 font-medium text-text-primary">{order.po}</td>
                  <td className="px-6 py-4 text-text-secondary">{order.supplier}</td>
                  <td className="px-6 py-4 text-text-secondary">{order.amount}</td>
                  <td className="px-6 py-4 text-text-secondary">{order.date}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`px-2 py-1 rounded-full text-xs ${order.color}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
