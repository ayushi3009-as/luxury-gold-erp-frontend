const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const users = await prisma.user.findMany({ select: { email: true, role: true, tenantId: true } });
  console.log('USERS:', users);
}
main().finally(() => prisma.$disconnect());
