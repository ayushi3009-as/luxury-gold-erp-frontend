const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
p.activityLog.findMany().then(l => {
  console.log('Count:', l.length);
  l.forEach(x => console.log(x.id, x.action, x.module, x.tenantId));
}).catch(e => console.error(e)).finally(() => p.$disconnect());
