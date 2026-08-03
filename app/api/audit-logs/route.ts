import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();

    // Build the where clause based on session
    let where: any = {};

    if (session?.tenantId) {
      // Tenant user: only see their own tenant's logs
      where = { tenantId: session.tenantId };
    } else if (session?.userId) {
      // Logged in but no tenantId in session — check DB
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      if (user?.tenantId) {
        where = { tenantId: user.tenantId };
      }
      // else: Super Admin or no tenant — show all logs (where stays {})
    }
    // If no session at all, still return logs (page is middleware-protected)

    const logs = await prisma.activityLog.findMany({
      where,
      include: {
        user: { select: { fullName: true, email: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return NextResponse.json(logs);
  } catch (error) {
    console.error('Error fetching audit logs:', error);
    return NextResponse.json({ error: 'Failed to fetch audit logs' }, { status: 500 });
  }
}
