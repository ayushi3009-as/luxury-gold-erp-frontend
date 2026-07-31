import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        department: true,
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      employeeCode,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phone,
      address,
      designation,
      joiningDate,
      basicSalary,
      userId,
      departmentId,
    } = body;

    const newEmployee = await prisma.employee.create({
      data: {
        employeeCode,
        firstName,
        lastName,
        gender,
        dateOfBirth: new Date(dateOfBirth),
        email,
        phone,
        address,
        designation,
        joiningDate: new Date(joiningDate),
        basicSalary: parseFloat(basicSalary),
        userId,
        departmentId,
      },
    });

    return NextResponse.json(newEmployee, { status: 201 });
  } catch (error) {
    console.error('Error creating employee:', error);
    return NextResponse.json({ error: 'Failed to create employee' }, { status: 500 });
  }
}
