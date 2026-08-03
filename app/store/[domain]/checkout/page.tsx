'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store/cartStore';

export default function CheckoutPage({ params }: { params: { domain: string } }) {
  const router = useRouter();
  const { items, getSubtotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    pincode: ''
  });

  const subtotal = getSubtotal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch on first render
  }

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif text-[#111] mb-6">Your Bag is Empty</h1>
        <Link href="/collections" className="bg-[#111] text-text-primary px-8 py-4 uppercase tracking-widest text-xs hover:bg-background-primary transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/store/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: formData,
          items,
          subtotal,
          tenantSubdomain: params.domain
        })
      });

      if (res.ok) {
        clearCart();
        router.push(`/checkout/success`);
      } else {
        const err = await res.json();
        alert(`Checkout failed: ${err.error || 'Unknown error'}`);
      }
    } catch (error) {
      alert('An error occurred during checkout.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif text-[#111] mb-2">Secure Checkout</h1>
        <p className="text-gray-500 text-sm tracking-widest uppercase">Encrypted & Certified</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 space-y-12">
          <form id="checkout-form" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
              <div className="w-6 h-6 rounded-full bg-background-primary text-text-primary flex items-center justify-center text-xs font-bold">1</div>
              <h2 className="text-2xl font-serif text-[#111]">Shipping & Contact Details</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input required name="firstName" onChange={handleInputChange} type="text" placeholder="First Name" className="bg-transparent border border-gray-300 p-3 text-[#111] col-span-1 focus:border-black outline-none" />
              <input required name="lastName" onChange={handleInputChange} type="text" placeholder="Last Name" className="bg-transparent border border-gray-300 p-3 text-[#111] col-span-1 focus:border-black outline-none" />
              <input required name="email" onChange={handleInputChange} type="email" placeholder="Email Address" className="bg-transparent border border-gray-300 p-3 text-[#111] col-span-1 focus:border-black outline-none" />
              <input required name="mobile" onChange={handleInputChange} type="tel" placeholder="Mobile Number" className="bg-transparent border border-gray-300 p-3 text-[#111] col-span-1 focus:border-black outline-none" />
              <input required name="address" onChange={handleInputChange} type="text" placeholder="Address Line 1" className="bg-transparent border border-gray-300 p-3 text-[#111] col-span-2 focus:border-black outline-none" />
              <input required name="city" onChange={handleInputChange} type="text" placeholder="City" className="bg-transparent border border-gray-300 p-3 text-[#111] col-span-1 focus:border-black outline-none" />
              <input required name="pincode" onChange={handleInputChange} type="text" placeholder="Pincode" className="bg-transparent border border-gray-300 p-3 text-[#111] col-span-1 focus:border-black outline-none" />
            </div>

            <div className="mt-12 opacity-50">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
                <div className="w-6 h-6 rounded-full border border-gray-400 text-gray-500 flex items-center justify-center text-xs">2</div>
                <h2 className="text-2xl font-serif text-gray-500">Payment Method (Offline Demo)</h2>
              </div>
              <p className="text-sm text-gray-500">For this demo, your order will be created as an Invoice in the ERP.</p>
            </div>
          </form>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-50 p-8 border border-gray-100">
            <h3 className="text-xl font-serif text-[#111] mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.imageUrl} className="w-16 h-20 object-cover shrink-0" alt={item.name} />
                  <div>
                    <p className="text-sm text-[#111] font-serif">{item.name}</p>
                    <p className="text-gray-500 mt-1 text-xs">Qty: {item.quantity}</p>
                    <p className="text-[#111] mt-1 text-xs">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-8 flex justify-between items-center text-lg text-[#111] font-medium">
              <span>Total</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <button disabled={loading} form="checkout-form" type="submit" className="w-full block text-center bg-[#111] text-text-primary py-4 uppercase tracking-widest text-sm font-bold hover:bg-background-primary transition-colors disabled:opacity-50">
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
