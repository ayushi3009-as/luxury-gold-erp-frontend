import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    const purchaseReturn = await prisma.purchaseReturn.findUnique({ where: { returnNumber: id } });
    if (!purchaseReturn) {
      return NextResponse.json({ error: 'Purchase return not found' }, { status: 404 });
    }

    await prisma.purchaseReturnItem.deleteMany({
      where: { returnId: purchaseReturn.id }
    });

    await prisma.purchaseReturn.delete({
      where: { returnNumber: id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting purchase return:', error);
    return NextResponse.json({ error: 'Failed to delete purchase return' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();
    const { returnNo, date, supplierId, invoiceId, amount, status } = data;

    const purchaseReturn = await prisma.purchaseReturn.findUnique({ where: { returnNumber: id } });
    if (!purchaseReturn) {
      return NextResponse.json({ error: 'Purchase return not found' }, { status: 404 });
    }

    const numAmount = amount ? Number(amount) : purchaseReturn.totalAmount;
    const returnDate = date ? new Date(date) : purchaseReturn.returnDate;

    await prisma.purchaseReturnItem.deleteMany({
      where: { returnId: purchaseReturn.id }
    });

    const updatedReturn = await prisma.purchaseReturn.update({
      where: { returnNumber: id },
      data: {
        returnNumber: returnNo || purchaseReturn.returnNumber,
        returnDate,
        supplierId: supplierId || purchaseReturn.supplierId,
        invoiceId: invoiceId || purchaseReturn.invoiceId,
        totalAmount: numAmount,
        reason: status || purchaseReturn.reason,
        items: {
          create: [{
            itemName: 'Returned Item (Updated)',
            weight: 0,
            quantity: 1,
            amount: numAmount
          }]
        }
      }
    });

    return NextResponse.json(updatedReturn, { status: 200 });

  } catch (error) {
    console.error('Error updating purchase return:', error);
    return NextResponse.json({ error: 'Failed to update purchase return' }, { status: 500 });
  }
}
