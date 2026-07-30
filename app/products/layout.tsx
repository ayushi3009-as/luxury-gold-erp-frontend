"use client";

import ProductNav from "@/components/products/ProductNav";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary">

      {/* Sidebar */}

      <ProductNav />

      {/* Page Content */}

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

    </div>
  );
}