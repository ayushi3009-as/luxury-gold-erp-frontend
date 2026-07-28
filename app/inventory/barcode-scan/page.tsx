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

import InventorySidebar from "../InventorySidebar";

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
    <div className="min-h-screen bg-[#090a09] text-white">

      <InventorySidebar />

      <main className="ml-64 min-h-screen p-5">

        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Inventory / Barcode Scan
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Barcode Scan
            </h1>

            <p className="mt-1 text-gray-400">
              Scan jewellery barcodes to quickly identify and manage inventory.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-[#40351a] px-4 py-2 text-sm text-gray-300 hover:border-[#d9a928] hover:text-[#e4b52d]">
            <X size={16} />
            Clear All
          </button>

        </div>

        {/* SCANNER SECTION */}
        <div className="grid gap-5 xl:grid-cols-2">

          {/* SCANNER */}
          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-6">

            <div className="mb-5 flex items-center gap-3 border-b border-[#302b1d] pb-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a2413] text-[#e4b52d]">
                <ScanLine size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-[#e4b52d]">
                  BARCODE SCANNER
                </h2>

                <p className="text-xs text-gray-500">
                  Scan or enter product barcode
                </p>
              </div>

            </div>

            {/* SCAN AREA */}
            <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-[#7b5c17] bg-[#171711]">

              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#7b5c17] bg-[#2a2413]">

                <Barcode
                  size={42}
                  className="text-[#e4b52d]"
                />

              </div>

              <p className="text-lg font-semibold">
                Ready to Scan
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Place barcode in front of scanner
              </p>

              <button className="mt-5 flex items-center gap-2 rounded-lg bg-[#d9a928] px-5 py-3 text-sm font-semibold text-black hover:bg-[#f0c43c]">

                <Camera size={18} />

                Start Camera Scanner

              </button>

            </div>

            {/* MANUAL BARCODE */}
            <div className="mt-5">

              <label className="mb-2 block text-xs text-gray-400">
                ENTER BARCODE MANUALLY
              </label>

              <div className="flex gap-3">

                <div className="flex flex-1 items-center gap-3 rounded-lg border border-[#40351a] bg-[#171711] px-4 py-3">

                  <Barcode
                    size={18}
                    className="text-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Enter barcode number..."
                    className="w-full bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-600"
                  />

                </div>

                <button className="rounded-lg bg-[#d9a928] px-5 text-sm font-semibold text-black hover:bg-[#f0c43c]">
                  Scan
                </button>

              </div>

            </div>

          </div>

          {/* SCAN RESULT */}
          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-6">

            <div className="mb-5 flex items-center gap-3 border-b border-[#302b1d] pb-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a2413] text-[#e4b52d]">
                <Package size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-[#e4b52d]">
                  LAST SCANNED PRODUCT
                </h2>

                <p className="text-xs text-gray-500">
                  Product information from latest scan
                </p>
              </div>

            </div>

            <div className="rounded-lg border border-[#5a4617] bg-[#17140c] p-5">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-xs text-gray-500">
                    PRODUCT NAME
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Gold Necklace 22K
                  </h3>

                  <p className="mt-2 text-sm text-[#e4b52d]">
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
                  <p className="text-xs text-gray-500">
                    BARCODE
                  </p>

                  <p className="mt-1 text-sm">
                    8901234567890
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    STOCK
                  </p>

                  <p className="mt-1 text-sm text-green-400">
                    Available
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    CATEGORY
                  </p>

                  <p className="mt-1 text-sm">
                    Gold Jewellery
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
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
        <div className="mt-5 rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div className="mb-5 flex items-center justify-between border-b border-[#302b1d] pb-4">

            <div>
              <h2 className="font-semibold text-[#e4b52d]">
                SCAN HISTORY
              </h2>

              <p className="text-xs text-gray-500">
                Recently scanned inventory products
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-[#40351a] bg-[#171711] px-4 py-2">

              <Search
                size={17}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search scans..."
                className="w-40 bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-600"
              />

            </div>

          </div>

          <div className="overflow-x-auto rounded-lg border border-[#302b1d]">

            <table className="w-full min-w-[1000px] text-left text-sm">

              <thead className="bg-[#171711] text-xs text-gray-400">

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
                    className="border-t border-[#302b1d] text-gray-300"
                  >

                    <td className="px-4 py-4 text-[#e4b52d]">
                      {item.barcode}
                    </td>

                    <td className="px-4 py-4 font-medium text-white">
                      {item.product}
                    </td>

                    <td className="px-4 py-4">
                      {item.sku}
                    </td>

                    <td className="px-4 py-4 text-gray-400">
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

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <p className="text-xs text-gray-500">
              TOTAL SCANS TODAY
            </p>

            <p className="mt-2 text-2xl font-bold text-[#e4b52d]">
              248
            </p>

          </div>

          <div className="rounded-xl border border-green-900 bg-[#101210] p-5">

            <p className="text-xs text-gray-500">
              SUCCESSFUL SCANS
            </p>

            <p className="mt-2 text-2xl font-bold text-green-400">
              242
            </p>

          </div>

          <div className="rounded-xl border border-red-900 bg-[#101210] p-5">

            <p className="text-xs text-gray-500">
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