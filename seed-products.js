const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding products...');
  
  // Clean existing (optional)
  // await prisma.product.deleteMany();

  const p1 = await prisma.product.create({
    data: {
      productCode: 'PRD-1001',
      barcode: '8901234567890',
      name: '22K Gold Bridal Necklace',
      description: 'Handcrafted traditional bridal necklace.',
      category: 'Necklace',
      purity: '22K',
      weight: 45.5,
      makingCharge: 15.0,
      costPrice: 280000,
      sellingPrice: 350000,
      inventory: {
        create: {
          quantity: 2,
          minimumStock: 1,
          type: 'FINISHED_GOOD'
        }
      }
    }
  });

  const p2 = await prisma.product.create({
    data: {
      productCode: 'PRD-1002',
      barcode: '8901234567891',
      name: '18K Diamond Solitaire Ring',
      description: 'VVS1, E Color, 1.5 Carat Solitaire.',
      category: 'Ring',
      purity: '18K',
      weight: 5.2,
      makingCharge: 20.0,
      costPrice: 150000,
      sellingPrice: 185000,
      inventory: {
        create: {
          quantity: 5,
          minimumStock: 2,
          type: 'FINISHED_GOOD'
        }
      }
    }
  });

  const p3 = await prisma.product.create({
    data: {
      productCode: 'PRD-1003',
      barcode: '8901234567892',
      name: '24K Gold Coin (10g)',
      description: '99.99% Pure Gold Coin.',
      category: 'Coin',
      purity: '24K',
      weight: 10.0,
      makingCharge: 2.0,
      costPrice: 76000,
      sellingPrice: 78000,
      inventory: {
        create: {
          quantity: 15,
          minimumStock: 10,
          type: 'FINISHED_GOOD'
        }
      }
    }
  });

  console.log('Created 3 test products with inventory!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
