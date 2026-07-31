import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function GET(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    let tenantId = session.tenantId;
    if (!tenantId) {
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      if (user?.tenantId) {
        tenantId = user.tenantId;
      } else {
        return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
      }
    }

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';

    if (!query || query.length < 2) {
      return NextResponse.json({ customers: [], products: [], invoices: [] });
    }

    const searchQuery = { contains: query, mode: 'insensitive' as const };

    // Fetch Customers
    const customers = await prisma.customer.findMany({
      where: {
        tenantId,
        OR: [
          { name: searchQuery },
          { phone: searchQuery },
          { email: searchQuery },
        ],
      },
      take: 5,
      select: { id: true, name: true, phone: true, email: true },
    });

    // Fetch Products
    const products = await prisma.product.findMany({
      where: {
        tenantId,
        OR: [
          { name: searchQuery },
          { sku: searchQuery },
        ],
      },
      take: 5,
      select: { id: true, name: true, sku: true, price: true },
    });

    // Fetch Invoices
    const invoices = await prisma.invoice.findMany({
      where: {
        tenantId,
        OR: [
          { invoiceNo: searchQuery },
        ],
      },
      take: 5,
      select: { id: true, invoiceNo: true, totalAmount: true, status: true },
    });

    return NextResponse.json({
      customers,
      products,
      invoices,
    });
  } catch (error) {
    console.error('Error fetching search results:', error);
    return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
  }
}
