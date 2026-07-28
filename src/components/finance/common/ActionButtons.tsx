"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface ActionButtonsProps {
  viewHref?: string;
  editHref?: string;
  onDelete?: () => void;

  showView?: boolean;
  showEdit?: boolean;
  showDelete?: boolean;
}

export default function ActionButtons({
  viewHref,
  editHref,
  onDelete,

  showView = true,
  showEdit = true,
  showDelete = false,
}: ActionButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-2">

      {showView && viewHref && (
        <Link
          href={viewHref}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 transition hover:bg-blue-500"
        >
          <Eye size={18} />
        </Link>
      )}

      {showEdit && editHref && (
        <Link
          href={editHref}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-500 text-black transition hover:bg-yellow-400"
        >
          <Pencil size={18} />
        </Link>
      )}

      {showDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 transition hover:bg-red-500"
        >
          <Trash2 size={18} />
        </button>
      )}

    </div>
  );
}