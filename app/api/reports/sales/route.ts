import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function GET() {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    let tenantId = session.tenantId;
    if (!tenantId) {
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      if (user?.tenantId) {
        tenantId = user.tenantId;
      } else {
        return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
      }
    }

    const invoices = await prisma.invoice.findMany({
      where: { tenantId },
      include: {
        customer: true,
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    return NextResponse.json(invoices);
  } catch (error) {
    console.error('Error fetching sales:', error);
    return NextResponse.json({ error: 'Failed to fetch sales' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    let tenantId = session.tenantId;
    if (!tenantId) {
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      if (user?.tenantId) {
        tenantId = user.tenantId;
      } else {
        return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
      }
    }

    const data = await req.json();

    // Find or create customer
    let customer = await prisma.customer.findFirst({
      where: { 
        name: data.customerName,
        tenantId
      }
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: data.customerName || 'Walk-in Customer',
          mobile: `99${Math.floor(10000000 + Math.random() * 90000000)}`,
          tenantId
        }
      });
    }

    // Find or create product
    let product = await prisma.product.findFirst({
      where: {
        name: data.productName || 'Custom Item',
        tenantId
      }
    });

    if (!product) {
      product = await prisma.product.create({
        data: {
          name: data.productName || 'Custom Item',
          tenantId,
          isPublished: true
        }
      });
    }

    // Create Invoice
    const invoice = await prisma.invoice.create({
      data: {
        invoiceNo: data.invoiceNumber || `INV-${Date.now()}`,
        customerId: customer.id,
        totalAmount: Number(data.amount) || 0,
        status: data.paymentStatus || 'PAID',
        tenantId,
        createdAt: data.salesDate ? new Date(data.salesDate) : new Date(),
        items: {
          create: {
            productId: product.id,
            quantity: Number(data.quantity) || 1,
            amount: Number(data.amount) || 0,
            tenantId
          }
        }
      }
    });

    return NextResponse.json(invoice, { status: 201 });
  } catch (error) {
    console.error('Error creating sales report:', error);
    return NextResponse.json({ error: 'Failed to create sales report' }, { status: 500 });
  }
}
