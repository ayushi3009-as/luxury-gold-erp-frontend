import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function GET() {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
    }

    // Get the last 30 gold rate updates for this tenant
    const rates = await prisma.goldRate.findMany({
      where: { tenantId: session.tenantId },
      orderBy: { createdAt: 'desc' },
      take: 30
    });

    return NextResponse.json(rates);
  } catch (error) {
    console.error('Error fetching gold rate history:', error);
    return NextResponse.json({ error: 'Failed to fetch gold rate history' }, { status: 500 });
  }
}
