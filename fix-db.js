const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const t = await prisma.tenant.findUnique({where: {subdomain: 'gold'}});
  if (!t) {
    console.log('No gold tenant found');
    return;
  }
  
  await prisma.tenant.update({where: {id: t.id}, data: {approvalStatus: 'APPROVED'}});
  
  let mfgRole = await prisma.role.findFirst({where: {name: 'Manufacturing Manager', tenantId: t.id}});
  if (!mfgRole) {
    mfgRole = await prisma.role.create({data: {name: 'Manufacturing Manager', description: 'Factory and production manager', tenantId: t.id}});
  }
  
  const hash = await bcrypt.hash('Mfg@123', 10);
  await prisma.user.upsert({
    where: {email: 'mfg@gold-erp.com'}, 
    update: {passwordHash: hash, roleId: mfgRole.id}, 
    create: {
      email: 'mfg@gold-erp.com', 
      username: 'mfg_manager', 
      fullName: 'Manufacturing Manager', 
      mobile: '9998887776', 
      passwordHash: hash, 
      roleId: mfgRole.id, 
      tenantId: t.id
    }
  });
  
  const salesHash = await bcrypt.hash('Sales@123', 10);
  await prisma.user.update({where: {email: 'sales@gold-erp.com'}, data: {passwordHash: salesHash}});
  
  const storeHash = await bcrypt.hash('Store@123', 10);
  await prisma.user.update({where: {email: 'store@gold-erp.com'}, data: {passwordHash: storeHash}});
  
  const adminHash = await bcrypt.hash('Admin@123', 10);
  await prisma.user.update({where: {email: 'admin@gold-erp.com'}, data: {passwordHash: adminHash}});
  
  console.log('Fixed DB on EC2 successfully');
}

main().catch(console.error).finally(() => prisma.$disconnect());
