import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export const dynamic = "force-dynamic";

async function getTenantId() {
  try {
    const session = await getSession();
    if (session?.tenantId) return session.tenantId;
    if (session?.userId) {
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      if (user?.tenantId) return user.tenantId;
    }
  } catch (e) {
    console.error('Session error in finance dashboard:', e);
  }
  return null;
}

export async function GET() {
  try {
    const tenantId = await getTenantId();
    const where = tenantId ? { tenantId } : {};

    // ── 1. REVENUE from Sales Invoices ──
    const salesAgg = await prisma.invoice.aggregate({
      where,
      _sum: { totalAmount: true },
      _count: true
    });
    const totalRevenue = salesAgg._sum.totalAmount || 0;
    const totalSalesCount = salesAgg._count;

    // ── 2. EXPENSES from Purchase Invoices ──
    const purchaseAgg = await prisma.purchaseInvoice.aggregate({
      where,
      _sum: { totalAmount: true },
      _count: true
    });
    const totalPurchases = purchaseAgg._sum.totalAmount || 0;

    // Also add manual expenses from FinanceExpense table
    const manualExpAgg = await prisma.financeExpense.aggregate({
      where,
      _sum: { amount: true }
    });
    const manualExpenses = manualExpAgg._sum.amount ? Number(manualExpAgg._sum.amount) : 0;
    const totalExpenses = totalPurchases + manualExpenses;

    // ── 3. NET PROFIT ──
    const netProfit = totalRevenue - totalExpenses;

    // ── 4. PAYMENTS RECEIVED (Cash collected) ──
    const paymentsReceived = await prisma.payment.aggregate({
      where,
      _sum: { amount: true }
    });
    const totalPaymentsReceived = paymentsReceived._sum.amount || 0;

    // Payments made to suppliers
    const paymentsMade = await prisma.supplierPayment.aggregate({
      where,
      _sum: { amount: true }
    });
    const totalPaymentsMade = paymentsMade._sum.amount || 0;
    const cashBalance = totalPaymentsReceived - totalPaymentsMade;

    // ── 5. MONTHLY REVENUE (last 6 months from Invoices) ──
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
    sixMonthsAgo.setDate(1);
    sixMonthsAgo.setHours(0, 0, 0, 0);

    const recentInvoices = await prisma.invoice.findMany({
      where: { ...where, createdAt: { gte: sixMonthsAgo } },
      select: { totalAmount: true, createdAt: true }
    });

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyMap: Record<string, number> = {};
    
    // Initialize last 6 months
    for (let i = 5; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      monthlyMap[key] = 0;
    }

    recentInvoices.forEach(inv => {
      const d = new Date(inv.createdAt);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      if (monthlyMap[key] !== undefined) {
        monthlyMap[key] += inv.totalAmount;
      }
    });

    const maxMonthly = Math.max(...Object.values(monthlyMap), 1);
    const monthlyData = Object.entries(monthlyMap).map(([key, amount]) => {
      const [, monthIdx] = key.split('-');
      return {
        month: monthNames[parseInt(monthIdx)],
        value: Math.round((amount / maxMonthly) * 100),
        amount
      };
    });

    // ── 6. EXPENSE BREAKDOWN by purchase category ──
    const purchaseItems = await prisma.purchaseInvoiceItem.groupBy({
      by: ['category'],
      where,
      _sum: { amount: true }
    });
    const expenseBreakdown = purchaseItems.map(item => ({
      category: item.category,
      amount: item._sum.amount || 0
    })).sort((a, b) => b.amount - a.amount).slice(0, 5);

    // ── 7. RECENT TRANSACTIONS (last 8 from invoices + purchases) ──
    const recentSales = await prisma.invoice.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 4,
      select: { id: true, invoiceNo: true, totalAmount: true, createdAt: true, status: true }
    });
    const recentPurchases = await prisma.purchaseInvoice.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 4,
      select: { id: true, invoiceNumber: true, totalAmount: true, createdAt: true }
    });

    const recentTransactions = [
      ...recentSales.map(s => ({
        id: s.id,
        txId: s.invoiceNo,
        type: 'Sale',
        amount: s.totalAmount,
        date: s.createdAt,
        isPositive: true
      })),
      ...recentPurchases.map(p => ({
        id: p.id,
        txId: p.invoiceNumber,
        type: 'Purchase',
        amount: p.totalAmount,
        date: p.createdAt,
        isPositive: false
      }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

    // ── 8. PENDING AMOUNTS ──
    const pendingInvoices = await prisma.invoice.aggregate({
      where: { ...where, status: 'PENDING' },
      _sum: { totalAmount: true },
      _count: true
    });

    const pendingPurchases = await prisma.purchaseInvoice.aggregate({
      where: { ...where, paymentStatus: 'PENDING' },
      _sum: { totalAmount: true },
      _count: true
    });

    return NextResponse.json({
      totalRevenue,
      totalExpenses,
      netProfit,
      cashBalance,
      totalSalesCount,
      monthlyData,
      expenseBreakdown,
      recentTransactions,
      profitMargin: totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(1) : "0.0",
      pendingReceivables: pendingInvoices._sum.totalAmount || 0,
      pendingReceivablesCount: pendingInvoices._count,
      pendingPayables: pendingPurchases._sum.totalAmount || 0,
      pendingPayablesCount: pendingPurchases._count,
    });

  } catch (error) {
    console.error('Error fetching dashboard finance data:', error);
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
  }
}
