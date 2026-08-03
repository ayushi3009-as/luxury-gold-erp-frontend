import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    console.log('[AUDIT-LOG] session:', JSON.stringify(session));
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    let tenantId = session.tenantId;
    let isSuperAdminWithoutTenant = false;

    if (!tenantId) {
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      console.log('[AUDIT-LOG] user from DB:', JSON.stringify(user));
      if (user?.tenantId) {
        tenantId = user.tenantId;
      } else if (session.role === 'Super Admin' || session.role === 'SUPER_ADMIN') {
        isSuperAdminWithoutTenant = true;
      } else {
        console.log('[AUDIT-LOG] Rejected - role:', session.role);
        return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
      }
    }

    const where = isSuperAdminWithoutTenant ? {} : { tenantId };
    console.log('[AUDIT-LOG] query where:', JSON.stringify(where), 'isSuperAdmin:', isSuperAdminWithoutTenant);

    const logs = await prisma.activityLog.findMany({
      where,
      include: {
        user: { select: { name: true, email: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    console.log('[AUDIT-LOG] found logs count:', logs.length);
    return NextResponse.json(logs);
  } catch (error) {
    console.error('Error fetching audit logs:', error);
    return NextResponse.json({ error: 'Failed to fetch audit logs' }, { status: 500 });
  }
}
