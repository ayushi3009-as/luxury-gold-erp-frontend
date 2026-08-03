import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const entries = await prisma.stockEntry.findMany({
      include: {
        products: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(entries);
  } catch (error) {
    console.error('Error fetching stock entries:', error);
    return NextResponse.json({ error: 'Failed to fetch stock entries' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { entryNumber, supplierName, supplierInvoiceNo, products } = data;

    if (!entryNumber) {
      return NextResponse.json({ error: 'Entry number is required' }, { status: 400 });
    }

    // Calculate totals
    const totalWeight = products && products.length > 0 ? products.reduce((acc: number, curr: any) => acc + (parseFloat(curr.netWeight) || 0), 0) : 0;
    const totalValue = products && products.length > 0 ? products.reduce((acc: number, curr: any) => acc + (parseFloat(curr.amount) || 0), 0) : 0;

    // Create the StockEntry and the Products in a transaction
    const entry = await prisma.stockEntry.create({
      data: {
        entryNumber,
        supplierName: supplierName || 'Unknown',
        supplierInvoiceNo: supplierInvoiceNo || null,
        totalWeight,
        totalValue,
        ...(products && products.length > 0 ? {
          products: {
            create: products.map((prod: any) => ({
              productCode: `PRD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
              name: prod.name,
              category: prod.category,
              purity: prod.purity,
              weight: parseFloat(prod.netWeight),
              sellingPrice: parseFloat(prod.rate),
              isPublished: true, // Make it true by default so it shows in POS
              inventory: {
                create: {
                  quantity: parseInt(prod.quantity) || 1,
                  minimumStock: 10,
                  type: 'FINISHED_GOOD'
                }
              }
            }))
          }
        } : {})
      },
      include: {
        products: true
      }
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error('Error creating stock entry:', error);
    return NextResponse.json({ error: 'Failed to create stock entry' }, { status: 500 });
  }
}
