"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getTenantWebsiteSettings(subdomain: string) {
  try {
    const tenant = await prisma.tenant.findUnique({
      where: { subdomain },
      select: {
        id: true,
        subdomain: true,
        name: true,
        heroTitle: true,
        heroSubtitle: true,
        heroImageUrl: true,
        aboutUsText: true,
        contactEmail: true,
        contactPhone: true,
      }
    });
    
    if (!tenant) {
      return { success: false, error: "Tenant not found for this subdomain." };
    }
    
    return { success: true, data: tenant };
  } catch (error) {
    console.error("Error fetching tenant settings:", error);
    return { success: false, error: "Failed to fetch settings." };
  }
}

export async function updateTenantWebsiteSettings(subdomain: string, data: any) {
  try {
    const updated = await prisma.tenant.update({
      where: { subdomain },
      data: {
        heroTitle: data.heroTitle,
        heroSubtitle: data.heroSubtitle,
        heroImageUrl: data.heroImageUrl,
        aboutUsText: data.aboutUsText,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
      }
    });
    
    // Revalidate the store paths to update the frontend immediately
    revalidatePath(`/store/${subdomain}`, 'layout');
    revalidatePath(`/store/${subdomain}/page`);
    
    return { success: true, data: updated };
  } catch (error) {
    console.error("Error updating tenant settings:", error);
    return { success: false, error: "Failed to update settings." };
  }
}
