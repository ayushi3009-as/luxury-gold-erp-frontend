import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function POST(req: NextRequest) {
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
      } else if (session.role !== 'Super Admin' && session.role !== 'SUPER_ADMIN') {
        return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
      }
    }

    const payload = await req.json();

    if (!payload || !payload.data) {
      return NextResponse.json({ error: 'Invalid backup file format.' }, { status: 400 });
    }

    const { customers = [], products = [], invoices = [], invoiceItems = [], repairOrders = [] } = payload.data;

    // Use a Prisma transaction to ensure all-or-nothing execution
    await prisma.$transaction(async (tx) => {
      
      // 1. Wipe existing data for this tenant
      // Note: Deleting Invoice automatically cascades and deletes InvoiceItems
      await tx.repairOrder.deleteMany({ where: { tenantId } });
      await tx.invoice.deleteMany({ where: { tenantId } });
      await tx.product.deleteMany({ where: { tenantId } });
      await tx.customer.deleteMany({ where: { tenantId } });

      // 2. Insert new data from backup
      // We must insert Customers and Products first because Invoices and RepairOrders depend on them
      if (customers.length > 0) {
        await tx.customer.createMany({ data: customers.map((c: any) => ({ ...c, tenantId })) });
      }
      
      if (products.length > 0) {
        await tx.product.createMany({ data: products.map((p: any) => ({ ...p, tenantId })) });
      }
      
      if (invoices.length > 0) {
        await tx.invoice.createMany({ data: invoices.map((i: any) => ({ ...i, tenantId })) });
      }
      
      if (invoiceItems.length > 0) {
        await tx.invoiceItem.createMany({ data: invoiceItems.map((item: any) => ({ ...item, tenantId })) });
      }
      
      if (repairOrders.length > 0) {
        await tx.repairOrder.createMany({ data: repairOrders.map((r: any) => ({ ...r, tenantId })) });
      }
    });

    // Log the restore activity
    await prisma.activityLog.create({
      data: {
        userId: session.userId,
        tenantId,
        module: 'backup',
        action: 'UPDATE',
        description: 'Restored database from backup file',
      }
    });

    return NextResponse.json({ success: true, message: 'Database restored successfully.' });
  } catch (error: any) {
    console.error('Restore Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to restore backup.' }, { status: 500 });
  }
}
