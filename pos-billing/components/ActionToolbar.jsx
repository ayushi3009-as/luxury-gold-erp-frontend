"use client";

export default function ActionToolbar({
  onSave,
  onPrint,
  onHold,
  onCancel,
  onSubmit,
  submitText = "Complete",
  loading = false,
  showSave = true,
  showPrint = true,
  showHold = true,
  showCancel = true,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex flex-wrap gap-3">
        {showCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Cancel
          </button>
        )}

        {showHold && (
          <button
            type="button"
            onClick={onHold}
            className="rounded-xl border border-orange-200 bg-orange-50 px-5 py-3 font-medium text-orange-700 transition hover:bg-orange-100"
          >
            Hold Bill
          </button>
        )}

        {showSave && (
          <button
            type="button"
            onClick={onSave}
            className="rounded-xl border border-[#b88a45] px-5 py-3 font-medium text-[#9b6b28] transition hover:bg-[#fffaf3]"
          >
            Save
          </button>
        )}

        {showPrint && (
          <button
            type="button"
            onClick={onPrint}
            className="rounded-xl border border-gray-200 px-5 py-3 font-medium transition hover:bg-gray-50"
          >
            🖨 Print
          </button>
        )}
      </div>

      {onSubmit && (
        <button
          type="button"
          onClick={onSubmit}
          disabled={loading}
          className="rounded-xl bg-[#9b6b28] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {loading ? "Processing..." : submitText}
        </button>
      )}
    </div>
  );
}