import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        inventory: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      productCode, 
      barcode, 
      name, 
      description, 
      category, 
      purity, 
      weight, 
      makingCharge, 
      costPrice, 
      sellingPrice,
      quantity,
      minimumStock,
      type 
    } = body;

    // Create Product and associated Inventory in a single transaction
    const newProduct = await prisma.product.create({
      data: {
        productCode,
        barcode,
        name,
        description,
        category,
        purity,
        weight: weight ? parseFloat(weight) : null,
        makingCharge: makingCharge ? parseFloat(makingCharge) : null,
        costPrice: costPrice ? parseFloat(costPrice) : null,
        sellingPrice: sellingPrice ? parseFloat(sellingPrice) : null,
        inventory: {
          create: {
            quantity: quantity ? parseInt(quantity, 10) : 0,
            minimumStock: minimumStock ? parseInt(minimumStock, 10) : 5,
            type: type || 'FINISHED_GOOD'
          }
        }
      },
      include: {
        inventory: true
      }
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ error: 'Failed to add product' }, { status: 500 });
  }
}
