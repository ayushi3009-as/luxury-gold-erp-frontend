import bcrypt from "bcrypt";
import prisma from "../../config/prisma";

// Create User
export const createUser = async (data: {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  roleId: string;
}) => {
  // Check Email
  const existingEmail = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingEmail) {
    throw new Error("Email already exists");
  }

  // Check Phone
  const existingPhone = await prisma.user.findUnique({
    where: {
      phone: data.phone,
    },
  });

  if (existingPhone) {
    throw new Error("Phone number already exists");
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await prisma.user.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      password: hashedPassword,
      roleId: data.roleId,
    },
    include: {
      role: true,
    },
  });
};

// Get All Users
export const getAllUsers = async () => {
  return await prisma.user.findMany({
    include: {
      role: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Get User By ID
export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      role: true,
    },
  });
};

// Update User
export const updateUser = async (
  id: string,
  data: {
    fullName?: string;
    email?: string;
    phone?: string;
    password?: string;
    roleId?: string;
  }
) => {
  let updatedData: any = { ...data };

  if (data.password) {
    updatedData.password = await bcrypt.hash(data.password, 10);
  }

  return await prisma.user.update({
    where: {
      id,
    },
    data: updatedData,
    include: {
      role: true,
    },
  });
};

// Delete User
export const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
};