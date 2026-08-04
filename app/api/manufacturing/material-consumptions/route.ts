import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await prisma.materialConsumption.findMany({
      where: { tenantId: session.tenantId },
      orderBy: { createdAt: 'desc' },
      include: {
        jobCard: {
          include: {
            assignments: {
              include: { worker: true }
            }
          }
        }
      }
    });
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    
    // Resolve jobCardId (could be the ID or the human-readable Job Card Number)
    if (body.jobCardId) {
      const jobCard = await prisma.jobCard.findFirst({
        where: {
          tenantId: session.tenantId,
          OR: [
            { id: body.jobCardId },
            { jobCardNumber: body.jobCardId }
          ]
        }
      });
      if (!jobCard) {
        return NextResponse.json({ success: false, message: 'Invalid Job Card ID or Number' }, { status: 400 });
      }
      body.jobCardId = jobCard.id;
    }

    const data = await prisma.materialConsumption.create({ data: { ...body, tenantId: session.tenantId, id: undefined, createdAt: undefined, updatedAt: undefined } });
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
