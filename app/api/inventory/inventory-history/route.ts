import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    const where = session?.tenantId ? { tenantId: session.tenantId, module: 'INVENTORY' } : { module: 'INVENTORY' };
    
    const logs = await prisma.activityLog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 100 // limit to last 100 for now
    });

    const formattedLogs = logs.map(log => {
      let type = "Adjustment";
      if (log.description.toLowerCase().includes('stock out') || log.description.toLowerCase().includes('sold') || log.description.toLowerCase().includes('decrease')) type = "Stock Out";
      if (log.description.toLowerCase().includes('stock entry') || log.description.toLowerCase().includes('received') || log.description.toLowerCase().includes('increase')) type = "Stock In";
      if (log.description.toLowerCase().includes('transfer')) type = "Transfer";

      return {
        id: log.id.substring(0, 8),
        date: log.createdAt.toISOString(),
        type,
        product: "N/A", // Not fully parsed
        sku: "N/A", // Not fully parsed
        quantity: "See Notes", // Not fully parsed
        reference: log.action,
        user: log.userId,
        status: "Completed",
        description: log.description
      };
    });

    return NextResponse.json(formattedLogs);
  } catch (error) {
    console.error('Error fetching inventory history:', error);
    return NextResponse.json({ error: 'Failed to fetch history' }, { status: 500 });
  }
}
