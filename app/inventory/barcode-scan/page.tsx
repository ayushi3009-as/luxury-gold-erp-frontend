"use client";

import {
  Barcode,
  Camera,
  CheckCircle2,
  Package,
  Search,
  ScanLine,
  Trash2,
  X,
} from "lucide-react";



const scannedItems = [
  {
    id: 1,
    barcode: "8901234567890",
    product: "Gold Necklace 22K",
    sku: "GLD-NEC-001",
    category: "Gold Jewellery",
    quantity: 1,
    status: "Found",
  },
  {
    id: 2,
    barcode: "8901234567891",
    product: "Diamond Ring 18K",
    sku: "DIA-RNG-002",
    category: "Diamond Jewellery",
    quantity: 1,
    status: "Found",
  },
];

export default function BarcodeScan() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">

      

      <main className=" min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Barcode Scan
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Barcode Scan
            </h1>

            <p className="mt-1 text-text-secondary">
              Scan jewellery barcodes to quickly identify and manage inventory.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
            <X size={16} />
            Clear All
          </button>

        </div>

        {/* SCANNER SECTION */}
        <div className="grid gap-5 xl:grid-cols-2">

          {/* SCANNER */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-6">

            <div className="mb-5 flex items-center gap-3 border-b border-border-theme pb-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
                <ScanLine size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-accent-gold">
                  BARCODE SCANNER
                </h2>

                <p className="text-xs text-text-secondary">
                  Scan or enter product barcode
                </p>
              </div>

            </div>

            {/* SCAN AREA */}
            <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-[#7b5c17] bg-background-tertiary">

              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#7b5c17] bg-background-tertiary">

                <Barcode
                  size={42}
                  className="text-accent-gold"
                />

              </div>

              <p className="text-lg font-semibold">
                Ready to Scan
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Place barcode in front of scanner
              </p>

              <button className="mt-5 flex items-center gap-2 rounded-lg bg-accent-gold px-5 py-3 text-sm font-semibold text-black hover:bg-accent-gold">

                <Camera size={18} />

                Start Camera Scanner

              </button>

            </div>

            {/* MANUAL BARCODE */}
            <div className="mt-5">

              <label className="mb-2 block text-xs text-text-secondary">
                ENTER BARCODE MANUALLY
              </label>

              <div className="flex gap-3">

                <div className="flex flex-1 items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">

                  <Barcode
                    size={18}
                    className="text-text-secondary"
                  />

                  <input
                    type="text"
                    placeholder="Enter barcode number..."
                    className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
                  />

                </div>

                <button className="rounded-lg bg-accent-gold px-5 text-sm font-semibold text-black hover:bg-accent-gold">
                  Scan
                </button>

              </div>

            </div>

          </div>

          {/* SCAN RESULT */}
          <div className="rounded-xl border border-border-theme bg-background-secondary p-6">

            <div className="mb-5 flex items-center gap-3 border-b border-border-theme pb-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
                <Package size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-accent-gold">
                  LAST SCANNED PRODUCT
                </h2>

                <p className="text-xs text-text-secondary">
                  Product information from latest scan
                </p>
              </div>

            </div>

            <div className="rounded-lg border border-[#5a4617] bg-background-tertiary p-5">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-xs text-text-secondary">
                    PRODUCT NAME
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Gold Necklace 22K
                  </h3>

                  <p className="mt-2 text-sm text-accent-gold">
                    GLD-NEC-001
                  </p>

                </div>

                <CheckCircle2
                  size={28}
                  className="text-green-400"
                />

              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">

                <div>
                  <p className="text-xs text-text-secondary">
                    BARCODE
                  </p>

                  <p className="mt-1 text-sm">
                    8901234567890
                  </p>
                </div>

                <div>
                  <p className="text-xs text-text-secondary">
                    STOCK
                  </p>

                  <p className="mt-1 text-sm text-green-400">
                    Available
                  </p>
                </div>

                <div>
                  <p className="text-xs text-text-secondary">
                    CATEGORY
                  </p>

                  <p className="mt-1 text-sm">
                    Gold Jewellery
                  </p>
                </div>

                <div>
                  <p className="text-xs text-text-secondary">
                    QUANTITY
                  </p>

                  <p className="mt-1 text-sm">
                    1 Unit
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* SCAN HISTORY */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">

          <div className="mb-5 flex items-center justify-between border-b border-border-theme pb-4">

            <div>
              <h2 className="font-semibold text-accent-gold">
                SCAN HISTORY
              </h2>

              <p className="text-xs text-text-secondary">
                Recently scanned inventory products
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-2">

              <Search
                size={17}
                className="text-text-secondary"
              />

              <input
                type="text"
                placeholder="Search scans..."
                className="w-40 bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
              />

            </div>

          </div>

          <div className="overflow-x-auto rounded-lg border border-border-theme">

            <table className="w-full min-w-[1000px] text-left text-sm">

              <thead className="bg-background-tertiary text-xs text-text-secondary">

                <tr>
                  <th className="px-4 py-4">BARCODE</th>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">QUANTITY</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>

              </thead>

              <tbody>

                {scannedItems.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t border-border-theme text-text-secondary"
                  >

                    <td className="px-4 py-4 text-accent-gold">
                      {item.barcode}
                    </td>

                    <td className="px-4 py-4 font-medium text-text-primary">
                      {item.product}
                    </td>

                    <td className="px-4 py-4">
                      {item.sku}
                    </td>

                    <td className="px-4 py-4 text-text-secondary">
                      {item.category}
                    </td>

                    <td className="px-4 py-4">
                      {item.quantity}
                    </td>

                    <td className="px-4 py-4">

                      <span className="flex w-fit items-center gap-2 rounded-md border border-green-900 bg-green-950/30 px-3 py-1 text-xs text-green-400">

                        <CheckCircle2 size={14} />

                        {item.status}

                      </span>

                    </td>

                    <td className="px-4 py-4">

                      <button className="text-red-400 hover:text-red-300">

                        <Trash2 size={17} />

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* SUMMARY */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">

            <p className="text-xs text-text-secondary">
              TOTAL SCANS TODAY
            </p>

            <p className="mt-2 text-2xl font-bold text-accent-gold">
              248
            </p>

          </div>

          <div className="rounded-xl border border-green-900 bg-background-secondary p-5">

            <p className="text-xs text-text-secondary">
              SUCCESSFUL SCANS
            </p>

            <p className="mt-2 text-2xl font-bold text-green-400">
              242
            </p>

          </div>

          <div className="rounded-xl border border-red-900 bg-background-secondary p-5">

            <p className="text-xs text-text-secondary">
              FAILED SCANS
            </p>

            <p className="mt-2 text-2xl font-bold text-red-400">
              6
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}