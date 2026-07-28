"use client";

import {
  ArrowDown,
  ArrowUp,
  CalendarDays,
  Download,
  Eye,
  FileText,
  History,
  Package,
  Search,
  ShoppingCart,
  Truck,
} from "lucide-react";

import InventorySidebar from "../InventorySidebar";

const historyData = [
  {
    id: "INV-000245",
    date: "22 Jul 2026",
    type: "Stock In",
    product: "18K Diamond Ring",
    sku: "DIA-RNG-018",
    quantity: "+25 Units",
    reference: "PUR-000125",
    user: "Admin",
    status: "Completed",
  },
  {
    id: "INV-000246",
    date: "22 Jul 2026",
    type: "Stock Out",
    product: "24K Gold Chain",
    sku: "GLD-CHN-024",
    quantity: "-10 Units",
    reference: "SAL-000845",
    user: "Manager",
    status: "Completed",
  },
  {
    id: "INV-000247",
    date: "21 Jul 2026",
    type: "Transfer",
    product: "22K Gold Bangles",
    sku: "GLD-BNG-022",
    quantity: "15 Units",
    reference: "TRF-000052",
    user: "Admin",
    status: "Completed",
  },
  {
    id: "INV-000248",
    date: "20 Jul 2026",
    type: "Adjustment",
    product: "Ruby Gemstone",
    sku: "GEM-RUB-001",
    quantity: "+3 Units",
    reference: "ADJ-000247",
    user: "Manager",
    status: "Approved",
  },
  {
    id: "INV-000249",
    date: "19 Jul 2026",
    type: "Stock Out",
    product: "Gold Earrings",
    sku: "GLD-EAR-022",
    quantity: "-5 Units",
    reference: "SAL-000832",
    user: "Employee",
    status: "Completed",
  },
];

export default function InventoryHistory() {
  return (
    <div className="min-h-screen bg-[#090a09] text-white">

      <InventorySidebar />

      <main className="ml-64 min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Inventory / Inventory History
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Inventory History
            </h1>

            <p className="mt-1 text-gray-400">
              Track complete inventory movement and transaction history.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-[#40351a] px-4 py-2 text-sm text-gray-300 hover:border-[#d9a928] hover:text-[#e4b52d]">
            <Download size={16} />
            Export History
          </button>

        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center justify-between">

              <History
                size={27}
                className="text-[#e4b52d]"
              />

              <span className="text-xs text-gray-500">
                This Month
              </span>

            </div>

            <p className="mt-5 text-xs text-gray-500">
              TOTAL TRANSACTIONS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              2,486
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
              STOCK IN
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              1,248
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
              STOCK OUT
            </p>

            <h2 className="mt-2 text-2xl font-bold text-red-400">
              986
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-[#17140c] p-5">

            <div className="flex items-center justify-between">

              <Package
                size={27}
                className="text-[#e4b52d]"
              />

            </div>

            <p className="mt-5 text-xs text-gray-500">
              TRANSFERS & ADJUSTMENTS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#e4b52d]">
              252
            </h2>

          </div>

        </div>

        {/* FILTERS */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">

            <div className="flex items-center gap-3 rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3">

              <Search
                size={18}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search transaction..."
                className="w-full bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-600"
              />

            </div>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none">

              <option>All Transaction Types</option>
              <option>Stock In</option>
              <option>Stock Out</option>
              <option>Transfer</option>
              <option>Adjustment</option>

            </select>

            <select className="rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3 text-sm text-gray-300 outline-none">

              <option>All Users</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Employee</option>

            </select>

            <div className="relative">

              <CalendarDays
                size={17}
                className="absolute left-3 top-3.5 text-[#d9a928]"
              />

              <input
                type="date"
                className="w-full rounded-lg border border-[#40351a] bg-[#171711] px-10 py-3 text-sm text-gray-300 outline-none"
              />

            </div>

            <button className="rounded-lg border border-[#7b5c17] px-4 py-3 text-sm text-[#e4b52d] hover:bg-[#2a2413]">
              Apply Filters
            </button>

          </div>

        </div>

        {/* HISTORY TABLE */}
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="mb-5 flex items-center justify-between border-b border-[#302b1d] pb-4">

            <div>

              <h2 className="font-semibold text-[#e4b52d]">
                INVENTORY TRANSACTION HISTORY
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Complete record of all inventory movements
              </p>

            </div>

            <span className="flex items-center gap-2 text-xs text-gray-400">
              <FileText size={15} />
              2,486 Records
            </span>

          </div>

          <div className="overflow-x-auto rounded-lg border border-[#302b1d]">

            <table className="w-full min-w-[1250px] text-left text-sm">

              <thead className="bg-[#171711] text-xs text-gray-400">

                <tr>
                  <th className="px-4 py-4">TRANSACTION ID</th>
                  <th className="px-4 py-4">DATE</th>
                  <th className="px-4 py-4">TYPE</th>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">QUANTITY</th>
                  <th className="px-4 py-4">REFERENCE</th>
                  <th className="px-4 py-4">USER</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>

              </thead>

              <tbody>

                {historyData.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t border-[#302b1d] text-gray-300"
                  >

                    <td className="px-4 py-4 text-[#e4b52d]">
                      {item.id}
                    </td>

                    <td className="px-4 py-4">
                      {item.date}
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          item.type === "Stock In"
                            ? "rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400"
                            : item.type === "Stock Out"
                              ? "rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400"
                              : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-yellow-400"
                        }
                      >
                        {item.type}
                      </span>

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

                    <td
                      className={
                        item.quantity.startsWith("+")
                          ? "px-4 py-4 font-semibold text-green-400"
                          : "px-4 py-4 font-semibold text-red-400"
                      }
                    >
                      {item.quantity}
                    </td>

                    <td className="px-4 py-4 text-[#e4b52d]">
                      {item.reference}
                    </td>

                    <td className="px-4 py-4">
                      {item.user}
                    </td>

                    <td className="px-4 py-4">

                      <span className="rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400">
                        {item.status}
                      </span>

                    </td>

                    <td className="px-4 py-4">

                      <button className="text-gray-400 hover:text-[#e4b52d]">
                        <Eye size={17} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* SUMMARY CARDS */}
        <div className="mt-5 grid gap-5 xl:grid-cols-3">

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center gap-3">

              <Truck
                size={22}
                className="text-[#e4b52d]"
              />

              <h2 className="font-semibold text-[#e4b52d]">
                RECENT STOCK IN
              </h2>

            </div>

            <p className="mt-3 text-sm text-gray-400">
              1,248 inventory items were received this month.
            </p>

            <p className="mt-4 text-2xl font-bold text-green-400">
              +1,248
            </p>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center gap-3">

              <ShoppingCart
                size={22}
                className="text-[#e4b52d]"
              />

              <h2 className="font-semibold text-[#e4b52d]">
                RECENT STOCK OUT
              </h2>

            </div>

            <p className="mt-3 text-sm text-gray-400">
              986 inventory items were issued or sold this month.
            </p>

            <p className="mt-4 text-2xl font-bold text-red-400">
              -986
            </p>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <div className="flex items-center gap-3">

              <History
                size={22}
                className="text-[#e4b52d]"
              />

              <h2 className="font-semibold text-[#e4b52d]">
                AUDIT TRAIL
              </h2>

            </div>

            <p className="mt-3 text-sm text-gray-400">
              Every inventory movement is recorded for audit and tracking.
            </p>

            <button className="mt-4 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-[#e4b52d]">
              View Audit Trail
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}