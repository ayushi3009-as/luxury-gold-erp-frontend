import prisma from '@/lib/prisma';
import { ProductCard } from '@/components/storefront/ProductCard';

export default async function CategoryPage({ params }: { params: { domain: string, category: string } }) {
  const { domain, category } = params;
  
  const tenant = await prisma.tenant.findUnique({
    where: { subdomain: domain }
  });

  // Basic title logic
  const title = category === 'gold' ? 'The Gold Collection' : category === 'diamonds' ? 'The Diamond Collection' : `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`;
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
  let dummyData = [];
  if (category.includes('ring')) {
    dummyData = [
      { id: '101', name: "Solitaire Platinum Ring", price: 350000, purity: "VVS1", weight: "1.5ct", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&auto=format&fit=crop&q=80" },
      { id: '102', name: "Emerald Cut Vintage Ring", price: 420000, purity: "VVS2", weight: "2.0ct", imageUrl: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&auto=format&fit=crop&q=80" },
      { id: '103', name: "Rose Gold Promise Ring", price: 85000, purity: "18K", weight: "5g", imageUrl: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=800&auto=format&fit=crop&q=80" },
      { id: '104', name: "Classic Gold Band", price: 45000, purity: "22K", weight: "8g", imageUrl: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=800&auto=format&fit=crop&q=80" },
    ];
  } else if (category.includes('necklace') || category.includes('pendant')) {
    dummyData = [
      { id: '201', name: "22K Royal Kundan Necklace", price: 245000, purity: "22K", weight: "45g", imageUrl: "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=800&auto=format&fit=crop&q=80" },
      { id: '202', name: "Diamond Drop Pendant", price: 185000, purity: "VVS1", weight: "12g", imageUrl: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&auto=format&fit=crop&q=80" },
      { id: '203', name: "Bridal Heritage Choker", price: 550000, purity: "22K", weight: "85g", imageUrl: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=80" },
      { id: '204', name: "Minimalist Gold Chain", price: 35000, purity: "22K", weight: "15g", imageUrl: "https://images.unsplash.com/photo-1610660600192-3d712ce195f2?w=800&auto=format&fit=crop&q=80" },
    ];
  } else if (category.includes('bangle') || category.includes('bracelet')) {
    dummyData = [
      { id: '301', name: "Antique Temple Bangle", price: 185000, purity: "22K", weight: "28g", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80" },
      { id: '302', name: "Diamond Tennis Bracelet", price: 520000, purity: "VVS2", weight: "3.2ct", imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80" },
      { id: '303', name: "Kundan Kadas (Pair)", price: 320000, purity: "22K", weight: "60g", imageUrl: "https://images.unsplash.com/photo-1628151015968-3a4429e9efeb?w=800&auto=format&fit=crop&q=80" },
      { id: '304', name: "Rose Gold Cuff", price: 95000, purity: "18K", weight: "18g", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80" },
    ];
  } else {
    dummyData = [
      { id: '401', name: "Filigree Gold Jhumkas", price: 85000, purity: "22K", weight: "12g", imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80" },
      { id: '402', name: "Diamond Studs", price: 120000, purity: "VVS1", weight: "1.2ct", imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80" },
      { id: '403', name: "Polki Chandbalis", price: 210000, purity: "22K", weight: "35g", imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80" },
      { id: '404', name: "Platinum Hoops", price: 65000, purity: "PT950", weight: "8g", imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80" },
    ];
  }

  const displayProducts = products.length > 0 ? products : dummyData;

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen bg-white">
      <div className="text-center mb-16 border-b border-gray-200 pb-16">
        <p className="text-gray-500 uppercase tracking-[0.3em] text-sm font-semibold mb-3">{subtitle}</p>
        <h1 className="text-5xl md:text-6xl font-serif text-[#111]">{title}</h1>
      </div>

      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-500">{displayProducts.length} Results</p>
        <div className="flex gap-4">
          <select className="bg-transparent border border-gray-300 text-[#111] px-4 py-2 uppercase tracking-widest text-xs outline-none focus:border-black">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
        {displayProducts.map((item: any, i: number) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
