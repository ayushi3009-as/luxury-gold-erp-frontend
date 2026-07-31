import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const entries = await prisma.goodsReceipt.findMany({
      include: {
        supplier: true,
        purchaseOrder: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const suppliers = await prisma.supplier.findMany({
      orderBy: { supplierName: 'asc' }
    });

    const orders = await prisma.purchaseOrder.findMany({
      where: { status: { in: ['PENDING', 'APPROVED'] } },
      orderBy: { poNumber: 'asc' }
    });

    return NextResponse.json({
      entries: entries.map(e => ({
        id: e.grnNumber,
        poNumber: e.purchaseOrder.poNumber,
        supplierName: e.supplier.supplierName,
        date: e.receiptDate,
        weight: `${e.totalWeight} g`,
        status: e.receiptStatus
      })),
      suppliers,
      orders
    });

  } catch (error) {
    console.error('Error fetching purchase entries:', error);
    return NextResponse.json({ error: 'Failed to fetch purchase entries' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { supplierId, purchaseOrderId, weight } = data;

    if (!supplierId || !purchaseOrderId || !weight) {
      return NextResponse.json({ error: 'Supplier, PO, and weight are required' }, { status: 400 });
    }

    const count = await prisma.goodsReceipt.count();
    const grnNumber = `GRN-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;

    const entry = await prisma.goodsReceipt.create({
      data: {
        grnNumber,
        supplierId,
        purchaseOrderId,
        receiptDate: new Date(),
        totalWeight: Number(weight),
        receiptStatus: 'RECEIVED',
        qualityStatus: 'CHECKED',
      }
    });

    // Optionally update PO status to COMPLETED
    await prisma.purchaseOrder.update({
      where: { id: purchaseOrderId },
      data: { status: 'COMPLETED' }
    });

    return NextResponse.json(entry, { status: 201 });

  } catch (error) {
    console.error('Error creating purchase entry:', error);
    return NextResponse.json({ error: 'Failed to create purchase entry' }, { status: 500 });
  }
}
