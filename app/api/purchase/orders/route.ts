import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const orders = await prisma.purchaseOrder.findMany({
      include: {
        supplier: true,
        items: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Also fetch suppliers for the "Create PO" dropdown
    let suppliers = await prisma.supplier.findMany({
      orderBy: { supplierName: 'asc' }
    });

    if (suppliers.length === 0) {
      const newSupplier = await prisma.supplier.create({
        data: {
          supplierCode: "SUP-001",
          supplierName: "Gold Merchants Ltd",
          contactNumber: "9876543210",
          email: "contact@goldmerchants.com",
          status: "ACTIVE"
        }
      });
      suppliers = [newSupplier];
    }

    const metrics = {
      totalPO: orders.length,
      pendingApproval: orders.filter(o => o.status === 'PENDING').length,
      approvedPO: orders.filter(o => o.status === 'APPROVED').length,
      completedPO: orders.filter(o => o.status === 'COMPLETED').length,
      cancelledPO: orders.filter(o => o.status === 'CANCELLED').length,
    };

    return NextResponse.json({
      orders: orders.map(o => ({
        id: o.poNumber,
        supplierName: o.supplier.supplierName,
        date: o.orderDate,
        amount: `₹ ${o.totalAmount.toLocaleString()}`,
        status: o.status
      })),
      metrics,
      suppliers
    });

  } catch (error) {
    console.error('Error fetching purchase orders:', error);
    return NextResponse.json({ error: 'Failed to fetch purchase orders' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { supplierName, supplierId, expectedDate, items, status, amount } = data;

    if ((!supplierId && !supplierName) || !items || items.length === 0) {
      return NextResponse.json({ error: 'Supplier and items are required' }, { status: 400 });
    }

    let finalSupplierId = supplierId;
    if (!finalSupplierId && supplierName) {
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

    // Generate PO Number
    const count = await prisma.purchaseOrder.count();
    const poNumber = `PO-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;

    // Calculate totals
    let subtotal = 0;
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

    const finalSubtotal = amount ? Number(amount) : subtotal;
    const gstAmount = amount ? 0 : finalSubtotal * 0.03;
    const totalAmount = amount ? Number(amount) : finalSubtotal + gstAmount;

    const order = await prisma.purchaseOrder.create({
      data: {
        poNumber,
        supplierId: finalSupplierId,
        expectedDate: expectedDate ? new Date(expectedDate) : null,
        status: status || 'PENDING',
        subtotal: finalSubtotal,
        gstAmount,
        totalAmount,
        items: {
          create: orderItems
        }
      }
    });

    return NextResponse.json(order, { status: 201 });

  } catch (error) {
    console.error('Error creating purchase order:', error);
    return NextResponse.json({ error: 'Failed to create purchase order' }, { status: 500 });
  }
}
