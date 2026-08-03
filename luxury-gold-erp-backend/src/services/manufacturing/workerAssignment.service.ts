import prisma from "../../config/prisma";

// Create Assignment
export const createAssignment = async (data: {
  jobCardId: string;
  workerId: string;
  status?: string;
  remarks?: string;
}) => {
  return await prisma.workerAssignment.create({
    data,
    include: {
      worker: true,
      jobCard: true,
    },
  });
};

// Get All Assignments
export const getAllAssignments = async () => {
  return await prisma.workerAssignment.findMany({
    include: {
      worker: true,
      jobCard: true,
    },
    orderBy: {
      assignedDate: "desc",
    },
  });
};

// Get Assignment By ID
export const getAssignmentById = async (id: string) => {
  return await prisma.workerAssignment.findUnique({
    where: { id },
    include: {
      worker: true,
      jobCard: true,
    },
  });
};

// Update Assignment
export const updateAssignment = async (
  id: string,
  data: {
    status?: string;
    remarks?: string;
  }
) => {
  return await prisma.workerAssignment.update({
    where: { id },
    data,
  });
};

// Delete Assignment
export const deleteAssignment = async (id: string) => {
  return await prisma.workerAssignment.delete({
    where: { id },
  });
};