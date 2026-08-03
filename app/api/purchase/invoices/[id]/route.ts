import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    const invoice = await prisma.purchaseInvoice.findUnique({ where: { invoiceNumber: id } });
    if (!invoice) {
      return NextResponse.json({ error: 'Purchase invoice not found' }, { status: 404 });
    }

    await prisma.purchaseInvoiceItem.deleteMany({
      where: { invoiceId: invoice.id }
    });

    await prisma.purchaseInvoice.delete({
      where: { invoiceNumber: id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting purchase invoice:', error);
    return NextResponse.json({ error: 'Failed to delete purchase invoice' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();
    const { supplierId, itemName, amount, status, invoiceNo, date } = data;

    const invoice = await prisma.purchaseInvoice.findUnique({ where: { invoiceNumber: id } });
    if (!invoice) {
      return NextResponse.json({ error: 'Purchase invoice not found' }, { status: 404 });
    }

    const numAmount = amount ? Number(amount) : invoice.totalAmount;
    const invoiceDate = date ? new Date(date) : invoice.invoiceDate;

    await prisma.purchaseInvoiceItem.deleteMany({
      where: { invoiceId: invoice.id }
    });

    const updatedInvoice = await prisma.purchaseInvoice.update({
      where: { invoiceNumber: id },
      data: {
        invoiceNumber: invoiceNo || invoice.invoiceNumber,
        invoiceDate,
        supplierId: supplierId || invoice.supplierId,
        paymentStatus: status || invoice.paymentStatus,
        subtotal: numAmount,
        totalAmount: numAmount,
        items: {
          create: [{
            itemName: itemName || 'Updated Item',
            category: 'General',
            weight: 0,
            rate: numAmount,
            gstPercentage: 0,
            amount: numAmount
          }]
        }
      }
    });

    return NextResponse.json(updatedInvoice, { status: 200 });

  } catch (error) {
    console.error('Error updating purchase invoice:', error);
    return NextResponse.json({ error: 'Failed to update purchase invoice' }, { status: 500 });
  }
}
