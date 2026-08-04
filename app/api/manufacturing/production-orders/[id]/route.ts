import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await prisma.productionOrder.findFirst({ where: { id: params.id, tenantId: session.tenantId } });
    if (!data) return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const data = await prisma.productionOrder.update({ where: { id: params.id }, data: { ...body, tenantId: session.tenantId, id: undefined, createdAt: undefined, updatedAt: undefined } });
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    await prisma.productionOrder.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: 'Deleted' });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
