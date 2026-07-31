import { ArrowRight, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="border-b border-white/10 pb-8 mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2">Shopping Bag</h1>
          <p className="text-white/50 text-sm">2 items</p>
        </div>
        <Link href="/collections" className="text-accent-gold text-sm tracking-widest uppercase hover:text-white transition-colors">
          Continue Shopping
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Cart Items */}
        <div className="flex-grow space-y-8">
          {/* Item 1 */}
          <div className="flex gap-6 items-center border-b border-white/5 pb-8">
            <div className="w-32 h-40 bg-[#111] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=400&q=80" alt="Necklace" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif text-white">22K Royal Kundan Necklace</h3>
                <button className="text-white/30 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
              </div>
              <p className="text-white/40 text-sm mb-4">Purity: 22K • Weight: 45g</p>
              <div className="flex justify-between items-end">
                <div className="border border-white/20 px-4 py-2 text-white">Qty: 1</div>
                <p className="text-accent-gold text-lg">₹2,45,000</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-6 items-center border-b border-white/5 pb-8">
            <div className="w-32 h-40 bg-[#111] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=400&q=80" alt="Ring" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif text-white">Solitaire Platinum Ring</h3>
                <button className="text-white/30 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
              </div>
              <p className="text-white/40 text-sm mb-4">Clarity: VVS1 • Weight: 1.5ct</p>
              <div className="flex justify-between items-end">
                <div className="border border-white/20 px-4 py-2 text-white">Qty: 1</div>
                <p className="text-accent-gold text-lg">₹3,50,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-[#111] p-8 border border-white/5">
            <h3 className="text-xl font-serif text-white mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6 text-sm text-white/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹5,95,000</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mb-8 flex justify-between items-center text-lg text-white font-medium">
              <span>Total</span>
              <span className="text-accent-gold">₹5,95,000</span>
            </div>

            <button className="w-full bg-accent-gold text-black py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors mb-4 flex items-center justify-center gap-2">
              Proceed to Checkout <ArrowRight size={16} />
            </button>
            <p className="text-center text-white/40 text-xs">Secure encrypted checkout.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
