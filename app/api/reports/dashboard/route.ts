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

    // 1. Inventory Products Count
    const productsCount = await prisma.product.count({ where });

    // 2. Sales Count
    const allSalesCount = await prisma.invoice.count({ where });

    // 3. Registered Customers Count
    const customersCount = await prisma.customer.count({ where });

    // 4. Repair Orders Count
    const repairOrdersCount = await prisma.repairOrder.count({ where });

    // Also fetch last 5 invoices for a recent activity list
    const recentSales = await prisma.invoice.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        invoiceNo: true,
        totalAmount: true,
        createdAt: true,
        customer: { select: { name: true } }
      }
    });

    return NextResponse.json({
      inventory: productsCount,
      sales: allSalesCount,
      customers: customersCount,
      repairs: repairOrdersCount,
      recentActivity: recentSales
    });

  } catch (error) {
    console.error('Error fetching reports dashboard data:', error);
    return NextResponse.json({ error: 'Failed to fetch reports dashboard data' }, { status: 500 });
  }
}
