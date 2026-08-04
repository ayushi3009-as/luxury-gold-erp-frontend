import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const jobCard = await prisma.jobCard.findFirst({
      where: {
        id: params.id,
        tenantId: session.tenantId,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            fullName: true,
          }
        }
      }
    });

    if (!jobCard) {
      return NextResponse.json({ success: false, message: "Job card not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: jobCard
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch job card" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    
    // Ensure the job card exists and belongs to the tenant
    const existing = await prisma.jobCard.findFirst({
      where: { id: params.id, tenantId: session.tenantId }
    });

    if (!existing) {
      return NextResponse.json({ success: false, message: "Job card not found" }, { status: 404 });
    }

    const updatedJobCard = await prisma.jobCard.update({
      where: { id: params.id },
      data: {
        jobCardNumber: body.jobCardNumber,
        productName: body.productName,
        designNumber: body.designNumber,
        category: body.category,
        purity: body.purity,
        grossWeight: body.grossWeight ? parseFloat(body.grossWeight) : null,
        netWeight: body.netWeight ? parseFloat(body.netWeight) : null,
        quantity: parseInt(body.quantity) || 1,
        priority: body.priority,
        status: body.status,
        remarks: body.remarks,
      }
    });

    return NextResponse.json({
      success: true,
      data: updatedJobCard
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update job card" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const existing = await prisma.jobCard.findFirst({
      where: { id: params.id, tenantId: session.tenantId }
    });

    if (!existing) {
      return NextResponse.json({ success: false, message: "Job card not found" }, { status: 404 });
    }

    await prisma.jobCard.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ success: true, message: "Job card deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete job card" },
      { status: 500 }
    );
  }
}
