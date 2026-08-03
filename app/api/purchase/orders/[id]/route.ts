import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    // Check if PO exists
    const po = await prisma.purchaseOrder.findUnique({ where: { poNumber: id } });
    if (!po) {
      return NextResponse.json({ error: 'Purchase order not found' }, { status: 404 });
    }

    // Delete items first
    await prisma.purchaseOrderItem.deleteMany({
      where: { purchaseOrderId: po.id }
    });

    // Delete PO
    await prisma.purchaseOrder.delete({
      where: { poNumber: id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting purchase order:', error);
    return NextResponse.json({ error: 'Failed to delete purchase order' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();
    const { supplierName, expectedDate, items, status, amount } = data;

    const po = await prisma.purchaseOrder.findUnique({ where: { poNumber: id } });
    if (!po) {
      return NextResponse.json({ error: 'Purchase order not found' }, { status: 404 });
    }

    let finalSupplierId = po.supplierId;
    if (supplierName) {
      let supplier = await prisma.supplier.findFirst({
        where: { supplierName }
      });
      if (!supplier) {
        supplier = await prisma.supplier.create({
          data: {
            supplierCode: `SUP-${Date.now()}`,
            supplierName: supplierName,
            status: "ACTIVE"
          }
        });
      }
      finalSupplierId = supplier.id;
    }

    // Calculate totals
    let subtotal = 0;
    const finalSubtotal = amount ? Number(amount) : subtotal;
    const gstAmount = amount ? 0 : finalSubtotal * 0.03;
    const totalAmount = amount ? Number(amount) : finalSubtotal + gstAmount;

    // Delete existing items
    await prisma.purchaseOrderItem.deleteMany({
      where: { purchaseOrderId: po.id }
    });

    // Re-create items
    const orderItems = items.map((item: any) => {
      const itemTotal = (item.weight * (item.goldRate || 0)) + (item.makingCharge || 0);
      subtotal += itemTotal;
      return {
        category: item.category || 'Jewellery',
        itemName: item.itemName,
        weight: Number(item.weight),
        quantity: Number(item.quantity) || 1,
        goldRate: Number(item.goldRate) || 0,
        makingCharge: Number(item.makingCharge) || 0,
        itemTotal
      };
    });

    const updatedOrder = await prisma.purchaseOrder.update({
      where: { poNumber: id },
      data: {
        supplierId: finalSupplierId,
        expectedDate: expectedDate ? new Date(expectedDate) : null,
        status: status || po.status,
        subtotal: finalSubtotal,
        gstAmount,
        totalAmount,
        items: {
          create: orderItems
        }
      }
    });

    return NextResponse.json(updatedOrder, { status: 200 });

  } catch (error) {
    console.error('Error updating purchase order:', error);
    return NextResponse.json({ error: 'Failed to update purchase order' }, { status: 500 });
  }
}
