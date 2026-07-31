'use client';
import Link from 'next/link';

function getFallbackImage(category: string | undefined, name: string | undefined) {
  const c = (category || '').toLowerCase();
  const n = (name || '').toLowerCase();
  
  if (c.includes('ring') || n.includes('ring')) return 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&auto=format&fit=crop&q=80';
  if (c.includes('necklace') || n.includes('necklace')) return 'https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=800&auto=format&fit=crop&q=80';
  if (c.includes('bangle') || c.includes('bracelet') || n.includes('bangle') || n.includes('bracelet')) return 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80';
  if (c.includes('earring') || n.includes('earring') || n.includes('jhumka')) return 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80';
  
  // generic luxury fallback
  return 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80';
}

export function ProductCard({ product }: { product: any }) {
  const fallback = getFallbackImage(product.category, product.name);
  
  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer block">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#111] mb-4 rounded-sm">
        <img
          src={product.imageUrl || fallback}
          alt={product.name}
          onError={(e) => { e.currentTarget.src = fallback; }}
          className="absolute inset-0 h-[130%] w-[130%] object-cover object-center transition-[object-position] duration-[900ms] ease-luxury group-hover:object-[70%_30%]"
        />
        {/* Fixed height gradient scrim for CTA so it never clips awkwardly */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/90 to-transparent z-20 flex items-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-luxury">
          <button className="w-full border border-gold text-gold py-3 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-gold hover:text-black transition-colors duration-500 ease-luxury">
            View Details
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <h4 className="text-sm font-serif text-white/90 group-hover:text-gold transition-colors duration-500 ease-luxury truncate">{product.name}</h4>
        <p className="text-xs text-white/50 uppercase tracking-widest">{product.purity || '22K'} • {product.weight || 'N/A'}</p>
        <p className="text-base text-gold font-serif font-light tracking-wide pt-1">₹{product.price?.toLocaleString("en-IN")}</p>
      </div>
    </Link>
  );
}
