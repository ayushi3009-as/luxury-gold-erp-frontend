import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const orders = await prisma.purchaseOrder.findMany({
      include: {
        supplier: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const suppliers = await prisma.supplier.count();

    const totalOrders = orders.length;
    const pendingOrders = orders.filter(o => o.status === 'PENDING').length;
    
    // Sum total amount of completed/approved orders
    const totalPurchaseValue = orders
      .filter(o => o.status === 'APPROVED' || o.status === 'COMPLETED')
      .reduce((sum, o) => sum + (o.totalAmount || 0), 0);

    const recentOrders = orders.slice(0, 5).map(o => ({
      id: o.poNumber,
      supplier: o.supplier.supplierName,
      date: o.orderDate,
      amount: `₹ ${o.totalAmount.toLocaleString()}`,
      status: o.status
    }));

    return NextResponse.json({
      metrics: {
        totalOrders,
        pendingOrders,
        totalSuppliers: suppliers,
        totalPurchaseValue
      },
      recentOrders
    });

  } catch (error) {
    console.error('Error fetching purchase dashboard data:', error);
    return NextResponse.json({ error: 'Failed to fetch purchase data' }, { status: 500 });
  }
}
