const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const pos = await prisma.purchaseOrder.findMany();
  console.log(pos);
}

check().finally(() => prisma.$disconnect());
