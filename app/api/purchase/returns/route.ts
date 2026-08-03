import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const returns = await prisma.purchaseReturn.findMany({
      include: {
        supplier: true,
        invoice: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    let suppliers = await prisma.supplier.findMany({
      orderBy: { supplierName: 'asc' }
    });

    let invoices = await prisma.purchaseInvoice.findMany({
      orderBy: { createdAt: 'desc' }
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

    if (invoices.length === 0 && suppliers.length > 0) {
      const count = await prisma.purchaseInvoice.count();
      const invoiceNumber = `PI-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;
      const newInvoice = await prisma.purchaseInvoice.create({
        data: {
          invoiceNumber,
          supplierId: suppliers[0].id,
          invoiceDate: new Date(),
          subtotal: 1000,
          totalAmount: 1000,
          paymentStatus: 'PAID'
        }
      });
      invoices = [newInvoice];
    }

    const metrics = {
      totalReturns: returns.length,
      pendingReturns: returns.filter(r => r.reason === 'Pending').length,
      approvedReturns: returns.filter(r => r.reason === 'Approved').length,
      rejectedReturns: returns.filter(r => r.reason === 'Rejected').length,
      totalAmount: returns.reduce((sum, r) => sum + (r.totalAmount || 0), 0)
    };

    return NextResponse.json({
      returns: returns.map(r => ({
        id: r.returnNumber,
        invoiceNo: r.invoice?.invoiceNumber || "N/A",
        supplierName: r.supplier.supplierName,
        date: r.returnDate,
        amount: `₹ ${r.totalAmount.toLocaleString()}`,
        status: r.reason || "Pending" // Using reason as a makeshift status field for the UI since status doesn't exist on PurchaseReturn
      })),
      metrics,
      suppliers,
      invoices: invoices.map(i => ({ id: i.id, invoiceNumber: i.invoiceNumber }))
    });

  } catch (error) {
    console.error('Error fetching purchase returns:', error);
    return NextResponse.json({ error: 'Failed to fetch purchase returns' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { returnNo, date, supplierId, invoiceId, amount, status } = data;

    if (!supplierId || !invoiceId || !amount) {
      return NextResponse.json({ error: 'Supplier, invoice, and amount are required' }, { status: 400 });
    }

    const count = await prisma.purchaseReturn.count();
    const returnNumber = returnNo || `PR-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;
    const returnDate = date ? new Date(date) : new Date();

    const numAmount = Number(amount);

    const purchaseReturn = await prisma.purchaseReturn.create({
      data: {
        returnNumber,
        supplierId,
        invoiceId,
        returnDate,
        totalAmount: numAmount,
        reason: status || "Pending",
        items: {
          create: [{
            itemName: 'Returned Item',
            weight: 0,
            quantity: 1,
            amount: numAmount
          }]
        }
      }
    });

    return NextResponse.json(purchaseReturn, { status: 201 });

  } catch (error) {
    console.error('Error creating purchase return:', error);
    return NextResponse.json({ error: 'Failed to create purchase return' }, { status: 500 });
  }
}
