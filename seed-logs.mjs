import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findFirst();
  if (!user) { console.log('No user'); return; }
  
  await prisma.activityLog.createMany({
    data: [
      {
        userId: user.id,
        tenantId: user.tenantId,
        action: 'CREATE',
        module: 'INVOICE',
        description: 'Created new sales invoice #INV-2026-0892',
      },
      {
        userId: user.id,
        tenantId: user.tenantId,
        action: 'UPDATE',
        module: 'INVENTORY',
        description: 'Updated stock quantity for 22K Gold Ring',
      },
      {
        userId: user.id,
        tenantId: user.tenantId,
        action: 'LOGIN',
        module: 'AUTH',
        description: 'User logged into the system',
      },
      {
        userId: user.id,
        tenantId: user.tenantId,
        action: 'DELETE',
        module: 'CUSTOMER',
        description: 'Removed duplicate customer record',
      },
      {
        userId: user.id,
        tenantId: user.tenantId,
        action: 'EXPORT',
        module: 'BACKUP',
        description: 'Generated database backup snapshot',
      }
    ]
  });
  console.log('Logs seeded!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
