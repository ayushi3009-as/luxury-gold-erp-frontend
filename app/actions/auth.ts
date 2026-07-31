"use server";

import { createSession, logout } from "@/lib/session";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });

    if (!user) {
      return { error: "Invalid credentials" };
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return { error: "Invalid credentials" };
    }

    if (user.status !== "ACTIVE") {
      return { error: "Your account is not active" };
    }

    // Create session
    await createSession(user.id, user.role.name, user.tenantId);

  } catch (error) {
    console.error("Login error:", error);
    return { error: "An unexpected error occurred" };
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  await logout();
  redirect("/login");
}
