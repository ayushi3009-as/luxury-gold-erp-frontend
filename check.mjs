import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const logs = await prisma.activityLog.findMany();
  console.log('Total logs:', logs.length);
  const users = await prisma.user.findMany({ select: { id: true, email: true, role: { select: { name: true } }, tenantId: true } });
  console.log('Users:', users);
}

main().catch(console.error).finally(() => prisma.$disconnect());
