import Link from 'next/link';
import { Check } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif text-white mb-2">Secure Checkout</h1>
        <p className="text-white/50 text-sm tracking-widest uppercase">Encrypted & Certified</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 space-y-12">
          {/* Step 1 */}
          <div>
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <div className="w-6 h-6 rounded-full bg-gold text-black flex items-center justify-center text-xs font-bold">1</div>
              <h2 className="text-2xl font-serif text-white">Shipping Address</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="bg-transparent border border-white/20 p-3 text-white col-span-1 focus:border-gold outline-none" />
              <input type="text" placeholder="Last Name" className="bg-transparent border border-white/20 p-3 text-white col-span-1 focus:border-gold outline-none" />
              <input type="text" placeholder="Address Line 1" className="bg-transparent border border-white/20 p-3 text-white col-span-2 focus:border-gold outline-none" />
              <input type="text" placeholder="City" className="bg-transparent border border-white/20 p-3 text-white col-span-1 focus:border-gold outline-none" />
              <input type="text" placeholder="Pincode" className="bg-transparent border border-white/20 p-3 text-white col-span-1 focus:border-gold outline-none" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="opacity-50">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <div className="w-6 h-6 rounded-full border border-white/50 text-white/50 flex items-center justify-center text-xs">2</div>
              <h2 className="text-2xl font-serif text-white">Payment Method</h2>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-[#111] p-8 border border-white/5">
            <h3 className="text-xl font-serif text-white mb-6">Order Summary</h3>
            <div className="flex gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=200" className="w-16 h-20 object-cover" />
              <div>
                <p className="text-sm text-white/90 font-serif">22K Royal Kundan Necklace</p>
                <p className="text-gold mt-1 text-xs">₹2,45,000</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 mb-8 flex justify-between items-center text-lg text-white font-medium">
              <span>Total</span>
              <span className="text-gold">₹2,45,000</span>
            </div>
            <Link href="/checkout/success" className="w-full block text-center bg-gold text-black py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors">
              Continue to Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
