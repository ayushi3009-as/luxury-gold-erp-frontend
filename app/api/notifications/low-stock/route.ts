import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    let tenantId = session.tenantId;
    if (!tenantId) {
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      if (user?.tenantId) {
        tenantId = user.tenantId;
      } else if (session.role !== 'Super Admin' && session.role !== 'SUPER_ADMIN') {
        return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
      }
    }

    // Fetch all inventory items with their product details
    const inventory = await prisma.inventory.findMany({
      where: { tenantId },
      include: {
        product: true
      }
    });

    // Filter items where quantity is below or equal to minimumStock
    const lowStockItems = inventory.filter(item => item.quantity <= item.minimumStock);

    // Format them for the UI
    const formatted = lowStockItems.map(item => {
      const isCritical = item.quantity === 0 || item.quantity <= item.minimumStock / 2;
      return {
        name: item.product.name,
        sku: item.product.productCode || item.product.barcode || 'N/A',
        category: item.product.category || 'General',
        currentStock: item.quantity,
        minimumStock: item.minimumStock,
        status: isCritical ? "Critical" : "Low",
        valueAtRisk: (item.product.costPrice || 0) * (item.minimumStock - item.quantity > 0 ? item.minimumStock - item.quantity : 0)
      };
    });

    const activeBranchesCount = await prisma.branch.count({ where: { tenantId, isActive: true } });

    return NextResponse.json({
      items: formatted,
      totalBranches: activeBranchesCount
    });
  } catch (error) {
    console.error('Error fetching low stock:', error);
    return NextResponse.json({ error: 'Failed to fetch low stock' }, { status: 500 });
  }
}
