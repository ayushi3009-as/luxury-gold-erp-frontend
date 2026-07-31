import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // 1. Fetch all invoices
    const invoices = await prisma.invoice.findMany({
      include: {
        customer: true,
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    // 2. Calculate Key Metrics
    const totalOrders = invoices.length;
    const totalSales = invoices.reduce((sum, inv) => sum + (inv.grandTotal || 0), 0);
    const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;
    
    // (Dummy value for new customers, or could count unique customer IDs)
    const uniqueCustomers = new Set(invoices.map(inv => inv.customerId).filter(Boolean));
    const newCustomers = uniqueCustomers.size;

    // 3. Format Recent Transactions (Top 4)
    const recentTransactions = invoices.slice(0, 4).map(inv => ({
      id: inv.invoiceNumber,
      customerName: inv.customer?.name || 'Walk-in Customer',
      productName: inv.items[0]?.description || 'Jewellery Items', // Just picking first item as summary
      amount: `₹ ${inv.grandTotal?.toLocaleString() || '0'}`
    }));

    // 4. Calculate Top Products (Group by description in items)
    const productSales: Record<string, { units: number, revenue: number }> = {};
    
    invoices.forEach(inv => {
      inv.items.forEach(item => {
        if (!item.description) return;
        if (!productSales[item.description]) {
          productSales[item.description] = { units: 0, revenue: 0 };
        }
        productSales[item.description].units += item.quantity;
        productSales[item.description].revenue += (item.total || 0);
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
