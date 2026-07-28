"use client";

import { Download, FileSpreadsheet, FileText } from "lucide-react";

interface ExportButtonsProps {
  onExcel?: () => void;
  onPdf?: () => void;

  excelLabel?: string;
  pdfLabel?: string;

  showExcel?: boolean;
  showPdf?: boolean;

  className?: string;
}

export default function ExportButtons({
  onExcel,
  onPdf,

  excelLabel = "Export Excel",
  pdfLabel = "Export PDF",

  showExcel = true,
  showPdf = true,

  className = "",
}: ExportButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>

      {showExcel && (
        <button
          type="button"
          onClick={onExcel}
          className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-medium transition hover:bg-green-500"
        >
          <FileSpreadsheet size={18} />
          {excelLabel}
        </button>
      )}

      {showPdf && (
        <button
          type="button"
          onClick={onPdf}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-medium transition hover:bg-red-500"
        >
          <FileText size={18} />
          {pdfLabel}
        </button>
      )}

      {!showExcel && !showPdf && (
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-500"
        >
          <Download size={18} />
          Export
        </button>
      )}

    </div>
  );
}