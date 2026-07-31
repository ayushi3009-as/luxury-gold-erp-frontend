import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function GET() {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
    }

    // Get the most recent gold rate FOR THIS TENANT
    const latestRate = await prisma.goldRate.findFirst({
      where: { tenantId: session.tenantId },
      orderBy: { createdAt: 'desc' }
    });

    if (!latestRate) {
      return NextResponse.json({
        gold24k: 74250,
        gold22k: 68100,
        gold18k: 55680,
        silver: 92500,
        platinum: 45000,
        effectiveAt: new Date()
      });
    }

    return NextResponse.json(latestRate);
  } catch (error) {
    console.error('Error fetching gold rate:', error);
    return NextResponse.json({ error: 'Failed to fetch gold rate' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
    }

    const data = await req.json();
    
    // Create new rate linked to THIS TENANT
    const newRate = await prisma.goldRate.create({
      data: {
        tenantId: session.tenantId,
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
