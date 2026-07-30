import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const latestRate = await prisma.goldRate.findFirst({
      orderBy: { effectiveAt: 'desc' },
    });
    
    if (!latestRate) {
      // Return a default mock rate if DB is empty for demo purposes
      return NextResponse.json({
        gold24k: 7620,
        gold22k: 7150,
        gold18k: 5850,
        silver: 85,
        platinum: 3450,
        effectiveAt: new Date(),
      });
    }

    return NextResponse.json(latestRate);
  } catch (error) {
    console.error('Error fetching gold rate:', error);
    return NextResponse.json({ error: 'Failed to fetch gold rate' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { gold24k, gold22k, gold18k, silver, platinum } = body;

    const newRate = await prisma.goldRate.create({
      data: {
        gold24k,
        gold22k,
        gold18k,
        silver,
        platinum,
      },
    });

    return NextResponse.json(newRate, { status: 201 });
  } catch (error) {
    console.error('Error adding gold rate:', error);
    return NextResponse.json({ error: 'Failed to add gold rate' }, { status: 500 });
  }
}
