import { ReactNode } from "react";

import ManufacturingTopbar from "@/components/manufacturing-manager/layout/ManufacturingTopbar";
import ManufacturingNavbar from "@/components/manufacturing-manager/layout/ManufacturingNavbar";

export default function ManufacturingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      <ManufacturingTopbar />

      <ManufacturingNavbar />

      <main className="p-6">
        {children}
      </main>

    </div>
  );
}