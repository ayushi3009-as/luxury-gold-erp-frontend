import Link from 'next/link';

export default function CollectionsPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <p className="text-accent-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">Our Masterpieces</p>
        <h1 className="text-5xl md:text-6xl font-serif text-white">Collections</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Link href="/collections/gold" className="group block">
          <div className="relative h-[600px] w-full overflow-hidden bg-[#111]">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=1200&auto=format&fit=crop&q=80" 
              alt="Gold Collection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
              <h2 className="text-5xl font-serif text-white mb-4">Gold</h2>
              <span className="bg-transparent border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                Explore Gold
              </span>
            </div>
          </div>
        </Link>

        <Link href="/collections/diamonds" className="group block">
          <div className="relative h-[600px] w-full overflow-hidden bg-[#111]">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&auto=format&fit=crop&q=80" 
              alt="Diamond Collection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
              <h2 className="text-5xl font-serif text-white mb-4">Diamonds</h2>
              <span className="bg-transparent border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                Explore Diamonds
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
