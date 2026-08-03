import prisma from "../../config/prisma";

export const createRole = async (data: {
  roleName: string;
  description?: string;
}) => {
  return await prisma.role.create({
    data,
  });
};

export const getAllRoles = async () => {
  return await prisma.role.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getRoleById = async (id: string) => {
  return await prisma.role.findUnique({
    where: {
      id,
    },
  });
};

export const updateRole = async (
  id: string,
  data: {
    roleName?: string;
    description?: string;
  }
) => {
  return await prisma.role.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteRole = async (id: string) => {
  return await prisma.role.delete({
    where: {
      id,
    },
  });
};