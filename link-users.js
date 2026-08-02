const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.findUnique({ where: { subdomain: 'gold' } });
  if (tenant) {
    // Update all users to belong to the gold tenant
    const res = await prisma.user.updateMany({
      where: { tenantId: null },
      data: { tenantId: tenant.id }
    });
    console.log(`Updated ${res.count} users to belong to gold tenant.`);
  } else {
    console.log('Gold tenant not found!');
  }
}

main().finally(() => prisma.$disconnect());
