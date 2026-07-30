import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const orders = await prisma.manufacturingOrder.findMany({
      include: {
        product: true,
        workOrders: true
      },
      orderBy: {
        createdAt: 'desc',
      }
    });
    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching manufacturing orders:', error);
    return NextResponse.json({ error: 'Failed to fetch manufacturing orders' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      productId,
      quantity,
      startDate,
      status
    } = body;

    const newOrder = await prisma.manufacturingOrder.create({
      data: {
        orderNumber: `MFG-${Date.now()}`,
        productId,
        quantity: parseInt(quantity, 10),
        startDate: new Date(startDate || Date.now()),
        status: status || 'PENDING',
      },
      include: {
        product: true
      }
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error('Error creating manufacturing order:', error);
    return NextResponse.json({ error: 'Failed to create manufacturing order' }, { status: 500 });
  }
}
