import { Search as SearchIcon } from 'lucide-react';
import { ProductCard } from '@/components/storefront/ProductCard';

export default function SearchPage() {
  const dummyResults = [
    { id: '1', name: "22K Royal Kundan Necklace", price: 245000, purity: "22K", imageUrl: "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=400" },
    { id: '2', name: "Antique Temple Bangle", price: 185000, purity: "22K", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-8">Search</h1>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for collections, materials, or specific pieces..." 
            className="w-full bg-transparent border-b-2 border-border-theme px-4 py-4 text-text-primary text-lg focus:border-gold outline-none transition-colors"
          />
          <SearchIcon className="absolute right-4 top-4 text-text-primary/50" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-12 border-b border-border-theme pb-6">
        <p className="text-text-primary/50 text-sm">Found 2 results for "Kundan"</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dummyResults.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
