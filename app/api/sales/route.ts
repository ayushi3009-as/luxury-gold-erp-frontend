import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const range = searchParams.get('range') || 'This Month';

    let dateFilter = {};
    const now = new Date();
    
    if (range === 'Today') {
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      dateFilter = { gte: start };
    } else if (range === 'This Week') {
      const start = new Date(now.setDate(now.getDate() - now.getDay()));
      start.setHours(0, 0, 0, 0);
      dateFilter = { gte: start };
    } else if (range === 'This Month') {
      const start = new Date(now.getFullYear(), now.getMonth(), 1);
      dateFilter = { gte: start };
    } else if (range === 'This Year') {
      const start = new Date(now.getFullYear(), 0, 1);
      dateFilter = { gte: start };
    }

    const whereClause = Object.keys(dateFilter).length > 0 ? { createdAt: dateFilter } : {};

    // 1. Fetch all invoices
    const invoices = await prisma.invoice.findMany({
      where: whereClause,
      include: {
        customer: true,
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    // 2. Calculate Key Metrics
    const totalOrders = invoices.length;
    const totalSales = invoices.reduce((sum, inv) => sum + (inv.totalAmount || 0), 0);
    const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;
    
    // (Dummy value for new customers, or could count unique customer IDs)
    const uniqueCustomers = new Set(invoices.map(inv => inv.customerId).filter(Boolean));
    const newCustomers = uniqueCustomers.size;

    // 3. Format Recent Transactions (Top 4)
    const recentTransactions = invoices.slice(0, 4).map(inv => ({
      id: inv.invoiceNo,
      customerName: inv.customer?.name || 'Walk-in Customer',
      productName: inv.items[0]?.product?.name || 'Jewellery Items', // Just picking first item as summary
      amount: `₹ ${inv.totalAmount?.toLocaleString() || '0'}`
    }));

    // 4. Calculate Top Products (Group by product name in items)
    const productSales: Record<string, { units: number, revenue: number }> = {};
    
    invoices.forEach(inv => {
      inv.items.forEach(item => {
        const desc = item.product?.name;
        if (!desc) return;
        if (!productSales[desc]) {
          productSales[desc] = { units: 0, revenue: 0 };
        }
        productSales[desc].units += item.quantity;
        productSales[desc].revenue += (item.amount || 0);
      });
    });

    const topProducts = Object.entries(productSales)
      .map(([name, data]) => ({
        name,
        units: data.units,
        revenue: `₹ ${data.revenue.toLocaleString()}`
      }))
      .sort((a, b) => {
        // Sort by revenue descending (parse back the string)
        const revA = parseFloat(a.revenue.replace(/[^0-9.-]+/g,""));
        const revB = parseFloat(b.revenue.replace(/[^0-9.-]+/g,""));
        return revB - revA;
      })
      .slice(0, 4);

    return NextResponse.json({
      metrics: {
        totalSales,
        totalOrders,
        averageOrderValue,
        newCustomers
      },
      recentTransactions,
      topProducts
    });

  } catch (error) {
    console.error('Error fetching sales data:', error);
    return NextResponse.json({ error: 'Failed to fetch sales data' }, { status: 500 });
  }
}
