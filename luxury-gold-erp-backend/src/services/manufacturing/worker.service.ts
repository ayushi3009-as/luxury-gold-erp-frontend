import prisma from "../../config/prisma";

// ==========================
// Create Worker
// ==========================

export const createWorker = async (data: {
  employeeId: string;
  fullName: string;
  phone: string;
  email?: string;
  specialization?: string;
  experience?: number;
  salary?: number;
  status?: string;
}) => {
  return await prisma.worker.create({
    data: {
      employeeId: data.employeeId,
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      specialization: data.specialization,
      experience: data.experience,
      salary: data.salary,
      status: data.status,
    },
  });
};

// ==========================
// Get All Workers
// ==========================

export const getAllWorkers = async () => {
  return await prisma.worker.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// ==========================
// Get Worker By ID
// ==========================

export const getWorkerById = async (id: string) => {
  return await prisma.worker.findUnique({
    where: {
      id,
    },
  });
};

// ==========================
// Update Worker
// ==========================

export const updateWorker = async (
  id: string,
  data: {
    fullName?: string;
    phone?: string;
    email?: string;
    specialization?: string;
    experience?: number;
    salary?: number;
    status?: string;
  }
) => {
  return await prisma.worker.update({
    where: {
      id,
    },
    data,
  });
};

// ==========================
// Delete Worker
// ==========================

export const deleteWorker = async (id: string) => {
  return await prisma.worker.delete({
    where: {
      id,
    },
  });
};