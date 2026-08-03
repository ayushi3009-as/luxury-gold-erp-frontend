const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fix() {
  const products = await prisma.product.findMany({ where: { inventory: null } });
  for (const p of products) {
    await prisma.inventory.create({
      data: {
        productId: p.id,
        quantity: 100,
        minimumStock: 10,
        type: 'FINISHED_GOOD'
      }
    });
  }
  console.log('Fixed ' + products.length + ' products');
}

fix().catch(console.error).finally(() => prisma.$disconnect());
