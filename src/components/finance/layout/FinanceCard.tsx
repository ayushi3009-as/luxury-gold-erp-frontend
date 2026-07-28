"use client";

import { ReactNode } from "react";

interface FinanceCardProps {
  children: ReactNode;
  className?: string;
}

export default function FinanceCard({
  children,
  className = "",
}: FinanceCardProps) {
  return (
    <div
      className={`
        bg-[#141414]
        border
        border-yellow-500/20
        rounded-2xl
        p-6
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}