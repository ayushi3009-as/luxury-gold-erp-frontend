const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding material consumption...');
  
  const tenant = await prisma.tenant.findFirst();
  if (!tenant) return;
  const tenantId = tenant.id;

  const jobCards = await prisma.jobCard.findMany({ where: { tenantId } });
  
  for (const jc of jobCards) {
    // Generate some fake gold usage
    const reqQty = jc.quantity * 25.5; // e.g. 25.5g per quantity
    const issuedQty = reqQty + 1.5; // slight extra issued
    const consumedQty = reqQty + 0.5; // slight wastage
    
    await prisma.materialConsumption.create({
      data: {
        jobCardId: jc.id,
        materialName: "22K Gold",
        requiredQuantity: reqQty,
        issuedQuantity: issuedQty,
        consumedQuantity: consumedQty,
        remainingQuantity: issuedQty - consumedQty,
        unit: "g",
        tenantId
      }
    });
  }
  
  console.log('Material Consumption seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
