"use server";

import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function generateBackupAction() {
  const session = await getSession();
  if (!session || !session.userId) {
    throw new Error('Unauthorized');
  }

  let tenantId = session.tenantId;
  if (!tenantId) {
    const user = await prisma.user.findUnique({ where: { id: session.userId } });
    if (user?.tenantId) {
      tenantId = user.tenantId;
    } else if (session.role !== 'Super Admin' && session.role !== 'SUPER_ADMIN') {
      throw new Error('Unauthorized. No Tenant ID found.');
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

  return backupData;
}
