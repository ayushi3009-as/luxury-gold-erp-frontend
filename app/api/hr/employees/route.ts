import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        department: true,
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
      gender = 'MALE',
      dateOfBirth = '1990-01-01',
      email,
      phone,
      address,
      designation,
      joiningDate,
      basicSalary,
      departmentName,
    } = body;

    // 1. Find or create department
    let department = await prisma.department.findUnique({ where: { name: departmentName || 'General' } });
    if (!department) {
      department = await prisma.department.create({ data: { name: departmentName || 'General' } });
    }

    // 2. Find or create 'Employee' role
    let role = await prisma.role.findUnique({ where: { name: 'Employee' } });
    if (!role) {
      role = await prisma.role.create({ data: { name: 'Employee', description: 'Standard employee role' } });
    }

    // 3. Auto-create a User account for this employee
    const username = `${firstName.toLowerCase()}.${lastName.toLowerCase()}.${Math.floor(Math.random() * 1000)}`;
    const user = await prisma.user.create({
      data: {
        fullName: `${firstName} ${lastName}`,
        username,
        email,
        mobile: phone,
        passwordHash: '$2b$10$defaulthashedpassword000000000000000000000000000', // placeholder
        roleId: role.id,
      },
    });

    // 4. Create the employee
    const newEmployee = await prisma.employee.create({
      data: {
        employeeCode,
        firstName,
        lastName,
        gender,
        dateOfBirth: new Date(dateOfBirth),
        email,
        phone,
        address: address || '',
        designation,
        joiningDate: new Date(joiningDate),
        basicSalary: parseFloat(basicSalary),
        userId: user.id,
        departmentId: department.id,
      },
      include: { department: true },
    });

    return NextResponse.json(newEmployee, { status: 201 });
  } catch (error: any) {
    console.error('Error creating employee:', error);
    const msg = error?.code === 'P2002' 
      ? 'Employee code, email or phone already exists' 
      : 'Failed to create employee';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
