const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
  // Fix all existing logs that have null tenantId
  const tenant = await p.tenant.findFirst();
  if (!tenant) { console.log('No tenant found'); return; }
  
  console.log('Tenant:', tenant.id, tenant.name);
  
  // Update all logs with null tenantId to use this tenant
  const updated = await p.activityLog.updateMany({
    where: { tenantId: null },
    data: { tenantId: tenant.id }
  });
  console.log('Updated', updated.count, 'logs with tenantId');

  // Also seed some new realistic logs
  const user = await p.user.findFirst({ where: { tenantId: tenant.id } });
  if (!user) { console.log('No user for tenant'); return; }

  await p.activityLog.createMany({
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
        action: 'CREATE',
        module: 'INVOICE',
        description: 'Created sales invoice #INV-2026-0045 for Rs.1,25,000',
      },
      {
        userId: user.id,
        tenantId: tenant.id,
        action: 'UPDATE',
        module: 'INVENTORY',
        description: 'Stock adjustment: 22K Gold Necklace quantity updated',
      },
      {
        userId: user.id,
        tenantId: tenant.id,
        action: 'CREATE',
        module: 'CUSTOMER',
        description: 'Added new customer: Rajesh Sharma',
      },
      {
        userId: user.id,
        tenantId: tenant.id,
        action: 'EXPORT',
        module: 'BACKUP',
        description: 'Database backup exported successfully',
      },
    ]
  });
  console.log('Seeded 5 new logs');
  
  // Verify
  const total = await p.activityLog.count({ where: { tenantId: tenant.id } });
  console.log('Total logs for tenant:', total);
}

main().catch(console.error).finally(() => p.$disconnect());
