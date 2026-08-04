const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding manufacturing data for demo...');

  // Get the first tenant
  const tenant = await prisma.tenant.findFirst();
  if (!tenant) {
    console.log("No tenant found. Exiting.");
    return;
  }
  const tenantId = tenant.id;

  // Create Workers
  const workersData = [
    { fullName: "Rahul Patel", employeeId: "EMP-001", phone: "+91-9876543210", specialization: "Goldsmith", status: "Active" },
    { fullName: "Amit Shah", employeeId: "EMP-002", phone: "+91-9876543211", specialization: "Stone Setter", status: "Active" },
    { fullName: "Kiran Joshi", employeeId: "EMP-003", phone: "+91-9876543212", specialization: "Polisher", status: "Active" }
  ];

  for (const w of workersData) {
    await prisma.worker.upsert({
      where: { phone: w.phone },
      update: {},
      create: { ...w, tenantId }
    });
  }
  console.log('Workers seeded.');

  // Get the first user for createdById
  const adminUser = await prisma.user.findFirst({ where: { tenantId } });
  if (!adminUser) {
    console.log("No user found to set createdById. Exiting.");
    return;
  }
  const createdById = adminUser.id;

  // Create Job Cards
  const jobCardsData = [
    { jobCardNumber: "JC-1001", productName: "22K Gold Ring", designNumber: "DS-R001", dueDate: new Date("2026-08-10"), status: "In Progress", priority: "High", quantity: 15, createdById },
    { jobCardNumber: "JC-1002", productName: "Diamond Necklace", designNumber: "DS-N005", dueDate: new Date("2026-08-12"), status: "Pending", priority: "Medium", quantity: 8, createdById },
    { jobCardNumber: "JC-1003", productName: "Gold Bracelet", designNumber: "DS-B002", dueDate: new Date("2026-08-05"), status: "Completed", priority: "Low", quantity: 12, createdById }
  ];

  const createdJobCards = [];
  for (const jc of jobCardsData) {
    const created = await prisma.jobCard.upsert({
      where: { jobCardNumber: jc.jobCardNumber },
      update: {},
      create: { ...jc, tenantId }
    });
    createdJobCards.push(created);
  }
  console.log('Job Cards seeded.');

  // Create Production Orders
  const productionOrdersData = [
    { productionNumber: "PO-1001", jobCardId: createdJobCards[0].id, stage: "Casting", status: "In Progress", quantity: 15, completedQty: 5, startDate: new Date("2026-08-01") },
    { productionNumber: "PO-1002", jobCardId: createdJobCards[1].id, stage: "Stone Setting", status: "In Progress", quantity: 8, completedQty: 2, startDate: new Date("2026-08-02") },
    { productionNumber: "PO-1003", jobCardId: createdJobCards[2].id, stage: "Polishing", status: "Completed", quantity: 12, completedQty: 12, startDate: new Date("2026-07-25"), endDate: new Date("2026-07-28") }
  ];

  for (const po of productionOrdersData) {
    await prisma.productionOrder.upsert({
      where: { productionNumber: po.productionNumber },
      update: {},
      create: { ...po, tenantId }
    });
  }
  console.log('Production Orders seeded.');
  
  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
