"use client";
import InventoryNav from "./InventoryNav";
export default function InventoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-full w-full">
      <InventoryNav />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
