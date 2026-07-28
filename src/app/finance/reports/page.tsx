"use client";

import { useMemo, useState } from "react";

import ReportsHeader from "@/components/finance/reports/ReportsHeader";
import ReportsSummary from "@/components/finance/reports/ReportsSummary";
import ReportsFilters from "@/components/finance/reports/ReportsFilters";
import ReportsChart from "@/components/finance/reports/ReportsChart";
import ReportsTable, {
  Report,
} from "../../../components/finance/reports/ReportsTable";
import ExportButtons from "@/components/finance/reports/ExportButtons";

export default function ReportsPage() {
  const [reportType, setReportType] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const reports: Report[] = [
    {
      id: 1,
      reportName: "Monthly Sales Report",
      type: "Sales",
      date: "2026-07-01",
      amount: 120000,
      status: "Completed",
    },
    {
      id: 2,
      reportName: "Income Report",
      type: "Income",
      date: "2026-07-05",
      amount: 95000,
      status: "Completed",
    },
    {
      id: 3,
      reportName: "Expense Report",
      type: "Expense",
      date: "2026-07-10",
      amount: 45000,
      status: "Pending",
    },
    {
      id: 4,
      reportName: "Profit & Loss",
      type: "Profit",
      date: "2026-07-15",
      amount: 50000,
      status: "Completed",
    },
    {
      id: 5,
      reportName: "Inventory Report",
      type: "Inventory",
      date: "2026-07-20",
      amount: 0,
      status: "Completed",
    },
  ];

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesType =
        reportType === "All" || report.type === reportType;

      const matchesFrom =
        !fromDate || report.date >= fromDate;

      const matchesTo =
        !toDate || report.date <= toDate;

      return matchesType && matchesFrom && matchesTo;
    });
  }, [reportType, fromDate, toDate]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-8 text-white">
      <ReportsHeader />

      <div className="mt-8">
        <ReportsSummary
          totalSales={120000}
          totalIncome={95000}
          totalExpense={45000}
          netProfit={50000}
        />
      </div>

      <div className="mt-8">
        <ReportsFilters
          reportType={reportType}
          setReportType={setReportType}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <ExportButtons
          onExportPDF={() => alert("Export PDF")}
          onExportExcel={() => alert("Export Excel")}
        />
      </div>

      <div className="mt-8">
        <ReportsChart />
      </div>

      <div className="mt-8">
        <ReportsTable reports={filteredReports} />
      </div>
    </div>
  );
}