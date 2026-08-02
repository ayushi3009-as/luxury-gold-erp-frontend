"use client";
import InventoryNav from "./InventoryNav";
export default function InventoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-full w-full overflow-hidden">
      <InventoryNav />
      <div className="flex-1 overflow-y-auto overflow-x-hidden">{children}</div>
    </div>
  );
}
