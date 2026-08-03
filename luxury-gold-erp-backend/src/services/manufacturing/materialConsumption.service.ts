import prisma from "../../config/prisma";

// Create Material Consumption
export const createMaterialConsumption = async (data: {
  jobCardId: string;
  materialName: string;
  requiredQuantity: number;
  issuedQuantity: number;
  consumedQuantity: number;
  remainingQuantity?: number;
  unit: string;
  remarks?: string;
}) => {
  return await prisma.materialConsumption.create({
    data,
    include: {
      jobCard: true,
    },
  });
};

// Get All
export const getAllMaterialConsumptions = async () => {
  return await prisma.materialConsumption.findMany({
    include: {
      jobCard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Get By ID
export const getMaterialConsumptionById = async (id: string) => {
  return await prisma.materialConsumption.findUnique({
    where: { id },
    include: {
      jobCard: true,
    },
  });
};

// Update
export const updateMaterialConsumption = async (
  id: string,
  data: {
    materialName?: string;
    requiredQuantity?: number;
    issuedQuantity?: number;
    consumedQuantity?: number;
    remainingQuantity?: number;
    unit?: string;
    remarks?: string;
  }
) => {
  return await prisma.materialConsumption.update({
    where: { id },
    data,
  });
};

// Delete
export const deleteMaterialConsumption = async (id: string) => {
  return await prisma.materialConsumption.delete({
    where: { id },
  });
};