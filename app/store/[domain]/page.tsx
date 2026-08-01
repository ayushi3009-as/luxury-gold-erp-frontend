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
      <div className="border border-white/10 p-1 mb-4 overflow-hidden">
        <img
          src={product.imageUrl || getFallback()}
          alt={product.name}
          className="w-full h-[200px] md:h-[240px] object-cover transition-[object-position] duration-[900ms] ease-luxury group-hover:object-[70%_30%]"
        />
      </div>
      <p className="text-[9px] tracking-widest text-white/50 uppercase mb-1.5">
        N°{catalogNum}
      </p>
      <p className="text-sm text-white/90 font-store-heading leading-snug mb-1 hover:text-store-primary transition-colors duration-500">
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

  const mapProduct = (p: any, i: number) => ({ ...p, price: p.sellingPrice ?? p.price, weight: p.weight ? `${p.weight}g` : 'N/A', catalogNumber: p.catalogNumber ?? (i + 1) });
  const displayGold = (goldProducts.length > 0 ? goldProducts : demoGoldProducts).map(mapProduct);
  const displayDiamonds = (diamondProducts.length > 0 ? diamondProducts : demoDiamondProducts).map(mapProduct);

  const theme = tenant?.themeSettings as any;
  const heroImage = (theme?.heroImageUrl && theme.heroImageUrl.trim() !== '')
    ? theme.heroImageUrl
    : 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1400&auto=format&fit=crop&q=90';

  const heroHeadline = theme?.heroHeadline || "Elegance curated for eternity";
  const heroSubheadline = theme?.heroSubheadline || "A private edit of hand-set kundan and solitaire pieces, catalogued by our Jaipur atelier.";

  return (
    <>
      <GrainOverlay />

      <section className="grid grid-cols-1 md:grid-cols-[40px_1fr_1fr] min-h-[80vh] border-b border-white/10">

        <div className="hidden md:flex border-r border-white/10 items-end justify-center pb-8">
          <span className="[writing-mode:vertical-rl] text-[9px] tracking-[0.25em] text-white/50 uppercase select-none">
            N°01 — The eternity edit
          </span>
        </div>

        <div className="px-8 md:px-12 flex flex-col justify-center py-16 md:py-0 border-b md:border-b-0 border-white/10">
          <p className="text-[10px] tracking-[0.35em] text-store-primary uppercase mb-6 font-medium">
            Handcrafted · 22K · IF-grade
          </p>
          <h1 className="font-store-heading font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white/95 mb-6 tracking-tight">
            {heroHeadline}
          </h1>
          <p className="text-sm text-white/50 max-w-xs leading-relaxed mb-10 font-sans font-light">
            {heroSubheadline}
          </p>
          <Link
            href="/collections"
            className="text-[11px] tracking-[0.25em] text-store-primary uppercase border-b border-store-primary/50 pb-1 w-fit hover:border-store-primary transition-colors duration-500"
          >
            View the index →
          </Link>

          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
            {['BIS Hallmarked', 'IGI Certified', 'Free Shipping'].map(t => (
              <span key={t} className="text-[9px] tracking-[0.2em] text-white/50 uppercase">{t}</span>
            ))}
          </div>
        </div>

        <div className="p-6 flex flex-col border-l border-white/10">
          <div className="flex-1 border border-white/20 p-1.5 overflow-hidden relative">
            <img
              src={heroImage}
              alt="Hero Jewelry"
              className="w-full h-full object-cover min-h-[300px] md:min-h-[400px] animate-[kenburns_20s_ease-out_infinite_alternate]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-store-bg/40 to-transparent pointer-events-none" />
          </div>
          <p className="text-[9px] tracking-widest text-white/50 uppercase mt-3">
            Ref. 22K-014 · Hand-set kundan, Jaipur atelier
          </p>
        </div>
      </section>

      <div className="border-b border-white/10 px-6 md:px-10 py-3 flex gap-8 overflow-x-auto hide-scrollbar">
        <span className="text-[10px] tracking-[0.15em] text-white/50 uppercase whitespace-nowrap">
          Today's gold rate <span className="text-store-primary">₹7,412/g</span>
        </span>
        <span className="text-[10px] tracking-[0.15em] text-white/50 uppercase whitespace-nowrap">22K → ₹6,795/g</span>
        <span className="text-[10px] tracking-[0.15em] text-white/50 uppercase whitespace-nowrap">BIS Hallmarked</span>
        <span className="text-[10px] tracking-[0.15em] text-white/50 uppercase whitespace-nowrap">IGI Certified</span>
      </div>

      <section id="gold" className="px-6 md:px-10 py-16 md:py-20 border-b border-white/10">
        <div className="flex items-end justify-between mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-6">
            <span className="[writing-mode:vertical-rl] text-[9px] tracking-[0.2em] text-white/50 uppercase hidden md:block">Gold</span>
            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-2">Purest 22K & 24K</p>
              <h2 className="font-store-heading font-light text-3xl md:text-4xl text-white/95">The Gold Index</h2>
            </div>
          </div>
          <Link href="/collections/gold" className="text-[10px] tracking-[0.2em] text-white/50 uppercase hover:text-store-primary transition-colors duration-500 border-b border-white/10 hover:border-store-primary pb-1 hidden md:block">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {displayGold.map((item: any, i: number) => (
            <CatalogItem key={item.id} product={item} index={i} />
          ))}
        </div>
      </section>

      <section id="diamonds" className="px-6 md:px-10 py-16 md:py-20 border-b border-white/10">
        <div className="flex items-end justify-between mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-6">
            <span className="[writing-mode:vertical-rl] text-[9px] tracking-[0.2em] text-white/50 uppercase hidden md:block">Diamonds</span>
            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-2">Flawless brilliance · IF & VVS</p>
              <h2 className="font-store-heading font-light text-3xl md:text-4xl text-white/95">The Diamond Index</h2>
            </div>
          </div>
          <Link href="/collections/diamonds" className="text-[10px] tracking-[0.2em] text-white/50 uppercase hover:text-store-primary transition-colors duration-500 border-b border-white/10 hover:border-store-primary pb-1 hidden md:block">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {displayDiamonds.map((item: any, i: number) => (
            <CatalogItem key={item.id} product={item} index={i + displayGold.length} />
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 py-16 px-6 md:px-10">
        <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-8">Curated edits</p>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { title: 'The Bridal Trousseau', ref: 'Edit 01', img: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&auto=format&fit=crop&q=80' },
            { title: 'Everyday Elegance', ref: 'Edit 02', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80' },
            { title: 'The Gifting Edit', ref: 'Edit 03', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80' },
          ].map((edit, i) => (
            <Link key={i} href="/gifting" className="group px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0 block cursor-pointer">
              <div className="border border-white/10 p-1 mb-4 overflow-hidden">
                <img
                  src={edit.img}
                  className="w-full h-[220px] object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-luxury"
                />
              </div>
              <p className="text-[9px] tracking-widest text-white/50 uppercase mb-2">{edit.ref}</p>
              <h3 className="font-store-heading font-light text-xl text-white/90 group-hover:text-store-primary transition-colors duration-500">{edit.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
