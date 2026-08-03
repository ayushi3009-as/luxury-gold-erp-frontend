import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    const where = session?.tenantId ? { tenantId: session.tenantId } : {};
    
    const customers = await prisma.customer.findMany({
      where,
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
    const session = await getSession();
    const tenantId = session?.tenantId;
    
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

    const mobileNo = body.mobile || body.phone || "9999999999";
    const nameStr = body.name || (body.firstName + ' ' + (body.lastName || '')).trim() || "Walk-in Customer";

    // Use upsert to avoid unique constraint errors on mobile number
    const newCustomer = await prisma.customer.upsert({
      where: { mobile: mobileNo },
      update: {
        name: nameStr,
        email: body.email || null,
        address: body.address || null,
      },
      create: {
        name: nameStr,
        mobile: mobileNo,
        email: body.email,
        address: body.address,
        ...(tenantId ? { tenantId } : {})
      }
    });

    if (session?.userId && tenantId) {
      await prisma.activityLog.create({
        data: {
          action: 'CREATE',
          module: 'CUSTOMER',
          description: `Added or updated customer: ${nameStr}`,
          userId: session.userId,
          tenantId: tenantId,
        }
      }).catch(err => console.error("Failed to log activity:", err));
    }

    return NextResponse.json(newCustomer, { status: 200 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}
