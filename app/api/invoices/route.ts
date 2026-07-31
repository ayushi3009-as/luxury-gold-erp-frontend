import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const invoices = await prisma.invoice.findMany({
      include: {
        customer: true,
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
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
    const { 
      invoiceNumber,
      customerId,
      subTotal,
      taxTotal,
      discountTotal,
      grandTotal,
      paymentMethod,
      items // Array of items
    } = body;

    // Use a transaction to create invoice, add items, and update inventory
    const newInvoice = await prisma.$transaction(async (prisma) => {
      
      const invoice = await prisma.invoice.create({
        data: {
          invoiceNo: invoiceNumber,
          customerId,
          subTotal,
          taxTotal,
          discountTotal,
          totalAmount: grandTotal,
          status: "COMPLETED",
          payments: {
            create: {
              paymentMode: paymentMethod || "CASH",
              amount: grandTotal,
            }
          },
          items: {
            create: items.map((item: any) => ({
              productId: item.productId,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              amount: item.totalPrice, // Note: the schema has 'amount', not 'totalPrice' for the line item total
              makingCharge: item.makingCharge || 0,
              metalRate: item.metalRate || 0,
              taxPercent: item.taxPercent || 3, // Default 3% GST for jewelry
            }))
          }
        },
        include: {
          items: true,
          customer: true,
          payments: true
        }
      });

      // Update Inventory safely
      for (const item of items) {
        const inv = await prisma.inventory.findUnique({
          where: { productId: item.productId }
        });
        if (inv) {
          await prisma.inventory.update({
            where: { productId: item.productId },
            data: {
              quantity: {
                decrement: item.quantity
              }
            }
          });
        }
      }

      return invoice;
    });

    return NextResponse.json(newInvoice, { status: 201 });
  } catch (error) {
    console.error('Error creating invoice:', error);
    return NextResponse.json({ error: 'Failed to create invoice' }, { status: 500 });
  }
}
