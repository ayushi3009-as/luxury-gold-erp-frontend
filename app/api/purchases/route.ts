import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const purchases = await prisma.purchaseInvoice.findMany({
      include: {
        supplier: true,
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(purchases);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Create the purchase invoice and its items
    const purchase = await prisma.purchaseInvoice.create({
      data: {
        invoiceNumber: data.invoiceNumber,
        supplierId: data.supplierId,
        purchaseOrderId: data.purchaseOrderId,
        invoiceDate: data.invoiceDate ? new Date(data.invoiceDate) : new Date(),
        subtotal: data.subtotal || 0,
        gstAmount: data.gstAmount || 0,
        totalAmount: data.totalAmount || 0,
        paymentStatus: data.paymentStatus || 'PENDING',
        items: {
          create: data.items?.map((item: any) => ({
            itemName: item.itemName,
            category: item.category,
            purity: item.purity,
            weight: item.weight,
            rate: item.rate,
            gstPercentage: item.gstPercentage || 0,
            amount: item.amount,
          })) || [],
        },
      },
      include: {
        items: true,
      }
    });

    return NextResponse.json(purchase, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
