import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Fetch adjustments from ActivityLog where description includes 'Stock Adjustment'
    const logs = await prisma.activityLog.findMany({
      where: {
        module: 'INVENTORY',
        description: {
          contains: 'Stock Adjustment'
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    const adjustments = logs.map(log => {
      // Parse description assuming format: "Stock Adjustment: [Increase/Decrease] [Quantity] for Product [SKU]. Reason: [Reason]"
      const isIncrease = log.description.includes('Increase');
      const skuMatch = log.description.match(/Product ([^.]+)/);
      const qtyMatch = log.description.match(/(Increase|Decrease) (\d+)/);
      const reasonMatch = log.description.match(/Reason: (.*)/);

      return {
        id: log.id,
        product: "Product", // Real product name requires a join, so we simplify for the log display
        sku: skuMatch ? skuMatch[1] : "N/A",
        type: isIncrease ? "Increase" : "Decrease",
        quantity: qtyMatch ? `${isIncrease ? '+' : '-'}${qtyMatch[2]} Units` : "N/A",
        reason: reasonMatch ? reasonMatch[1] : "Adjustment",
        date: log.createdAt.toISOString(),
        user: log.userId, // Simplify, normally we'd join User
        status: "Approved"
      };
    });

    return NextResponse.json(adjustments);
  } catch (error) {
    console.error('Error fetching adjustments:', error);
    return NextResponse.json({ error: 'Failed to fetch adjustments' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    const { productId, type, quantity, reason, notes } = data; // type is 'Increase' or 'Decrease'

    if (!productId || !type || !quantity || !reason) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const qty = parseInt(quantity, 10);
    
    // Find the product to get its SKU and current inventory
    const product = await prisma.product.findUnique({ where: { id: productId }});
    if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 });

    const result = await prisma.$transaction(async (prisma) => {
      const inv = await prisma.inventory.findUnique({ where: { productId } });
      
      if (!inv && type === 'Decrease') {
        throw new Error('Cannot decrease inventory that does not exist.');
      }

      if (inv) {
        await prisma.inventory.update({
          where: { productId },
          data: {
            quantity: type === 'Increase' ? { increment: qty } : { decrement: qty }
          }
        });
      } else {
        await prisma.inventory.create({
          data: {
            productId,
            quantity: qty,
            minimumStock: 5,
            type: "FINISHED_GOOD"
          }
        });
      }

      const log = await prisma.activityLog.create({
        data: {
          userId: session.userId,
          tenantId: session.tenantId,
          module: 'INVENTORY',
          action: 'UPDATE',
          description: `Stock Adjustment: ${type} ${qty} for Product ${product.productCode || product.sku || product.id}. Reason: ${reason}. Notes: ${notes || ''}`
        }
      });

      return log;
    });

    return NextResponse.json({ success: true, log: result }, { status: 200 });
  } catch (error: any) {
    console.error('Error processing stock adjustment:', error);
    return NextResponse.json({ error: error.message || 'Failed to process adjustment' }, { status: 500 });
  }
}
