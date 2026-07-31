import Link from 'next/link';

export function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer block">
      <div className="relative h-[450px] overflow-hidden bg-[#111] mb-6 rounded-sm">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 h-[130%] w-[130%] object-cover object-center transition-[object-position] duration-[900ms] ease-luxury group-hover:object-[70%_30%]"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-luxury">
          <button className="w-full border border-gold text-gold py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-black transition-colors duration-500">
            View Details
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-serif text-white/90 group-hover:text-gold transition-colors duration-500 ease-luxury">{product.name}</h4>
          <p className="text-white/50 text-xs mt-2 uppercase tracking-widest">{product.purity} • {product.weight}</p>
        </div>
        <p className="text-md text-gold font-light tracking-wide">₹{product.price?.toLocaleString("en-IN")}</p>
      </div>
    </Link>
  );
}
