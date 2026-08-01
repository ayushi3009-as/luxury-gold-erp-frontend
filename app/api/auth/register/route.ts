import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { storeName, fullName, email, phone, password, paymentReference } = body;

    if (!storeName || !fullName || !email || !password || !paymentReference) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create Tenant and Admin User in a transaction
    const result = await prisma.$transaction(async (tx) => {
      
      // Temporary subdomain until approved
      const tempSubdomain = `pending-${Date.now()}`;

      // 1. Create Tenant (Pending Approval)
      const tenant = await tx.tenant.create({
        data: {
          name: storeName,
          subdomain: tempSubdomain, // Super admin will assign the real one later
          approvalStatus: 'PENDING',
          paymentReference: paymentReference,
          isActive: true
        }
      });

      // 2. Ensure Admin Role exists for this tenant
      let role = await tx.role.findFirst({
        where: { name: "Admin", tenantId: tenant.id }
      });

      if (!role) {
        role = await tx.role.create({
          data: {
            name: "Admin",
            description: "Store Administrator",
            tenantId: tenant.id
          }
        });
      }

      // 3. Create User
      const user = await tx.user.create({
        data: {
          fullName,
          email,
          username: email, // use email as username by default
          mobile: phone,
          passwordHash,
          roleId: role.id,
          tenantId: tenant.id,
          isActive: true
        }
      });

      return { tenant, user };
    });

    return NextResponse.json({
      success: true,
      message: "Registration successful. Pending approval.",
      tenantId: result.tenant.id
    });

  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Failed to register account" },
      { status: 500 }
    );
  }
}
