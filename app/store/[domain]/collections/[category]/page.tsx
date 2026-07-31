import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function CategoryPage({ params }: { params: { domain: string, category: string } }) {
  const { domain, category } = params;
  
  const tenant = await prisma.tenant.findUnique({
    where: { subdomain: domain }
  });

  // Basic title logic
  const title = category === 'gold' ? 'The Gold Collection' : category === 'diamonds' ? 'The Diamond Collection' : 'Our Collection';
  const subtitle = category === 'gold' ? 'Purest 22K & 24K' : category === 'diamonds' ? 'Flawless Brilliance' : 'Premium Jewelry';

  // Fetch from DB
  const products = await prisma.product.findMany({
    where: { 
      tenantId: tenant?.id,
      isPublished: true,
      category: {
        contains: category.replace('s', ''), // 'diamonds' -> 'diamond'
        mode: 'insensitive'
      }
    }
  });

  // Fallback Dummy Data if empty
  const dummyData = category === 'diamonds' ? [
    { id: 4, name: "Solitaire Platinum Ring", price: 350000, purity: "VVS1", weight: "1.5ct", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&auto=format&fit=crop&q=80" },
    { id: 5, name: "Diamond Tennis Bracelet", price: 520000, purity: "VVS2", weight: "3.2ct", imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80" },
  ] : [
    { id: 1, name: "22K Royal Kundan Necklace", price: 245000, purity: "22K", weight: "45g", imageUrl: "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=800&auto=format&fit=crop&q=80" },
    { id: 2, name: "Antique Temple Bangle", price: 185000, purity: "22K", weight: "28g", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80" },
  ];

  const displayProducts = products.length > 0 ? products : dummyData;

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <div className="text-center mb-16 border-b border-white/10 pb-16">
        <p className="text-accent-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">{subtitle}</p>
        <h1 className="text-5xl md:text-6xl font-serif text-white">{title}</h1>
      </div>

      <div className="flex justify-between items-center mb-8">
        <p className="text-white/50">{displayProducts.length} Results</p>
        <div className="flex gap-4">
          <select className="bg-transparent border border-white/20 text-white px-4 py-2 uppercase tracking-widest text-xs outline-none">
            <option className="bg-black">Sort by: Featured</option>
            <option className="bg-black">Price: Low to High</option>
            <option className="bg-black">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayProducts.map((item: any, i: number) => (
          <Link href={`/product/${item.id}`} key={i} className="group cursor-pointer block">
            <div className="relative h-[400px] w-full overflow-hidden bg-[#111] mb-6">
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
            <div className="text-center">
              <h4 className="text-lg font-serif text-white group-hover:text-accent-gold transition-colors">{item.name}</h4>
              <p className="text-white/50 text-xs mt-2 mb-2">{item.purity} • {item.weight}</p>
              <p className="text-md text-accent-gold font-light tracking-wide">₹{item.price?.toLocaleString("en-IN")}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
