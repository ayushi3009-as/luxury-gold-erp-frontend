"use client";

import PurchaseNav from "@/components/layout/PurchaseNav";

export default function PurchaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary">
      <PurchaseNav />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
