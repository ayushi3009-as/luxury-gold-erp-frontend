"use client";

interface ReportsFiltersProps {
  reportType: string;
  setReportType: (value: string) => void;
  fromDate: string;
  setFromDate: (value: string) => void;
  toDate: string;
  setToDate: (value: string) => void;
}

export default function ReportsFilters({
  reportType,
  setReportType,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
}: ReportsFiltersProps) {
  return (
    <div className="rounded-2xl border border-yellow-600/20 bg-[#151515] p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Report Type
          </label>

          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
          >
            <option value="All">All Reports</option>
            <option value="Sales">Sales</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
            <option value="Profit">Profit & Loss</option>
            <option value="Inventory">Inventory</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            From Date
          </label>

          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            To Date
          </label>

          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-[#0B0B0B] px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
        </div>

        <div className="flex items-end">
          <button
            type="button"
            className="w-full rounded-xl bg-yellow-500 px-4 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}