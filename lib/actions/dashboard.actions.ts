"use server";

import prisma from "@/lib/prisma";

export async function getDashboardStats() {
  try {
    // 1. Total Sales Revenue (Completed or all invoices)
    const totalSalesAgg = await prisma.invoice.aggregate({
      _sum: { totalAmount: true },
      // where: { status: "COMPLETED" } // Depending on business logic
    });
    const totalSales = totalSalesAgg._sum.totalAmount || 0;

    // 2. Total Orders
    const totalOrders = await prisma.invoice.count();

    // 3. Total Customers
    const totalCustomers = await prisma.customer.count();

    // 4. Pending Orders (Purchase Orders)
    const pendingOrders = await prisma.purchaseOrder.count({
      where: { status: "PENDING" },
    });

    // 5. Low Stock Items
    const allInventory = await prisma.inventory.findMany({
      select: { quantity: true, minimumStock: true }
    });
    const lowStockItems = allInventory.filter(item => item.quantity <= item.minimumStock).length;

    // 6. Outstanding Amount (Customer Invoices PENDING)
    const outstandingAgg = await prisma.invoice.aggregate({
      _sum: { totalAmount: true },
      where: { status: "PENDING" },
    });
    const outstandingAmount = outstandingAgg._sum.totalAmount || 0;

    // For demo purposes, we will return static "Yesterday" changes 
    // In a full prod app, we'd query yesterday's data and calculate % difference.
    
    return {
      totalSales,
      totalOrders,
      totalCustomers,
      pendingOrders,
      lowStockItems,
      outstandingAmount,
      // Changes vs yesterday (mocked for UI)
      changes: {
        sales: 5.2,
        orders: 3.1,
        customers: 1.5,
        pending: -2.0,
        lowStock: 0,
        outstanding: -1.2
      }
    };
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    return null;
  }
}

export async function getSalesByCategory() {
  try {
    const items = await prisma.invoiceItem.findMany({
      include: { product: true }
    });

    let gold = 0, diamond = 0, silver = 0, platinum = 0, total = 0;

    items.forEach(item => {
      const cat = item.product?.category?.toLowerCase() || "";
      const val = item.amount;
      total += val;
      
      if (cat.includes("diamond")) diamond += val;
      else if (cat.includes("silver")) silver += val;
      else if (cat.includes("platinum")) platinum += val;
      else gold += val; // Default to gold for jewellery
    });

    if (total === 0) return null;

    return {
      total,
      gold: Math.round((gold / total) * 100),
      diamond: Math.round((diamond / total) * 100),
      silver: Math.round((silver / total) * 100),
      platinum: Math.round((platinum / total) * 100),
    };
  } catch (error) {
    console.error("Failed to fetch sales category:", error);
    return null;
  }
}

export async function getLiveMetalRates() {
  try {
    const latestRate = await prisma.goldRate.findFirst({
      orderBy: { effectiveAt: 'desc' }
    });
    return latestRate;
  } catch (error) {
    console.error("Failed to fetch metal rates:", error);
    return null;
  }
}

export async function getRecentTransactions() {
  try {
    const invoices = await prisma.invoice.findMany({
      take: 4,
      orderBy: { createdAt: 'desc' },
      include: { customer: true }
    });
    return invoices;
  } catch (error) {
    console.error("Failed to fetch recent transactions:", error);
    return [];
  }
}

export async function getLowStockProducts() {
  try {
    const allStock = await prisma.inventory.findMany({
      include: { product: true },
    });
    const lowStock = allStock.filter(item => item.quantity <= item.minimumStock).slice(0, 4);
    return lowStock;
  } catch (error) {
    console.error("Failed to fetch low stock products:", error);
    return [];
  }
}

