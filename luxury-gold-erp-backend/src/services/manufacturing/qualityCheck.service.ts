import prisma from "../../config/prisma";

// Create Quality Check
export const createQualityCheck = async (data: {
  jobCardId: string;
  inspectorName: string;
  qualityStatus: string;
  defects?: string;
  remarks?: string;
}) => {
  return await prisma.qualityCheck.create({
    data,
    include: {
      jobCard: true,
    },
  });
};

// Get All
export const getAllQualityChecks = async () => {
  return await prisma.qualityCheck.findMany({
    include: {
      jobCard: true,
    },
    orderBy: {
      inspectionDate: "desc",
    },
  });
};

// Get By Id
export const getQualityCheckById = async (id: string) => {
  return await prisma.qualityCheck.findUnique({
    where: { id },
    include: {
      jobCard: true,
    },
  });
};

// Update
export const updateQualityCheck = async (
  id: string,
  data: {
    inspectorName?: string;
    qualityStatus?: string;
    defects?: string;
    remarks?: string;
  }
) => {
  return await prisma.qualityCheck.update({
    where: { id },
    data,
  });
};

// Delete
export const deleteQualityCheck = async (id: string) => {
  return await prisma.qualityCheck.delete({
    where: { id },
  });
};