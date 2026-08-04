import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const tenantId = session.tenantId;

    // 1. Dashboard Cards Data
    const activeJobCards = await prisma.jobCard.count({
      where: { tenantId, status: { not: "Completed" } }
    });

    const wip = await prisma.jobCard.count({
      where: { tenantId, status: "In Progress" }
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const completedToday = await prisma.jobCard.count({
      where: { 
        tenantId, 
        status: "Completed",
        updatedAt: { gte: today }
      }
    });

    const pendingQC = await prisma.qualityCheck.count({
      where: { tenantId, status: "Pending" }
    });

    // 2. Production Stages Overview
    // Since we don't have strict stages, we'll map job card statuses or production orders.
    // For demo purposes, we will count production orders by stage
    const productionStagesRaw = await prisma.productionOrder.groupBy({
      by: ['stage'],
      where: { tenantId },
      _count: true
    });
    
    const productionStages = productionStagesRaw.map(p => ({
      stage: p.stage,
      count: p._count
    }));

    // 3. Worker Summary
    const topWorkersRaw = await prisma.worker.findMany({
      where: { tenantId },
      include: {
        _count: {
          select: { productionOrders: true }
        }
      },
      orderBy: {
        productionOrders: { _count: 'desc' }
      },
      take: 4
    });

    const topWorkers = topWorkersRaw.map(w => ({
      name: w.name,
      jobs: w._count.productionOrders
    }));

    // 4. Quality Summary
    const qcPassed = await prisma.qualityCheck.count({ where: { tenantId, status: "Passed" } });
    const qcPending = pendingQC;
    const qcFailed = await prisma.qualityCheck.count({ where: { tenantId, status: "Failed" } });

    // 5. Recent Job Cards
    const recentJobCards = await prisma.jobCard.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
      take: 4,
      select: {
        id: true,
        jobCardNumber: true,
        productName: true,
        status: true,
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        cards: {
          activeJobCards,
          wip,
          completedToday,
          pendingQC
        },
        productionStages,
        topWorkers,
        qualityStats: {
          passed: qcPassed,
          pending: qcPending,
          failed: qcFailed
        },
        recentJobCards
      }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
