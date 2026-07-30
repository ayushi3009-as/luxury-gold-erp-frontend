const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding manufacturing orders...');
  
  const p1 = await prisma.product.findFirst();

  if (!p1) {
    console.log("No products found to manufacture.");
    return;
  }

  await prisma.manufacturingOrder.create({
    data: {
      orderNumber: 'MFG-' + Date.now(),
      productId: p1.id,
      quantity: 15,
      startDate: new Date(),
      status: 'IN_PROGRESS'
    }
  });

  await prisma.manufacturingOrder.create({
    data: {
      orderNumber: 'MFG-' + (Date.now() + 1),
      productId: p1.id,
      quantity: 5,
      startDate: new Date(),
      status: 'PENDING'
    }
  });

  console.log('Created 2 manufacturing jobs!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
