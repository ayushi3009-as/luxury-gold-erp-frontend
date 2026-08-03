import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    if (!data.name) {
      return NextResponse.json({ error: 'Brand name is required' }, { status: 400 });
    }

    // Wait for the params promise before using params.id
    const id = (await params).id;

    const brand = await prisma.brand.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description || null
      }
    });
    return NextResponse.json(brand);
  } catch (error) {
    console.error('Error updating brand:', error);
    return NextResponse.json({ error: 'Failed to update brand' }, { status: 500 });
  }
}
