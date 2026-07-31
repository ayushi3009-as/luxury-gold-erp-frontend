import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default async function ProductPage({ params }: { params: { domain: string, id: string } }) {
  const { domain, id } = params;

  const tenant = await prisma.tenant.findUnique({
    where: { subdomain: domain }
  });

  // Attempt to fetch real product, fallback to demo if id matches dummy ids
  let product = await prisma.product.findUnique({
    where: { id: id }
  });

  // Fallback Dummy Data for Demo
  if (!product) {
    const allDummies = [
      { id: '1', name: "22K Royal Kundan Necklace", price: 245000, purity: "22K", weight: "45g", description: "An exquisite masterpiece crafted for royalty. This kundan necklace features uncut diamonds set in 22K pure gold.", imageUrl: "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=1200&auto=format&fit=crop&q=80" },
      { id: '4', name: "Solitaire Platinum Ring", price: 350000, purity: "VVS1", weight: "1.5ct", description: "A flawless VVS1 clarity diamond set in a premium platinum band. Perfect for the perfect moment.", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=1200&auto=format&fit=crop&q=80" },
    ];
    product = allDummies.find(d => d.id === id) as any;
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row gap-16">
      
      {/* Left: Huge Image */}
      <div className="w-full md:w-1/2">
        <div className="sticky top-32">
          <div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-sm">
            <img 
              src={product.imageUrl || "https://images.unsplash.com/photo-1599643478514-4a7f052843cb"} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-accent-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">
          {product.category || 'Luxury Collection'}
        </p>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
          {product.name}
        </h1>
        <p className="text-3xl text-white font-light tracking-wide mb-8">
          ₹{product.price?.toLocaleString("en-IN")}
        </p>
        
        <div className="border-t border-b border-white/10 py-6 mb-8 text-white/70 font-light leading-relaxed">
          <p>{product.description || "Experience the pinnacle of craftsmanship with this stunning piece, designed to elevate your everyday elegance and make your special moments unforgettable."}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Purity</p>
            <p className="text-white font-medium">{product.purity || 'Standard'}</p>
          </div>
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Gross Weight</p>
            <p className="text-white font-medium">{product.weight || 'N/A'}</p>
          </div>
        </div>

        <button className="w-full bg-accent-gold text-black py-5 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          Add to Cart
        </button>

        <div className="space-y-4 mt-8">
          <div className="flex items-center gap-4 text-white/60">
            <ShieldCheck className="text-accent-gold" size={24} strokeWidth={1} />
            <span className="text-sm font-light">Certified Authenticity Guarantee</span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <Truck className="text-accent-gold" size={24} strokeWidth={1} />
            <span className="text-sm font-light">Secure & Insured Shipping</span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <RotateCcw className="text-accent-gold" size={24} strokeWidth={1} />
            <span className="text-sm font-light">14-Day Return Policy</span>
          </div>
        </div>
      </div>

    </div>
  );
}
