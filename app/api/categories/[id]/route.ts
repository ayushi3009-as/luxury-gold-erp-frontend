import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    if (!data.name) {
      return NextResponse.json({ error: 'Category name is required' }, { status: 400 });
    }

    // Wait for the params promise before using params.id
    const id = (await params).id;

    const category = await prisma.category.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description || null
      }
    });
    return NextResponse.json(category);
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
  }
}
