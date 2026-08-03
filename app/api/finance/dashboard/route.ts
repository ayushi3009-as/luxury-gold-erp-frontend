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

    // Build a where clause: tenant-specific if we have one, otherwise global
    const where = tenantId ? { tenantId } : {};

    // 1. Total Revenue
    const incomes = await prisma.financeIncome.aggregate({
      where,
      _sum: { amount: true }
    });
    const totalRevenue = incomes._sum.amount ? Number(incomes._sum.amount) : 0;

    // 2. Total Expenses
    const expenses = await prisma.financeExpense.aggregate({
      where,
      _sum: { amount: true }
    });
    const totalExpenses = expenses._sum.amount ? Number(expenses._sum.amount) : 0;

    // 3. Net Profit
    const netProfit = totalRevenue - totalExpenses;

    // 4. Cash Balance
    const accounts = await prisma.financeAccount.findMany({ where });
    const cashBalance = accounts.reduce((acc, account) => acc + Number(account.currentBalance), 0);

    // 5. Expense Breakdown (Group by category)
    const expenseBreakdownRaw = await prisma.financeExpense.groupBy({
      by: ['category'],
      where,
      _sum: { amount: true }
    });
    const expenseBreakdown = expenseBreakdownRaw.map(item => ({
      category: item.category,
      amount: item._sum.amount ? Number(item._sum.amount) : 0
    }));

    // 6. Recent Transactions
    const recentTransactionsRaw = await prisma.financeTransaction.findMany({
      where,
      orderBy: { transactionDate: 'desc' },
      take: 4
    });
    const recentTransactions = recentTransactionsRaw.map(tx => ({
      id: tx.id,
      txId: `TXN-${tx.id.substring(0, 4).toUpperCase()}`,
      type: tx.transactionType,
      amount: Number(tx.amount),
      date: tx.transactionDate,
      isPositive: tx.transactionType === 'INCOME' || tx.transactionType === 'CREDIT'
    }));

    // Monthly Data
    const monthlyData = [
      { month: "Jan", value: 45 },
      { month: "Feb", value: 60 },
      { month: "Mar", value: 52 },
      { month: "Apr", value: 72 },
      { month: "May", value: 65 },
      { month: "Jun", value: 88 },
      { month: "Jul", value: 76 },
      { month: "Aug", value: totalRevenue > 0 ? 100 : 94 },
    ];

    return NextResponse.json({
      totalRevenue,
      totalExpenses,
      netProfit,
      cashBalance,
      accounts: accounts.map(a => ({ name: a.accountName, balance: Number(a.currentBalance) })),
      expenseBreakdown,
      recentTransactions,
      monthlyData,
      profitMargin: totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(1) : "0.0"
    });

  } catch (error) {
    console.error('Error fetching dashboard finance data:', error);
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
  }
}
