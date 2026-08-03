import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = 'force-dynamic';

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

    // Try tenant-specific first, then global fallback
    const latestRate = tenantId
      ? await prisma.goldRate.findFirst({ where: { tenantId }, orderBy: { createdAt: 'desc' } })
      : await prisma.goldRate.findFirst({ orderBy: { createdAt: 'desc' } });

    return NextResponse.json(latestRate || { 
      gold24k: 74250, 
      gold22k: 68100,
      gold18k: 55680,
      silver: 92500,
      platinum: 45000,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Error fetching gold rate:', error);
    return NextResponse.json({ error: 'Failed to fetch gold rate' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const tenantId = await getTenantId();
    const data = await req.json();
    
    // Create new rate, linked to tenant if available
    const newRate = await prisma.goldRate.create({
      data: {
        tenantId: tenantId || undefined,
        gold24k: Number(data.gold24k),
        gold22k: Number(data.gold22k),
        gold18k: Number(data.gold18k),
        silver: Number(data.silver),
        platinum: Number(data.platinum || 0),
        effectiveAt: new Date()
      }
    });

    return NextResponse.json(newRate, { status: 201 });
  } catch (error) {
    console.error('Error updating gold rate:', error);
    return NextResponse.json({ error: 'Failed to update gold rate' }, { status: 500 });
  }
}
