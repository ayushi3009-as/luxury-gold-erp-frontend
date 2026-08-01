import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const tenants = await prisma.tenant.findMany({
      where: {
        approvalStatus: 'PENDING'
      },
      include: {
        users: {
          take: 1, // Get the admin user who registered
          where: {
            role: {
              name: "Admin"
            }
          },
          select: {
            fullName: true,
            email: true,
            mobile: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(tenants);
  } catch (error) {
    console.error("Error fetching pending tenants:", error);
    return NextResponse.json(
      { error: "Failed to fetch pending tenants" },
      { status: 500 }
    );
  }
}
