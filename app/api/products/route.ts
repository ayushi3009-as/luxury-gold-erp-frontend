import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true
      },
      orderBy: { createdAt: 'desc' }
    });

    const metrics = {
      totalProducts: products.length,
      goldProducts: products.filter(p => p.metalType === 'Gold').length,
      diamondProducts: products.filter(p => p.metalType === 'Diamond').length,
    };

    return NextResponse.json({
      products: products.map(p => ({
        id: p.id,
        sku: p.sku,
        name: p.name,
        category: p.category.name,
        metalType: p.metalType,
        grossWeight: p.grossWeight,
        status: p.status
      })),
      metrics
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Auto-generate SKU if not provided
    const sku = data.sku || `SKU-${Math.floor(100000 + Math.random() * 900000)}`;

    const product = await prisma.product.create({
      data: {
        sku,
        name: data.name,
        categoryId: data.categoryId,
        metalType: data.metalType || 'Gold',
        purity: data.purity || '22K',
        grossWeight: Number(data.grossWeight) || 0,
        netWeight: Number(data.netWeight) || 0,
        makingChargeType: data.makingChargeType || 'PER_GRAM',
        makingCharge: Number(data.makingCharge) || 0,
        status: 'IN_STOCK'
      }
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
