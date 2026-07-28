"use client";

import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

interface TableHeaderItem {
  key: string;
  label: string;
  sortable?: boolean;
}

interface TableHeaderProps {
  columns: TableHeaderItem[];
  sortKey?: string;
  sortDirection?: "asc" | "desc";
  onSort?: (key: string) => void;
}

export default function TableHeader({
  columns,
  sortKey,
  sortDirection,
  onSort,
}: TableHeaderProps) {
  const renderIcon = (column: TableHeaderItem) => {
    if (!column.sortable) return null;

    if (sortKey !== column.key) {
      return <ArrowUpDown size={16} />;
    }

    return sortDirection === "asc" ? (
      <ArrowUp size={16} />
    ) : (
      <ArrowDown size={16} />
    );
  };

  return (
    <thead className="bg-[#1B1B1B]">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            onClick={() =>
              column.sortable && onSort?.(column.key)
            }
            className={`
              px-6
              py-4
              text-left
              text-sm
              font-semibold
              text-yellow-500
              whitespace-nowrap
              ${
                column.sortable
                  ? "cursor-pointer select-none hover:text-yellow-400"
                  : ""
              }
            `}
          >
            <div className="flex items-center gap-2">
              {column.label}
              {renderIcon(column)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}