"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, ShieldCheck, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("erp_cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  const removeFromCart = (id: string) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    localStorage.setItem("erp_cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setLoading(true);

    try {
      // 1. Create a dummy customer for online sales
      const customerRes = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: 'Online Customer',
          phone: '0000000000',
          email: 'online@store.com',
          panNumber: '',
          address: 'Online Order'
        })
      });
      const customer = await customerRes.json();

      // 2. Create Invoice and deduct stock
      const totalAmount = cart.reduce((acc, item) => acc + item.sellingPrice, 0);
      
      const invoiceRes = await fetch('/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId: customer.id,
          products: cart.map(item => ({
            productId: item.id,
            quantity: 1,
            price: item.sellingPrice
          })),
          subTotal: totalAmount,
          tax: 0,
          discount: 0,
          totalAmount: totalAmount,
          paymentMode: 'ONLINE'
        })
      });

      if (invoiceRes.ok) {
        // Clear cart
        localStorage.removeItem("erp_cart");
        setCart([]);
        window.dispatchEvent(new Event("storage"));
        alert("Payment Successful! Your order has been placed. Inventory has been updated globally.");
        router.push("/shop");
      } else {
        alert("Error placing order. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong during checkout.");
    } finally {
      setLoading(false);
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + item.sellingPrice, 0);
  const gst = subtotal * 0.03; // 3% GST on jewellery
  const total = subtotal + gst;

  return (
    <div className="min-h-screen bg-background-primary text-text-primary p-6 md:p-12 max-w-[1400px] mx-auto">
      <Link href="/shop" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-gold mb-8 transition-colors">
        <ArrowLeft size={16} /> Continue Shopping
      </Link>

      <h1 className="text-4xl font-bold mb-10">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="py-20 text-center bg-background-tertiary rounded-xl border border-border-theme">
          <p className="text-text-secondary text-lg mb-6">Your cart is currently empty.</p>
          <Link href="/shop" className="bg-accent-gold text-black px-8 py-3 rounded-md font-bold hover:bg-white transition-colors">
            Browse Jewellery
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-6 p-6 bg-background-tertiary rounded-xl border border-border-theme">
                <div className="w-24 h-24 bg-background-secondary rounded-lg border border-border-theme flex-shrink-0">
                  {/* Placeholder for image */}
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl">{item.name}</h3>
                      <p className="text-text-secondary text-sm mt-1">Purity: {item.purity} | Weight: {item.weight}g</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-text-secondary hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <span className="text-sm font-medium border border-border-theme px-3 py-1 rounded">Qty: 1</span>
                    <span className="font-bold text-xl text-accent-gold">₹{item.sellingPrice?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-background-tertiary p-8 rounded-xl border border-border-theme h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 border-b border-border-theme pb-6">
              <div className="flex justify-between text-text-secondary">
                <span>Subtotal ({cart.length} items)</span>
                <span>₹{subtotal.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>GST (3%)</span>
                <span>₹{gst.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>Insured Shipping</span>
                <span className="text-green-500">Free</span>
              </div>
            </div>
            
            <div className="flex justify-between font-bold text-2xl mb-8">
              <span>Total</span>
              <span className="text-accent-gold">₹{total.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-accent-gold text-black font-bold text-lg py-4 rounded-md hover:bg-white transition-colors flex justify-center items-center gap-2 mb-4 disabled:opacity-70"
            >
              {loading ? "Processing..." : (
                <>
                  <CreditCard size={20} /> Checkout Securely
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-text-secondary text-sm">
              <ShieldCheck size={16} />
              <span>256-bit SSL Secure Checkout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
