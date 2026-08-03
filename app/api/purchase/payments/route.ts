import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const payments = await prisma.supplierPayment.findMany({
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
      orderBy: { createdAt: 'desc' },
      where: { paymentStatus: { not: 'PAID' } } // Only show unpaid invoices
    });

    // Dummy data generation if empty
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

    if (false) {
      const count = await prisma.purchaseInvoice.count();
      const invoiceNumber = `PI-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;
      const newInvoice = await prisma.purchaseInvoice.create({
        data: {
          invoiceNumber,
          supplierId: suppliers[0].id,
          invoiceDate: new Date(),
          subtotal: 150000,
          totalAmount: 150000,
          paymentStatus: 'PENDING'
        }
      });
      invoices = [newInvoice];
    }

    // Calculate metrics
    const totalPayable = invoices.reduce((sum, inv) => sum + inv.totalAmount, 0) + payments.reduce((sum, p) => sum + p.amount, 0); // Approximation
    const paidAmount = payments.filter(p => p.status === 'COMPLETED').reduce((sum, p) => sum + p.amount, 0);
    const pendingAmount = payments.filter(p => p.status === 'PENDING').reduce((sum, p) => sum + p.amount, 0) + invoices.reduce((sum, inv) => sum + inv.totalAmount, 0);
    const overduePayment = 0; // Simplified for now

    const metrics = {
      totalPayable,
      paidAmount,
      pendingAmount,
      overduePayment,
      totalSuppliers: suppliers.length
    };

    return NextResponse.json({
      payments: payments.map(p => ({
        id: p.id,
        paymentNo: p.referenceNumber || p.id.split('-')[0].toUpperCase(),
        supplierName: p.supplier.supplierName,
        invoiceNo: p.invoice?.invoiceNumber || "N/A",
        date: p.paymentDate,
        amount: `? ${p.amount.toLocaleString()}`,
        mode: p.paymentMode,
        status: p.status
      })),
      metrics,
      suppliers,
      invoices: invoices.map(i => ({ id: i.id, invoiceNumber: i.invoiceNumber, totalAmount: i.totalAmount }))
    });

  } catch (error) {
    console.error('Error fetching supplier payments:', error);
    return NextResponse.json({ error: 'Failed to fetch supplier payments' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { supplierId, invoiceId, amount, paymentMode, referenceNumber, paymentDate, status } = data;

    if (!supplierId || !amount || !paymentMode) {
      return NextResponse.json({ error: 'Supplier, amount, and payment mode are required' }, { status: 400 });
    }

    const numAmount = Number(amount);
    const pDate = paymentDate ? new Date(paymentDate) : new Date();

    const payment = await prisma.supplierPayment.create({
      data: {
        supplierId,
        invoiceId: invoiceId || null,
        paymentDate: pDate,
        paymentMode,
        amount: numAmount,
        referenceNumber: referenceNumber || `PAY-${Date.now().toString().slice(-6)}`,
        status: status || "COMPLETED"
      }
    });

    // If an invoice was fully paid, we could update its status here.
    if (invoiceId && status === 'COMPLETED') {
        // Find if this invoice is now fully paid
        // For simplicity, we just mark it PAID if any payment is made, or we could calculate.
        await prisma.purchaseInvoice.update({
            where: { id: invoiceId },
            data: { paymentStatus: 'PAID' }
        });
    }

    return NextResponse.json(payment, { status: 201 });

  } catch (error) {
    console.error('Error creating supplier payment:', error);
    return NextResponse.json({ error: 'Failed to create supplier payment' }, { status: 500 });
  }
}
