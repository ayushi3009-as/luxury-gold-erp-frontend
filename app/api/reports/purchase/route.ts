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

    const purchases = await prisma.purchaseInvoice.findMany({
      where,
      include: {
        supplier: { select: { name: true } }
      },
      orderBy: { invoiceDate: 'desc' }
    });

    return NextResponse.json(purchases);
  } catch (error) {
    console.error('Error fetching purchase report data:', error);
    return NextResponse.json({ error: 'Failed to fetch purchases' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const tenantId = await getTenantId();
    
    const newPurchase = await prisma.purchaseInvoice.create({
      data: {
        invoiceNumber: data.invoiceNumber || "PUR-" + Date.now(),
        totalAmount: Number(data.amount) || 0,
        paymentStatus: data.paymentStatus || "PAID",
        tenant: tenantId ? { connect: { id: tenantId } } : undefined,
        supplier: {
          create: {
            supplierCode: "SUP-" + Date.now(),
            supplierName: data.supplierName || "Walk-in Supplier",
            tenant: tenantId ? { connect: { id: tenantId } } : undefined
          }
        }
      }
    });

    return NextResponse.json(newPurchase);
  } catch (error) {
    console.error("Error creating purchase:", error);
    return NextResponse.json({ error: "Failed to create purchase" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const data = await request.json();
    const tenantId = await getTenantId();

    const existingPurchase = await prisma.purchaseInvoice.findUnique({ where: { id } });
    if (tenantId && existingPurchase?.tenantId !== tenantId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const updatedPurchase = await prisma.purchaseInvoice.update({
      where: { id },
      data: {
        totalAmount: Number(data.amount) || existingPurchase?.totalAmount,
        paymentStatus: data.paymentStatus || existingPurchase?.paymentStatus,
        supplier: data.supplierName ? {
          update: {
            supplierName: data.supplierName
          }
        } : undefined
      }
    });

    return NextResponse.json(updatedPurchase);
  } catch (error) {
    console.error("Error updating purchase:", error);
    return NextResponse.json({ error: "Failed to update purchase" }, { status: 500 });
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
      const invoice = await prisma.purchaseInvoice.findUnique({ where: { id } });
      if (invoice?.tenantId !== tenantId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
      }
    }

    await prisma.purchaseInvoice.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting purchase:', error);
    return NextResponse.json({ error: 'Failed to delete purchase' }, { status: 500 });
  }
}
