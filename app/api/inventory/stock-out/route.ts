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
    const { items, reason, referenceNumber, notes } = data;
    
    // Decrement inventory for each item
    const results = await prisma.$transaction(async (prisma) => {
      let updatedCount = 0;
      
      for (const item of items) {
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
             const inv = await prisma.inventory.findUnique({ where: { productId: prodByBarcode.id } });
             if (inv) {
               await prisma.inventory.update({
                 where: { productId: prodByBarcode.id },
                 data: { quantity: { decrement: item.quantity } }
               });
               updatedCount++;
             }
          }
          continue;
        }

        const inv = await prisma.inventory.findUnique({ where: { productId: product.id } });
        if (inv) {
          await prisma.inventory.update({
            where: { productId: product.id },
            data: { quantity: { decrement: item.quantity } }
          });
          updatedCount++;
        }
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
      
      return updatedCount;
    });

    return NextResponse.json({ success: true, updatedCount: results }, { status: 200 });
  } catch (error) {
    console.error('Error processing stock out:', error);
    return NextResponse.json({ error: 'Failed to process stock out' }, { status: 500 });
  }
}
