import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    const data = await req.json();
    const { fromBranchId, toBranchId, items, remarks } = data;

    if (!fromBranchId || !toBranchId || !items || items.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await prisma.$transaction(async (prisma) => {
      // Delete existing items
      await prisma.stockTransferItem.deleteMany({
        where: { transferId: id }
      });

      // Update transfer
      const transfer = await prisma.branchTransfer.update({
        where: { id, tenantId: session.tenantId },
        data: {
          fromBranchId,
          toBranchId,
          remarks,
          items: {
            create: items.map((item: any) => ({
              productId: item.productId,
              quantity: item.quantity,
            }))
          }
        }
      });

      await prisma.activityLog.create({
        data: {
          userId: session.userId,
          tenantId: session.tenantId,
          module: 'INVENTORY',
          action: 'UPDATE',
          description: `Updated Stock Transfer ${transfer.transferNumber} for ${items.length} items.`
        }
      });

      return transfer;
    });

    return NextResponse.json({ success: true, transfer: result });
  } catch (error: any) {
    console.error('Error updating transfer:', error);
    return NextResponse.json({ error: error.message || 'Failed to update transfer' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    
    await prisma.$transaction(async (prisma) => {
      const transfer = await prisma.branchTransfer.findUnique({
        where: { id, tenantId: session.tenantId },
        include: { items: true }
      });

      if (!transfer) throw new Error('Transfer not found');

      // Refund global inventory
      for (const item of transfer.items) {
        const inv = await prisma.inventory.findUnique({ where: { productId: item.productId } });
        if (inv) {
          await prisma.inventory.update({
            where: { productId: item.productId },
            data: { quantity: { increment: item.quantity } }
          });
        }
      }

      await prisma.stockTransferItem.deleteMany({
        where: { transferId: id }
      });

      await prisma.branchTransfer.delete({
        where: { id, tenantId: session.tenantId }
      });

      await prisma.activityLog.create({
        data: {
          userId: session.userId,
          tenantId: session.tenantId,
          module: 'INVENTORY',
          action: 'DELETE',
          description: `Deleted Stock Transfer ${transfer.transferNumber}`
        }
      });
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting transfer:', error);
    return NextResponse.json({ error: error.message || 'Failed to delete transfer' }, { status: 500 });
  }
}
