import { ReactNode } from "react";
import ReportsSidebar from "@/components/layout/ReportsSidebar";

export default function ReportsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0B] text-white">
      <ReportsSidebar />

      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}