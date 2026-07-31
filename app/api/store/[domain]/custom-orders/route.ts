import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(
  req: Request,
  { params }: { params: Promise<{ domain: string }> }
) {
  try {
    const { domain } = await params;
    const body = await req.json();
    const { firstName, lastName, email, vision } = body;

    if (!firstName || !email || !vision) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Find the tenant by domain
    const decodedDomain = decodeURIComponent(domain);
    const tenant = await prisma.tenant.findFirst({
      where: {
        OR: [
          { subdomain: decodedDomain },
          { customDomain: decodedDomain },
        ],
      },
    });

    if (!tenant) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    // Create a notification for the store admin about this custom order
    await prisma.notification.create({
      data: {
        title: `New Custom Order Request: ${firstName} ${lastName}`,
        message: `Email: ${email}\n\nVision: ${vision}`,
        type: 'CUSTOM_ORDER',
        tenantId: tenant.id,
      }
    });

    return NextResponse.json({ success: true, message: "Request submitted successfully" });
  } catch (error) {
    console.error("Custom order submission error:", error);
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
  }
}
