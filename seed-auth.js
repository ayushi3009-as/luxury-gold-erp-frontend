const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// We'll use a simple password hash for now
const bcrypt = require('bcryptjs');

async function main() {
  console.log('Seeding roles and users...');

  // Create Roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'Super Admin' },
    update: {},
    create: {
      name: 'Super Admin',
      description: 'Full access to all ERP modules',
    },
  });

  const salesRole = await prisma.role.upsert({
    where: { name: 'Sales Staff' },
    update: {},
    create: {
      name: 'Sales Staff',
      description: 'Access to POS and Customers only',
    },
  });

  // Create Users
  const passwordHash = await bcrypt.hash('password123', 10);

  await prisma.user.upsert({
    where: { username: 'admin' },
    update: { roleId: adminRole.id, passwordHash },
    create: {
      fullName: 'Master Admin',
      username: 'admin',
      email: 'admin@gold-erp.com',
      mobile: '9876543210',
      passwordHash: passwordHash,
      roleId: adminRole.id,
    },
  });

  await prisma.user.upsert({
    where: { username: 'sales1' },
    update: { roleId: salesRole.id, passwordHash },
    create: {
      fullName: 'Rahul Sales',
      username: 'sales1',
      email: 'sales@gold-erp.com',
      mobile: '9876543211',
      passwordHash: passwordHash,
      roleId: salesRole.id,
    },
  });

  console.log('Admin & Sales users created successfully!');
  console.log('Admin login: admin@gold-erp.com / password123');
  console.log('Sales login: sales@gold-erp.com / password123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
