import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // We only ever have 1 settings record per tenant DB.
    let settings = await prisma.storeSettings.findFirst();
    
    // If none exists, create a default one
    if (!settings) {
      settings = await prisma.storeSettings.create({
        data: {
          storeName: "Luxury Gold",
          brandColor: "#e4b52d",
          tagline: "Elegance that lasts forever.",
          heroImageUrl: "https://images.unsplash.com/photo-1599643478514-4a820cbf311e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        }
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Settings GET Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    
    let settings = await prisma.storeSettings.findFirst();
    
    if (settings) {
      settings = await prisma.storeSettings.update({
        where: { id: settings.id },
        data: {
          storeName: data.storeName,
          brandColor: data.brandColor,
          heroImageUrl: data.heroImageUrl,
          tagline: data.tagline
        }
      });
    } else {
      settings = await prisma.storeSettings.create({
        data: {
          storeName: data.storeName || "Luxury Gold",
          brandColor: data.brandColor || "#e4b52d",
          tagline: data.tagline,
          heroImageUrl: data.heroImageUrl
        }
      });
    }

    return NextResponse.json({ message: "Settings updated successfully", settings });
  } catch (error) {
    console.error("Settings PUT Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
