import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const tenant = await prisma.tenant.findUnique({
      where: { id: session.tenantId }
    });

    if (!tenant) {
      return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
    }

    const defaultTheme = {
      primaryColor: "#B08A57", // Soft gold/bronze
      backgroundColor: "#FFFDF9", // Light warm white/beige
      textColor: "#0B1324", // Deep navy/black
      typography: "playfair",
      heroImageUrl: "https://images.unsplash.com/photo-1599643478514-4a820cbf311e?auto=format&fit=crop&w=2000&q=80",
      heroHeadline: "Elegance curated for eternity",
      heroSubheadline: "Discover our latest collection of handcrafted masterpieces.",
    };

    const themeSettings = tenant.themeSettings ? (tenant.themeSettings as any) : defaultTheme;

    return NextResponse.json({
      storeName: tenant.name,
      aboutUsText: tenant.aboutUsText || "",
      logoUrl: tenant.logoUrl || "",
      themeSettings
    });
  } catch (error) {
    console.error("Settings GET Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    const updatedTenant = await prisma.tenant.update({
      where: { id: session.tenantId },
      data: {
        name: data.storeName,
        aboutUsText: data.aboutUsText,
        logoUrl: data.logoUrl,
        themeSettings: data.themeSettings
      }
    });

    return NextResponse.json({ message: "Settings updated successfully", tenant: updatedTenant });
  } catch (error) {
    console.error("Settings PUT Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
