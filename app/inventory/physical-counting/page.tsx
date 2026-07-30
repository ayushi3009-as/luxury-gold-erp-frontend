"use client";

import {
  CalendarDays,
  ClipboardCheck,
  Search,
  Save,
  X,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";



const countingItems = [
  {
    id: 1,
    name: "Gold Chain 22K",
    category: "Gold Jewellery",
    sku: "GLD-CHN-001",
    systemQty: 25,
    physicalQty: 24,
    difference: -1,
    status: "Mismatch",
  },
  {
    id: 2,
    name: "Diamond Ring 18K",
    category: "Diamond Jewellery",
    sku: "DIA-RNG-002",
    systemQty: 18,
    physicalQty: 18,
    difference: 0,
    status: "Matched",
  },
  {
    id: 3,
    name: "Gold Earrings 22K",
    category: "Gold Jewellery",
    sku: "GLD-EAR-003",
    systemQty: 32,
    physicalQty: 30,
    difference: -2,
    status: "Mismatch",
  },
];

export default function PhysicalCounting() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">

      

      <main className=" min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Physical Counting
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Physical Counting
            </h1>

            <p className="mt-1 text-text-secondary">
              Compare physical stock with system inventory records.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <X size={16} />
              Cancel
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold">
              <Save size={16} />
              Save Counting
            </button>

          </div>

        </div>

        {/* COUNTING INFORMATION */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 flex items-center gap-3 border-b border-border-theme pb-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
              <ClipboardCheck size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-accent-gold">
                COUNTING INFORMATION
              </h2>

              <p className="text-xs text-text-secondary">
                Enter physical stock counting details
              </p>
            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {/* COUNTING NUMBER */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                COUNTING NUMBER
              </label>

              <input
                type="text"
                value="PC-2026-0001"
                readOnly
                className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none"
              />
            </div>

            {/* DATE */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                COUNTING DATE
              </label>

              <div className="relative">

                <CalendarDays
                  size={17}
                  className="absolute left-3 top-3.5 text-[#d9a928]"
                />

                <input
                  type="date"
                  className="w-full rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold"
                />

              </div>
            </div>

            {/* LOCATION */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                COUNTING LOCATION
              </label>

              <select className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">

                <option>Select Location</option>
                <option>Main Warehouse</option>
                <option>Surat Branch</option>
                <option>Mumbai Branch</option>
                <option>Ahmedabad Branch</option>

              </select>
            </div>

            {/* COUNTED BY */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                COUNTED BY
              </label>

              <input
                type="text"
                placeholder="Enter employee name"
                className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none placeholder:text-gray-600 focus:border-accent-gold"
              />
            </div>

          </div>

        </div>

        {/* COUNTING TABLE */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">

            <div>
              <h2 className="font-semibold text-accent-gold">
                PHYSICAL STOCK COUNT
              </h2>

              <p className="text-xs text-text-secondary">
                Compare system quantity with actual physical quantity
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-border-theme bg-background-tertiary px-4 py-2">

              <Search
                size={17}
                className="text-text-secondary"
              />

              <input
                type="text"
                placeholder="Search product..."
                className="w-48 bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />

            </div>

          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-lg border border-border-theme">

            <table className="w-full min-w-[1050px] text-left text-sm">

              <thead className="bg-background-tertiary text-xs text-text-secondary">

                <tr>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">SYSTEM QTY</th>
                  <th className="px-4 py-4">PHYSICAL QTY</th>
                  <th className="px-4 py-4">DIFFERENCE</th>
                  <th className="px-4 py-4">STATUS</th>
                </tr>

              </thead>

              <tbody>

                {countingItems.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t border-border-theme text-text-secondary"
                  >

                    <td className="px-4 py-4 font-medium text-text-primary">
                      {item.name}
                    </td>

                    <td className="px-4 py-4 text-text-secondary">
                      {item.category}
                    </td>

                    <td className="px-4 py-4 text-accent-gold">
                      {item.sku}
                    </td>

                    <td className="px-4 py-4">
                      {item.systemQty}
                    </td>

                    <td className="px-4 py-4">

                      <input
                        type="number"
                        defaultValue={item.physicalQty}
                        className="w-24 rounded-md border border-border-theme bg-background-tertiary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-gold"
                      />

                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={
                          item.difference === 0
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      >
                        {item.difference > 0
                          ? `+${item.difference}`
                          : item.difference}
                      </span>

                    </td>

                    <td className="px-4 py-4">

                      {item.status === "Matched" ? (

                        <span className="flex w-fit items-center gap-2 rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400">
                          <CheckCircle2 size={14} />
                          Matched
                        </span>

                      ) : (

                        <span className="flex w-fit items-center gap-2 rounded-md border border-red-900 bg-red-950/30 px-3 py-1 text-xs text-red-400">
                          <AlertTriangle size={14} />
                          Mismatch
                        </span>

                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* SUMMARY */}
        <div className="mt-5 grid gap-5 md:grid-cols-4">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <p className="text-xs text-text-secondary">
              TOTAL PRODUCTS
            </p>

            <p className="mt-2 text-2xl font-bold text-accent-gold">
              3
            </p>

          </div>

          <div className="rounded-xl border border-green-900 bg-background-secondary p-5">

            <p className="text-xs text-text-secondary">
              MATCHED ITEMS
            </p>

            <p className="mt-2 text-2xl font-bold text-green-400">
              1
            </p>

          </div>

          <div className="rounded-xl border border-red-900 bg-background-secondary p-5">

            <p className="text-xs text-text-secondary">
              MISMATCH ITEMS
            </p>

            <p className="mt-2 text-2xl font-bold text-red-400">
              2
            </p>

          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">

            <p className="text-xs text-text-secondary">
              TOTAL DIFFERENCE
            </p>

            <p className="mt-2 text-2xl font-bold text-accent-gold">
              -3 Units
            </p>

          </div>

        </div>

        {/* NOTES */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <label className="mb-2 block text-xs text-text-secondary">
            NOTES / REMARKS
          </label>

          <textarea
            rows={4}
            placeholder="Enter counting notes or remarks..."
            className="w-full resize-none rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none placeholder:text-gray-600 focus:border-accent-gold"
          />

        </div>

        {/* FOOTER */}
        <div className="mt-5 flex justify-end gap-3">

          <button className="rounded-lg border border-border-theme px-5 py-3 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
            Save as Draft
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-semibold text-black hover:bg-accent-gold">
            <Save size={17} />
            Save Counting
          </button>

        </div>

      </main>

    </div>
  );
}