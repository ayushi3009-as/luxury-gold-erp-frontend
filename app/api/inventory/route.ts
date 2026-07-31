import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const inventory = await prisma.inventory.findMany({
      include: {
        product: true,
      },
      orderBy: {
        updatedAt: 'desc',
      }
    });

    // Calculate basic stats for the dashboard
    const totalProducts = inventory.length;
    const lowStockItems = inventory.filter(item => item.quantity <= item.minimumStock).length;
    
    let totalStockValue = 0;
    inventory.forEach(item => {
      if (item.product?.sellingPrice) {
        totalStockValue += (item.product.sellingPrice * item.quantity);
      }
    });

    return NextResponse.json({
      items: inventory,
      stats: {
        totalProducts,
        lowStockItems,
        totalStockValue
      }
    });
  } catch (error) {
    console.error('Error fetching inventory:', error);
    return NextResponse.json({ error: 'Failed to fetch inventory' }, { status: 500 });
  }
}
