import prisma from '@/lib/prisma';
import { ArrowRight, Diamond, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
    { id: 1, name: "22K Royal Kundan", price: 245000, purity: "22K", weight: "45g", imageUrl: "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=800&auto=format&fit=crop&q=80" },
    { id: 2, name: "Antique Temple", price: 185000, purity: "22K", weight: "28g", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80" },
    { id: 3, name: "Filigree Jhumkas", price: 85000, purity: "22K", weight: "12g", imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80" },
  ];

  const demoDiamondProducts = [
    { id: 4, name: "Solitaire Ring", price: 350000, purity: "VVS1", weight: "1.5ct", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&auto=format&fit=crop&q=80" },
    { id: 5, name: "Tennis Bracelet", price: 520000, purity: "VVS2", weight: "3.2ct", imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80" },
    { id: 6, name: "Emerald Necklace", price: 890000, purity: "IF", weight: "5.0ct", imageUrl: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&auto=format&fit=crop&q=80" },
  ];

  const displayGold = goldProducts.length > 0 ? goldProducts : demoGoldProducts;
  const displayDiamonds = diamondProducts.length > 0 ? diamondProducts : demoDiamondProducts;

  return (
    <>
      {/* 🎥 HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a] z-10"></div>
          <img 
            src={tenant?.heroImageUrl || "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=1600&auto=format&fit=crop&q=80"} 
            alt="Hero Jewelry" 
            className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <Sparkles className="text-accent-gold mb-6" size={32} strokeWidth={1} />
          <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF3B0] to-[#D4AF37]">
            {tenant?.heroTitle || "Elegance Curated for Eternity"}
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-light tracking-wide">
            {tenant?.heroSubtitle || "Discover our exclusive collection of handcrafted 22K gold and IF-grade diamond masterpieces."}
          </p>
          <Link href={`/collections`} className="group flex items-center gap-3 bg-transparent border border-accent-gold text-accent-gold px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-accent-gold hover:text-black transition-all duration-500">
            Explore Collection
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 🪙 GOLD COLLECTION SECTION */}
      <section id="gold" className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <p className="text-accent-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">Purest 22K & 24K</p>
            <h3 className="text-4xl md:text-5xl font-serif text-white">The Gold Collection</h3>
          </div>
          <Link href={`/collections/gold`} className="hidden md:flex items-center gap-2 text-white/50 hover:text-accent-gold uppercase tracking-widest text-sm transition-colors mt-6 md:mt-0">
            View All Gold <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayGold.map((item: any, i: number) => (
            <Link href={`/product/${item.id}`} key={i} className="group cursor-pointer block">
              <div className="relative h-[500px] w-full overflow-hidden bg-[#111] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full bg-accent-gold text-black py-3 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-serif text-white group-hover:text-accent-gold transition-colors">{item.name}</h4>
                  <p className="text-white/50 text-sm mt-2">{item.purity} • {item.weight}</p>
                </div>
                <p className="text-lg text-accent-gold font-light tracking-wide">₹{item.price?.toLocaleString("en-IN")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 💎 DIAMOND COLLECTION SECTION */}
      <section id="diamonds" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Diamond size={16} className="text-blue-200" />
                <p className="text-blue-200 uppercase tracking-[0.3em] text-sm font-semibold">Flawless Brilliance</p>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-white">The Diamond Collection</h3>
            </div>
            <Link href={`/collections/diamonds`} className="hidden md:flex items-center gap-2 text-white/50 hover:text-blue-200 uppercase tracking-widest text-sm transition-colors mt-6 md:mt-0">
              View All Diamonds <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayDiamonds.map((item: any, i: number) => (
              <Link href={`/product/${item.id}`} key={i} className="group cursor-pointer block">
                <div className="relative h-[600px] w-full overflow-hidden bg-[#111] mb-6">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 text-xs tracking-widest uppercase">Certified</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full border border-white text-white hover:bg-white hover:text-black py-4 uppercase tracking-widest text-sm font-bold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-serif text-white mb-2">{item.name}</h4>
                  <p className="text-white/50 text-sm mb-3">{item.purity} Clarity • {item.weight}</p>
                  <p className="text-xl text-white font-light tracking-widest">₹{item.price?.toLocaleString("en-IN")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
