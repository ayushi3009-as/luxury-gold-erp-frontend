const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // 1. Create a 'gold' tenant if it doesn't exist
  let tenant = await prisma.tenant.findUnique({ where: { subdomain: 'gold' } });
  if (!tenant) {
    tenant = await prisma.tenant.create({
      data: {
        name: 'Luxury Gold ERP',
        subdomain: 'gold',
        isActive: true,
        aboutUsText: 'Welcome to Luxury Gold ERP Demo.',
        contactEmail: 'microtechniqueit@gmail.com',
        contactPhone: '+91 6355997080'
      }
    });
    console.log('Created tenant:', tenant.subdomain);
  } else {
    console.log('Tenant already exists:', tenant.subdomain);
  }

  // 2. Create the microtechniqueit admin user
  const email = 'microtechniqueit@gmail.com';
  let admin = await prisma.user.findUnique({ where: { email } });
  if (!admin) {
    const passwordHash = await bcrypt.hash('adminpassword123', 10);
    
    // get super admin role
    const role = await prisma.role.findFirst({ where: { name: 'Super Admin' } });

    admin = await prisma.user.create({
      data: {
        fullName: 'Demo Admin',
        username: 'admin_demo',
        email,
        mobile: '6355997080',
        passwordHash,
        tenantId: tenant.id,
        roleId: role ? role.id : undefined,
        isActive: true,
        status: 'ACTIVE'
      }
    });
    console.log('Created admin user:', admin.email);
  } else {
    console.log('Admin user already exists:', admin.email);
    // Link existing to the gold tenant
    await prisma.user.update({
      where: { email },
      data: { tenantId: tenant.id }
    });
  }

}

main().finally(() => prisma.$disconnect());
