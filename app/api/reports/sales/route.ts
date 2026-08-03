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
