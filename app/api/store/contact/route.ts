import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, tenantSubdomain } = body;

    if (!tenantSubdomain || !name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const tenant = await prisma.tenant.findUnique({
      where: { subdomain: tenantSubdomain }
    });

    if (!tenant) {
      return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });
    }

    // Create a Notification in the DB for this tenant
    const notification = await prisma.notification.create({
      data: {
        title: `New Inquiry from ${name}`,
        message: `${message}\n\nReply to: ${email}`,
        type: 'INQUIRY',
        tenantId: tenant.id,
        isRead: false
      }
    });

    return NextResponse.json({ success: true, notificationId: notification.id });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
