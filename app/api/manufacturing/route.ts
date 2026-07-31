import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const orders = await prisma.manufacturingOrder.findMany({
      include: {
        product: true
      },
      orderBy: { createdAt: 'desc' }
    });

    const metrics = {
      totalOrders: orders.length,
      pendingCards: orders.filter(o => o.status === 'PENDING').length,
      completedItems: orders.filter(o => o.status === 'COMPLETED').length,
      activeWorkers: 12 // Hardcoded for now as per original UI
    };

    return NextResponse.json({ orders, metrics });
  } catch (error) {
    console.error('Error fetching manufacturing orders:', error);
    return NextResponse.json({ error: 'Failed to fetch manufacturing orders' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Auto-generate Order Number
    const orderNumber = data.orderNumber || `MFG-${Math.floor(10000 + Math.random() * 90000)}`;

    const order = await prisma.manufacturingOrder.create({
      data: {
        orderNumber,
        productId: data.productId,
        quantity: Number(data.quantity) || 1,
        startDate: new Date(),
        status: 'PENDING'
      },
      include: {
        product: true
      }
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Error creating manufacturing order:', error);
    return NextResponse.json({ error: 'Failed to create manufacturing order' }, { status: 500 });
  }
}
