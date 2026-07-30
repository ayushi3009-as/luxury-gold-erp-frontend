import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    });
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      firstName, 
      lastName, 
      phone, 
      email, 
      panNumber,
      aadharNumber,
      gstNumber,
      address,
      city,
      state,
      pincode
    } = body;

    const newCustomer = await prisma.customer.create({
      data: {
        name: body.name || (body.firstName + ' ' + (body.lastName || '')).trim(),
        mobile: body.mobile || body.phone,
        email: body.email,
        address: body.address,
      }
    });

    return NextResponse.json(newCustomer, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}
