'use client';
import { ArrowRight, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalItems, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif text-[#111] mb-6">Your Bag is Empty</h1>
        <p className="text-gray-500 mb-8">Discover our latest collections and find something exceptional.</p>
        <Link href="/collections" className="bg-[#111] text-text-primary px-8 py-4 uppercase tracking-widest text-xs hover:bg-background-primary transition-colors">
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen bg-white text-[#111]">
      <div className="border-b border-gray-200 pb-8 mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif mb-2">Shopping Bag</h1>
          <p className="text-gray-500 text-sm">{getTotalItems()} item(s)</p>
        </div>
        <Link href="/collections" className="text-gray-500 text-sm tracking-widest uppercase hover:text-[#111] transition-colors border-b border-transparent hover:border-[#111] pb-1">
          Continue Shopping
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Cart Items */}
        <div className="flex-grow space-y-8">
          {items.map((item) => (
            <div key={item.id} className="flex gap-6 items-center border-b border-gray-100 pb-8">
              <div className="w-32 h-40 bg-gray-50 overflow-hidden shrink-0">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif text-[#111] pr-4">{item.name}</h3>
                  <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className="text-gray-500 text-sm mb-4">Purity: {item.purity} • Weight: {item.weight}</p>
                <div className="flex justify-between items-end">
                  <div className="flex items-center border border-gray-200 text-[#111]">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-3 py-1 hover:bg-gray-50">-</button>
                    <span className="px-4 py-1 border-x border-gray-200">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-gray-50">+</button>
                  </div>
                  <p className="text-lg font-light">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-gray-50 p-8 border border-gray-100">
            <h3 className="text-xl font-serif text-[#111] mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6 text-sm text-gray-600 font-light">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
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

            <div className="border-t border-gray-200 pt-6 mb-8 flex justify-between items-center text-lg font-serif">
              <span>Total</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>

            <Link href="/checkout" className="w-full bg-[#111] text-text-primary py-4 uppercase tracking-widest text-sm font-bold hover:bg-background-primary transition-colors mb-4 flex items-center justify-center gap-2">
              Proceed to Checkout <ArrowRight size={16} />
            </Link>
            <p className="text-center text-gray-400 text-xs mt-4">Secure encrypted checkout.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
