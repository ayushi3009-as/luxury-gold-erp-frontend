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
    const { fromBranchId, toBranchId, items, remarks } = data;

    if (!fromBranchId || !toBranchId || !items || items.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Process transfer
    const result = await prisma.$transaction(async (prisma) => {
      // Create transfer record
      const transferNumber = `TR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      const transfer = await prisma.branchTransfer.create({
        data: {
          transferNumber,
          fromBranchId,
          toBranchId,
          remarks,
          tenantId: session.tenantId,
          status: 'PENDING',
          items: {
            create: items.map((item: any) => ({
              productId: item.productId,
              quantity: item.quantity,
            }))
          }
        }
      });

      // Deduct inventory from the source branch
      // (Since we aren't fully managing branch-specific inventory quantities in the schema yet without a BranchInventory model, 
      // we will just log it. If the schema has global Inventory, this is slightly tricky. We will assume global inventory gets decremented for now until received).
      
      for (const item of items) {
        const inv = await prisma.inventory.findUnique({ where: { productId: item.productId } });
        if (inv) {
          await prisma.inventory.update({
            where: { productId: item.productId },
            data: { quantity: { decrement: item.quantity } }
          });
        }
      }

      await prisma.activityLog.create({
        data: {
          userId: session.userId,
          tenantId: session.tenantId,
          module: 'INVENTORY',
          action: 'CREATE',
          description: `Created Stock Transfer ${transferNumber} from ${fromBranchId} to ${toBranchId} for ${items.length} items.`
        }
      });

      return transfer;
    });

    return NextResponse.json({ success: true, transfer: result }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating transfer:', error);
    return NextResponse.json({ error: error.message || 'Failed to create transfer' }, { status: 500 });
  }
}
