import prisma from "../../config/prisma";

export const getDashboardSummary = async () => {
  const [
    totalWorkers,
    activeWorkers,
    totalJobCards,
    pendingJobCards,
    inProgressJobCards,
    completedJobCards,
    totalProductionOrders,
    totalQualityChecks,
    totalMaterialConsumptions,
    totalWastageRecords,
  ] = await Promise.all([
    prisma.worker.count(),

    prisma.worker.count({
      where: {
        status: "Active",
      },
    }),

    prisma.jobCard.count(),

    prisma.jobCard.count({
      where: {
        status: "Pending",
      },
    }),

    prisma.jobCard.count({
      where: {
        status: "In Progress",
      },
    }),

    prisma.jobCard.count({
      where: {
        status: "Completed",
      },
    }),

    prisma.productionOrder.count(),

    prisma.qualityCheck.count(),

    prisma.materialConsumption.count(),

    prisma.wastageRecord.count(),
  ]);

  return {
    totalWorkers,
    activeWorkers,
    totalJobCards,
    pendingJobCards,
    inProgressJobCards,
    completedJobCards,
    totalProductionOrders,
    totalQualityChecks,
    totalMaterialConsumptions,
    totalWastageRecords,
  };
};

// Job Card Status
export const getJobCardStatus = async () => {
  return await prisma.jobCard.groupBy({
    by: ["status"],
    _count: {
      status: true,
    },
  });
};

// Production Status
export const getProductionStatus = async () => {
  return await prisma.productionOrder.groupBy({
    by: ["status"],
    _count: {
      status: true,
    },
  });
};

// Recent Job Cards
export const getRecentJobCards = async () => {
  return await prisma.jobCard.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Recent Production Orders
export const getRecentProductions = async () => {
  return await prisma.productionOrder.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Recent Quality Checks
export const getRecentQualityChecks = async () => {
  return await prisma.qualityCheck.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
};