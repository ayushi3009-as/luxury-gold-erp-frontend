import { ReactNode } from "react";
import ReportsNav from "@/components/layout/ReportsNav";

export default function ReportsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary text-text-primary">
      <ReportsNav />

      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}