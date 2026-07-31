import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    const { branchId, countedBy, items, notes } = data;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 });
    }

    const result = await prisma.$transaction(async (prisma) => {
      let totalDifferences = 0;

      for (const item of items) {
        if (item.difference !== 0) {
          totalDifferences++;
          const inv = await prisma.inventory.findUnique({ where: { productId: item.productId } });
          if (inv) {
            await prisma.inventory.update({
              where: { productId: item.productId },
              data: { quantity: item.physicalQty }
            });
          } else {
             // Create if not exists and physical count > 0
             if (item.physicalQty > 0) {
                await prisma.inventory.create({
                  data: {
                    productId: item.productId,
                    quantity: item.physicalQty,
                    minimumStock: 5,
                    type: "FINISHED_GOOD"
                  }
                });
             }
          }
        }
      }

      const log = await prisma.activityLog.create({
        data: {
          userId: session.userId,
          tenantId: session.tenantId,
          module: 'INVENTORY',
          action: 'UPDATE',
          description: `Physical Count processed by ${countedBy}. Location: ${branchId}. ${items.length} items checked. ${totalDifferences} mismatches adjusted. Notes: ${notes}`
        }
      });

      return log;
    });

    return NextResponse.json({ success: true, log: result }, { status: 201 });
  } catch (error: any) {
    console.error('Error processing physical count:', error);
    return NextResponse.json({ error: error.message || 'Failed to process count' }, { status: 500 });
  }
}
