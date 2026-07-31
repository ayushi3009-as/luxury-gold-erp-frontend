'use client';
import Link from 'next/link';

function getFallbackImage(category: string | undefined, name: string | undefined) {
  const c = (category || '').toLowerCase();
  const n = (name || '').toLowerCase();
  if (c.includes('ring') || n.includes('ring'))
    return 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=600&auto=format&fit=crop&q=80';
  if (c.includes('necklace') || n.includes('necklace'))
    return 'https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=600&auto=format&fit=crop&q=80';
  if (c.includes('bangle') || c.includes('bracelet') || n.includes('bangle') || n.includes('bracelet'))
    return 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80';
  if (c.includes('earring') || n.includes('earring') || n.includes('jhumka'))
    return 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=80';
  return 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80';
}

// Editorial catalog card — hairline border, NO rounded corners, NO shadows
export function ProductCard({ product, index = 0 }: { product: any; index?: number }) {
  const fallback = getFallbackImage(product.category, product.name);
  const catalogNum = String(product.catalogNumber ?? (index + 1)).padStart(3, '0');

  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer block">
      {/* Hairline-framed image — editorial, no card bg, no shadow */}
      <div className="border border-[#2A2724] p-1 mb-4 overflow-hidden">
        <img
          src={product.imageUrl || fallback}
          alt={product.name}
          onError={(e) => { e.currentTarget.src = fallback; }}
          className="w-full h-[200px] md:h-[260px] object-cover transition-[object-position] duration-[900ms] ease-luxury group-hover:object-[70%_30%]"
        />
      </div>

      {/* Catalog number placard */}
      <p className="text-[9px] tracking-widest text-[#8a7a5a] uppercase mb-1.5">
        N°{catalogNum}
      </p>
      <h4 className="text-sm font-serif text-white/90 group-hover:text-[#D4AF37] transition-colors duration-500 leading-snug mb-1">
        {product.name}
      </h4>
      <p className="text-xs text-[#8a7a5a] uppercase tracking-widest mb-1">
        {product.purity || '22K'} {product.weight ? `· ${product.weight}` : ''}
      </p>
      <p className="text-sm text-[#D4AF37] font-light">
        ₹{product.price?.toLocaleString('en-IN')}
      </p>
    </Link>
  );
}
