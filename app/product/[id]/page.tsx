import Image from "next/image";
import prisma from "@/lib/prisma";
import { ArrowLeft, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "./AddToCartButton";

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id }
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
        
        <Link href="/shop" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-gold mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full rounded-2xl bg-background-tertiary overflow-hidden border border-border-theme">
              <Image 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-accent-gold font-semibold uppercase tracking-wider text-xs border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 rounded-full mb-4 inline-block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{product.name}</h1>
              <p className="text-3xl text-accent-gold font-bold mb-4">₹{product.sellingPrice?.toLocaleString()}</p>
              <p className="text-text-secondary text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-b border-border-theme py-6 mb-8 grid grid-cols-2 gap-y-4">
              <div>
                <span className="text-text-secondary text-sm block mb-1">Purity</span>
                <span className="font-semibold">{product.purity}</span>
              </div>
              <div>
                <span className="text-text-secondary text-sm block mb-1">Net Weight</span>
                <span className="font-semibold">{product.weight} g</span>
              </div>
              <div>
                <span className="text-text-secondary text-sm block mb-1">Product Code</span>
                <span className="font-semibold font-mono">{product.productCode}</span>
              </div>
              <div>
                <span className="text-text-secondary text-sm block mb-1">Availability</span>
                {product.quantity > 0 ? (
                  <span className="text-green-500 font-semibold">{product.quantity} in stock</span>
                ) : (
                  <span className="text-red-500 font-semibold">Out of Stock</span>
                )}
              </div>
            </div>

            <div className="mt-auto">
              {/* Client component for Cart Interaction */}
              <AddToCartButton product={product} />
              
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border-theme pt-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck className="text-text-secondary w-6 h-6" />
                  <span className="text-xs text-text-secondary">BIS Hallmarked</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="text-text-secondary w-6 h-6" />
                  <span className="text-xs text-text-secondary">Insured Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RotateCcw className="text-text-secondary w-6 h-6" />
                  <span className="text-xs text-text-secondary">15-Day Return</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
