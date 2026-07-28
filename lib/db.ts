import { PrismaClient } from "@prisma/client";

// Ye global variable banaya gaya hai taaki development mode me 
// baar-baar naye database connections na banein (warna server crash ho sakta hai).
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Database connection (Prisma Client)
export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
