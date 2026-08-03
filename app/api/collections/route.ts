import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const collections = await prisma.collection.findMany({
      orderBy: { name: 'asc' }
    });

    const productCounts = await prisma.product.groupBy({
      by: ['collection'],
      _count: { collection: true }
    });

    const collectionsWithCount = collections.map((c: any) => {
      const count = productCounts
        .filter((pc: any) => pc.collection?.toLowerCase() === c.name?.toLowerCase())
        .reduce((sum: number, pc: any) => sum + pc._count.collection, 0);
      return { ...c, _count: { products: count } };
    });

    return NextResponse.json(collectionsWithCount);
  } catch (error) {
    console.error('Error fetching collections:', error);
    return NextResponse.json({ error: 'Failed to fetch collections' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.name) {
      return NextResponse.json({ error: 'Collection name is required' }, { status: 400 });
    }

    const collection = await prisma.collection.create({
      data: {
        name: data.name,
        description: data.description || null
      }
    });
    return NextResponse.json(collection, { status: 201 });
  } catch (error) {
    console.error('Error creating collection:', error);
    return NextResponse.json({ error: 'Failed to create collection' }, { status: 500 });
  }
}
