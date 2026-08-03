"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Filter, Plus, Box, Loader2, Sparkles } from "lucide-react";

export default function ProductsPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-gold" size={40} />
      </div>
    );
  }

  const products = Array.isArray(data) ? data : (data?.products || []);
  const m = data?.metrics || { 
    totalProducts: products.length, 
    goldProducts: products.filter((p: any) => p.category === 'Gold Jewellery').length, 
    diamondProducts: products.filter((p: any) => p.category === 'Diamond Jewellery').length 
  };

  const filteredProducts = products.filter((p: any) => 
    p.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.productCode?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-[80vh] p-6 text-text-primary">
      {/* Decorative Blur */}
      <div className="absolute top-[-5%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text-primary flex items-center gap-3">
              <Box size={28} className="text-accent-gold" />
              Product Management
            </h1>
            <p className="mt-1 text-sm text-text-secondary">View and manage all jewellery pieces in your ERP.</p>
          </div>

          <Link href="/products/add">
            <button className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]">
              <Plus size={18} />
              Add Product
            </button>
          </Link>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Total Products</h3>
            <p className="text-4xl font-bold mt-2 text-text-primary group-hover:text-accent-gold transition-colors">
              {m.totalProducts}
            </p>
          </div>
          <div className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Gold Items</h3>
            <p className="text-4xl font-bold mt-2 text-text-primary">
              {m.goldProducts}
            </p>
          </div>
          <div className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-border-theme relative overflow-hidden group hover:border-accent-gold/30 transition-all shadow-xl">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary flex items-center gap-2">
              <Sparkles size={12} className="text-accent-gold" /> Diamond Items
            </h3>
            <p className="text-4xl font-bold mt-2 text-text-primary">
              {m.diamondProducts}
            </p>
          </div>
        </div>

        {/* PRODUCT TABLE */}
        <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/20 via-transparent to-transparent"></div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-72">
              <Search className="absolute left-3 top-2.5 text-text-primary/40" size={18} />
              <input 
                type="text" 
                placeholder="Search Code or Name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                  <th className="px-6 py-4">Code</th>
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Weight (g)</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-text-secondary">
                      No products found. Add a new product to get started.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((p: any) => (
                    <tr key={p.id} className="transition-colors hover:bg-text-primary/5 group">
                      <td className="px-6 py-4 font-mono font-medium text-text-primary/60 group-hover:text-text-primary transition-colors">{p.productCode}</td>
                      <td className="px-6 py-4 font-bold text-text-primary">{p.name}</td>
                      <td className="px-6 py-4 text-text-secondary">{p.category}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                          p.purity?.includes('22K') ? 'bg-yellow-500/10 text-yellow-500' : 'bg-blue-400/10 text-blue-400'
                        }`}>
                          {p.purity || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-accent-gold">{p.weight || 0} g</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${p.isPublished ? 'bg-green-400/10 text-green-400 border-green-400/20' : 'bg-gray-400/10 text-gray-400 border-gray-400/20'}`}>
                          {p.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/products/edit/${p.id}`}>
                          <button className="text-xs font-semibold text-text-secondary hover:text-accent-gold transition-colors mr-3">Edit</button>
                        </Link>
                        <button className="text-xs font-semibold text-red-400 hover:text-red-500 transition-colors">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}