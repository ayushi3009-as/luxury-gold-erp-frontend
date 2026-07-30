import React from "react";
import PurchaseNav from "./PurchaseNav";

export default function PurchaseLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background-primary text-white">
      {/* Top Navigation */}
      <PurchaseNav />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}