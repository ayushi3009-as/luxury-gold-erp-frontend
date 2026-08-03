import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const range = searchParams.get('range') || 'This Month';

    let dateFilter = {};
    const now = new Date();
    
    if (range === 'Today') {
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      dateFilter = { gte: start };
    } else if (range === 'This Week') {
      const start = new Date(now.setDate(now.getDate() - now.getDay()));
      start.setHours(0, 0, 0, 0);
      dateFilter = { gte: start };
    } else if (range === 'This Month') {
      const start = new Date(now.getFullYear(), now.getMonth(), 1);
      dateFilter = { gte: start };
    } else if (range === 'This Year') {
      const start = new Date(now.getFullYear(), 0, 1);
      dateFilter = { gte: start };
    }

    const whereClause = Object.keys(dateFilter).length > 0 ? { createdAt: dateFilter } : {};

    const invoices = await prisma.invoice.findMany({
      where: whereClause,
      include: {
        customer: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    const exportData = invoices.map(inv => ({
      'Invoice Number': inv.invoiceNumber,
      'Date': inv.createdAt.toISOString().split('T')[0],
      'Customer Name': inv.customer?.name || 'Walk-in Customer',
      'Total Amount': inv.grandTotal || 0,
      'Status': inv.status,
      'Payment Method': inv.paymentMethod || 'CASH'
    }));

    return NextResponse.json({ data: exportData });

  } catch (error) {
    console.error('Error exporting sales data:', error);
    return NextResponse.json({ error: 'Failed to export sales data' }, { status: 500 });
  }
}
