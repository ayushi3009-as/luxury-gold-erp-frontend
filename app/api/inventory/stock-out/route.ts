import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function GET(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '5');

    const stockOuts = await prisma.stockOut.findMany({
      where: { tenantId: session.tenantId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        items: true
      }
    });

    return NextResponse.json(stockOuts, { status: 200 });
  } catch (error) {
    console.error('Error fetching stock outs:', error);
    return NextResponse.json({ error: 'Failed to fetch stock outs' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    const { items, reason, referenceNumber, notes } = data;
    
    const results = await prisma.$transaction(async (prisma) => {
      let updatedCount = 0;
      
      const stockOutNumber = `SO-${new Date().getFullYear()}-${Math.floor(Math.random()*9000)+1000}`;
      
      // Create StockOut record
      const stockOut = await prisma.stockOut.create({
        data: {
          stockOutNumber,
          reason,
          reference: referenceNumber,
          notes,
          tenantId: session.tenantId,
        }
      });
      
      for (const item of items) {
        let matchedProductId = null;
        
        // Find product by SKU
        const product = await prisma.product.findUnique({
          where: { productCode: item.sku }
        });
        
        if (!product) {
          // try barcode
          const prodByBarcode = await prisma.product.findUnique({
             where: { barcode: item.sku }
          });
          if (prodByBarcode) {
             matchedProductId = prodByBarcode.id;
             const inv = await prisma.inventory.findUnique({ where: { productId: prodByBarcode.id } });
             if (inv) {
               await prisma.inventory.update({
                 where: { productId: prodByBarcode.id },
                 data: { quantity: { decrement: item.quantity } }
               });
               updatedCount++;
             }
          }
        } else {
          matchedProductId = product.id;
          const inv = await prisma.inventory.findUnique({ where: { productId: product.id } });
          if (inv) {
            await prisma.inventory.update({
              where: { productId: product.id },
              data: { quantity: { decrement: item.quantity } }
            });
            updatedCount++;
          }
        }
        
        // Create StockOutItem
        await prisma.stockOutItem.create({
           data: {
             stockOutId: stockOut.id,
             productId: matchedProductId,
             sku: item.sku,
             name: item.name,
             quantity: item.quantity,
             weight: item.weight,
             reason: item.reason || reason
           }
        });
      }
      
      // Log the activity
      await prisma.activityLog.create({
        data: {
          userId: session.userId,
          tenantId: session.tenantId,
          module: 'INVENTORY',
          action: 'DELETE',
          description: `Stock Out processed for ${updatedCount} items. Reason: ${reason}. Ref: ${referenceNumber}. Notes: ${notes}`
        }
      });
      
      return stockOut;
    });

    return NextResponse.json({ success: true, stockOut: results }, { status: 200 });
  } catch (error) {
    console.error('Error processing stock out:', error);
    return NextResponse.json({ error: 'Failed to process stock out' }, { status: 500 });
  }
}
