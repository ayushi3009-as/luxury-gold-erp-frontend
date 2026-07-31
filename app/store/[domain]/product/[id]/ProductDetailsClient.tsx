'use client';
import { useState } from 'react';
import { ShieldCheck, Truck, RotateCcw, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { GrainOverlay } from '@/components/storefront/GrainOverlay';
import { MagneticButton } from '@/components/storefront/MagneticButton';
import { ProductCard } from '@/components/storefront/ProductCard';

export default function ProductDetailsClient({ product }: { product: any }) {
  const [activeImage, setActiveImage] = useState(product?.imageUrl || "https://images.unsplash.com/photo-1599643478514-4a7f052843cb");
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  const [showCare, setShowCare] = useState(false);

  // Mock multi-angle images
  const thumbnails = [
    product?.imageUrl || "https://images.unsplash.com/photo-1599643478514-4a7f052843cb",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400",
    "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=400"
  ];

  const price = product?.price || 245000;
  const makingCharge = product?.makingCharge || 25000;
  const gst = Math.round(price * 0.03);
  const goldValue = price - makingCharge - gst;

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row gap-16 mb-32">
        
        {/* Left: Huge Image & Thumbnails */}
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-6">
          {/* Thumbnail Rail */}
          <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible hide-scrollbar shrink-0">
            {thumbnails.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(img)}
                className={`w-20 h-24 shrink-0 overflow-hidden bg-[#111] transition-all duration-300 ${activeImage === img ? 'ring-1 ring-gold opacity-100' : 'opacity-50 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden order-1 md:order-2 rounded-sm group">
            <GrainOverlay />
            <img 
              src={activeImage} 
              alt={product?.name || 'Jewelry'}
              className="w-full h-full object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-110"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-semibold mb-6">
            {product?.category || 'Luxury Collection'}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-white/90 font-light mb-6 leading-tight">
            {product?.name || "22K Royal Kundan Necklace"}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <p className="text-3xl text-white font-light tracking-wide">
              ₹{price.toLocaleString("en-IN")}
            </p>
            <span className="flex items-center gap-1 text-white/40 text-xs px-2 py-1 border border-white/10 rounded-sm">
              <Info size={12} /> EMI from ₹{(price/12).toFixed(0)}/mo
            </span>
          </div>
          
          <div className="border-t border-b border-white/5 py-6 mb-8 text-white/60 font-sans text-sm leading-relaxed">
            <p>{product?.description || "Experience the pinnacle of craftsmanship with this stunning piece, designed to elevate your everyday elegance and make your special moments unforgettable."}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12 border-b border-white/5 pb-8">
            <div>
              <p className="text-gold/60 text-[10px] uppercase tracking-[0.2em] mb-2">Purity</p>
              <p className="text-white/90 font-medium font-serif">{product?.purity || '22K'}</p>
            </div>
            <div>
              <p className="text-gold/60 text-[10px] uppercase tracking-[0.2em] mb-2">Gross Weight</p>
              <p className="text-white/90 font-medium font-serif">{product?.weight || '45g'}</p>
            </div>
          </div>

          {/* Add to Cart Desktop */}
          <div className="hidden md:block mb-12">
            <MagneticButton className="w-full py-5 text-sm">
              Add to Shopping Bag
            </MagneticButton>
          </div>

          {/* Accordions */}
          <div className="space-y-1">
            {/* Price Breakdown */}
            <div className="border border-white/5 bg-[#111]/30">
              <button 
                onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
                className="w-full flex justify-between items-center p-5 text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors"
              >
                Price Breakdown
                {showPriceBreakdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showPriceBreakdown && (
                <div className="px-5 pb-5 pt-2 text-sm text-white/50 space-y-3 font-sans">
                  <div className="flex justify-between"><span>Gold Value</span><span>₹{goldValue.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Making Charges</span><span>₹{makingCharge.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>GST (3%)</span><span>₹{gst.toLocaleString()}</span></div>
                  <div className="flex justify-between pt-3 border-t border-white/10 text-white/90"><span>Total</span><span>₹{price.toLocaleString()}</span></div>
                </div>
              )}
            </div>

            {/* Care Instructions */}
            <div className="border border-white/5 bg-[#111]/30">
              <button 
                onClick={() => setShowCare(!showCare)}
                className="w-full flex justify-between items-center p-5 text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors"
              >
                Care Instructions
                {showCare ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showCare && (
                <div className="px-5 pb-5 pt-2 text-sm text-white/50 font-sans leading-relaxed">
                  Store in the provided velvet box. Avoid contact with perfumes, sprays, chemicals, and water. Wipe gently with a soft cloth after use.
                </div>
              )}
            </div>
          </div>

          {/* Trust */}
          <div className="space-y-4 mt-12 text-white/40">
            <div className="flex items-center gap-4 hover:text-white/80 transition-colors">
              <ShieldCheck className="text-gold" size={20} strokeWidth={1} />
              <span className="text-xs uppercase tracking-widest">BIS Hallmarked & Certified</span>
            </div>
            <div className="flex items-center gap-4 hover:text-white/80 transition-colors">
              <Truck className="text-gold" size={20} strokeWidth={1} />
              <span className="text-xs uppercase tracking-widest">Complimentary Insured Shipping</span>
            </div>
            <div className="flex items-center gap-4 hover:text-white/80 transition-colors">
              <RotateCcw className="text-gold" size={20} strokeWidth={1} />
              <span className="text-xs uppercase tracking-widest">14-Day Global Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔄 COMPLETE THE LOOK */}
      <div className="border-t border-white/5 pt-24">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-gold/80 mb-12">Complete the Look</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mock cross-sells */}
          <ProductCard product={{ id: '2', name: 'Matching Bangle', price: 185000, purity: '22K', weight: '28g', imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400' }} />
          <ProductCard product={{ id: '3', name: 'Filigree Jhumkas', price: 85000, purity: '22K', weight: '12g', imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400' }} />
          <ProductCard product={{ id: '4', name: 'Solitaire Ring', price: 350000, purity: 'VVS1', weight: '1.5ct', imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=400' }} />
        </div>
      </div>

      {/* 📱 STICKY MOBILE ADD TO CART */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-white/10 bg-black/95 backdrop-blur-md px-5 py-4 md:hidden">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Total</p>
          <p className="font-serif text-lg text-white/90">₹{price.toLocaleString()}</p>
        </div>
        <MagneticButton className="px-8 py-3 text-xs">
          Add to Bag
        </MagneticButton>
      </div>
    </div>
  );
}
