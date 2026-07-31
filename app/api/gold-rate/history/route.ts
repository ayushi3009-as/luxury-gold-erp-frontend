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
      // Fallback for older sessions without tenantId
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      if (user?.tenantId) {
        tenantId = user.tenantId;
      } else if (session.role !== 'Super Admin' && session.role !== 'SUPER_ADMIN') {
        return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
      }
    }

    // Get the last 30 gold rate updates for this tenant
    const rates = await prisma.goldRate.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
      take: 30
    });

    return NextResponse.json(rates);
  } catch (error) {
    console.error('Error fetching gold rate history:', error);
    return NextResponse.json({ error: 'Failed to fetch gold rate history' }, { status: 500 });
  }
}
