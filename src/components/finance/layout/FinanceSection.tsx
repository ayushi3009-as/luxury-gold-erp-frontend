"use client";

import { ReactNode } from "react";

interface FinanceSectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function FinanceSection({
  title,
  subtitle,
  children,
  className = "",
}: FinanceSectionProps) {
  return (
    <section className={`mb-8 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl font-semibold text-yellow-500">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="text-gray-400 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </section>
  );
}