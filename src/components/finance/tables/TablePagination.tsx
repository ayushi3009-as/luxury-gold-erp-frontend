"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface TablePaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function TablePagination({
  page,
  totalPages,
  onPageChange,
}: TablePaginationProps) {
  return (
    <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <p className="text-sm text-gray-400">
        Page{" "}
        <span className="font-semibold text-white">
          {page}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-white">
          {totalPages}
        </span>
      </p>

      <div className="flex items-center gap-3">

        <button
          type="button"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="flex items-center gap-2 rounded-lg border border-gray-700 bg-[#141414] px-4 py-2 transition hover:border-yellow-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="flex items-center gap-2 rounded-lg border border-gray-700 bg-[#141414] px-4 py-2 transition hover:border-yellow-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}