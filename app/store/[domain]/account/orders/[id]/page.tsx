import Link from 'next/link';
import { Package, Truck, CheckCircle } from 'lucide-react';

export default function OrderDetailsPage({ params }: { params: { domain: string, id: string } }) {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      <Link href="/account" className="text-white/50 hover:text-gold text-xs uppercase tracking-widest mb-8 block transition-colors">
        ← Back to Dashboard
      </Link>
      
      <div className="border-b border-white/10 pb-8 mb-12 flex justify-between items-end">
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">Order Details</p>
          <h1 className="text-4xl font-serif text-white">#{params.id || 'TIV-89240'}</h1>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-sm">Placed on October 15, 2026</p>
          <p className="text-green-400 text-sm font-medium mt-1">Status: In Transit</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          {/* Tracking Timeline */}
          <div className="p-8 border border-white/5 bg-[#111]/30">
            <h3 className="text-xl font-serif text-white mb-8">Tracking</h3>
            <div className="relative border-l border-white/20 ml-4 space-y-10">
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gold"></div>
                <p className="text-white font-medium">Order Confirmed</p>
                <p className="text-white/50 text-sm">Oct 15, 10:00 AM</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gold"></div>
                <p className="text-white font-medium">Crafting & Polishing</p>
                <p className="text-white/50 text-sm">Oct 16, 2:30 PM</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-gold bg-[#111]"></div>
                <p className="text-white font-medium">In Transit (Secured Courier)</p>
                <p className="text-white/50 text-sm">Arriving by Oct 20</p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif text-white mb-6">Items</h3>
            <div className="flex gap-6 items-center p-6 border border-white/5 bg-[#111]/30">
              <img src="https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=200" className="w-20 h-24 object-cover" />
              <div className="flex-grow">
                <h4 className="text-lg font-serif text-white">22K Royal Kundan Necklace</h4>
                <p className="text-white/50 text-sm my-1">Qty: 1</p>
                <p className="text-gold">₹2,45,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <div className="p-8 border border-white/5 bg-[#111]/30 sticky top-32">
            <h3 className="text-xl font-serif text-white mb-6">Summary</h3>
            <div className="space-y-4 text-sm text-white/70 mb-6">
              <div className="flex justify-between"><span>Subtotal</span><span>₹2,45,000</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>Complimentary</span></div>
              <div className="flex justify-between"><span>Taxes</span><span>Included</span></div>
            </div>
            <div className="border-t border-white/10 pt-6 flex justify-between items-center text-lg text-white font-medium">
              <span>Total</span>
              <span className="text-gold">₹2,45,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
