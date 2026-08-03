import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: { name: 'asc' }
    });

    const productCounts = await prisma.product.groupBy({
      by: ['brand'],
      _count: { brand: true }
    });

    const brandsWithCount = brands.map((b: any) => {
      const count = productCounts
        .filter((pb: any) => pb.brand?.toLowerCase() === b.name?.toLowerCase())
        .reduce((sum: number, pb: any) => sum + pb._count.brand, 0);
      return { ...b, _count: { products: count } };
    });

    return NextResponse.json(brandsWithCount);
  } catch (error) {
    console.error('Error fetching brands:', error);
    return NextResponse.json({ error: 'Failed to fetch brands' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.name) {
      return NextResponse.json({ error: 'Brand name is required' }, { status: 400 });
    }

    const brand = await prisma.brand.create({
      data: {
        name: data.name,
        description: data.description || null
      }
    });
    return NextResponse.json(brand, { status: 201 });
  } catch (error) {
    console.error('Error creating brand:', error);
    return NextResponse.json({ error: 'Failed to create brand' }, { status: 500 });
  }
}
