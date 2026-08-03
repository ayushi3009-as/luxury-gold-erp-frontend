import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    if (!data.name) {
      return NextResponse.json({ error: 'Collection name is required' }, { status: 400 });
    }

    // Wait for the params promise before using params.id
    const id = (await params).id;

    const collection = await prisma.collection.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description || null
      }
    });
    return NextResponse.json(collection);
  } catch (error) {
    console.error('Error updating collection:', error);
    return NextResponse.json({ error: 'Failed to update collection' }, { status: 500 });
  }
}
