import { ReactNode } from "react";
import MultiBranchSidebar from "@/components/layout/MultiBranchSidebar";

export default function MultiBranchLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0B] text-white">
      <MultiBranchSidebar />

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}