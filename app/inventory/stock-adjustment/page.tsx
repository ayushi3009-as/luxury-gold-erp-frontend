"use client";

import {
  ArrowDown,
  ArrowUp,
  ClipboardList,
  Download,
  FileText,
  Package,
  Plus,
  Search,
  Settings2,
} from "lucide-react";

import InventorySidebar from "../InventorySidebar";

const adjustments = [
  {
    id: "ADJ-000245",
    product: "18K Diamond Ring",
    sku: "DIA-RNG-018",
    type: "Increase",
    quantity: "+5 Units",
    reason: "Physical Count Difference",
    date: "22 Jul 2026",
    user: "Admin",
    status: "Approved",
  },
  {
    id: "ADJ-000246",
    product: "24K Gold Chain",
    sku: "GLD-CHN-024",
    type: "Decrease",
    quantity: "-2 Units",
    reason: "Damaged Stock",
    date: "21 Jul 2026",
    user: "Manager",
    status: "Approved",
  },
  {
    id: "ADJ-000247",
    product: "Ruby Gemstone",
    sku: "GEM-RUB-001",
    type: "Increase",
    quantity: "+3 Units",
    reason: "Opening Balance Correction",
    date: "20 Jul 2026",
    user: "Admin",
    status: "Pending",
  },
  {
    id: "ADJ-000248",
    product: "Gold Earrings",
    sku: "GLD-EAR-022",
    type: "Decrease",
    quantity: "-1 Unit",
    reason: "Stock Loss",
    date: "19 Jul 2026",
    user: "Manager",
    status: "Approved",
  },
];

export default function StockAdjustment() {
  return (
    <div className="min-h-screen bg-[#090a09] text-white">

      <InventorySidebar />

      <main className="ml-64 min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Inventory / Stock Adjustment
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Stock Adjustment
            </h1>

            <p className="mt-1 text-gray-400">
              Correct inventory quantity, damaged stock and physical count differences.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="flex items-center gap-2 rounded-lg border border-[#40351a] px-4 py-2 text-sm text-gray-300 hover:border-[#d9a928] hover:text-[#e4b52d]">
              <Download size={16} />
              Export
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-[#d9a928] px-4 py-2 text-sm font-semibold text-black hover:bg-[#f0c43c]">
              <Plus size={17} />
              New Adjustment
            </button>

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center justify-between">
              <ClipboardList
                size={27}
                className="text-[#e4b52d]"
              />

              <span className="text-xs text-gray-500">
                This Month
              </span>
            </div>

            <p className="mt-5 text-xs text-gray-500">
              TOTAL ADJUSTMENTS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              128
            </h2>

          </div>

          <div className="rounded-xl border border-green-900 bg-[#101210] p-5">

            <div className="flex items-center justify-between">
              <ArrowUp
                size={27}
                className="text-green-400"
              />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              STOCK INCREASES
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              76
            </h2>

          </div>

          <div className="rounded-xl border border-red-900 bg-[#17100f] p-5">

            <div className="flex items-center justify-between">
              <ArrowDown
                size={27}
                className="text-red-400"
              />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              STOCK DECREASES
            </p>

            <h2 className="mt-2 text-2xl font-bold text-red-400">
              52
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-[#17140c] p-5">

            <div className="flex items-center justify-between">
              <Settings2
                size={27}
                className="text-[#e4b52d]"
              />
            </div>

            <p className="mt-5 text-xs text-gray-500">
              PENDING APPROVALS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#e4b52d]">
              9
            </h2>

          </div>

        </div>

        {/* FILTERS */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <div className="flex items-center gap-3 rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3">

              <Search
                size={18}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search adjustment or product..."
                className="w-full bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-600"
              />

            </div>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none">

              <option>All Adjustment Types</option>
              <option>Increase</option>
              <option>Decrease</option>

            </select>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none">

              <option>All Reasons</option>
              <option>Physical Count Difference</option>
              <option>Damaged Stock</option>
              <option>Stock Loss</option>
              <option>Opening Balance Correction</option>

            </select>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none">

              <option>All Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>

            </select>

          </div>

        </div>

        {/* ADJUSTMENT TABLE */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="mb-5 flex items-center justify-between border-b border-[#302b1d] pb-4">

            <div>
              <h2 className="font-semibold text-[#e4b52d]">
                ADJUSTMENT HISTORY
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Track all inventory quantity adjustments
              </p>
            </div>

            <span className="flex items-center gap-2 text-xs text-gray-400">
              <FileText size={15} />
              128 Records
            </span>

          </div>

          <div className="overflow-x-auto rounded-lg border border-[#302b1d]">

            <table className="w-full min-w-[1250px] text-left text-sm">

              <thead className="bg-[#171711] text-xs text-gray-400">

                <tr>
                  <th className="px-4 py-4">ADJUSTMENT ID</th>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">TYPE</th>
                  <th className="px-4 py-4">QUANTITY</th>
                  <th className="px-4 py-4">REASON</th>
                  <th className="px-4 py-4">DATE</th>
                  <th className="px-4 py-4">USER</th>
                  <th className="px-4 py-4">STATUS</th>
                </tr>

              </thead>

              <tbody>

                {adjustments.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t border-[#302b1d] text-gray-300"
                  >

                    <td className="px-4 py-4 text-[#e4b52d]">
                      {item.id}
                    </td>

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a2413] text-[#e4b52d]">
                          <Package size={18} />
                        </div>

                        <span className="font-medium text-white">
                          {item.product}
                        </span>

                      </div>

                    </td>

                    <td className="px-4 py-4 text-gray-400">
                      {item.sku}
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          item.type === "Increase"
                            ? "rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400"
                            : "rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400"
                        }
                      >
                        {item.type}
                      </span>

                    </td>

                    <td
                      className={
                        item.type === "Increase"
                          ? "px-4 py-4 font-semibold text-green-400"
                          : "px-4 py-4 font-semibold text-red-400"
                      }
                    >
                      {item.quantity}
                    </td>

                    <td className="px-4 py-4 text-gray-400">
                      {item.reason}
                    </td>

                    <td className="px-4 py-4">
                      {item.date}
                    </td>

                    <td className="px-4 py-4">
                      {item.user}
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          item.status === "Approved"
                            ? "rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400"
                            : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-yellow-400"
                        }
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* ADJUSTMENT REASONS */}
        <div className="mt-5 grid gap-5 xl:grid-cols-3">

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <h2 className="font-semibold text-[#e4b52d]">
              PHYSICAL COUNT DIFFERENCE
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Adjust stock when actual physical quantity differs from system quantity.
            </p>

            <button className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-[#e4b52d]">
              Create Adjustment
            </button>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <h2 className="font-semibold text-[#e4b52d]">
              DAMAGED / LOST STOCK
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Record damaged, lost or unusable jewellery stock.
            </p>

            <button className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-[#e4b52d]">
              Report Stock Loss
            </button>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <h2 className="font-semibold text-[#e4b52d]">
              OPENING BALANCE
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Correct or update opening inventory balance when required.
            </p>

            <button className="mt-5 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-[#e4b52d]">
              Update Balance
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}