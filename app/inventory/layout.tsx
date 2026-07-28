"use client";
import InventorySidebar from "./InventorySidebar";
export default function InventoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full">
      <InventorySidebar />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
