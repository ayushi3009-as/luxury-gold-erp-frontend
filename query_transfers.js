
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const transfers = await prisma.branchTransfer.findMany({
    include: { fromBranch: true, toBranch: true }
  });
  console.log(JSON.stringify(transfers, null, 2));
}

main().finally(() => prisma.());
