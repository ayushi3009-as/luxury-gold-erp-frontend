import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const invoices = await prisma.invoice.findMany({
      include: {
        customer: true,
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 10,
    });
    return NextResponse.json(invoices);
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return NextResponse.json({ error: 'Failed to fetch invoices' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerId, items, paymentMode, totalAmount } = body;

    // Create invoice, items, and payment in a transaction
    const result = await prisma.$transaction(async (tx) => {
      const invoice = await tx.invoice.create({
        data: {
          invoiceNo: `INV-${Date.now()}`,
          customerId,
          totalAmount,
          status: 'COMPLETED',
          items: {
            create: items.map((item: any) => ({
              productId: item.productId,
              quantity: item.quantity,
              amount: item.amount,
            })),
          },
          payments: {
            create: {
              paymentMode,
              amount: totalAmount,
            },
          },
        },
        include: {
          items: true,
          payments: true,
        },
      });
      return invoice;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error creating invoice:', error);
    return NextResponse.json({ error: 'Failed to create invoice' }, { status: 500 });
  }
}
