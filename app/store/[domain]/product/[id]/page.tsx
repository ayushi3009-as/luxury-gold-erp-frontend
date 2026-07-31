import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import ProductDetailsClient from './ProductDetailsClient';

export default async function ProductPage({ params }: { params: { domain: string, id: string } }) {
  const { domain, id } = params;

  // Attempt to fetch real product
  let product = await prisma.product.findUnique({
    where: { id: id }
  });

  // Fallback Dummy Data for Demo
  if (!product) {
    const allDummies = [
      { id: '1', name: "22K Royal Kundan Necklace", price: 245000, purity: "22K", weight: "45g", description: "An exquisite masterpiece crafted for royalty.", imageUrl: "https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=1200&auto=format&fit=crop&q=80" },
      { id: '2', name: "Antique Temple Bangle", price: 185000, purity: "22K", weight: "28g", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&auto=format&fit=crop&q=80" },
      { id: '3', name: "Filigree Gold Jhumkas", price: 85000, purity: "22K", weight: "12g", imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1200&auto=format&fit=crop&q=80" },
      { id: '4', name: "Solitaire Platinum Ring", price: 350000, purity: "VVS1", weight: "1.5ct", description: "A flawless VVS1 clarity diamond set in platinum.", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=1200&auto=format&fit=crop&q=80" },
    ];
    product = allDummies.find(d => d.id === id) as any;
  }

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
