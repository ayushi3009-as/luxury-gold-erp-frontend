import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    const where = session?.tenantId ? { tenantId: session.tenantId } : {};
    
    const invoices = await prisma.invoice.findMany({
      where,
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
    const session = await getSession();
    const tenantId = session?.tenantId;
    
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
          ...(tenantId ? { tenantId } : {}),
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
              ...(tenantId ? { tenantId } : {})
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
        const inv = await prisma.inventory.findFirst({
          where: { productId: item.productId, ...(tenantId ? { tenantId } : {}) }
        });
        if (inv) {
          await prisma.inventory.update({
            where: { id: inv.id },
            data: {
              quantity: {
                decrement: item.quantity
              }
            }
          });
        }
      }

      if (session?.userId && tenantId) {
        await prisma.activityLog.create({
          data: {
            action: 'CREATE',
            module: 'INVOICE',
            description: `Generated new sales invoice ${invoiceNumber} for ₹${grandTotal}`,
            userId: session.userId,
            tenantId: tenantId,
          }
        });
      }

      return invoice;
    });

    return NextResponse.json(newInvoice, { status: 201 });
  } catch (error) {
    console.error('Error creating invoice:', error);
    return NextResponse.json({ error: 'Failed to create invoice' }, { status: 500 });
  }
}
