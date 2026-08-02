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
      orderBy: { branchName: 'asc' }
    });

    if (branches.length === 0) {
      // Create some default branches for testing if none exist
      await prisma.branch.createMany({
        data: [
          { branchName: 'Main Warehouse', branchCode: 'WH-01', branchType: 'HEAD_OFFICE', isHeadOffice: true, tenantId: session?.tenantId },
          { branchName: 'Surat Branch', branchCode: 'BR-01', branchType: 'SUB_BRANCH', isHeadOffice: false, tenantId: session?.tenantId },
          { branchName: 'Mumbai Branch', branchCode: 'BR-02', branchType: 'SUB_BRANCH', isHeadOffice: false, tenantId: session?.tenantId },
        ]
      });
      branches = await prisma.branch.findMany({
        where,
        orderBy: { branchName: 'asc' }
      });
    }

    const mappedBranches = branches.map(b => ({
      ...b,
      name: b.branchName,
      code: b.branchCode
    }));

    return NextResponse.json(mappedBranches);
  } catch (error) {
    console.error('Error fetching branches:', error);
    return NextResponse.json({ error: 'Failed to fetch branches' }, { status: 500 });
  }
}
