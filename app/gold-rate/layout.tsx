"use client";
import GoldRateNav from "./GoldRateNav";

export default function GoldRateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-full w-full">
      <GoldRateNav />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
