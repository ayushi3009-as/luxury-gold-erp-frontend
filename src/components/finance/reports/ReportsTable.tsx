"use client";

import { Eye, Download } from "lucide-react";

export interface Report {
  id: number;
  reportName: string;
  type: string;
  date: string;
  amount: number;
  status: "Completed" | "Pending";
}

interface ReportsTableProps {
  reports: Report[];
}

export default function ReportsTable({
  reports,
}: ReportsTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-yellow-500/20 bg-[#151515]">
      <table className="min-w-full">
        <thead className="bg-[#1D1D1D] text-yellow-500">
          <tr>
            <th className="px-5 py-4 text-left">Report Name</th>
            <th className="px-5 py-4 text-left">Type</th>
            <th className="px-5 py-4 text-left">Date</th>
            <th className="px-5 py-4 text-right">Amount</th>
            <th className="px-5 py-4 text-center">Status</th>
            <th className="px-5 py-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {reports.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="py-10 text-center text-gray-400"
              >
                No Reports Found
              </td>
            </tr>
          ) : (
            reports.map((report) => (
              <tr
                key={report.id}
                className="border-t border-gray-800 hover:bg-[#202020]"
              >
                <td className="px-5 py-4">{report.reportName}</td>

                <td className="px-5 py-4">{report.type}</td>

                <td className="px-5 py-4">{report.date}</td>

                <td className="px-5 py-4 text-right font-semibold text-green-400">
                  ${report.amount.toLocaleString()}
                </td>

                <td className="px-5 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      report.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="rounded-lg bg-blue-600 p-2 hover:bg-blue-700">
                      <Eye size={16} />
                    </button>

                    <button className="rounded-lg bg-green-600 p-2 hover:bg-green-700">
                      <Download size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}