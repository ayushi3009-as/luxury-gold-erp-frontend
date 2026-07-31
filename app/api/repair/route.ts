import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const orders = await prisma.repairOrder.findMany({
      orderBy: { createdAt: 'desc' }
    });

    const metrics = {
      totalRepairs: orders.length,
      pending: orders.filter(o => o.status === 'PENDING').length,
      inProgress: orders.filter(o => o.status === 'IN_PROGRESS').length,
      completed: orders.filter(o => o.status === 'COMPLETED').length,
      delivered: orders.filter(o => o.status === 'DELIVERED').length,
    };

    return NextResponse.json({ orders, metrics });
  } catch (error) {
    console.error('Error fetching repair orders:', error);
    return NextResponse.json({ error: 'Failed to fetch repair orders' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Auto-generate Repair Number
    const repairNumber = `REP-${Math.floor(10000 + Math.random() * 90000)}`;

    const order = await prisma.repairOrder.create({
      data: {
        repairNumber,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        itemName: data.itemName,
        description: data.description,
        estimatedCost: Number(data.estimatedCost) || 0,
        advancePaid: Number(data.advancePaid) || 0,
        status: 'PENDING',
        expectedDate: data.expectedDate ? new Date(data.expectedDate) : null,
      }
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Error creating repair order:', error);
    return NextResponse.json({ error: 'Failed to create repair order' }, { status: 500 });
  }
}
