import prisma from "../../config/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt";

export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      role: true,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordMatch) {
    throw new Error("Invalid email or password");
  }

const token = generateToken({
  id: user.id,
  roleId: user.roleId,
  role: user.role.roleName,
});
  return {
    token,
    user,
  };
};