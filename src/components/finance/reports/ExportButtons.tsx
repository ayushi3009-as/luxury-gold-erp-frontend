"use client";

import { Download, FileSpreadsheet, FileText } from "lucide-react";

interface ExportButtonsProps {
  onExportPDF?: () => void;
  onExportExcel?: () => void;
}

export default function ExportButtons({
  onExportPDF,
  onExportExcel,
}: ExportButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={onExportPDF}
        className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
      >
        <FileText size={18} />
        Export PDF
      </button>

      <button
        onClick={onExportExcel}
        className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        <FileSpreadsheet size={18} />
        Export Excel
      </button>

      <button
        className="flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
      >
        <Download size={18} />
        Download Report
      </button>
    </div>
  );
}