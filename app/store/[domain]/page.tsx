import prisma from '@/lib/prisma';
import { ArrowRight, Diamond, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { GrainOverlay } from '@/components/storefront/GrainOverlay';
import { ProductCard } from '@/components/storefront/ProductCard';

export default async function StorefrontHomePage({ params }: { params: { domain: string } }) {
  const tenant = await prisma.tenant.findUnique({
    where: { subdomain: params.domain }
  });

  const products = await prisma.product.findMany({
    where: { 
      tenantId: tenant?.id,
      isPublished: true 
    },
    take: 12
  });

  const goldProducts = products.filter(p => p.category?.toLowerCase().includes('gold')) || [];
  const diamondProducts = products.filter(p => p.category?.toLowerCase().includes('diamond')) || [];

  // Dummy fallback data
  const demoGoldProducts = [
    { id: '1', name: "22K Royal Kundan Necklace", price: 245000, purity: "22K", weight: "45g", imageUrl: "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=800&auto=format&fit=crop&q=80" },
    { id: '2', name: "Antique Temple Bangle", price: 185000, purity: "22K", weight: "28g", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80" },
    { id: '3', name: "Filigree Gold Jhumkas", price: 85000, purity: "22K", weight: "12g", imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80" },
  ];

  const demoDiamondProducts = [
    { id: '4', name: "Solitaire Platinum Ring", price: 350000, purity: "VVS1", weight: "1.5ct", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&auto=format&fit=crop&q=80" },
    { id: '5', name: "Diamond Tennis Bracelet", price: 520000, purity: "VVS2", weight: "3.2ct", imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80" },
    { id: '6', name: "Emerald Cut Diamond Necklace", price: 890000, purity: "IF", weight: "5.0ct", imageUrl: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&auto=format&fit=crop&q=80" },
  ];

  const displayGold = goldProducts.length > 0 ? goldProducts : demoGoldProducts;
  const displayDiamonds = diamondProducts.length > 0 ? diamondProducts : demoDiamondProducts;

  return (
    <>
      {/* 📈 LIVE GOLD RATE TICKER */}
      <div className="w-full bg-white/[0.02] border-b border-white/5 pt-24 pb-2 overflow-hidden z-40 relative">
        <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap text-[11px] tracking-[0.2em] uppercase text-[var(--color-gold-soft)] font-sans px-4">
          <span className="text-gold">Live Rates:</span> 24K Gold ₹7,450/g • 22K Gold ₹6,825/g • 18K Gold ₹5,587/g &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <span className="text-gold">Live Rates:</span> 24K Gold ₹7,450/g • 22K Gold ₹6,825/g • 18K Gold ₹5,587/g
        </div>
      </div>

      {/* 🎥 HERO SECTION */}
      <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden pb-20">
        <GrainOverlay />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a] z-10 pointer-events-none"></div>
          <img 
            src={tenant?.heroImageUrl || "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=1600&auto=format&fit=crop&q=80"} 
            alt="Hero Jewelry" 
            className="w-full h-full object-cover animate-[kenburns_20s_ease-out_infinite_alternate]"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] mb-6 opacity-90">Fine Jewelry House</p>
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight text-white/90 drop-shadow-2xl">
            {tenant?.heroTitle || "Elegance Curated for Eternity"}
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl font-sans tracking-wide">
            {tenant?.heroSubtitle || "Discover our exclusive collection of handcrafted 22K gold and IF-grade diamond masterpieces."}
          </p>
          <Link href={`/collections`} className="border border-gold text-gold text-xs uppercase tracking-[0.2em] px-9 py-4 transition-[background-color,color] duration-500 ease-luxury hover:bg-gold hover:text-black">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* 📖 EDITORIAL LOOKBOOK */}
      <section className="relative h-[70vh] overflow-hidden w-full flex items-center justify-center">
        <GrainOverlay />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent z-10 pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&auto=format&fit=crop&q=80" 
            alt="Lookbook" 
            className="w-full h-full object-cover object-[50%_40%] scale-105"
          />
        </div>
        <div className="relative z-20 text-center">
          <h3 className="text-4xl md:text-5xl font-serif text-white/90 font-light mb-4 drop-shadow-xl">The Royal Legacy</h3>
          <p className="text-white/70 font-sans tracking-wider text-sm uppercase">Timeless Traditions Restored</p>
        </div>
      </section>

      {/* 🪙 GOLD COLLECTION SECTION */}
      <section id="gold" className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Purest 22K & 24K</p>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-white/90">The Gold Collection</h3>
          </div>
          <Link href={`/collections/gold`} className="relative text-[11px] uppercase tracking-[0.15em] text-white/80 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-500 after:ease-luxury hover:after:w-full hidden md:block">
            View All Gold
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayGold.map((item: any, i: number) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* 🛠️ THE CRAFT STRIP */}
      <section className="border-y border-white/5 bg-[#111]/30 py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gold/80 mb-12">The Process</p>
          <div className="flex gap-8 overflow-x-auto snap-x md:grid md:grid-cols-4 pb-4 md:pb-0 hide-scrollbar">
            {[
              { step: '01', title: 'Sourcing', desc: 'Ethically mined and conflict-free raw materials.' },
              { step: '02', title: 'Design', desc: 'Sketched by visionary artists to capture modern elegance.' },
              { step: '03', title: 'Hand-setting', desc: 'Each stone placed with millimeter precision by master artisans.' },
              { step: '04', title: 'Certification', desc: 'Rigorous hallmarking and independent quality checks.' }
            ].map((p, i) => (
              <div key={i} className="min-w-[250px] snap-center">
                <span className="text-gold/40 font-serif text-3xl mb-4 block">{p.step}</span>
                <h4 className="text-white/90 text-lg font-serif mb-2">{p.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💎 DIAMOND COLLECTION SECTION */}
      <section id="diamonds" className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Flawless Brilliance</p>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-white/90">The Diamond Collection</h3>
          </div>
          <Link href={`/collections/diamonds`} className="relative text-[11px] uppercase tracking-[0.15em] text-white/80 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-500 after:ease-luxury hover:after:w-full hidden md:block">
            View All Diamonds
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayDiamonds.map((item: any, i: number) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* 🎁 SHOP BY OCCASION */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gold/80 mb-12">Curated Edits</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['The Bridal Trousseau', 'Everyday Elegance', 'The Gifting Edit'].map((title, i) => (
              <div key={i} className="relative h-[300px] group cursor-pointer overflow-hidden rounded-sm bg-[#111]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 ease-luxury z-10"></div>
                <img 
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1605100804763-247f67b2548e' : i === 1 ? '1606760227091-3dd870d97f1d' : '1515562141207-7a88fb7ce338'}?w=800&auto=format&fit=crop&q=80`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-luxury"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <h4 className="text-2xl font-serif font-light text-white text-center px-4">{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✉️ PRIVATE CLIENT ACCESS */}
      <section className="py-32 border-t border-white/5 text-center relative overflow-hidden">
        <GrainOverlay />
        <div className="max-w-xl mx-auto px-6 relative z-20">
          <ShieldCheck className="mx-auto text-gold mb-6 opacity-80" size={32} strokeWidth={1} />
          <h3 className="text-3xl font-serif font-light text-white/90 mb-4">Private Client Access</h3>
          <p className="text-white/60 mb-8 font-light leading-relaxed">
            Join an exclusive circle of collectors. Receive private invitations to unveilings, bespoke services, and curated acquisitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors w-full sm:w-64"
            />
            <button className="border border-gold text-gold text-xs uppercase tracking-[0.2em] px-8 py-3 hover:bg-gold hover:text-black transition-colors duration-500 ease-luxury shrink-0">
              Request Access
            </button>
          </div>
        </div>
      </section>

    </>
  );
}
