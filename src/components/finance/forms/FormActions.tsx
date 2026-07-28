"use client";

import Link from "next/link";
import { Loader2, Save, RotateCcw, ArrowLeft } from "lucide-react";

interface FormActionsProps {
  isLoading?: boolean;

  submitLabel?: string;
  cancelLabel?: string;
  resetLabel?: string;

  cancelHref?: string;

  showCancel?: boolean;
  showReset?: boolean;

  onReset?: () => void;
}

export default function FormActions({
  isLoading = false,

  submitLabel = "Save",
  cancelLabel = "Cancel",
  resetLabel = "Reset",

  cancelHref = "/finance",

  showCancel = true,
  showReset = false,

  onReset,
}: FormActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-6">

      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Saving...
          </>
        ) : (
          <>
            <Save size={18} />
            {submitLabel}
          </>
        )}
      </button>

      {showReset && (
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-2 rounded-xl border border-gray-600 bg-[#141414] px-6 py-3 transition hover:border-yellow-500"
        >
          <RotateCcw size={18} />
          {resetLabel}
        </button>
      )}

      {showCancel && (
        <Link
          href={cancelHref}
          className="flex items-center gap-2 rounded-xl border border-gray-600 bg-[#141414] px-6 py-3 transition hover:border-red-500"
        >
          <ArrowLeft size={18} />
          {cancelLabel}
        </Link>
      )}

    </div>
  );
}