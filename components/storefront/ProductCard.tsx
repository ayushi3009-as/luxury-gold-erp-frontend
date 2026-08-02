'use client';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';

export function ProductCard({ item }: { item: any }) {
  const addItem = useCartStore(state => state.addItem);

  const fallbackImage = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80';
  const imgUrl = item.imageUrl || fallbackImage;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: item.id,
      productId: item.id,
      name: item.name,
      price: item.price || item.sellingPrice || 0,
      imageUrl: imgUrl,
      purity: item.purity || '22K',
      weight: item.weight || 'N/A'
    });
    alert('Added to Cart!');
  };

  return (
    <Link href={`/product/${item.id}`} className="group cursor-pointer block">
      <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden bg-gray-100 mb-6">
        <div className="absolute inset-0 bg-background-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={imgUrl}
          onError={(e) => { e.currentTarget.src = fallbackImage; }}
          alt={item.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-[#111] text-text-primary py-3 uppercase tracking-widest text-xs font-bold hover:bg-background-primary transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-lg font-serif text-[#111]">{item.name}</h4>
        <p className="text-gray-500 text-xs mt-1 mb-1">{item.purity || '22K'} • {item.weight || '45g'}</p>
        <p className="text-md text-gray-800 tracking-wide">₹{(item.price || item.sellingPrice || 0).toLocaleString("en-IN")}</p>
      </div>
    </Link>
  );
}
