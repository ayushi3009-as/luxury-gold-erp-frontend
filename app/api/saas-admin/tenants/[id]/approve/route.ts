import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    const { status, subdomain } = body; // status can be APPROVED or REJECTED

    if (!status) {
      return NextResponse.json({ error: "Status is required" }, { status: 400 });
    }

    if (status === 'APPROVED' && !subdomain) {
      return NextResponse.json({ error: "Subdomain is required for approval" }, { status: 400 });
    }

    if (status === 'APPROVED') {
      // Check if subdomain is already taken
      const existing = await prisma.tenant.findUnique({
        where: { subdomain }
      });

      if (existing && existing.id !== id) {
        return NextResponse.json({ error: "This subdomain is already taken by another store." }, { status: 400 });
      }
    }

    const tenant = await prisma.tenant.update({
      where: { id },
      data: {
        approvalStatus: status,
        ...(status === 'APPROVED' ? { subdomain } : {})
      }
    });

    return NextResponse.json({
      success: true,
      message: `Tenant ${status.toLowerCase()} successfully`,
      tenant
    });

  } catch (error) {
    console.error("Error updating tenant approval:", error);
    return NextResponse.json(
      { error: "Failed to update tenant status" },
      { status: 500 }
    );
  }
}
