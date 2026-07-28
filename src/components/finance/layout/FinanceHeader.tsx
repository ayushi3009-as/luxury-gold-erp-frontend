"use client";

import { ReactNode } from "react";

interface FinanceHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function FinanceHeader({
  title,
  description,
  action,
}: FinanceHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
      <div>

        <h1 className="text-4xl font-bold text-yellow-500">
          {title}
        </h1>

        {description && (
          <p className="text-gray-400 mt-2">
            {description}
          </p>
        )}

      </div>

      {action && (
        <div className="flex items-center gap-3">
          {action}
        </div>
      )}
    </div>
  );
}