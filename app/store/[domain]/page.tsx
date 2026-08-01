import prisma from '@/lib/prisma';
import Link from 'next/link';

// ─── Catalog Item (clean, minimal, light-mode friendly) ───────────────────
function CatalogItem({ product, index }: { product: any; index: number }) {
  const catalogNum = String((product.catalogNumber ?? (index + 1))).padStart(3, '0');
  const category = (product.category || '').toLowerCase();
  const name = (product.name || '').toLowerCase();

  function getFallback() {
    if (category.includes('ring') || name.includes('ring'))
      return 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=600&auto=format&fit=crop&q=80';
    if (category.includes('necklace') || name.includes('necklace'))
      return 'https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=600&auto=format&fit=crop&q=80';
    if (category.includes('bangle') || category.includes('bracelet') || name.includes('bangle'))
      return 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80';
    if (category.includes('earring') || name.includes('earring') || name.includes('jhumka'))
      return 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=80';
    return 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80';
  }

  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer px-4 md:px-8 first:pl-0 last:pr-0 block">
      <div className="border border-store-border p-1 mb-6 overflow-hidden">
        <img
          src={product.imageUrl || getFallback()}
          alt={product.name}
          className="w-full h-[280px] md:h-[320px] object-cover transition-[object-position] duration-[900ms] ease-luxury group-hover:object-[70%_30%] group-hover:scale-105"
        />
      </div>
      <p className="text-[9px] tracking-widest text-store-muted uppercase mb-2">
        N°{catalogNum}
      </p>
      <p className="text-base text-store-text font-store-heading leading-snug mb-1 hover:text-store-primary transition-colors duration-500">
        {product.name}
      </p>
      <p className="text-sm text-store-primary font-light">
        ₹{product.price?.toLocaleString('en-IN')}
      </p>
    </Link>
  );
}

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

  // Demo data with catalogNumber field
  const demoGoldProducts = [
    { id: '1', name: 'Royal Kundan Necklace', sellingPrice: 245000, purity: '22K', weight: 45, catalogNumber: 1, category: 'necklace', imageUrl: 'https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=600&auto=format&fit=crop&q=80' },
    { id: '2', name: 'Antique Temple Bangle', sellingPrice: 185000, purity: '22K', weight: 28, catalogNumber: 2, category: 'bangle', imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80' },
    { id: '3', name: 'Filigree Gold Jhumkas', sellingPrice: 85000, purity: '22K', weight: 12, catalogNumber: 3, category: 'earring', imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=80' },
  ];

  const demoDiamondProducts = [
    { id: '4', name: 'Solitaire Platinum Ring', sellingPrice: 350000, purity: 'VVS1', weight: 1.5, catalogNumber: 5, category: 'ring', imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=600&auto=format&fit=crop&q=80' },
    { id: '5', name: 'Diamond Tennis Bracelet', sellingPrice: 520000, purity: 'VVS2', weight: 3.2, catalogNumber: 6, category: 'bracelet', imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80' },
    { id: '6', name: 'Emerald Cut Pendant', sellingPrice: 890000, purity: 'IF', weight: 5.0, catalogNumber: 7, category: 'necklace', imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&auto=format&fit=crop&q=80' },
  ];

  const mapProduct = (p: any, i: number) => ({ ...p, price: p.sellingPrice ?? p.price, weight: p.weight ? `${p.weight}g` : 'N/A', catalogNumber: p.catalogNumber ?? (i + 1) });
  const displayGold = (goldProducts.length > 0 ? goldProducts : demoGoldProducts).slice(0, 3).map(mapProduct);
  const displayDiamonds = (diamondProducts.length > 0 ? diamondProducts : demoDiamondProducts).slice(0, 3).map(mapProduct);

  const theme = tenant?.themeSettings as any;
  const heroImage = (theme?.heroImageUrl && theme.heroImageUrl.trim() !== '')
    ? theme.heroImageUrl
    : 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1400&auto=format&fit=crop&q=90';

  const heroHeadline = theme?.heroHeadline || "Elegance curated for eternity";
  const heroSubheadline = theme?.heroSubheadline || "A private edit of hand-set kundan and solitaire pieces, catalogued by our Jaipur atelier.";

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1. CLEAN FULL-BLEED HERO (Premium Minimal Style)
          ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center pt-[64px] overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Hero Jewelry" 
            className="w-full h-full object-cover animate-[kenburns_20s_ease-out_infinite_alternate]"
          />
          {/* Very subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-store-bg/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-store-bg/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-24">
          <p className="text-[10px] tracking-[0.35em] text-store-primary uppercase mb-8 font-medium">
            Handcrafted · 22K · IF-grade
          </p>
          <h1 className="font-store-heading font-light text-5xl md:text-7xl lg:text-8xl leading-tight text-store-text mb-8 tracking-tight drop-shadow-sm">
            {heroHeadline}
          </h1>
          <p className="text-base text-store-text/80 max-w-lg leading-relaxed mb-12 font-sans font-light">
            {heroSubheadline}
          </p>
          <Link
            href="/collections"
            className="text-[11px] tracking-[0.25em] bg-store-primary text-store-bg px-10 py-4 uppercase hover:bg-store-text hover:text-store-bg transition-all duration-500 shadow-md"
          >
            Explore Collections
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. THIN TRUST TICKER BAR
          ═══════════════════════════════════════════════════════ */}
      <div className="border-b border-store-border px-6 md:px-10 py-4 flex justify-center gap-12 overflow-x-auto hide-scrollbar bg-store-bg">
        <span className="text-[10px] tracking-[0.2em] text-store-muted uppercase whitespace-nowrap">
          Live Rate <span className="text-store-primary ml-2">₹7,412/g</span>
        </span>
        <span className="hidden md:inline text-[10px] tracking-[0.2em] text-store-muted uppercase whitespace-nowrap">22K → ₹6,795/g</span>
        <span className="text-[10px] tracking-[0.2em] text-store-muted uppercase whitespace-nowrap">BIS Hallmarked</span>
        <span className="text-[10px] tracking-[0.2em] text-store-muted uppercase whitespace-nowrap">IGI Certified</span>
      </div>

      {/* ═══════════════════════════════════════════════════════
          3. GOLD INDEX — 3 Column Minimal Grid
          ═══════════════════════════════════════════════════════ */}
      <section id="gold" className="px-6 md:px-16 py-20 md:py-32 border-b border-store-border bg-store-bg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-store-border gap-6">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] text-store-muted uppercase mb-4">Purest 22K & 24K</p>
            <h2 className="font-store-heading font-light text-4xl md:text-5xl text-store-text">The Gold Index</h2>
          </div>
          <Link href="/collections/gold" className="text-[11px] tracking-[0.2em] text-store-primary uppercase hover:text-store-text transition-colors duration-500 border-b border-store-primary hover:border-store-text pb-1 inline-block">
            View entire collection →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-store-border gap-y-12 sm:gap-y-0">
          {displayGold.map((item: any, i: number) => (
            <CatalogItem key={item.id} product={item} index={i} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. THE CRAFT — elegant process strip
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 bg-store-border/10">
        <div className="text-center mb-16">
          <h2 className="font-store-heading font-light text-3xl md:text-4xl text-store-text mb-4">The Atelier Process</h2>
          <p className="text-[10px] tracking-[0.3em] text-store-muted uppercase">From mine to masterpiece</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-6xl mx-auto">
          {[
            { step: '01', title: 'Sourcing', desc: 'Ethically mined, conflict-free raw materials curated globally.' },
            { step: '02', title: 'Design', desc: 'Sketched by artists capturing modern elegance & heritage.' },
            { step: '03', title: 'Hand-setting', desc: 'Each stone placed with millimeter precision by master artisans.' },
            { step: '04', title: 'Certification', desc: 'Rigorous BIS hallmarking and IF quality inspections.' },
          ].map((p, i) => (
            <div key={i} className="px-4">
              <span className="text-store-primary/40 font-store-heading text-4xl mb-6 block">{p.step}</span>
              <h4 className="text-store-text text-lg font-store-heading mb-3">{p.title}</h4>
              <p className="text-store-muted text-xs leading-relaxed font-sans">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. DIAMOND INDEX — 3 Column Minimal Grid
          ═══════════════════════════════════════════════════════ */}
      <section id="diamonds" className="px-6 md:px-16 py-20 md:py-32 border-b border-store-border bg-store-bg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-store-border gap-6">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] text-store-muted uppercase mb-4">Flawless brilliance · IF & VVS</p>
            <h2 className="font-store-heading font-light text-4xl md:text-5xl text-store-text">The Diamond Index</h2>
          </div>
          <Link href="/collections/diamonds" className="text-[11px] tracking-[0.2em] text-store-primary uppercase hover:text-store-text transition-colors duration-500 border-b border-store-primary hover:border-store-text pb-1 inline-block">
            View entire collection →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-store-border gap-y-12 sm:gap-y-0">
          {displayDiamonds.map((item: any, i: number) => (
            <CatalogItem key={item.id} product={item} index={i + displayGold.length} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. CURATED EDITS — Large edge-to-edge imagery
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 md:px-16 border-b border-store-border bg-store-bg">
        <div className="text-center mb-16">
          <h2 className="font-store-heading font-light text-3xl md:text-4xl text-store-text mb-4">Curated Edits</h2>
          <p className="text-[10px] tracking-[0.3em] text-store-muted uppercase">Discover your signature look</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: 'The Bridal Trousseau', ref: 'Edit 01', img: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&auto=format&fit=crop&q=80' },
            { title: 'Everyday Elegance', ref: 'Edit 02', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80' },
            { title: 'The Gifting Edit', ref: 'Edit 03', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80' },
          ].map((edit, i) => (
            <Link key={i} href="/gifting" className="group block cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img
                  src={edit.img}
                  className="w-full h-[400px] object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-luxury"
                />
              </div>
              <p className="text-[10px] tracking-widest text-store-muted uppercase mb-3">{edit.ref}</p>
              <h3 className="font-store-heading font-light text-2xl text-store-text group-hover:text-store-primary transition-colors duration-500">{edit.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. PRIVATE CLIENT NEWSLETTER
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 border-b border-store-border bg-store-bg/50">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-store-muted uppercase mb-6">Private circle</p>
          <h3 className="font-store-heading font-light text-4xl text-store-text mb-6">
            Private Client Access
          </h3>
          <p className="text-sm text-store-muted font-sans font-light leading-relaxed mb-10">
            Join an exclusive circle of collectors. Receive private invitations to unveilings, bespoke consultations, and curated acquisitions.
          </p>
          <div className="flex flex-col sm:flex-row w-full max-w-md border-b border-store-text/30 focus-within:border-store-primary transition-colors">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent px-2 py-4 text-sm text-store-text placeholder:text-store-muted focus:outline-none w-full"
            />
            <button className="text-[11px] tracking-[0.25em] text-store-text font-bold uppercase px-4 py-4 hover:text-store-primary transition-colors duration-500 ease-luxury shrink-0 whitespace-nowrap">
              Request Access
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
