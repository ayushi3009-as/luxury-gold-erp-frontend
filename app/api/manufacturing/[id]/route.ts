import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    
    const updatedOrder = await prisma.manufacturingOrder.update({
      where: { id: params.id },
      data: {
        status: data.status,
      }
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error('Error updating manufacturing order:', error);
    return NextResponse.json({ error: 'Failed to update manufacturing order' }, { status: 500 });
  }
}
