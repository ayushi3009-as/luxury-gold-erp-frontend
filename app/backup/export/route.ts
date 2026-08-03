import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    
    // DEBUG LOGGING
    const { headers } = await import("next/headers");
    const reqHeaders = await headers();
    console.log("BACKUP DOWNLOAD - Path: /backup/export - Cookie:", reqHeaders.get("cookie"));
    console.log("BACKUP DOWNLOAD - Session:", session);
    
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

    const customers = await prisma.customer.findMany({ where: { tenantId } });
    const products = await prisma.product.findMany({ where: { tenantId } });
    const invoices = await prisma.invoice.findMany({ where: { tenantId } });
    const invoiceItems = await prisma.invoiceItem.findMany({ where: { invoice: { tenantId } } });
    const repairOrders = await prisma.repairOrder.findMany({ where: { tenantId } });
    
    const backupData = {
      timestamp: new Date().toISOString(),
      tenantId,
      version: '1.0',
      data: {
        customers,
        products,
        invoices,
        invoiceItems,
        repairOrders,
      }
    };

    await prisma.activityLog.create({
      data: {
        userId: session.userId,
        tenantId,
        module: 'backup',
        action: 'CREATE',
        description: 'Generated a full database backup',
      }
    });

    const jsonString = JSON.stringify(backupData, null, 2);
    
    const response = new NextResponse(jsonString, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="luxury_gold_backup_${new Date().toISOString().split('T')[0]}.json"`,
      },
    });

    return response;
  } catch (error) {
    console.error('Error generating backup:', error);
    return NextResponse.json({ error: 'Failed to generate backup.' }, { status: 500 });
  }
}
