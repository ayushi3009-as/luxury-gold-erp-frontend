import prisma from '@/lib/prisma';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { GrainOverlay } from '@/components/storefront/GrainOverlay';

// ─── Catalog Item (editorial, hairline-framed, NO shadows) ───────────────────
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
    <Link href={`/product/${product.id}`} className="group cursor-pointer px-6 first:pl-0 last:pr-0 block">
      {/* Hairline framed image — no rounded corners, no shadow */}
      <div className="border border-[#2A2724] p-1 mb-4 overflow-hidden">
        <img
          src={product.imageUrl || getFallback()}
          alt={product.name}
          className="w-full h-[200px] md:h-[240px] object-cover transition-[object-position] duration-[900ms] ease-luxury group-hover:object-[70%_30%]"
        />
      </div>
      {/* Catalog number placard */}
      <p className="text-[9px] tracking-widest text-[#8a7a5a] uppercase mb-1.5">
        N°{catalogNum}
      </p>
      <p className="text-sm text-white/90 font-serif leading-snug mb-1 group-hover:text-[#D4AF37] transition-colors duration-500">
        {product.name}
      </p>
      <p className="text-sm text-[#D4AF37] font-light">
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

  // Demo data with catalogNumber field (used when DB is empty)
  const demoGoldProducts = [
    { id: '1', name: 'Royal Kundan Necklace', sellingPrice: 245000, purity: '22K', weight: 45, catalogNumber: 1, category: 'necklace', imageUrl: 'https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=600&auto=format&fit=crop&q=80' },
    { id: '2', name: 'Antique Temple Bangle', sellingPrice: 185000, purity: '22K', weight: 28, catalogNumber: 2, category: 'bangle', imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80' },
    { id: '3', name: 'Filigree Gold Jhumkas', sellingPrice: 85000, purity: '22K', weight: 12, catalogNumber: 3, category: 'earring', imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=80' },
    { id: '7', name: 'Bridal Choker Set', sellingPrice: 420000, purity: '22K', weight: 68, catalogNumber: 4, category: 'necklace', imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&auto=format&fit=crop&q=80' },
  ];

  const demoDiamondProducts = [
    { id: '4', name: 'Solitaire Platinum Ring', sellingPrice: 350000, purity: 'VVS1', weight: 1.5, catalogNumber: 5, category: 'ring', imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=600&auto=format&fit=crop&q=80' },
    { id: '5', name: 'Diamond Tennis Bracelet', sellingPrice: 520000, purity: 'VVS2', weight: 3.2, catalogNumber: 6, category: 'bracelet', imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80' },
    { id: '6', name: 'Emerald Cut Pendant', sellingPrice: 890000, purity: 'IF', weight: 5.0, catalogNumber: 7, category: 'necklace', imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&auto=format&fit=crop&q=80' },
    { id: '8', name: 'Pear Drop Earrings', sellingPrice: 310000, purity: 'VVS1', weight: 2.1, catalogNumber: 8, category: 'earring', imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=80' },
  ];

  // Map DB products to use sellingPrice as price for display
  const mapProduct = (p: any, i: number) => ({ ...p, price: p.sellingPrice ?? p.price, weight: p.weight ? `${p.weight}g` : 'N/A', catalogNumber: p.catalogNumber ?? (i + 1) });

  const displayGold = (goldProducts.length > 0 ? goldProducts : demoGoldProducts).map(mapProduct);
  const displayDiamonds = (diamondProducts.length > 0 ? diamondProducts : demoDiamondProducts).map(mapProduct);

  // Hero: use tenant image if set, else use a curated set of premium jewelry images
  const heroImages = [
    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1400&auto=format&fit=crop&q=90', // Gold necklace close-up
    'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=1400&auto=format&fit=crop&q=90', // Diamond ring editorial
    'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?w=1400&auto=format&fit=crop&q=90', // Luxury jewelry flat lay
  ];
  const heroImage = (tenant?.heroImageUrl && tenant.heroImageUrl.trim() !== '')
    ? tenant.heroImageUrl
    : heroImages[0];

  return (
    <>
      <GrainOverlay />

      {/* ═══════════════════════════════════════════════════════
          1. ASYMMETRIC EDITORIAL HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-[40px_1fr_1fr] min-h-[80vh] border-b border-[#2A2724] pt-[64px]">

        {/* Vertical rail — hidden on mobile */}
        <div className="hidden md:flex border-r border-[#2A2724] items-end justify-center pb-8">
          <span className="[writing-mode:vertical-rl] text-[9px] tracking-[0.25em] text-[#8a7a5a] uppercase select-none">
            N°01 — The eternity edit
          </span>
        </div>

        {/* Text content — left aligned */}
        <div className="px-8 md:px-12 flex flex-col justify-center py-16 md:py-0 border-b md:border-b-0 border-[#2A2724]">
          <p className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase mb-6 font-medium">
            Handcrafted · 22K · IF-grade
          </p>
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white/95 mb-6 tracking-tight">
            {tenant?.heroTitle
              ? tenant.heroTitle
              : <>Elegance curated<br />for eternity</>}
          </h1>
          <p className="text-sm text-white/50 max-w-xs leading-relaxed mb-10 font-sans font-light">
            {tenant?.heroSubtitle || 'A private edit of hand-set kundan and solitaire pieces, catalogued by our Jaipur atelier.'}
          </p>
          <Link
            href="/collections"
            className="text-[11px] tracking-[0.25em] text-[#D4AF37] uppercase border-b border-[#D4AF37]/50 pb-1 w-fit hover:border-[#D4AF37] transition-colors duration-500"
          >
            View the index →
          </Link>

          {/* Mini trust strip below CTA */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-[#2A2724]">
            {['BIS Hallmarked', 'IGI Certified', 'Free Shipping'].map(t => (
              <span key={t} className="text-[9px] tracking-[0.2em] text-[#8a7a5a] uppercase">{t}</span>
            ))}
          </div>
        </div>

        {/* Framed hero image — museum placard style */}
        <div className="p-6 flex flex-col border-l border-[#2A2724]">
          <div className="flex-1 border border-[#8a7a5a]/40 p-1.5 overflow-hidden">
            <img
              src={heroImage}
              alt="Hero Jewelry"
              className="w-full h-full object-cover min-h-[300px] md:min-h-[400px] animate-[kenburns_20s_ease-out_infinite_alternate]"
            />
          </div>
          <p className="text-[9px] tracking-widest text-[#8a7a5a] uppercase mt-3">
            Ref. 22K-014 · Hand-set kundan, Jaipur atelier
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. THIN TRUST TICKER BAR
          ═══════════════════════════════════════════════════════ */}
      <div className="border-b border-[#2A2724] px-6 md:px-10 py-3 flex gap-8 overflow-x-auto hide-scrollbar">
        <span className="text-[10px] tracking-[0.15em] text-[#8a7a5a] uppercase whitespace-nowrap">
          Today's gold rate <span className="text-[#D4AF37]">₹7,412/g</span>
        </span>
        <span className="text-[10px] tracking-[0.15em] text-[#8a7a5a] uppercase whitespace-nowrap">22K → ₹6,795/g</span>
        <span className="text-[10px] tracking-[0.15em] text-[#8a7a5a] uppercase whitespace-nowrap">BIS Hallmarked</span>
        <span className="text-[10px] tracking-[0.15em] text-[#8a7a5a] uppercase whitespace-nowrap">IGI Certified</span>
        <span className="text-[10px] tracking-[0.15em] text-[#8a7a5a] uppercase whitespace-nowrap">Conflict-Free Sourcing</span>
        <span className="text-[10px] tracking-[0.15em] text-[#8a7a5a] uppercase whitespace-nowrap">Insured Shipping</span>
      </div>

      {/* ═══════════════════════════════════════════════════════
          3. GOLD INDEX — numbered catalog grid
          ═══════════════════════════════════════════════════════ */}
      <section id="gold" className="px-6 md:px-10 py-16 md:py-20 border-b border-[#2A2724]">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8 pb-6 border-b border-[#2A2724]">
          <div className="flex items-center gap-6">
            <span className="[writing-mode:vertical-rl] text-[9px] tracking-[0.2em] text-[#8a7a5a] uppercase hidden md:block">Gold</span>
            <div>
              <p className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase mb-2">Purest 22K & 24K</p>
              <h2 className="font-serif font-light text-3xl md:text-4xl text-white/95">The Gold Index</h2>
            </div>
          </div>
          <Link href="/collections/gold" className="text-[10px] tracking-[0.2em] text-[#8a7a5a] uppercase hover:text-[#D4AF37] transition-colors duration-500 border-b border-[#2A2724] hover:border-[#D4AF37] pb-1 hidden md:block">
            View all →
          </Link>
        </div>

        {/* Catalog grid — divide-x lines, NO rounded corners, NO shadows */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2A2724]">
          {displayGold.map((item: any, i: number) => (
            <CatalogItem key={item.id} product={item} index={i} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. THE CRAFT — numbered process strip
          ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-[#2A2724] py-16 px-6 md:px-10">
        <p className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase mb-10">The process</p>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2A2724]">
          {[
            { step: '01', title: 'Sourcing', desc: 'Ethically mined, conflict-free raw materials.' },
            { step: '02', title: 'Design', desc: 'Sketched by artists capturing modern elegance.' },
            { step: '03', title: 'Hand-setting', desc: 'Each stone placed with millimeter precision.' },
            { step: '04', title: 'Certification', desc: 'Rigorous BIS hallmarking and quality checks.' },
          ].map((p, i) => (
            <div key={i} className="px-6 first:pl-0 last:pr-0">
              <span className="text-[#8a7a5a]/50 font-serif text-2xl mb-4 block">{p.step}</span>
              <h4 className="text-white/90 text-sm font-serif mb-2">{p.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed font-sans">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. DIAMOND INDEX — numbered catalog grid
          ═══════════════════════════════════════════════════════ */}
      <section id="diamonds" className="px-6 md:px-10 py-16 md:py-20 border-b border-[#2A2724]">
        <div className="flex items-end justify-between mb-8 pb-6 border-b border-[#2A2724]">
          <div className="flex items-center gap-6">
            <span className="[writing-mode:vertical-rl] text-[9px] tracking-[0.2em] text-[#8a7a5a] uppercase hidden md:block">Diamonds</span>
            <div>
              <p className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase mb-2">Flawless brilliance · IF & VVS</p>
              <h2 className="font-serif font-light text-3xl md:text-4xl text-white/95">The Diamond Index</h2>
            </div>
          </div>
          <Link href="/collections/diamonds" className="text-[10px] tracking-[0.2em] text-[#8a7a5a] uppercase hover:text-[#D4AF37] transition-colors duration-500 border-b border-[#2A2724] hover:border-[#D4AF37] pb-1 hidden md:block">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2A2724]">
          {displayDiamonds.map((item: any, i: number) => (
            <CatalogItem key={item.id} product={item} index={i + displayGold.length} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. CURATED EDITS — editorial 3-panel
          ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-[#2A2724] py-16 px-6 md:px-10">
        <p className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase mb-8">Curated edits</p>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2A2724]">
          {[
            { title: 'The Bridal Trousseau', ref: 'Edit 01', img: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&auto=format&fit=crop&q=80' },
            { title: 'Everyday Elegance', ref: 'Edit 02', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80' },
            { title: 'The Gifting Edit', ref: 'Edit 03', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80' },
          ].map((edit, i) => (
            <Link key={i} href="/gifting" className="group px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0 block cursor-pointer">
              <div className="border border-[#2A2724] p-1 mb-4 overflow-hidden">
                <img
                  src={edit.img}
                  className="w-full h-[220px] object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-luxury"
                />
              </div>
              <p className="text-[9px] tracking-widest text-[#8a7a5a] uppercase mb-2">{edit.ref}</p>
              <h3 className="font-serif font-light text-xl text-white/90 group-hover:text-[#D4AF37] transition-colors duration-500">{edit.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. PRIVATE CLIENT NEWSLETTER
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-10 border-b border-[#2A2724]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center max-w-5xl">
          <div>
            <p className="text-[9px] tracking-[0.3em] text-[#8a7a5a] uppercase mb-4">Private circle</p>
            <h3 className="font-serif font-light text-3xl md:text-4xl text-white/95 mb-3">
              Private Client Access
            </h3>
            <p className="text-sm text-white/40 font-sans font-light leading-relaxed max-w-md">
              Join an exclusive circle of collectors. Receive private invitations to unveilings, bespoke consultations, and curated acquisitions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-0 border border-[#2A2724]">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none w-full sm:w-72 border-b sm:border-b-0 sm:border-r border-[#2A2724]"
            />
            <button className="text-[11px] tracking-[0.25em] text-[#D4AF37] uppercase px-6 py-4 hover:bg-[#D4AF37] hover:text-black transition-colors duration-500 ease-luxury shrink-0 whitespace-nowrap">
              Request Access
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
