import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer: customerData, items, subtotal, tenantSubdomain } = body;

    if (!tenantSubdomain || !customerData || !items || items.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const tenant = await prisma.tenant.findUnique({
      where: { subdomain: tenantSubdomain }
    });

    if (!tenant) {
      return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });
    }

    // Find or create customer based on mobile number
    let customer = await prisma.customer.findUnique({
      where: { mobile: customerData.mobile }
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: `${customerData.firstName} ${customerData.lastName}`,
          mobile: customerData.mobile,
          email: customerData.email,
          address: `${customerData.address}, ${customerData.city}, ${customerData.pincode}`,
          tenantId: tenant.id
        }
      });
    }

    // Generate unique invoice number
    const timestamp = Date.now().toString().slice(-6);
    const invoiceNo = `ONL-${timestamp}`;

    // Create Invoice (Order)
    const invoice = await prisma.invoice.create({
      data: {
        invoiceNo,
        customerId: customer.id,
        tenantId: tenant.id,
        totalAmount: subtotal,
        subTotal: subtotal,
        status: 'ONLINE_ORDER',
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            amount: item.price * item.quantity,
            unitPrice: item.price,
            tenantId: tenant.id
          }))
        }
      }
    });

    return NextResponse.json({ success: true, orderId: invoice.id, invoiceNo });

  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
