import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await prisma.workerAssignment.findMany({
      where: { tenantId: session.tenantId },
      orderBy: { createdAt: 'desc' },
      include: {
        worker: true,
        jobCard: true
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

    const formattedData = {
      ...body,
      tenantId: session.tenantId,
      assignedDate: body.assignedDate ? new Date(body.assignedDate) : new Date(),
      id: undefined,
      createdAt: undefined,
      updatedAt: undefined
    };

    const data = await prisma.workerAssignment.create({ data: formattedData });
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
