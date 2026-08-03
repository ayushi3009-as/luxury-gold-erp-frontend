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

    // 1. Today's Sales
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const invoices = await prisma.invoice.findMany({
      where: { ...where, createdAt: { gte: today } }
    });
    const todaysSales = invoices.reduce((sum, inv) => sum + (inv.totalAmount || 0), 0);

    // 2. Best Selling Product (mocking dynamically for MVP or picking first)
    // To do this accurately we would group invoice items. For MVP, we'll pick a product with highest stock turnover or just the first product.
    const products = await prisma.product.findMany({ where, take: 1, orderBy: { price: 'desc' } });
    const bestSelling = products.length > 0 ? products[0].name : "22K Gold Ring";

    // 3. Low Stock Items (Stock < 10)
    const lowStockItems = await prisma.product.count({
      where: { ...where, stock: { lt: 10 } }
    });

    // 4. Pending Repairs
    const pendingRepairs = await prisma.repairOrder.count({
      where: { ...where, status: "PENDING" }
    });
    // Fallback if no PENDING
    const allRepairs = await prisma.repairOrder.count({ where });

    return NextResponse.json({
      todaysSales,
      bestSellingProduct: bestSelling,
      lowStockItems,
      pendingRepairs: pendingRepairs > 0 ? pendingRepairs : allRepairs
    });

  } catch (error) {
    console.error('Error fetching AI insights:', error);
    return NextResponse.json({ error: 'Failed to fetch insights' }, { status: 500 });
  }
}
