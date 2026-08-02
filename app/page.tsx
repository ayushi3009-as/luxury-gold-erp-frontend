import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { ArrowRight, Star, Truck, ShieldCheck, Diamond } from "lucide-react";

export default async function ECommerceHomepage() {
  // Fetch featured products from the database
  const featuredProducts = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' }
  });

  // Fetch dynamic store settings
  const settings = await prisma.storeSettings.findFirst();
  
  const storeName = settings?.storeName || "Luxury Gold";
  const tagline = settings?.tagline || "Elegance that lasts forever.";
  const heroImage = settings?.heroImageUrl || "https://images.unsplash.com/photo-1599643478514-4a820cbf311e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
  const brandColor = settings?.brandColor || "#e4b52d";

  return (
    <div className="min-h-screen bg-background-primary text-text-primary font-sans">
      {/* Injecting CSS Variable for dynamic brand color */}
      <style>{`
        :root {
          --brand-color: ${brandColor};
        }
      `}</style>
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Luxury Jewellery Collection"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-primary/90 via-background-primary/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            <span style={{color: "var(--brand-color)"}} className="font-medium tracking-widest uppercase text-sm mb-4 block">
              {storeName} Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-text-primary">
              {tagline.split(' ').slice(0, Math.ceil(tagline.split(' ').length / 2)).join(' ')} <br />
              {tagline.split(' ').slice(Math.ceil(tagline.split(' ').length / 2)).join(' ')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Discover our handcrafted collection of pure 22K gold and certified diamond jewellery, designed for your most precious moments.
            </p>
            <Link 
              href="/shop" 
              style={{backgroundColor: "var(--brand-color)"}}
              className="inline-flex items-center justify-center gap-3 text-black px-10 py-4 rounded-md font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Shop Collection <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURES BANNER */}
      <section className="bg-background-tertiary border-y border-border-theme py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-accent-gold w-10 h-10" />
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide">100% Certified</h4>
              <p className="text-xs text-text-secondary">BIS Hallmark & IGI Diamonds</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Truck className="text-accent-gold w-10 h-10" />
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide">Secure Shipping</h4>
              <p className="text-xs text-text-secondary">Fully insured delivery</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Diamond className="text-accent-gold w-10 h-10" />
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide">Lifetime Exchange</h4>
              <p className="text-xs text-text-secondary">100% value exchange</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (Directly from ERP DB) */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Arrivals</h2>
            <p className="text-text-secondary">Handpicked designs fresh from our artisans.</p>
          </div>
          <Link href="/shop" className="text-accent-gold hover:underline font-medium hidden md:block">
            View All Jewellery &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.length === 0 ? (
            <div className="col-span-full py-20 text-center text-text-secondary border border-dashed border-border-theme rounded-xl">
              <p>No products found in inventory.</p>
              <p className="text-sm mt-2">Log into the ERP dashboard to add products.</p>
            </div>
          ) : (
            featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-square rounded-xl bg-background-tertiary border border-border-theme overflow-hidden mb-4">
                  {/* Placeholder image since we don't have real images uploaded yet */}
                  <Image 
                    src={`https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.quantity <= 0 && (
                    <div className="absolute top-4 left-4 bg-red-500/90 text-text-primary px-3 py-1 text-xs font-bold uppercase rounded">
                      Out of Stock
                    </div>
                  )}
                  {product.quantity > 0 && (
                    <div className="absolute top-4 left-4 bg-accent-gold text-black px-3 py-1 text-xs font-bold uppercase rounded">
                      {product.purity}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-accent-gold transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">{product.category} • {product.weight}g</p>
                  </div>
                  <div className="flex gap-1 text-accent-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-medium">5.0</span>
                  </div>
                </div>
                <p className="font-bold text-xl mt-3">₹{product.sellingPrice?.toLocaleString()}</p>
                
                <button 
                  disabled={product.quantity <= 0}
                  className={`w-full mt-4 py-3 rounded-md font-medium transition-colors ${
                    product.quantity > 0 
                    ? "bg-background-tertiary border border-border-theme hover:border-accent-gold hover:text-accent-gold" 
                    : "bg-background-secondary border border-border-theme opacity-50 cursor-not-allowed"
                  }`}
                >
                  {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 4. CATEGORIES */}
      <section className="py-12 bg-background-secondary border-t border-border-theme">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Rings', 'Necklaces', 'Earrings', 'Bangles'].map((cat, i) => (
              <Link href={`/shop?category=${cat}`} key={cat} className="group relative h-48 md:h-64 rounded-xl overflow-hidden border border-border-theme">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <Image 
                  src={`https://images.unsplash.com/photo-${['1605100804735-247f1604a5a8', '1599643478514-4a820cbf311e', '1535632066927-ab7c9ab60908', '1611591437281-460bfbe1220a'][i]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={cat}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                />
                <h3 className="absolute bottom-6 left-0 right-0 text-text-primary font-bold text-xl z-20">{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-background-primary py-12 border-t border-border-theme text-center md:text-left">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="text-2xl text-accent-gold">◇</div>
              <span className="text-xl font-bold text-text-primary tracking-wide">Sharma Jewellers</span>
            </div>
            <p className="text-text-secondary text-sm max-w-sm">
              Crafting legacy since 1990. We bring you the finest 22K gold and IGI certified diamonds, securely delivered to your doorstep.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/shop" className="text-sm text-text-secondary hover:text-accent-gold">All Products</Link>
              <Link href="/about" className="text-sm text-text-secondary hover:text-accent-gold">About Us</Link>
              <Link href="/contact" className="text-sm text-text-secondary hover:text-accent-gold">Contact</Link>
              <Link href="/login" className="text-sm text-text-secondary hover:text-accent-gold mt-4 font-bold">Staff Login</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-text-primary mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-text-secondary hover:text-accent-gold">Privacy Policy</Link>
              <Link href="#" className="text-sm text-text-secondary hover:text-accent-gold">Terms of Service</Link>
              <Link href="#" className="text-sm text-text-secondary hover:text-accent-gold">Return Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}