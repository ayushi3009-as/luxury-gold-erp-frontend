"use client";

import { useState, useEffect } from "react";
import { Loader2, Plus, BadgeCheck, Search, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BrandsPage() {
  const [brands, setBrands] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // New/Edit Brand State
  const [editId, setEditId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchBrands();
  }, []);

  async function fetchBrands() {
    try {
      const res = await fetch('/api/brands');
      if (res.ok) {
        const json = await res.json();
        setBrands(json);
      }
    } catch (error) {
      console.error("Failed to fetch brands:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function openCreateModal() {
    setEditId(null);
    setName("");
    setDescription("");
    setIsModalOpen(true);
  }

  function openEditModal(b: any) {
    setEditId(b.id);
    setName(b.name);
    setDescription(b.description || "");
    setIsModalOpen(true);
  }

  async function handleSaveBrand(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const url = editId ? `/api/brands/${editId}` : '/api/brands';
      const method = editId ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
      });
      if (res.ok) {
        setIsModalOpen(false);
        setEditId(null);
        setName("");
        setDescription("");
        fetchBrands(); // Refresh list
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

  const filteredBrands = brands.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-[80vh] p-6 text-text-primary">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-200 bg-clip-text text-transparent flex items-center gap-3">
              <BadgeCheck size={28} className="text-accent-gold" />
              Brands
            </h1>
            <p className="mt-1 text-sm text-text-secondary">Organize your jewellery inventory into brands.</p>
          </div>

          <button 
            onClick={openCreateModal}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
          >
            <Plus size={18} />
            New Brand
          </button>
        </div>

        {/* METRICS */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-border-theme relative overflow-hidden shadow-xl">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Total Brands</h3>
            <p className="text-4xl font-bold mt-2 text-text-primary">{brands.length}</p>
          </div>
          <div className="bg-background-secondary/50 backdrop-blur-xl rounded-2xl p-6 border border-border-theme relative overflow-hidden shadow-xl">
            <h3 className="text-xs tracking-widest uppercase font-semibold text-text-secondary">Active</h3>
            <p className="text-4xl font-bold mt-2 text-green-400 flex items-center gap-2">
              <CheckCircle size={20} /> {brands.length}
            </p>
          </div>
        </div>

        {/* CATEGORIES TABLE */}
        <div className="rounded-2xl border border-border-theme bg-background-secondary/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/20 via-transparent to-transparent"></div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-72">
              <Search className="absolute left-3 top-2.5 text-text-primary/40" size={18} />
              <input 
                type="text" 
                placeholder="Search brands..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background-tertiary border border-border-theme rounded-xl py-2 pl-10 pr-4 text-sm text-text-primary focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all placeholder-text-secondary/50"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border-theme bg-background-tertiary">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-theme bg-text-primary/5 text-xs font-semibold tracking-wider text-text-secondary uppercase">
                <tr>
                  <th className="px-6 py-4">Brand Name</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4 text-center">Products Count</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme">
                {filteredBrands.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-text-secondary">
                      No brands found. Create a new one.
                    </td>
                  </tr>
                ) : (
                  filteredBrands.map((b: any) => (
                    <tr key={b.id} className="transition-colors hover:bg-text-primary/5 group">
                      <td className="px-6 py-4 font-bold text-text-primary group-hover:text-accent-gold transition-colors">{b.name}</td>
                      <td className="px-6 py-4 text-text-secondary">{b.description || '-'}</td>
                      <td className="px-6 py-4 text-center font-bold text-text-primary">
                        <span className="bg-text-primary/10 px-3 py-1 rounded-full text-xs">
                          {b._count?.products || 0}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={() => openEditModal(b)} className="text-xs font-semibold text-text-secondary hover:text-accent-gold transition-colors mr-3">Edit</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CREATE CATEGORY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background-primary backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-border-theme bg-background-secondary p-6 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold/50 via-yellow-300 to-accent-gold/50"></div>
            
            <h2 className="text-xl font-bold text-text-primary mb-6">
              {editId ? 'Edit Brand' : 'Create New Brand'}
            </h2>
            
            <form onSubmit={handleSaveBrand} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Brand Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rings, Necklaces"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Description (Optional)</label>
                <textarea 
                  rows={3}
                  placeholder="e.g. All types of gold and diamond rings."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  {isSubmitting ? 'Saving...' : 'Save Brand'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
