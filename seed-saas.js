const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding SaaS data...');

  // Create Plans
  const basicPlan = await prisma.saaSPlan.upsert({
    where: { name: 'Basic' },
    update: {},
    create: {
      name: 'Basic',
      description: 'Perfect for single stores',
      pricePerMonth: 2999,
      pricePerYear: 29990,
      maxUsers: 5,
      maxBranches: 1,
      features: 'POS,Inventory,Customers'
    }
  });

  const proPlan = await prisma.saaSPlan.upsert({
    where: { name: 'Professional' },
    update: {},
    create: {
      name: 'Professional',
      description: 'For growing jewelry chains',
      pricePerMonth: 5999,
      pricePerYear: 59990,
      maxUsers: 20,
      maxBranches: 5,
      features: 'POS,Inventory,Customers,Manufacturing,Finance'
    }
  });

  // Create Clients
  await prisma.saaSClient.upsert({
    where: { domain: 'sharma-jewellers.com' },
    update: {},
    create: {
      name: 'Sharma Jewellers',
      email: 'owner@sharma-jewellers.com',
      phone: '+919876543210',
      domain: 'sharma-jewellers.com',
      subscriptions: {
        create: {
          planId: proPlan.id,
          endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
          billingCycle: 'YEARLY',
          invoices: {
            create: {
              invoiceNumber: 'INV-SAAS-001',
              amount: 59990,
              paymentDate: new Date()
            }
          }
        }
      }
    }
  });

  await prisma.saaSClient.upsert({
    where: { domain: 'raj-gold.com' },
    update: {},
    create: {
      name: 'Raj Gold & Diamonds',
      email: 'hello@raj-gold.com',
      phone: '+919876543211',
      domain: 'raj-gold.com',
      subscriptions: {
        create: {
          planId: basicPlan.id,
          endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
          billingCycle: 'MONTHLY',
          invoices: {
            create: {
              invoiceNumber: 'INV-SAAS-002',
              amount: 2999,
              paymentDate: new Date()
            }
          }
        }
      }
    }
  });

  console.log('SaaS seeding completed!');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
});
