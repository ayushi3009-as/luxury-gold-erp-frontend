"use client";

import { ReactNode } from "react";

interface FinanceGridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function FinanceGrid({
  children,
  cols = 4,
  className = "",
}: FinanceGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div
      className={`grid gap-6 ${gridCols[cols]} ${className}`}
    >
      {children}
    </div>
  );
}