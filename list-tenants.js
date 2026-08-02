const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const tenants = await prisma.tenant.findMany({ select: { subdomain: true, name: true } });
  console.log(tenants);
}
main().finally(() => prisma.$disconnect());
