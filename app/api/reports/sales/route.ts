import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

async function getTenantId() {
  try {
    const session = await getSession();
    if (session?.tenantId) return session.tenantId;
    if (session?.userId) {
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      if (user?.tenantId) return user.tenantId;
    }
  } catch (e) {
    console.error('Session error:', e);
  }
  return null;
}

export async function GET() {
  try {
    const tenantId = await getTenantId();
    const where = tenantId ? { tenantId } : {};

    const sales = await prisma.invoice.findMany({
      where,
      include: {
        customer: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(sales);
  } catch (error) {
    console.error('Error fetching sales report data:', error);
    return NextResponse.json({ error: 'Failed to fetch sales' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const tenantId = await getTenantId();
    if (tenantId) {
      const invoice = await prisma.invoice.findUnique({ where: { id } });
      if (invoice?.tenantId !== tenantId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
      }
    }

    await prisma.invoice.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting sale:', error);
    return NextResponse.json({ error: 'Failed to delete sale' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const tenantId = await getTenantId();
    
    const newInvoice = await prisma.invoice.create({
      data: {
        invoiceNo: data.invoiceNumber || "INV-" + Date.now(),
        totalAmount: Number(data.amount) || 0,
        status: data.paymentStatus || "PAID",
        tenantId: tenantId,
        customer: {
          create: {
            name: data.customerName || "Walk-in Customer",
            mobile: "0000000000",
            tenantId: tenantId
          }
        }
      }
    });

    return NextResponse.json(newInvoice);
  } catch (error) {
    console.error("Error creating sale:", error);
    return NextResponse.json({ error: "Failed to create sale" }, { status: 500 });
  }
}
