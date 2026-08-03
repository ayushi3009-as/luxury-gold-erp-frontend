"use client";

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-full w-full bg-background-primary">
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
