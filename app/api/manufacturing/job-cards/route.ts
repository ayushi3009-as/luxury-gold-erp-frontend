import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const jobCards = await prisma.jobCard.findMany({
      where: {
        tenantId: session.tenantId,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            fullName: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json({
      success: true,
      data: jobCards
    });
  } catch (error: any) {
    console.error("Error fetching job cards:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch job cards" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId || !session.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    
    // Create new job card
    const newJobCard = await prisma.jobCard.create({
      data: {
        jobCardNumber: body.jobCardNumber,
        productName: body.productName,
        designNumber: body.designNumber,
        category: body.category,
        purity: body.purity,
        grossWeight: body.grossWeight ? parseFloat(body.grossWeight) : null,
        netWeight: body.netWeight ? parseFloat(body.netWeight) : null,
        quantity: parseInt(body.quantity) || 1,
        priority: body.priority || "Medium",
        status: body.status || "Pending",
        remarks: body.remarks,
        createdById: session.userId, // Use secure session user, not frontend payload
        tenantId: session.tenantId,
      }
    });

    return NextResponse.json({
      success: true,
      data: newJobCard
    });
  } catch (error: any) {
    console.error("Error creating job card:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to create job card" },
      { status: 500 }
    );
  }
}
