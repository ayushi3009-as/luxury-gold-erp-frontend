"use client";

import RepairSidebar from "@/components/layout/RepairSidebar";

export default function RepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0B]">

      <RepairSidebar />

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}