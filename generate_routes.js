const fs = require('fs');
const path = require('path');

const models = [
  { route: 'material-consumptions', model: 'materialConsumption' },
  { route: 'production-orders', model: 'productionOrder' },
  { route: 'quality-checks', model: 'qualityCheck' },
  { route: 'workers', model: 'worker' }
];

const baseDir = 'app/api/manufacturing';

models.forEach(m => {
  const dir = path.join(baseDir, m.route);
  const idDir = path.join(dir, '[id]');
  
  fs.mkdirSync(idDir, { recursive: true });
  
  const routeContent = `import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await prisma.${m.model}.findMany({ where: { tenantId: session.tenantId }, orderBy: { createdAt: 'desc' } });
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
    const data = await prisma.${m.model}.create({ data: { ...body, tenantId: session.tenantId, id: undefined, createdAt: undefined, updatedAt: undefined } });
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
`;

  fs.writeFileSync(path.join(dir, 'route.ts'), routeContent);
  
  const idContent = `import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await prisma.${m.model}.findFirst({ where: { id: params.id, tenantId: session.tenantId } });
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
    const data = await prisma.${m.model}.update({ where: { id: params.id }, data: { ...body, tenantId: session.tenantId, id: undefined, createdAt: undefined, updatedAt: undefined } });
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    await prisma.${m.model}.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: 'Deleted' });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
`;

  fs.writeFileSync(path.join(idDir, 'route.ts'), idContent);
});
