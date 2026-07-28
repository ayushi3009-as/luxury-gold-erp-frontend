"use client";

import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;

  icon?: ReactNode;

  subtitle?: string;

  change?: string;

  trend?: "up" | "down" | "neutral";

  className?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  subtitle,
  change,
  trend = "neutral",
  className = "",
}: StatCardProps) {
  const trendStyle = () => {
    switch (trend) {
      case "up":
        return "bg-green-500/20 text-green-400";

      case "down":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <div
      className={`
        bg-[#141414]
        border
        border-yellow-500/20
        rounded-2xl
        p-6
        shadow-lg
        transition-all
        hover:border-yellow-500/40
        hover:-translate-y-1
        ${className}
      `}
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-gray-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-gray-500">
              {subtitle}
            </p>
          )}

        </div>

        {icon && (
          <div className="rounded-xl bg-[#1F1F1F] p-3">
            {icon}
          </div>
        )}

      </div>

      {change && (
        <div className="mt-5">

          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${trendStyle()}`}
          >
            {trend === "up" && <TrendingUp size={16} />}

            {trend === "down" && <TrendingDown size={16} />}

            {change}
          </span>

        </div>
      )}
    </div>
  );
}