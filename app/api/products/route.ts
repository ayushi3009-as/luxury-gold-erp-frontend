import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        inventory: true,
      },
      orderBy: { createdAt: 'desc' }
    });

    const metrics = {
      totalProducts: products.length,
      goldProducts: products.filter(p => p.category === 'Gold Jewellery').length,
      diamondProducts: products.filter(p => p.category === 'Diamond Jewellery').length,
    };

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Auto-generate productCode if not provided
    const productCode = data.productCode || `PRD-${Math.floor(100000 + Math.random() * 900000)}`;

    const product = await prisma.$transaction(async (prisma) => {
      const newProduct = await prisma.product.create({
        data: {
          productCode,
          barcode: data.barcode || productCode,
          name: data.name,
          category: data.category || 'Gold Jewellery',
          purity: data.purity || '22K',
          weight: Number(data.weight) || 0,
          sellingPrice: Number(data.sellingPrice) || 0,
          costPrice: Number(data.costPrice) || 0,
          makingCharge: Number(data.makingCharge) || 0,
          isPublished: true,
        }
      });

      // Create initial inventory
      if (data.quantity !== undefined) {
        await prisma.inventory.create({
          data: {
            productId: newProduct.id,
            quantity: Number(data.quantity) || 0,
            minimumStock: Number(data.minimumStock) || 5,
            type: "FINISHED_GOOD",
          }
        });
      }

      return newProduct;
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
