"use client";

import { useState, useEffect } from "react";
import { 
  Factory, 
  Wrench, 
  PackageCheck, 
  Users, 
  Plus,
  Loader2,
  Calendar,
  ChevronRight
} from "lucide-react";

export default function ManufacturingPage() {
  const [data, setData] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("1");

  useEffect(() => {
    fetchData();
    fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json)) {
          setProducts(json);
        } else if (json && Array.isArray(json.products)) {
          setProducts(json.products);
        } else {
          setProducts([]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  async function fetchData() {
    try {
      const res = await fetch('/api/manufacturing');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error("Failed to fetch manufacturing data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreateJob(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/manufacturing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity })
      });
      if (res.ok) {
        setIsModalOpen(false);
        setProductId("");
        setQuantity("1");
        fetchData();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const metrics = data?.metrics || { totalOrders: 0, pendingCards: 0, completedItems: 0, activeWorkers: 12 };
  const orders = data?.orders || [];

  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-text-secondary font-medium tracking-widest uppercase mb-2">
              <span>Dashboard</span>
              <ChevronRight size={14} />
              <span className="text-accent-gold">Manufacturing</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold bg-clip-text text-transparent flex items-center gap-3">
              <Factory size={36} className="text-accent-gold" />
              Manufacturing Dashboard
            </h1>
            <p className="mt-2 text-text-secondary">Monitor production, job cards, workers and manufacturing operations.</p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
          >
            <Plus size={18} />
            New Production Job
          </button>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-4 mb-10">
          <div className="bg-[#111111]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent-gold/10 text-accent-gold">
                <Factory size={20} />
              </div>
              <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Total Orders</h3>
            </div>
            <p className="text-4xl font-bold text-white group-hover:text-accent-gold transition-colors">{metrics.totalOrders}</p>
          </div>
          <div className="bg-[#111111]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500">
                <Wrench size={20} />
              </div>
              <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Pending Job Cards</h3>
            </div>
            <p className="text-4xl font-bold text-white">{metrics.pendingCards}</p>
          </div>
          <div className="bg-[#111111]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                <PackageCheck size={20} />
              </div>
              <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Completed Items</h3>
            </div>
            <p className="text-4xl font-bold text-white">{metrics.completedItems}</p>
          </div>
          <div className="bg-[#111111]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                <Users size={20} />
              </div>
              <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Active Workers</h3>
            </div>
            <p className="text-4xl font-bold text-white">{metrics.activeWorkers}</p>
          </div>
        </div>

        {/* TABLE */}
        <div className="rounded-2xl border border-white/5 bg-[#111111]/60 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/40 via-transparent to-transparent"></div>
          
          <h2 className="text-lg font-bold text-accent-gold mb-6 tracking-wider uppercase flex items-center gap-2">
            <Calendar size={18} /> Recent Job Cards (Live Data)
          </h2>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-text-secondary uppercase">
                <tr>
                  <th className="px-6 py-4">Order No.</th>
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Quantity</th>
                  <th className="px-6 py-4">Start Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-text-secondary">
                      No manufacturing orders found. Start a new production job.
                    </td>
                  </tr>
                ) : (
                  orders.map((order: any) => (
                    <tr key={order.id} className="transition-colors hover:bg-white/5 group">
                      <td className="px-6 py-4 font-mono font-medium text-white/70 group-hover:text-accent-gold transition-colors">{order.orderNumber}</td>
                      <td className="px-6 py-4 font-bold text-white">{order.product?.name || 'Unknown Product'}</td>
                      <td className="px-6 py-4 text-white font-medium">{order.quantity} Units</td>
                      <td className="px-6 py-4 text-text-secondary">
                        {new Date(order.startDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                          order.status === 'PENDING' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                          order.status === 'COMPLETED' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                          'bg-blue-500/10 text-blue-500 border-blue-500/20'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-xs font-semibold text-text-secondary hover:text-accent-gold transition-colors">Manage</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CREATE ORDER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] p-8 shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden transform transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/50 via-yellow-300 to-accent-gold/50"></div>
            
            <h2 className="text-2xl font-bold text-white mb-2">New Production Job</h2>
            <p className="text-sm text-text-secondary mb-8">Select a product from inventory to generate a new job card.</p>
            
            <form onSubmit={handleCreateJob} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Target Product</label>
                <select 
                  required
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                >
                  <option value="">-- Select Product --</option>
                  {products.map((p: any) => (
                    <option key={p.id} value={p.id}>{p.name} ({p.sku})</option>
                  ))}
                </select>
                {products.length === 0 && (
                  <p className="text-[10px] text-red-400 mt-1">No products found in database. Create a product first.</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Production Quantity</label>
                <input 
                  type="number" 
                  min="1"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting || products.length === 0}
                  className="flex-1 rounded-xl bg-accent-gold py-3.5 text-sm font-bold text-black hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Generating...' : 'Start Job'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}