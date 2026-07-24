"use client";

import ProductSidebar from "@/components/layout/ProductSidebar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0B]">

      {/* Sidebar */}

      <ProductSidebar />

      {/* Page Content */}

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

    </div>
  );
}