import prisma from "../../config/prisma";

// ==========================================
// CREATE PRODUCTION ORDER
// ==========================================
export const createProductionOrder = async (data: {
  productionNumber: string;
  jobCardId: string;
  stage: string;
  status?: string;
  quantity: number;
  completedQty?: number;
  startDate?: string;
  endDate?: string;
  remarks?: string;
}) => {
  return await prisma.productionOrder.create({
    data: {
      productionNumber: data.productionNumber,

      jobCardId: data.jobCardId,

      stage: data.stage,

      status: data.status ?? "Pending",

      quantity: data.quantity,

      completedQty: data.completedQty ?? 0,

      startDate: data.startDate
        ? new Date(data.startDate)
        : undefined,

      endDate: data.endDate
        ? new Date(data.endDate)
        : undefined,

      remarks: data.remarks,
    },
  });
};

// ==========================================
// GET ALL PRODUCTION ORDERS
// ==========================================
export const getAllProductionOrders = async () => {
  return await prisma.productionOrder.findMany({
    include: {
      jobCard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// ==========================================
// GET PRODUCTION ORDER BY ID
// ==========================================
export const getProductionOrderById = async (id: string) => {
  return await prisma.productionOrder.findUnique({
    where: {
      id,
    },
    include: {
      jobCard: true,
    },
  });
};

// ==========================================
// UPDATE PRODUCTION ORDER
// ==========================================
export const updateProductionOrder = async (
  id: string,
  data: {
    productionNumber?: string;
    jobCardId?: string;
    stage?: string;
    status?: string;
    quantity?: number;
    completedQty?: number;
    startDate?: string;
    endDate?: string;
    remarks?: string;
  }
) => {
  return await prisma.productionOrder.update({
    where: {
      id,
    },
    data: {
      productionNumber: data.productionNumber,

      jobCardId: data.jobCardId,

      stage: data.stage,

      status: data.status,

      quantity: data.quantity,

      completedQty: data.completedQty,

      startDate: data.startDate
        ? new Date(data.startDate)
        : undefined,

      endDate: data.endDate
        ? new Date(data.endDate)
        : undefined,

      remarks: data.remarks,
    },
  });
};

// ==========================================
// DELETE PRODUCTION ORDER
// ==========================================
export const deleteProductionOrder = async (id: string) => {
  return await prisma.productionOrder.delete({
    where: {
      id,
    },
  });
};