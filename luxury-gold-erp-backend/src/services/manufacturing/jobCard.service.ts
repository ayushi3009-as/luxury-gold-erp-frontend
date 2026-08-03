import prisma from "../../config/prisma";

// ==========================
// Create Job Card
// ==========================
export const createJobCard = async (data: {
  jobCardNumber: string;
  productName: string;
  designNumber?: string;
  category?: string;
  purity?: string;
  grossWeight?: number;
  netWeight?: number;
  quantity: number;
  priority?: string;
  status?: string;
  startDate?: Date;
  dueDate?: Date;
  remarks?: string;
  createdById: string;
}) => {
  return await prisma.jobCard.create({
    data,
  });
};

// ==========================
// Get All Job Cards
// ==========================
export const getAllJobCards = async () => {
  return await prisma.jobCard.findMany({
    include: {
      createdBy: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// ==========================
// Get Job Card By ID
// ==========================
export const getJobCardById = async (id: string) => {
  return await prisma.jobCard.findUnique({
    where: {
      id,
    },
    include: {
      createdBy: true,
      assignments: true,
      productions: true,
      qualityChecks: true,
      wastages: true,
      materials: true,
    },
  });
};

// ==========================
// Update Job Card
// ==========================
export const updateJobCard = async (
  id: string,
  data: {
    jobCardNumber?: string;
    productName?: string;
    designNumber?: string;
    category?: string;
    purity?: string;
    grossWeight?: number;
    netWeight?: number;
    quantity?: number;
    priority?: string;
    status?: string;
    startDate?: Date;
    dueDate?: Date;
    remarks?: string;
  }
) => {
  return await prisma.jobCard.update({
    where: {
      id,
    },
    data,
  });
};

// ==========================
// Delete Job Card
// ==========================
export const deleteJobCard = async (id: string) => {
  return await prisma.jobCard.delete({
    where: {
      id,
    },
  });
};