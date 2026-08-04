import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const tenants = await prisma.tenant.findMany();
  let created = 0;
  for (const tenant of tenants) {
    const user = await prisma.user.findFirst({ where: { tenantId: tenant.id } });
    if (!user) continue;
    
    await prisma.activityLog.createMany({
      data: [
        {
          userId: user.id,
          tenantId: tenant.id,
          action: 'LOGIN',
          module: 'AUTH',
          description: 'User logged into the system',
        },
        {
          userId: user.id,
          tenantId: tenant.id,
          action: 'UPDATE',
          module: 'INVENTORY',
          description: 'Updated stock quantity for 22K Gold Ring',
        },
        {
          userId: user.id,
          tenantId: tenant.id,
          action: 'CREATE',
          module: 'INVOICE',
          description: 'Created new sales invoice #INV-2026-0892',
        }
      ]
    });
    created += 3;
  }
  console.log('Seeded ' + created + ' logs for all tenants');
}

main().catch(console.error).finally(() => prisma.$disconnect());
