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
    const allDummies: any[] = [
      { id: '1', name: 'Royal Kundan Necklace', sellingPrice: 245000, purity: '22K', weight: 45, catalogNumber: 1, category: 'necklace', description: 'An exquisite masterpiece crafted for royalty. Hand-set kundan stones by Jaipur artisans.', imageUrl: 'https://images.unsplash.com/photo-1599643478514-4a7f052843cb?w=1200&auto=format&fit=crop&q=80' },
      { id: '2', name: 'Antique Temple Bangle', sellingPrice: 185000, purity: '22K', weight: 28, catalogNumber: 2, category: 'bangle', description: 'A timeless bangle inspired by temple architecture, perfect for heirloom collections.', imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&auto=format&fit=crop&q=80' },
      { id: '3', name: 'Filigree Gold Jhumkas', sellingPrice: 85000, purity: '22K', weight: 12, catalogNumber: 3, category: 'earring', description: 'Delicate filigree work jhumkas with intricate gold threading.', imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1200&auto=format&fit=crop&q=80' },
      { id: '4', name: 'Solitaire Platinum Ring', sellingPrice: 350000, purity: 'VVS1', weight: 1.5, catalogNumber: 4, category: 'ring', description: 'A flawless VVS1 clarity diamond set in platinum. IGI certified.', imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=1200&auto=format&fit=crop&q=80' },
      { id: '5', name: 'Diamond Tennis Bracelet', sellingPrice: 520000, purity: 'VVS2', weight: 3.2, catalogNumber: 5, category: 'bracelet', description: 'An iconic tennis bracelet featuring 28 brilliant-cut VVS2 diamonds.', imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&auto=format&fit=crop&q=80' },
      { id: '6', name: 'Emerald Cut Pendant', sellingPrice: 890000, purity: 'IF', weight: 5.0, catalogNumber: 6, category: 'necklace', description: 'An IF-grade emerald cut diamond pendant of exceptional clarity.', imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1200&auto=format&fit=crop&q=80' },
      { id: '7', name: 'Bridal Choker Set', sellingPrice: 420000, purity: '22K', weight: 68, catalogNumber: 7, category: 'necklace', description: 'A grand bridal choker crafted for the modern Indian bride.', imageUrl: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&auto=format&fit=crop&q=80' },
      { id: '8', name: 'Pear Drop Earrings', sellingPrice: 310000, purity: 'VVS1', weight: 2.1, catalogNumber: 8, category: 'earring', description: 'Elegant pear-shaped diamond drops, perfect for evening occasions.', imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1200&auto=format&fit=crop&q=80' },
    ];
    product = allDummies.find(d => d.id === id) ?? allDummies[0];
  }

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
