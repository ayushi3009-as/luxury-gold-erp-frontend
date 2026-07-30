"use client";
import AnalyticsNav from "./AnalyticsNav";

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-full w-full">
      <AnalyticsNav />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
