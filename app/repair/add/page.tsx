"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Loader2, ChevronRight, User, Package, CircleDollarSign } from "lucide-react";

export default function RepairEntry() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      customerName: formData.get("customerName"),
      customerPhone: formData.get("customerPhone"),
      itemName: formData.get("itemName"),
      description: formData.get("description"),
      estimatedCost: formData.get("estimatedCost"),
      advancePaid: formData.get("advancePaid"),
      expectedDate: formData.get("expectedDate"),
    };

    try {
      const res = await fetch('/api/repair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        router.push('/repair');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-[80vh] p-8 text-text-primary">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary font-medium tracking-widest uppercase mb-2">
            <span>Repairs</span>
            <ChevronRight size={14} />
            <span className="text-accent-gold">New Entry</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold bg-clip-text text-transparent flex items-center gap-3">
            <PlusCircle size={36} className="text-accent-gold" />
            Repair Entry
          </h1>
          <p className="mt-2 text-text-secondary">Log a new repair job and generate an order number.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#111111]/80 backdrop-blur-xl rounded-3xl border border-border-theme shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold via-yellow-300 to-accent-gold"></div>
          
          <div className="p-8 space-y-8">
            
            {/* Customer Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2 border-b border-border-theme pb-2">
                <User size={18} className="text-accent-gold"/> Customer Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Customer Name</label>
                  <input required name="customerName" type="text" className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary focus:border-accent-gold/50 focus:outline-none transition-all placeholder:text-text-primary/20" placeholder="e.g. Rahul Sharma" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Phone Number</label>
                  <input required name="customerPhone" type="text" className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary focus:border-accent-gold/50 focus:outline-none transition-all placeholder:text-text-primary/20" placeholder="e.g. 9876543210" />
                </div>
              </div>
            </div>

            {/* Item Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2 border-b border-border-theme pb-2">
                <Package size={18} className="text-accent-gold"/> Item Details
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Item Name / Type</label>
                  <input required name="itemName" type="text" className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary focus:border-accent-gold/50 focus:outline-none transition-all placeholder:text-text-primary/20" placeholder="e.g. Broken Gold Chain 22K" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Repair Instructions</label>
                  <textarea name="description" rows={3} className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary focus:border-accent-gold/50 focus:outline-none transition-all placeholder:text-text-primary/20" placeholder="Detailed instructions for the worker..."></textarea>
                </div>
              </div>
            </div>

            {/* Pricing & Dates */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2 border-b border-border-theme pb-2">
                <CircleDollarSign size={18} className="text-accent-gold"/> Estimates & Timeline
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Est. Cost (₹)</label>
                  <input name="estimatedCost" type="number" min="0" className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary focus:border-accent-gold/50 focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Advance Paid (₹)</label>
                  <input name="advancePaid" type="number" min="0" className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary focus:border-accent-gold/50 focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Expected Date</label>
                  <input name="expectedDate" type="date" className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-sm text-text-primary focus:border-accent-gold/50 focus:outline-none transition-all" />
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="p-6 bg-background-tertiary border-t border-border-theme flex justify-end gap-4">
            <button type="button" onClick={() => router.back()} className="px-6 py-3 rounded-xl border border-border-theme text-text-primary font-semibold hover:bg-text-primary/5 transition-all text-sm">
              Cancel
            </button>
            <button disabled={isSubmitting} type="submit" className="px-8 py-3 rounded-xl bg-accent-gold text-black font-bold hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 text-sm disabled:opacity-50">
              {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : "Save Repair Order"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}