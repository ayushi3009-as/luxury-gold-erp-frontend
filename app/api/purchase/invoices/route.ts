import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const invoices = await prisma.purchaseInvoice.findMany({
      include: {
        supplier: true,
        items: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

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
      totalInvoice: invoices.length,
      paidInvoice: invoices.filter(i => i.paymentStatus === 'PAID').length,
      pendingInvoice: invoices.filter(i => i.paymentStatus === 'PENDING').length,
      overdueInvoice: invoices.filter(i => i.paymentStatus === 'OVERDUE').length,
      totalAmount: invoices.reduce((sum, i) => sum + (i.totalAmount || 0), 0)
    };

    return NextResponse.json({
      invoices: invoices.map(i => ({
        id: i.invoiceNumber,
        supplierName: i.supplier.supplierName,
        date: i.invoiceDate,
        amount: `₹ ${i.totalAmount.toLocaleString()}`,
        status: i.paymentStatus
      })),
      metrics,
      suppliers
    });

  } catch (error) {
    console.error('Error fetching purchase invoices:', error);
    return NextResponse.json({ error: 'Failed to fetch purchase invoices' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { supplierId, itemName, amount } = data;

    if (!supplierId || !itemName || !amount) {
      return NextResponse.json({ error: 'Supplier, item name, and amount are required' }, { status: 400 });
    }

    const count = await prisma.purchaseInvoice.count();
    const invoiceNumber = `PI-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;

    const numAmount = Number(amount);

    const invoice = await prisma.purchaseInvoice.create({
      data: {
        invoiceNumber,
        supplierId,
        invoiceDate: new Date(),
        paymentStatus: 'PENDING',
        subtotal: numAmount,
        totalAmount: numAmount,
        items: {
          create: [{
            itemName,
            category: 'General',
            weight: 0,
            rate: numAmount,
            gstPercentage: 0,
            amount: numAmount
          }]
        }
      }
    });

    return NextResponse.json(invoice, { status: 201 });

  } catch (error) {
    console.error('Error creating purchase invoice:', error);
    return NextResponse.json({ error: 'Failed to create purchase invoice' }, { status: 500 });
  }
}
