"use client";

import {
  ArrowLeftRight,
  CalendarDays,
  ChevronDown,
  FileText,
  MapPin,
  Package,
  Save,
  Search,
  Trash2,
  X,
} from "lucide-react";



const transferItems = [
  {
    id: 1,
    name: "Gold Chain 22K",
    category: "Gold Jewellery",
    sku: "GLD-CHN-001",
    quantity: 5,
    weight: "42.500 g",
  },
  {
    id: 2,
    name: "Diamond Ring 18K",
    category: "Diamond Jewellery",
    sku: "DIA-RNG-002",
    quantity: 2,
    weight: "12.800 g",
  },
];

export default function StockTransfer() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      

      <main className=" min-h-screen p-5">
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">
              Inventory / Stock Transfer
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Stock Transfer
            </h1>

            <p className="mt-1 text-text-secondary">
              Transfer jewellery stock between warehouses and branches.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-border-theme px-4 py-2 text-sm text-text-secondary hover:border-accent-gold hover:text-accent-gold">
              <X size={16} />
              Cancel
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-black hover:bg-accent-gold">
              <Save size={16} />
              Create Transfer
            </button>
          </div>
        </div>

        {/* TRANSFER INFORMATION */}
        <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center gap-3 border-b border-border-theme pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
              <ArrowLeftRight size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-accent-gold">
                TRANSFER INFORMATION
              </h2>

              <p className="text-xs text-text-secondary">
                Enter stock transfer details
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {/* TRANSFER NUMBER */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                TRANSFER NUMBER
              </label>

              <input
                type="text"
                value="TR-2026-0001"
                readOnly
                className="w-full rounded-lg border border-border-theme bg-background-tertiary px-4 py-3 text-sm text-text-secondary outline-none"
              />
            </div>

            {/* DATE */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                TRANSFER DATE
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

            {/* FROM */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                FROM LOCATION
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="absolute left-3 top-3.5 text-[#d9a928]"
                />

                <select className="w-full appearance-none rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">
                  <option>Select Source Location</option>
                  <option>Main Warehouse</option>
                  <option>Surat Branch</option>
                  <option>Mumbai Branch</option>
                  <option>Ahmedabad Branch</option>
                </select>

                <ChevronDown
                  size={16}
                  className="absolute right-3 top-3.5 text-text-secondary"
                />
              </div>
            </div>

            {/* TO */}
            <div>
              <label className="mb-2 block text-xs text-text-secondary">
                TO LOCATION
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="absolute left-3 top-3.5 text-[#d9a928]"
                />

                <select className="w-full appearance-none rounded-lg border border-border-theme bg-background-tertiary px-10 py-3 text-sm text-text-secondary outline-none focus:border-accent-gold">
                  <option>Select Destination</option>
                  <option>Main Warehouse</option>
                  <option>Surat Branch</option>
                  <option>Mumbai Branch</option>
                  <option>Ahmedabad Branch</option>
                </select>

                <ChevronDown
                  size={16}
                  className="absolute right-3 top-3.5 text-text-secondary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-5 rounded-xl border border-border-theme bg-background-secondary p-5">
          <div className="mb-5 flex items-center gap-3 border-b border-border-theme pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-tertiary text-accent-gold">
              <Package size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-accent-gold">
                TRANSFER PRODUCTS
              </h2>

              <p className="text-xs text-text-secondary">
                Select products to transfer
              </p>
            </div>
          </div>

          {/* SEARCH */}
          <div className="mb-5 flex items-center gap-3 rounded-lg border border-border-theme bg-background-tertiary px-4 py-3">
            <Search size={18} className="text-text-secondary" />

            <input
              type="text"
              placeholder="Search product by name, barcode or SKU..."
              className="w-full bg-transparent text-sm text-text-secondary outline-none placeholder:text-gray-600"
            />
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-lg border border-border-theme">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead className="bg-background-tertiary text-xs text-text-secondary">
                <tr>
                  <th className="px-4 py-4">PRODUCT</th>
                  <th className="px-4 py-4">CATEGORY</th>
                  <th className="px-4 py-4">SKU</th>
                  <th className="px-4 py-4">QUANTITY</th>
                  <th className="px-4 py-4">WEIGHT</th>
                  <th className="px-4 py-4">STATUS</th>
                  <th className="px-4 py-4">ACTION</th>
                </tr>
              </thead>

              <tbody>
                {transferItems.map((item) => (
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
                      {item.quantity}
                    </td>

                    <td className="px-4 py-4">
                      {item.weight}
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-md border border-[#5a4617] bg-background-tertiary px-3 py-1 text-xs text-accent-gold">
                        Ready to Transfer
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
              TOTAL PRODUCTS
            </p>

            <p className="mt-2 text-2xl font-bold text-accent-gold">
              2
            </p>
          </div>

          <div className="rounded-xl border border-border-theme bg-background-secondary p-5">
            <p className="text-xs text-text-secondary">
              TOTAL QUANTITY
            </p>

            <p className="mt-2 text-2xl font-bold text-accent-gold">
              7 Units
            </p>
          </div>

          <div className="rounded-xl border border-[#7b5c17] bg-background-tertiary p-5">
            <p className="text-xs text-text-secondary">
              TOTAL WEIGHT
            </p>

            <p className="mt-2 text-2xl font-bold text-accent-gold">
              55.300 g
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
            placeholder="Enter any additional notes or remarks..."
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
            Create Transfer
          </button>
        </div>
      </main>
    </div>
  );
}