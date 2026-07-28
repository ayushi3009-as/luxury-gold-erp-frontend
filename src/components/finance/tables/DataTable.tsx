"use client";

import { ReactNode } from "react";

interface DataTableProps {
  headers: string[];
  children: ReactNode;
  className?: string;
}

export default function DataTable({
  headers,
  children,
  className = "",
}: DataTableProps) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-2xl
        border
        border-yellow-500/20
        bg-[#141414]
        ${className}
      `}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-[#1B1B1B]">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-sm font-semibold text-yellow-500"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-yellow-500/10">
            {children}
          </tbody>

        </table>
      </div>
    </div>
  );
}