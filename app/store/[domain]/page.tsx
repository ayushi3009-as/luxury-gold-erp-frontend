import prisma from '@/lib/prisma';
import HeroCarousel from './HeroCarousel';
import { ProductCard } from '@/components/storefront/ProductCard';
import Link from 'next/link';
import { ShieldCheck, Truck, Gem, ArrowRight, Instagram } from 'lucide-react';

export default async function StorefrontHomePage({ params }: { params: { domain: string } }) {
  const tenant = await prisma.tenant.findUnique({
    where: { subdomain: params.domain }
  });

  const dbProducts = await prisma.product.findMany({
    where: {
      tenantId: tenant?.id,
      isPublished: true
    },
    take: 8
  });

  // Fallback if tenant hasn't added products yet
  const displayProducts = dbProducts.length > 0 ? dbProducts : [
    { id: '1', name: '22K Royal Kundan Necklace', price: 245000, purity: '22K', weight: '45g', imageUrl: 'https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=800' },
    { id: '2', name: 'Solitaire Platinum Ring', price: 350000, purity: 'VVS1', weight: '1.5ct', imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800' },
    { id: '3', name: 'Antique Temple Bangle', price: 185000, purity: '22K', weight: '28g', imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800' },
    { id: '4', name: 'Filigree Gold Jhumkas', price: 85000, purity: '22K', weight: '12g', imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800' }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <HeroCarousel tenant={tenant} />
      
      {/* 1. Value Propositions Banner */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex flex-col items-center pt-4 md:pt-0">
            <ShieldCheck className="text-[#D4AF37] w-8 h-8 mb-3" />
            <h4 className="font-bold text-sm tracking-widest uppercase text-[#111]">100% Certified</h4>
            <p className="text-gray-500 text-sm mt-1">Hallmarked Gold & IGI Diamonds</p>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Truck className="text-[#D4AF37] w-8 h-8 mb-3" />
            <h4 className="font-bold text-sm tracking-widest uppercase text-[#111]">Secure Delivery</h4>
            <p className="text-gray-500 text-sm mt-1">Fully Insured Nationwide Shipping</p>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Gem className="text-[#D4AF37] w-8 h-8 mb-3" />
            <h4 className="font-bold text-sm tracking-widest uppercase text-[#111]">Lifetime Exchange</h4>
            <p className="text-gray-500 text-sm mt-1">Guaranteed Buyback Value</p>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-bold mb-3">Discover</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111]">Shop by Category</h2>
          </div>
          <Link href="/collections" className="group flex items-center gap-2 text-sm uppercase tracking-widest font-bold mt-6 md:mt-0 hover:text-[#D4AF37] transition-colors">
            View All Collections <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/collections/rings" className="group relative h-[450px] overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Rings" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-2">Rings</h3>
              <p className="text-white/80 text-sm uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">Explore</p>
            </div>
          </Link>
          <Link href="/collections/necklaces" className="group relative h-[450px] overflow-hidden bg-gray-100 md:mt-12">
            <img src="https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Necklaces" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-2">Necklaces</h3>
              <p className="text-white/80 text-sm uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">Explore</p>
            </div>
          </Link>
          <Link href="/collections/earrings" className="group relative h-[450px] overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Earrings" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-2">Earrings</h3>
              <p className="text-white/80 text-sm uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">Explore</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Featured Collection Section */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-bold mb-3">Curated</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111]">Featured Arrivals</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {displayProducts.map((item: any) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Full Width Parallax Banner */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Diamonds" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-2xl px-6">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-bold mb-4">Crafted for Eternity</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Where Every Piece is a Masterpiece</h2>
          <Link href="/collections" className="inline-block border border-white text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-colors duration-300">
            View Lookbook
          </Link>
        </div>
      </section>

      {/* 5. Brand Story Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative h-[600px] w-full">
              <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1000" className="absolute inset-0 w-full h-full object-cover" alt="Craftsmanship" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FAFAFA] border border-gray-100 hidden md:flex items-center justify-center p-6 text-center">
                <div>
                  <p className="text-3xl font-serif text-[#D4AF37] mb-1">25+</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Years of Trust</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-bold mb-3">Our Heritage</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-8 leading-tight">A Tradition of Pure Elegance</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {tenant?.aboutUsText || "Crafting timeless silver and gold jewellery that celebrates elegance and individuality. Every piece tells a story of exquisite craftsmanship passed down through generations."}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              Our commitment to purity and design has made us a trusted name for over two decades. We source only the finest ethical diamonds and hallmark gold to bring your visions to life.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Signature_of_John_Hancock.svg" className="h-12 opacity-40" alt="Signature" />
          </div>
        </div>
      </section>

      {/* 6. Instagram/Social Feed */}
      <section className="py-24 bg-[#FAFAFA] border-t border-gray-100">
        <div className="text-center mb-12">
          <Instagram className="w-8 h-8 mx-auto text-[#D4AF37] mb-4" />
          <h2 className="text-3xl font-serif text-[#111] mb-2">Follow Our Journey</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">@luxurygold_erp</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
          {[
            "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=400",
            "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=400",
            "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400",
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
          ].map((src, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden bg-gray-100">
              <img src={src} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Instagram post" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300 w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
