"use client";

export default function RepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary">
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}