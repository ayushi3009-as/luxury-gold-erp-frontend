"use client";
import ProductSidebar from "@/components/layout/ProductSidebar";
export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full">
      <ProductSidebar />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}