"use client";

import { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  valueColor?: string;
  borderColor?: string;
  className?: string;
}

export default function SummaryCard({
  title,
  value,
  icon,
  valueColor = "text-yellow-500",
  borderColor = "border-yellow-500/20",
  className = "",
}: SummaryCardProps) {
  return (
    <div
      className={`
        bg-[#141414]
        border
        ${borderColor}
        rounded-2xl
        p-6
        shadow-lg
        transition
        hover:border-yellow-500/40
        hover:-translate-y-1
        ${className}
      `}
    >
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}

      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h2 className={`mt-2 text-3xl font-bold ${valueColor}`}>
        {value}
      </h2>
    </div>
  );
}