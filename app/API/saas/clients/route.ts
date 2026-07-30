import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const clients = await prisma.saaSClient.findMany({
      include: {
        subscriptions: {
          include: { plan: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(clients);
  } catch (error) {
    console.error('Error fetching SaaS clients:', error);
    return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, domain, planId } = body;

    if (!name || !email || !domain) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Default plan if not provided
    let finalPlanId = planId;
    if (!finalPlanId) {
      const basicPlan = await prisma.saaSPlan.findFirst();
      if (basicPlan) finalPlanId = basicPlan.id;
    }

    const client = await prisma.saaSClient.create({
      data: {
        name,
        email,
        phone,
        domain,
        subscriptions: finalPlanId ? {
          create: {
            planId: finalPlanId,
            status: 'ACTIVE',
            endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            billingCycle: 'YEARLY'
          }
        } : undefined
      },
      include: {
        subscriptions: true
      }
    });

    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    console.error('Error creating SaaS client:', error);
    return NextResponse.json({ error: 'Failed to create client' }, { status: 500 });
  }
}
