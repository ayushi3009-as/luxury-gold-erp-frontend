import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const plans = await prisma.saaSPlan.findMany({
      orderBy: { pricePerMonth: 'asc' }
    });
    return NextResponse.json(plans);
  } catch (error) {
    console.error('Error fetching SaaS plans:', error);
    return NextResponse.json({ error: 'Failed to fetch plans' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, pricePerMonth, pricePerYear, maxUsers, maxBranches, features } = body;

    if (!name || pricePerMonth === undefined || pricePerYear === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const plan = await prisma.saaSPlan.create({
      data: {
        name,
        description,
        pricePerMonth,
        pricePerYear,
        maxUsers: maxUsers || 5,
        maxBranches: maxBranches || 1,
        features
      }
    });

    return NextResponse.json(plan, { status: 201 });
  } catch (error) {
    console.error('Error creating SaaS plan:', error);
    return NextResponse.json({ error: 'Failed to create plan' }, { status: 500 });
  }
}
