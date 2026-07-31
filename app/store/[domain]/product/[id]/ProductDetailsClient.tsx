'use client';
import { useState } from 'react';
import { ShieldCheck, Truck, RotateCcw, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { GrainOverlay } from '@/components/storefront/GrainOverlay';
import { MagneticButton } from '@/components/storefront/MagneticButton';

function getFallback(category: string = '', name: string = '') {
  const c = category.toLowerCase(); const n = name.toLowerCase();
  if (c.includes('ring') || n.includes('ring')) return 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&auto=format&fit=crop&q=80';
  if (c.includes('necklace') || n.includes('necklace')) return 'https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=800&auto=format&fit=crop&q=80';
  if (c.includes('bangle') || n.includes('bangle')) return 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80';
  return 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80';
}

export default function ProductDetailsClient({ product }: { product: any }) {
  const fallback = getFallback(product?.category, product?.name);
  const [activeImage, setActiveImage] = useState(product?.imageUrl || fallback);
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  const [showCare, setShowCare] = useState(false);

  const thumbnails = [
    product?.imageUrl || fallback,
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=400&auto=format&fit=crop&q=80',
  ];

  const price = product?.price || 245000;
  const makingCharge = product?.makingCharge || 25000;
  const gst = Math.round(price * 0.03);
  const goldValue = price - makingCharge - gst;
  const catalogNum = String(product?.catalogNumber ?? '001').padStart(3, '0');

  return (
    <div className="pt-[96px] pb-24 min-h-screen">

      {/* ── Breadcrumb rail ── */}
      <div className="border-b border-[#2A2724] px-6 md:px-10 py-3 flex items-center gap-3 text-[9px] tracking-[0.2em] text-[#8a7a5a] uppercase">
        <span>Home</span><span>/</span>
        <span>{product?.category || 'Collection'}</span><span>/</span>
        <span className="text-white/70">N°{catalogNum}</span>
      </div>

      <div className="px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 mb-24">

          {/* ── LEFT: Image zone with hairline frame ── */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* Thumbnail rail — no rounded corners */}
            <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto md:overflow-visible hide-scrollbar shrink-0">
              {thumbnails.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-20 shrink-0 overflow-hidden border transition-all duration-300 ${activeImage === img ? 'border-[#D4AF37]' : 'border-[#2A2724] opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>

            {/* Main image — hairline bronze border + Ref. placard below */}
            <div className="flex-1 flex flex-col order-1 md:order-2">
              <div className="border border-[#8a7a5a]/40 p-1.5 overflow-hidden group">
                <img
                  src={activeImage}
                  alt={product?.name || 'Jewelry'}
                  onError={(e) => { e.currentTarget.src = fallback; }}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-105"
                />
              </div>
              {/* Museum-placard caption */}
              <p className="text-[9px] tracking-widest text-[#8a7a5a] uppercase mt-2.5">
                Ref. {product?.sku || `22K-${catalogNum}`} · {product?.category || 'Gold Collection'}, Jaipur atelier
              </p>
            </div>
          </div>

          {/* ── RIGHT: Details ── */}
          <div className="flex flex-col justify-start pt-2">

            {/* Catalog number + category */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase border border-[#2A2724] px-2 py-1">
                N°{catalogNum}
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase">
                {product?.category || 'Luxury Collection'}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif text-white/95 font-light mb-6 leading-tight">
              {product?.name || '22K Royal Kundan Necklace'}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-[#2A2724]">
              <p className="text-2xl text-white font-light tracking-wide font-serif">
                ₹{price.toLocaleString('en-IN')}
              </p>
              <span className="flex items-center gap-1 text-[#8a7a5a] text-[10px] uppercase tracking-widest">
                <Info size={11} /> EMI from ₹{Math.round(price / 12).toLocaleString('en-IN')}/mo
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-white/50 font-sans font-light leading-relaxed mb-8 pb-8 border-b border-[#2A2724]">
              {product?.description || 'Experience the pinnacle of craftsmanship with this stunning piece, designed to elevate your everyday elegance and make your special moments unforgettable.'}
            </p>

            {/* Spec grid — hairline separated */}
            <div className="grid grid-cols-2 divide-x divide-[#2A2724] mb-10 pb-10 border-b border-[#2A2724]">
              <div className="pr-6">
                <p className="text-[9px] tracking-[0.2em] text-[#8a7a5a] uppercase mb-2">Purity</p>
                <p className="text-white/90 font-serif">{product?.purity || '22K'}</p>
              </div>
              <div className="pl-6">
                <p className="text-[9px] tracking-[0.2em] text-[#8a7a5a] uppercase mb-2">Gross Weight</p>
                <p className="text-white/90 font-serif">{product?.weight || '45g'}</p>
              </div>
            </div>

            {/* CTA Desktop */}
            <div className="hidden md:block mb-10">
              <MagneticButton className="w-full py-5 text-sm">
                Add to Shopping Bag
              </MagneticButton>
            </div>

            {/* Accordions — no rounded corners, hairline borders */}
            <div className="space-y-0 border-t border-[#2A2724]">
              {/* Price Breakdown */}
              <div className="border-b border-[#2A2724]">
                <button
                  onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
                  className="w-full flex justify-between items-center py-4 text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                >
                  Price Breakdown
                  {showPriceBreakdown ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {showPriceBreakdown && (
                  <div className="pb-4 text-xs text-[#8a7a5a] space-y-3 font-sans">
                    <div className="flex justify-between"><span>Gold Value</span><span>₹{goldValue.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span>Making Charges</span><span>₹{makingCharge.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span>GST (3%)</span><span>₹{gst.toLocaleString()}</span></div>
                    <div className="flex justify-between pt-3 border-t border-[#2A2724] text-white/80"><span>Total</span><span>₹{price.toLocaleString()}</span></div>
                  </div>
                )}
              </div>

              {/* Care */}
              <div className="border-b border-[#2A2724]">
                <button
                  onClick={() => setShowCare(!showCare)}
                  className="w-full flex justify-between items-center py-4 text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                >
                  Care Instructions
                  {showCare ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {showCare && (
                  <p className="pb-4 text-xs text-[#8a7a5a] font-sans leading-relaxed">
                    Store in the provided velvet box. Avoid contact with perfumes, sprays, chemicals, and water. Wipe gently with a soft cloth after use.
                  </p>
                )}
              </div>
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-3 divide-x divide-[#2A2724] mt-8 pt-8 border-t border-[#2A2724]">
              {[
                { Icon: ShieldCheck, label: 'BIS Hallmarked' },
                { Icon: Truck, label: 'Free Shipping' },
                { Icon: RotateCcw, label: '14-Day Return' },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 px-2 text-center">
                  <Icon className="text-[#D4AF37]" size={16} strokeWidth={1.5} />
                  <span className="text-[8px] tracking-widest text-[#8a7a5a] uppercase leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Complete the Look — same catalog grammar ── */}
        <div className="border-t border-[#2A2724] pt-16">
          <p className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase mb-8">Complete the look</p>
          <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-[#2A2724]">
            {[
              { id: '2', name: 'Matching Bangle', price: 185000, purity: '22K', weight: '28g', catalogNumber: 2, category: 'bangle', imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400' },
              { id: '3', name: 'Filigree Jhumkas', price: 85000, purity: '22K', weight: '12g', catalogNumber: 3, category: 'earring', imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400' },
              { id: '4', name: 'Solitaire Ring', price: 350000, purity: 'VVS1', weight: '1.5ct', catalogNumber: 4, category: 'ring', imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=400' },
            ].map((p, i) => {
              const fb = getFallback(p.category, p.name);
              const cn = String(p.catalogNumber).padStart(3, '0');
              return (
                <a key={p.id} href={`/product/${p.id}`} className="group px-6 first:pl-0 last:pr-0 cursor-pointer block">
                  <div className="border border-[#2A2724] p-1 mb-4 overflow-hidden">
                    <img src={p.imageUrl} alt={p.name} onError={(e) => { e.currentTarget.src = fb; }} className="w-full h-[200px] object-cover transition-[object-position] duration-[900ms] ease-luxury group-hover:object-[70%_30%]" />
                  </div>
                  <p className="text-[9px] tracking-widest text-[#8a7a5a] uppercase mb-1">N°{cn}</p>
                  <p className="text-sm font-serif text-white/90 group-hover:text-[#D4AF37] transition-colors mb-1">{p.name}</p>
                  <p className="text-sm text-[#D4AF37]">₹{p.price.toLocaleString('en-IN')}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-[#2A2724] bg-black/95 backdrop-blur-md px-5 py-4 md:hidden">
        <div>
          <p className="text-[9px] uppercase tracking-widest text-[#8a7a5a] mb-1">Total</p>
          <p className="font-serif text-lg text-white/90">₹{price.toLocaleString('en-IN')}</p>
        </div>
        <MagneticButton className="px-8 py-3 text-xs">Add to Bag</MagneticButton>
      </div>
    </div>
  );
}
