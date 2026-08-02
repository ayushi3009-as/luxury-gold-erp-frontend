const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'microtechniqueit@gmail.com';
  const username = 'admin';
  const password = 'adminpassword123';
  const hashedPassword = await bcrypt.hash(password, 10);

  // Find Admin Role
  const role = await prisma.role.findFirst({ where: { name: 'Admin' } });

  let user = await prisma.user.findFirst({ where: { username: 'admin' } });

  if (user) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        email: email,
        mobile: '6355997080',
        passwordHash: hashedPassword,
        status: 'ACTIVE'
      }
    });
    console.log(`Updated existing admin user with email ${email} and new password.`);
  } else {
    console.log('admin user not found in DB!');
  }

  console.log('Demo admin setup complete.');
  console.log(`Username: admin`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
