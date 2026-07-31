import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    const where = session?.tenantId ? { tenantId: session.tenantId } : {};
    
    let branches = await prisma.branch.findMany({
      where,
      orderBy: { name: 'asc' }
    });

    if (branches.length === 0) {
      // Create some default branches for testing if none exist
      await prisma.branch.createMany({
        data: [
          { name: 'Main Warehouse', code: 'WH-01', isHeadOffice: true, tenantId: session?.tenantId },
          { name: 'Surat Branch', code: 'BR-01', isHeadOffice: false, tenantId: session?.tenantId },
          { name: 'Mumbai Branch', code: 'BR-02', isHeadOffice: false, tenantId: session?.tenantId },
        ]
      });
      branches = await prisma.branch.findMany({
        where,
        orderBy: { name: 'asc' }
      });
    }

    return NextResponse.json(branches);
  } catch (error) {
    console.error('Error fetching branches:', error);
    return NextResponse.json({ error: 'Failed to fetch branches' }, { status: 500 });
  }
}
