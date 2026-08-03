import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();
    
    const { supplierId, invoiceId, amount, paymentMode, referenceNumber, paymentDate, status } = data;

    const numAmount = Number(amount);
    const pDate = paymentDate ? new Date(paymentDate) : undefined;

    const payment = await prisma.supplierPayment.update({
      where: { id },
      data: {
        supplierId,
        invoiceId: invoiceId || null,
        paymentDate: pDate,
        paymentMode,
        amount: numAmount,
        referenceNumber,
        status
      }
    });

    if (invoiceId && status === 'COMPLETED') {
        await prisma.purchaseInvoice.update({
            where: { id: invoiceId },
            data: { paymentStatus: 'PAID' }
        });
    }

    return NextResponse.json(payment);
  } catch (error) {
    console.error('Error updating supplier payment:', error);
    return NextResponse.json({ error: 'Failed to update supplier payment' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.supplierPayment.delete({
      where: { id }
    });
    return NextResponse.json({ message: 'Supplier payment deleted successfully' });
  } catch (error) {
    console.error('Error deleting supplier payment:', error);
    return NextResponse.json({ error: 'Failed to delete supplier payment' }, { status: 500 });
  }
}
