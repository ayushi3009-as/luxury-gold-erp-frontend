import { ReactNode } from "react";

import ManufacturingTopbar from "./ManufacturingTopbar";
import ManufacturingNavbar from "./ManufacturingNavbar";

interface ManufacturingLayoutProps {
  children: ReactNode;
}

export default function ManufacturingLayout({
  children,
}: ManufacturingLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">

      {/* Topbar */}

      <ManufacturingTopbar />

      {/* Horizontal Navigation */}

      <ManufacturingNavbar />

      {/* Main Content */}

      <main className="p-6">

        {children}

      </main>

    </div>
  );
}