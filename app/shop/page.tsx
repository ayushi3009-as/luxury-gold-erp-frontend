import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { Search, Filter, Star } from "lucide-react";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string }
}) {
  const category = searchParams.category;
  const search = searchParams.search;

  // Build the Prisma query
  const whereClause: any = {};
  if (category) {
    whereClause.category = { contains: category, mode: 'insensitive' };
  }
  if (search) {
    whereClause.name = { contains: search, mode: 'insensitive' };
  }

  const products = await prisma.product.findMany({
    where: whereClause,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="min-h-screen bg-background-primary text-text-primary p-6 md:p-12 max-w-[1400px] mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10 border-b border-border-theme pb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Jewellery Collection</h1>
          <p className="text-text-secondary">
            {category ? `Showing results for "${category}"` : "Explore our finest crafted pieces."}
          </p>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search designs..." 
              className="w-full bg-background-tertiary border border-border-theme rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-accent-gold"
            />
          </div>
          <button className="flex items-center gap-2 bg-background-tertiary border border-border-theme px-4 py-2 rounded-md hover:text-accent-gold transition-colors">
            <Filter size={16} />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.length === 0 ? (
          <div className="col-span-full py-20 text-center text-text-secondary">
            No products found matching your criteria.
          </div>
        ) : (
          products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
              <div className="relative aspect-square rounded-xl bg-background-tertiary border border-border-theme overflow-hidden mb-4">
                <Image 
                  src={`https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.quantity <= 0 && (
                  <div className="absolute top-4 left-4 bg-red-500/90 text-white px-3 py-1 text-xs font-bold uppercase rounded">
                    Out of Stock
                  </div>
                )}
                {product.quantity > 0 && (
                  <div className="absolute top-4 left-4 bg-accent-gold text-black px-3 py-1 text-xs font-bold uppercase rounded">
                    {product.purity}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-accent-gold transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">{product.category} • {product.weight}g</p>
                </div>
              </div>
              <p className="font-bold text-xl mt-3">₹{product.sellingPrice?.toLocaleString()}</p>
            </Link>
          ))
        )}
      </div>

    </div>
  );
}
