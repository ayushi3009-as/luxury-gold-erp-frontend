import prisma from '@/lib/prisma';
import HeroCarousel from './HeroCarousel';
import { ProductCard } from '@/components/storefront/ProductCard';

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
    <div className="min-h-screen bg-white">
      <HeroCarousel tenant={tenant} />
      
      {/* Featured Collection Section */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm font-semibold mb-3">Curated</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#111]">Featured Arrivals</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayProducts.map((item: any) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-serif text-[#111] mb-6">Our Heritage</h2>
          <p className="text-gray-600 leading-relaxed">
            {tenant?.aboutUsText || "Crafting timeless silver and gold jewellery that celebrates elegance and individuality. Every piece tells a story of exquisite craftsmanship passed down through generations. Our commitment to purity and design has made us a trusted name for over two decades."}
          </p>
        </div>
      </section>
    </div>
  );
}
