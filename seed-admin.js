const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database with admin credentials...");

  // Check if role exists
  let adminRole = await prisma.role.findUnique({
    where: { name: 'Super Admin' }
  });

  if (!adminRole) {
    adminRole = await prisma.role.create({
      data: {
        name: 'Super Admin',
        description: 'Master Administrator with full access',
      }
    });
    console.log("Created 'Super Admin' role.");
  }

  // Create admin user
  const email = 'admin@luxurygold.com';
  const password = 'admin123';
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingAdmin = await prisma.user.findUnique({
    where: { email }
  });

  if (!existingAdmin) {
    const adminUser = await prisma.user.create({
      data: {
        fullName: 'System Administrator',
        username: 'admin',
        email: email,
        mobile: '9999999999',
        passwordHash: hashedPassword,
        status: 'ACTIVE',
        roleId: adminRole.id,
      }
    });
    console.log(`Created admin user: ${adminUser.email}`);
  } else {
    // Update password just in case
    await prisma.user.update({
      where: { email },
      data: { passwordHash: hashedPassword }
    });
    console.log(`Admin user already exists. Password updated to '${password}'.`);
  }

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
