"use client";

import { ReactNode } from "react";

interface FinancePageProps {
  children: ReactNode;
}

export default function FinancePage({
  children,
}: FinancePageProps) {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">
      {children}
    </main>
  );
}