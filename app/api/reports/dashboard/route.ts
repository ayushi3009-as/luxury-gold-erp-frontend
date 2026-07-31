import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

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
      } else if (session.role !== 'Super Admin' && session.role !== 'SUPER_ADMIN') {
        return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
      }
    }

    // 1. Inventory Products Count
    const productsCount = await prisma.product.count({
      where: { tenantId }
    });

    // 2. Completed Sales Count
    const salesCount = await prisma.invoice.count({
      where: { 
        tenantId,
        status: { in: ['COMPLETED', 'PAID', 'DELIVERED'] }
      }
    });
    // In case they don't use 'COMPLETED', we just count all invoices
    const allSalesCount = await prisma.invoice.count({
      where: { tenantId }
    });

    // 3. Registered Customers Count
    const customersCount = await prisma.customer.count({
      where: { tenantId }
    });

    // 4. Repair Orders Count
    const repairOrdersCount = await prisma.repairOrder.count({
      where: { tenantId }
    });

    return NextResponse.json({
      inventory: productsCount,
      sales: salesCount > 0 ? salesCount : allSalesCount,
      customers: customersCount,
      repairs: repairOrdersCount
    });

  } catch (error) {
    console.error('Error fetching reports dashboard data:', error);
    return NextResponse.json({ error: 'Failed to fetch reports dashboard data' }, { status: 500 });
  }
}
