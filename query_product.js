const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const products = await prisma.product.findMany({ include: { inventory: true }, take: 10 });
  for (const p of products) {
    if (p.productCode === 'PRD-1785670874168-657' || p.sku === 'PRD-1785670874168-657') {
      console.log(JSON.stringify(p, null, 2));
    }
  }
}
main().finally(() => process.exit(0));
