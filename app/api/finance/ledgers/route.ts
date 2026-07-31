import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const ledgers = await prisma.financeAccount.findMany({
      include: {
        branch: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(ledgers);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const ledger = await prisma.financeAccount.create({
      data: {
        branchId: data.branchId,
        accountName: data.accountName,
        accountNumber: data.accountNumber,
        accountType: data.accountType,
        bankName: data.bankName,
        ifscCode: data.ifscCode,
        openingBalance: data.openingBalance || 0,
        currentBalance: data.openingBalance || 0, // Initially currentBalance is the same as openingBalance
        status: data.status ?? true,
      },
    });
    return NextResponse.json(ledger, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
