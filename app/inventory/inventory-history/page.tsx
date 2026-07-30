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
    <div className="min-h-screen bg-background-primary text-text-primary">

      

      <main className=" min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Inventory History
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Inventory History
            </h1>

            <p className="mt-1 text-text-secondary">
              Track complete inventory movement and transaction history.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
            <Download size={16} />
            Export History
          </button>

        </div>

        {/* KPI CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center justify-between">

              <History
                size={27}
                className="text-accent-gold"
              />

              <span className="text-xs text-text-secondary">
                This Month
              </span>

            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TOTAL TRANSACTIONS
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              2,486
            </h2>

          </div>

          <div className="rounded-xl border border-green-900 bg-background-secondary p-5">

            <div className="flex items-center justify-between">

              <ArrowUp
                size={27}
                className="text-green-400"
              />

            </div>

            <p className="mt-5 text-xs text-text-secondary">
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

            <p className="mt-5 text-xs text-text-secondary">
              STOCK OUT
            </p>

            <h2 className="mt-2 text-2xl font-bold text-red-400">
              986
            </h2>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">

            <div className="flex items-center justify-between">

              <Package
                size={27}
                className="text-accent-gold"
              />

            </div>

            <p className="mt-5 text-xs text-text-secondary">
              TRANSFERS & ADJUSTMENTS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-accent-gold">
              252
            </h2>

          </div>

        </div>

        {/* FILTERS */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">

            <div className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">

              <Search
                size={18}
                className="text-text-secondary"
              />

              <input
                type="text"
                placeholder="Search transaction..."
                className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />

            </div>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

              <option>All Transaction Types</option>
              <option>Stock In</option>
              <option>Stock Out</option>
              <option>Transfer</option>
              <option>Adjustment</option>

            </select>

            <select className="rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none">

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
                className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none"
              />

            </div>

            <button className="rounded-lg border border-[#7b5c17] px-4 py-3 text-sm text-accent-gold hover:bg-background-tertiary">
              Apply Filters
            </button>

          </div>

        </div>

        {/* HISTORY TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">

            <div>

              <h2 className="font-semibold text-accent-gold">
                INVENTORY TRANSACTION HISTORY
              </h2>

              <p className="mt-1 text-xs text-text-secondary">
                Complete record of all inventory movements
              </p>

            </div>

            <span className="flex items-center gap-2 text-xs text-text-secondary">
              <FileText size={15} />
              2,486 Records
            </span>

          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">

            <table className="w-full min-w-[1250px] text-left text-sm">

              <thead className="bg-background-tertiary text-xs text-text-secondary">

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
                    className="border-t border-border-theme text-text-secondary"
                  >

                    <td className="px-4 py-4 text-accent-gold">
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
                              : "rounded-md border border-yellow-900 bg-yellow-950/30 px-3 py-1 text-xs text-accent-gold"
                        }
                      >
                        {item.type}
                      </span>

                    </td>

                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
                          <Package size={18} />
                        </div>

                        <span className="font-medium text-text-primary">
                          {item.product}
                        </span>

                      </div>

                    </td>

                    <td className="px-4 py-4 text-text-secondary">
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

                    <td className="px-4 py-4 text-accent-gold">
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

                      <button className="text-text-secondary hover:text-accent-gold">
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

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center gap-3">

              <Truck
                size={22}
                className="text-accent-gold"
              />

              <h2 className="font-semibold text-accent-gold">
                RECENT STOCK IN
              </h2>

            </div>

            <p className="mt-3 text-sm text-text-secondary">
              1,248 inventory items were received this month.
            </p>

            <p className="mt-4 text-2xl font-bold text-green-400">
              +1,248
            </p>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center gap-3">

              <ShoppingCart
                size={22}
                className="text-accent-gold"
              />

              <h2 className="font-semibold text-accent-gold">
                RECENT STOCK OUT
              </h2>

            </div>

            <p className="mt-3 text-sm text-text-secondary">
              986 inventory items were issued or sold this month.
            </p>

            <p className="mt-4 text-2xl font-bold text-red-400">
              -986
            </p>

          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <div className="flex items-center gap-3">

              <History
                size={22}
                className="text-accent-gold"
              />

              <h2 className="font-semibold text-accent-gold">
                AUDIT TRAIL
              </h2>

            </div>

            <p className="mt-3 text-sm text-text-secondary">
              Every inventory movement is recorded for audit and tracking.
            </p>

            <button className="mt-4 rounded-lg border border-[#7b5c17] px-4 py-2 text-sm text-accent-gold">
              View Audit Trail
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}