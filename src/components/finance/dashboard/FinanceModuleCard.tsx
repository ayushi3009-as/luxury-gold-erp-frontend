"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface FinanceModuleCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function FinanceModuleCard({
  title,
  description,
  href,
  icon: Icon,
}: FinanceModuleCardProps) {
  return (
    <Link href={href}>
      <div className="cursor-pointer rounded-2xl border border-yellow-500/20 bg-[#151515] p-6 transition-all hover:border-yellow-500 hover:shadow-xl">

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500">
          <Icon className="h-8 w-8 text-black" />
        </div>

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-2 text-gray-400">
          {description}
        </p>

      </div>
    </Link>
  );
}