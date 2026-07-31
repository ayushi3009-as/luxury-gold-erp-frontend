const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding local database...');

  // 1. Create a Tenant (the jewellery store)
  const tenant = await prisma.tenant.upsert({
    where: { subdomain: 'gold' },
    update: {},
    create: {
      name: 'Luxury Gold',
      subdomain: 'gold',
      heroTitle: 'Elegance Curated for Eternity',
      heroSubtitle: 'A private edit of hand-set kundan and solitaire pieces, catalogued by our Jaipur atelier.',
      heroImageUrl: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1400&auto=format&fit=crop&q=90',
      contactEmail: 'store@gold-erp.com',
      isActive: true,
    },
  });
  console.log('✅ Tenant created:', tenant.name);

  // 2. Create Super Admin Role
  const superAdminRole = await prisma.role.upsert({
    where: { name: 'SUPER_ADMIN' },
    update: {},
    create: {
      name: 'SUPER_ADMIN',
      tenantId: tenant.id,
    },
  });

  // 3. Create Store Admin Role
  const storeAdminRole = await prisma.role.upsert({
    where: { name: 'STORE_ADMIN' },
    update: {},
    create: {
      name: 'STORE_ADMIN',
      tenantId: tenant.id,
    },
  });

  // 4. Create Super Admin User
  const hash1 = await bcrypt.hash('Admin@123', 10);
  const superAdmin = await prisma.user.upsert({
    where: { email: 'admin@gold-erp.com' },
    update: {},
    create: {
      fullName: 'Super Admin',
      username: 'superadmin',
      mobile: '9999999991',
      email: 'admin@gold-erp.com',
      passwordHash: hash1,
      status: 'ACTIVE',
      roleId: superAdminRole.id,
      tenantId: tenant.id,
    },
  });
  console.log('✅ Super Admin created: admin@gold-erp.com / Admin@123');

  // 5. Create Store Admin User
  const hash2 = await bcrypt.hash('Store@123', 10);
  const storeAdmin = await prisma.user.upsert({
    where: { email: 'store@gold-erp.com' },
    update: {},
    create: {
      fullName: 'Store Admin',
      username: 'storeadmin',
      mobile: '9999999992',
      email: 'store@gold-erp.com',
      passwordHash: hash2,
      status: 'ACTIVE',
      roleId: storeAdminRole.id,
      tenantId: tenant.id,
    },
  });
  console.log('✅ Store Admin created: store@gold-erp.com / Store@123');

  console.log('\n🎉 Done! Login credentials:');
  console.log('   Super Admin: admin@gold-erp.com  / Admin@123');
  console.log('   Store Admin: store@gold-erp.com  / Store@123');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
