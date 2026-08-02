"use client";

import { useEffect, useState } from "react";
import { Users, Search, Plus, Filter, Loader2 } from "lucide-react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // New Customer Form State
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch('/api/customers')
      .then(res => res.json())
      .then(data => {
        setCustomers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleCreateCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          mobile,
          email,
          address
        })
      });
      if (res.ok) {
        setIsModalOpen(false);
        setName("");
        setMobile("");
        setEmail("");
        setAddress("");
        fetchCustomers();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredCustomers = customers.filter(c => 
    (c.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
    (c.mobile || '').includes(searchQuery)
  );

  return (
    <div className="p-8 min-h-screen bg-background-primary text-text-primary relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent flex items-center gap-3">
              <Users size={32} className="text-accent-gold" />
              Customer Management
            </h1>
            <p className="text-text-secondary mt-1">Manage customer profiles and purchase history</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
          >
            <Plus size={18} />
            New Customer
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Total Customers</h3>
            <p className="text-4xl font-bold mt-2 text-accent-gold">
              {loading ? <Loader2 className="animate-spin" /> : customers.length}
            </p>
          </div>
          <div className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Active This Month</h3>
            <p className="text-4xl font-bold mt-2 text-text-primary">
              {loading ? <Loader2 className="animate-spin" /> : customers.length}
            </p>
          </div>
          <div className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Loyalty Members</h3>
            <p className="text-4xl font-bold mt-2 text-text-primary">0</p>
          </div>
        </div>

        <div className="bg-background-secondary/40 backdrop-blur-xl border border-border-theme rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/20 via-transparent to-transparent"></div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-72">
              <Search className="absolute left-3 top-2.5 text-text-primary/40" size={18} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search customers..." 
                className="w-full bg-background-tertiary border border-border-theme rounded-xl py-2 pl-10 pr-4 text-sm text-text-primary focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all placeholder-text-secondary/50"
              />
            </div>
            <button className="flex items-center gap-2 border border-border-theme bg-text-primary/5 px-4 py-2 rounded-xl text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-text-primary/10 transition-colors">
              <Filter size={16} /> Filter
            </button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary uppercase">
                <tr>
                  <th className="px-6 py-4">Customer Name</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Join Date</th>
                  <th className="px-6 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center">
                      <Loader2 className="animate-spin mx-auto text-accent-gold" size={32} />
                    </td>
                  </tr>
                ) : filteredCustomers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-text-secondary">
                      No customers found. Create a new customer to get started.
                    </td>
                  </tr>
                ) : (
                  filteredCustomers.map(customer => (
                    <tr key={customer.id} className="hover:bg-text-primary/5 transition-colors group">
                      <td className="px-6 py-4 font-bold text-text-primary group-hover:text-accent-gold transition-colors">
                        {customer.name || customer.firstName || 'Walk-in Customer'}
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono">{customer.mobile || customer.phone || 'N/A'}</td>
                      <td className="px-6 py-4 text-text-secondary">{customer.email || 'N/A'}</td>
                      <td className="px-6 py-4 text-text-secondary">
                        {new Date(customer.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-bold bg-green-400/10 text-green-400 border border-green-400/20">
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

      {/* CREATE CUSTOMER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background-primary backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-border-theme bg-[#111] p-6 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/50 via-yellow-300 to-accent-gold/50"></div>
            
            <h2 className="text-xl font-bold text-text-primary mb-6">Add New Customer</h2>
            
            <form onSubmit={handleCreateCustomer} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Mobile Number</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 9876543210"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Email Address (Optional)</label>
                <input 
                  type="email" 
                  placeholder="e.g. rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Address (Optional)</label>
                <textarea 
                  rows={2}
                  placeholder="e.g. Mumbai, India"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                />
              </div>

              <div className="mt-8 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-xl border border-border-theme bg-text-primary/5 py-3 text-sm font-semibold text-text-primary hover:bg-text-primary/10 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 rounded-xl bg-accent-gold py-3 text-sm font-bold text-black hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : 'Save Customer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}