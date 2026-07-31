import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { employeeId, month, year, basicSalary, allowances = 0, deductions = 0 } = body;

    const netSalary = parseFloat(basicSalary) + parseFloat(allowances) - parseFloat(deductions);

    const payroll = await prisma.payroll.create({
      data: {
        employeeId,
        month: parseInt(month, 10),
        year: parseInt(year, 10),
        basicSalary: parseFloat(basicSalary),
        allowances: parseFloat(allowances),
        deductions: parseFloat(deductions),
        netSalary,
      },
    });

    return NextResponse.json(payroll, { status: 201 });
  } catch (error) {
    console.error('Error generating payroll:', error);
    return NextResponse.json({ error: 'Failed to generate payroll' }, { status: 500 });
  }
}
