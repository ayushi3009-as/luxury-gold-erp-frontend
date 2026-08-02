import { Heart, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const dummyWishlist = [
    { id: '1', name: "22K Royal Kundan Necklace", price: 245000, purity: "22K", imageUrl: "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=400" },
    { id: '4', name: "Solitaire Platinum Ring", price: 350000, purity: "VVS1", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=400" },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="border-b border-border-theme pb-8 mb-12">
        <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">Your Saved Items</p>
        <h1 className="text-4xl md:text-5xl font-serif text-text-primary">Wishlist</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {dummyWishlist.map((item) => (
          <div key={item.id} className="group flex flex-col">
            <Link href={`/product/${item.id}`} className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-4">
              <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-luxury" />
              <button className="absolute top-4 right-4 p-2 bg-background-primary text-text-primary rounded-full hover:bg-red-500/80 transition-colors backdrop-blur-sm z-10">
                <Trash2 size={16} />
              </button>
            </Link>
            <Link href={`/product/${item.id}`} className="flex-grow">
              <h4 className="text-sm font-serif text-text-primary/90 group-hover:text-gold transition-colors">{item.name}</h4>
              <p className="text-xs text-text-primary/50 my-1">{item.purity}</p>
              <p className="text-base text-gold font-serif font-light mb-4">₹{item.price.toLocaleString("en-IN")}</p>
            </Link>
            <button className="w-full border border-gold text-gold py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-black transition-colors duration-500 ease-luxury">
              Move to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
