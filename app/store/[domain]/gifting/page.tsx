import { Gift, Heart } from 'lucide-react';
import Link from 'next/link';

export default function GiftingPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <div className="text-center mb-24">
        <Gift className="text-gold w-16 h-16 mx-auto mb-8" strokeWidth={1} />
        <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">The Art of Giving</p>
        <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Gifting</h1>
        <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
          Celebrate life's most precious moments with gifts that transcend time. Each piece is beautifully wrapped in our signature packaging and includes a personalized handwritten note.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/collections" className="group relative h-[500px] overflow-hidden bg-[#111]">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-700"></div>
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-luxury" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-4xl font-serif text-white mb-4">For Her</h3>
            <span className="text-xs uppercase tracking-widest text-gold border-b border-gold pb-1">Shop Gifts</span>
          </div>
        </Link>
        <Link href="/collections" className="group relative h-[500px] overflow-hidden bg-[#111]">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-700"></div>
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-luxury" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-4xl font-serif text-white mb-4">The Bridal Edit</h3>
            <span className="text-xs uppercase tracking-widest text-gold border-b border-gold pb-1">Shop Gifts</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
