"use client";

import { useEffect, useState } from "react";
import { Users, Search, Plus, Filter, Loader2 } from "lucide-react";
import Link from "next/link";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/API/customers')
      .then(res => res.json())
      .then(data => {
        setCustomers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8 min-h-screen bg-background-primary text-text-primary">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-accent-gold flex items-center gap-3">
            <Users size={32} />
            Customer Management
          </h1>
          <p className="text-text-secondary mt-1">Manage customer profiles and purchase history</p>
        </div>
        <button className="flex items-center gap-2 bg-accent-gold text-black px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow">
          <Plus size={18} />
          New Customer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-text-secondary">Total Customers</h3>
          <p className="text-3xl font-bold mt-2 text-accent-gold">
            {loading ? <Loader2 className="animate-spin" /> : customers.length}
          </p>
        </div>
        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-text-secondary">Active This Month</h3>
          <p className="text-3xl font-bold mt-2">
            {loading ? <Loader2 className="animate-spin" /> : customers.length}
          </p>
        </div>
        <div className="bg-background-secondary rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-text-secondary">Loyalty Members</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
      </div>

      <div className="bg-background-secondary border border-border-theme rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-72">
            <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="w-full bg-background-tertiary border border-border-theme rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-gold"
            />
          </div>
          <button className="flex items-center gap-2 border border-border-theme px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-accent-gold hover:border-accent-gold transition-colors">
            <Filter size={16} /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-theme text-sm text-text-secondary">
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Phone</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium">Join Date</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center">
                    <Loader2 className="animate-spin mx-auto text-accent-gold" size={32} />
                  </td>
                </tr>
              ) : customers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-text-secondary">
                    No customers found. Create a bill to add customers.
                  </td>
                </tr>
              ) : (
                customers.map(customer => (
                  <tr key={customer.id} className="border-b border-border-theme hover:bg-background-tertiary transition-colors">
                    <td className="py-4 font-medium text-text-primary">
                      {customer.firstName} {customer.lastName}
                    </td>
                    <td className="py-4 text-text-secondary">{customer.phone || 'N/A'}</td>
                    <td className="py-4 text-text-secondary">{customer.email || 'N/A'}</td>
                    <td className="py-4 text-text-secondary text-sm">
                      {new Date(customer.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                        Active
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}