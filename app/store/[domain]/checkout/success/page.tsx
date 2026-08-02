import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen text-center flex flex-col items-center justify-center">
      <CheckCircle className="text-gray-500 w-24 h-24 mb-8" strokeWidth={1} />
      <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Order Confirmed</p>
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Thank you for your purchase</h1>
      <p className="text-white/60 mb-12 text-lg font-light leading-relaxed">
        Your order <span className="text-white font-medium">#ONLINE-ORDER</span> has been successfully placed. 
        You will receive an email confirmation shortly. Your bespoke piece is now being prepared for secured transit.
      </p>
      <div className="flex gap-4">
        <Link href="/account/orders/ONLINE-ORDER" className="border border-gray-500 text-gray-500 py-3 px-8 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gray-200 hover:text-black transition-colors duration-500 ease-luxury">
          Track Order
        </Link>
        <Link href="/" className="bg-white/5 border border-white/10 text-white py-3 px-8 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-black transition-colors duration-500 ease-luxury">
          Return Home
        </Link>
      </div>
    </div>
  );
}
